/**
 * Глобальный объект мира ЗОНЫ 1988
 * Локации с учетом механики времени (переход — 3 часа, действие — 1 час).
 */
window.WORLD = {
  home: { 
    n: '🏠 Убежище', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_home.png', 
    acts: { 
      'rest': '💤 Сон (1ч за 10% энергии)', 
      'radio': '📻 Радиоэфир (1ч)' 
    } 
  },
  city: { 
    n: '🏙️ Город', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_city.png', 
    acts: { 
      'scavenge_rags': '🧵 Искать ветошь (1ч)',
      'scavenge_tech': '🔋 Искать детали (1ч)'
    } 
  },
  forest: { 
    n: '🌲 Лес', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_forest.png', 
    acts: { 
      'get_wood': '🪵 Рубить дрова (1ч)',
      'scavenge_rags': '🧵 Собирать тряпье (1ч)'
    } 
  },
  wasteland: { 
    n: '☢️ Пустошь', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_wasteland.png', 
    acts: { 
      'scavenge_tech': '⚙️ Искать металлолом (1ч)' 
    } 
  },
  river: { 
    n: '🌊 Берег реки', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_river.png', 
    acts: { 
      'fish': '🐟 Рыбачить (1ч)',
      'get_water': '💧 Набрать чистой воды (1ч)'
    } 
  },
  swamp: { 
    n: '🍄 Болото', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_swamp.png', 
    acts: { 
      'get_water': '🤢 Набрать мутной воды (1ч)' 
    } 
  }
};