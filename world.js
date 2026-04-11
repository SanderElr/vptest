/**
 * Глобальный объект мира ЗОНЫ 1988
 * Содержит настройки локаций, доступные действия и изображения.
 */
window.WORLD = {
  home: { 
    n: '🏠 Убежище', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_home.png', 
    acts: { 'rest': '💤 Сон', 'radio': '📻 Радио' } 
  },
  city: { 
    n: '🏙️ Город', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_city.png', 
    acts: { 'scavenge_rags': '🧵 Искать ветошь' } 
  },
  forest: { 
    n: '🌲 Лес', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_forest.png', 
    acts: { 'get_wood': '🪵 Рубить дрова' } 
  },
  wasteland: { 
    n: '☢️ Пустошь', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_wasteland.png', 
    acts: { 'scavenge_tech': '🔋 Искать детали' } 
  },
  river: { 
    n: '🌊 Берег реки', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_river.png', 
    acts: { 'fish': '🐟 Рыбачить' } 
  },
  swamp: { 
    n: '🍄 Болото', 
    img: 'https://raw.githubusercontent.com/SanderElr/vptest/main/loc_swamp.png', 
    acts: { 'get_water': '💧 Набрать воды' } 
  }
};

/**
 * Примечание: Если ссылки на изображения выше не существуют, 
 * в интерфейсе будет отображаться пустая область или стандартная заглушка.
 * Вы можете заменить URL на любые свои изображения в стиле Fallout или сталкера.
 */