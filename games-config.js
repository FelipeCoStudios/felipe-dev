/**
 * GAMES CONFIGURATION
 * Configuración central de juegos para el sistema "Discover"
 * 
 * Campos disponibles:
 * - id: identificador único (usado en URLs)
 * - name: nombre del juego (objeto con es, pt, en)
 * - url: URL del juego (externa o interna)
 * - genre: género principal (Action, Arcade, Sports, Casual, Idle, Puzzle, Adventure, Racing, Strategy, Other)
 * - tags: array de etiquetas (Action, Arcade, Sports, Casual, etc.)
 * - description: descripción breve (objeto con es, pt, en)
 * - image: URL de la imagen/preview del juego
 * - difficulty: dificultad (1-5, donde 1 es muy fácil y 5 es muy difícil)
 * - date: fecha de publicación (YYYY-MM-DD)
 * - updated: booleano, si fue actualizado recientemente
 * - featured: booleano, si debe aparecer como "Game of the Day"
 * - keywords: palabras clave para SEO
 * - relatedTags: array de tags para buscar juegos relacionados
 */

const GAMES = [
  {
    id: "custom-clicker",
    name: {
      es: "Custom Clicker",
      pt: "Custom Clicker",
      en: "Custom Clicker"
    },
    url: "https://customclicker4u.netlify.app/",
    host: "netlify.app",
    genre: "Idle",
    tags: ["Idle", "Clicker", "Casual"],
    description: {
      es: "Personaliza tu juego de clicker y sigue haciendo clic. Simple, adictivo y personalizable.",
      pt: "Personalize seu jogo de clicker e continue clicando. Simples, viciante e personalizável.",
      en: "Customize your clicker game and keep on clicking. Simple, addictive, and customizable."
    },
    image: "https://via.placeholder.com/400x300?text=Custom+Clicker",
    difficulty: 1,
    date: "2024-04-12",
    updated: true,
    featured: true,
    keywords: "idle, clicker, casual, game, incremental",
    relatedTags: ["Idle", "Clicker", "Casual"]
  },
  {
    id: "neon-boss-rush",
    name: {
      es: "Neon Boss Rush",
      pt: "Neon Boss Rush",
      en: "Neon Boss Rush"
    },
    url: "https://github.com/FelipeCoStudios/NeonBossRush",
    host: "github.com",
    genre: "Action",
    tags: ["Action", "Arcade", "3D"],
    description: {
      es: "Lucha contra jefes épicos en este juego de acción 3D con gráficos neon. Desafío puro.",
      pt: "Lute contra chefes épicos neste jogo de ação 3D com gráficos neon. Desafio puro.",
      en: "Fight epic bosses in this action-packed 3D game with neon graphics. Pure challenge."
    },
    image: "https://via.placeholder.com/400x300?text=Neon+Boss+Rush",
    difficulty: 4,
    date: "2024-07-01",
    updated: true,
    featured: false,
    keywords: "action, arcade, 3D, boss, neon, game",
    relatedTags: ["Action", "Arcade", "Combat"]
  },
  {
    id: "tomato-smash",
    name: {
      es: "Tomato Smash",
      pt: "Tomato Smash",
      en: "Tomato Smash"
    },
    url: "https://tomatosmash.netlify.app/",
    host: "netlify.app",
    genre: "Arcade",
    tags: ["Arcade", "Action", "Fast-Paced"],
    description: {
      es: "Aplasta tomates en este frenético juego arcade. Rápido, divertido y adictivo.",
      pt: "Esmague tomates neste frenético jogo arcade. Rápido, divertido e viciante.",
      en: "Smash tomatoes in this frantic arcade game. Fast, fun, and addictive."
    },
    image: "https://via.placeholder.com/400x300?text=Tomato+Smash",
    difficulty: 2,
    date: "2024-05-20",
    updated: false,
    featured: false,
    keywords: "arcade, action, fast-paced, game",
    relatedTags: ["Arcade", "Action", "Fast-Paced"]
  },
  {
    id: "the-6-warriors",
    name: {
      es: "The 6 Warriors",
      pt: "The 6 Warriors",
      en: "The 6 Warriors"
    },
    url: "https://the6warriors.netlify.app/",
    host: "netlify.app",
    genre: "Action",
    tags: ["Action", "Combat", "Survival"],
    description: {
      es: "Lucha contra olas de enemigos en este juego de acción. ¿Cuántas olas puedes resistir?",
      pt: "Lute contra ondas de inimigos neste jogo de ação. Quantas ondas você consegue resistir?",
      en: "Fight off waves of enemies in this action game. How many waves can you survive?"
    },
    image: "https://via.placeholder.com/400x300?text=The+6+Warriors",
    difficulty: 3,
    date: "2024-02-10",
    updated: true,
    featured: false,
    keywords: "action, combat, survival, game, waves",
    relatedTags: ["Action", "Combat", "Survival"]
  },
  {
    id: "vital-smash",
    name: {
      es: "Vital Smash",
      pt: "Vital Smash",
      en: "Vital Smash"
    },
    url: "https://github.com/FelipeCoStudios/VitalSmash",
    host: "github.com",
    genre: "Action",
    tags: ["Action", "Education"],
    description: {
      es: "Juego educativo sobre objetivos de desarrollo sostenible. Diversión + Aprendizaje.",
      pt: "Jogo educativo sobre objetivos de desenvolvimento sustentável. Diversão + Aprendizado.",
      en: "Educational game about sustainable development goals. Fun + Learning."
    },
    image: "https://via.placeholder.com/400x300?text=Vital+Smash",
    difficulty: 2,
    date: "2024-06-01",
    updated: false,
    featured: false,
    keywords: "education, action, ODS, game, sustainable",
    relatedTags: ["Action", "Education"]
  },
  {
    id: "goofy-boxes",
    name: {
      es: "Goofy Boxes",
      pt: "Goofy Boxes",
      en: "Goofy Boxes"
    },
    url: "https://goofyboxes.netlify.app/",
    host: "netlify.app",
    genre: "Casual",
    tags: ["Casual", "Collector"],
    description: {
      es: "Recoge cajas absurdas en este juego casual. Colorido, simple y muy divertido.",
      pt: "Colete caixas absurdas neste jogo casual. Colorido, simples e muito divertido.",
      en: "Collect ridiculous boxes in this casual game. Colorful, simple, and fun."
    },
    image: "https://via.placeholder.com/400x300?text=Goofy+Boxes",
    difficulty: 1,
    date: "2024-03-05",
    updated: false,
    featured: false,
    keywords: "casual, collector, game, fun",
    relatedTags: ["Casual", "Collector"]
  },
  {
    id: "supra-meirro",
    name: {
      es: "Supra Meirro",
      pt: "Supra Meirro",
      en: "Supra Meirro"
    },
    url: "https://14yearoldcoding.neocities.org/",
    host: "neocities.org",
    genre: "Arcade",
    tags: ["Arcade", "Action", "Retro"],
    description: {
      es: "Juego arcade clásico con mecánicas simples pero adictivas. Estilo retro puro.",
      pt: "Jogo arcade clássico com mecânicas simples mas viciantes. Estilo retrô puro.",
      en: "Classic arcade game with simple but addictive mechanics. Pure retro style."
    },
    image: "https://via.placeholder.com/400x300?text=Supra+Meirro",
    difficulty: 2,
    date: "2024-01-15",
    updated: false,
    featured: false,
    keywords: "arcade, game, retro, action, classic",
    relatedTags: ["Arcade", "Action", "Retro"]
  }
];

