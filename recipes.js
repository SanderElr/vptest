// Обработка крафта
window.craft = function(type) {
    // Используем глобальный объект состояния S
    const state = window.S;

    if (type === 'fish' && state.fish >= 1 && state.wood >= 1) { 
        state.fish--; 
        state.wood--; 
        state.food = Math.min(100, state.food + 40); 
        window.log("🍳 Рыба готова!"); 
    }
    else if (type === 'med' && state.rags >= 2 && state.water_res >= 1) { 
        state.rags -= 2; 
        state.water_res--; 
        state.hp = Math.min(100, state.hp + 30); 
        window.log("💊 Перевязал раны."); 
    }
    else { 
        window.log("🚫 Не хватает ресурсов!", "bad"); 
    }
    
    // Обновляем интерфейс и сохраняем прогресс
    window.ui(); 
    window.save();
}