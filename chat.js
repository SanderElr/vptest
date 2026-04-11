let chatUnsub = null;

function startChat() {
  if (chatUnsub) chatUnsub();
  
  chatUnsub = window.db.collection('messages').orderBy('createdAt', 'asc').limitToLast(25).onSnapshot(snap => {
    // Получаем твой ник и сразу убираем лишние пробелы для точного сравнения
    const myNick = window.$('nick-input').value.trim();
    const chatContainer = window.$('chat-messages');
    chatContainer.innerHTML = '';
    
    snap.forEach(doc => {
      const m = doc.data(); 
      if (!m.name) return;

      // Сравниваем очищенные от пробелов строки
      const authorName = m.name.trim();
      const isItMe = (myNick !== "" && authorName === myNick);
      const isMentioned = (myNick !== "" && m.text.includes(`@${myNick}`));

      // 1. Формируем классы для подложки (сообщения)
      let msgClasses = "chat-msg";
      
      if (isItMe || isMentioned) {
        msgClasses += " chat-msg-highlight"; // Этот класс делает фон светлее в index.html
        if (isMentioned && !isItMe) {
          msgClasses += " chat-msg-mention-alt"; // Желтая полоска для упоминаний
        }
      }

      // 2. Формируем класс для имени (зеленый для себя)
      const nameClass = isItMe ? "chat-name-self" : "chat-name";

      chatContainer.innerHTML += `
        <div class="${msgClasses}">
          <span class="${nameClass}" onclick="mention('${authorName}')">${authorName}:</span> 
          <span>${m.text}</span>
        </div>`;
    });
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
  });
}

function send() { 
  const input = window.$('chat-input');
  const text = input.value.trim(); 
  const nickname = window.$('nick-input').value.trim() || window.currentUser.displayName.split(' ')[0]; 
  
  if (text && window.currentUser) { 
    window.db.collection('messages').add({
      name: nickname, 
      text: text, 
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }); 
    input.value = ''; 
  }
}

function mention(name) { 
  const input = window.$('chat-input'); 
  input.value = `@${name}, ${input.value}`; 
  input.focus(); 
}

function openArchive() {
  window.$('archive-modal').style.display = 'block';
  window.db.collection('messages').orderBy('createdAt', 'desc').limit(100).get().then(snap => {
    window.$('archive-list').innerHTML = snap.docs.map(doc => {
      const m = doc.data();
      return `<div style="margin-bottom:5px; border-bottom:1px solid #222; padding:3px;"><strong>${m.name}:</strong> ${m.text}</div>`;
    }).join('');
  });
}

function closeArchive() { 
  window.$('archive-modal').style.display = 'none'; 
}

window.addEventListener('DOMContentLoaded', () => {
  window.$('chat-send').onclick = send;
  window.$('chat-input').onkeypress = e => { if (e.key === 'Enter') send(); };
  window.$('nick-input').onchange = e => { 
    localStorage.setItem('zone_nick', e.target.value); 
    startChat(); 
  };
});