// Función para obtener el juego destacado
function getFeaturedGame() {
  const featured = GAMES.find(g => g.featured);
  return featured || GAMES[0];
}

// Función para obtener nuevos lanzamientos
function getNewReleases(limit = 6) {
  return [...GAMES]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

// Función para obtener juegos actualizados
function getUpdatedGames(limit = 6) {
  return GAMES.filter(g => g.updated).sort(() => Math.random() - 0.5).slice(0, limit);
}

// Función para obtener juegos relacionados
function getRelatedGames(gameId, limit = 3) {
  const game = GAMES.find(g => g.id === gameId);
  if (!game) return [];
  
  const related = GAMES
    .filter(g => g.id !== gameId && g.tags.some(tag => game.relatedTags.includes(tag)))
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
  
  return related.length > 0 ? related : GAMES.filter(g => g.id !== gameId).slice(0, limit);
}

// Función para obtener todas las categorías únicas
function getAllCategories() {
  const categories = new Set();
  GAMES.forEach(game => {
    game.tags.forEach(tag => categories.add(tag));
  });
  return Array.from(categories).sort();
}

// Función para filtrar juegos por búsqueda
function searchGames(query, langId = 'es') {
  const q = query.toLowerCase();
  return GAMES.filter(game => 
    game.name[langId].toLowerCase().includes(q) ||
    game.description[langId].toLowerCase().includes(q) ||
    game.tags.some(tag => tag.toLowerCase().includes(q)) ||
    game.genre.toLowerCase().includes(q) ||
    game.keywords.toLowerCase().includes(q)
  );
}

// Función para filtrar por categoría
function filterGamesByCategory(category) {
  if (category === 'all') return GAMES;
  return GAMES.filter(game => game.tags.includes(category));
}

// Función para obtener URL limpia de un juego
function getGameUrl(gameId) {
  return `/games/${gameId}/`;
}
