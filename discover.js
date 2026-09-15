/**
 * DISCOVER SYSTEM
 * Sistema de descubrimiento de juegos
 */

// Textos para el sistema Discover
const DISCOVER_COPY = {
  es: {
    discover: "discover",
    gameOfDay: "Game of the Day",
    newReleases: "New Releases",
    updated: "UPDATED",
    playNow: "PLAY NOW",
    play: "PLAY",
    difficulty: "Difficulty",
    youMayAlsoLike: "You May Also Like",
    searchPlaceholder: "Search games...",
    noGamesFound: "No games found",
    allGames: "All Games",
    freeBrowserGames: "Free Browser Games",
    playDirectly: "Play free games directly in your browser. No download required."
  },
  pt: {
    discover: "descubra",
    gameOfDay: "Jogo do Dia",
    newReleases: "Lançamentos Recentes",
    updated: "ATUALIZADO",
    playNow: "JOGAR AGORA",
    play: "JOGAR",
    difficulty: "Dificuldade",
    youMayAlsoLike: "Você Também Pode Gostar",
    searchPlaceholder: "Procurar jogos...",
    noGamesFound: "Nenhum jogo encontrado",
    allGames: "Todos os Jogos",
    freeBrowserGames: "Jogos Grátis no Navegador",
    playDirectly: "Jogue jogos grátis diretamente no seu navegador. Sem download necessário."
  },
  en: {
    discover: "discover",
    gameOfDay: "Game of the Day",
    newReleases: "New Releases",
    updated: "UPDATED",
    playNow: "PLAY NOW",
    play: "PLAY",
    difficulty: "Difficulty",
    youMayAlsoLike: "You May Also Like",
    searchPlaceholder: "Search games...",
    noGamesFound: "No games found",
    allGames: "All Games",
    freeBrowserGames: "Free Browser Games",
    playDirectly: "Play free games directly in your browser. No download required."
  }
};

let currentLang = localStorage.getItem('felipe-lang') || 'es';
let currentFilter = 'all';
let currentSearch = '';

// Renderizar tarjeta de juego
function renderGameCard(game, langId) {
  const t = DISCOVER_COPY[langId];
  const diffStars = '★'.repeat(game.difficulty) + '☆'.repeat(5 - game.difficulty);
  const tags = game.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  const updatedBadge = game.updated ? `<span class="game-updated-badge">${t.updated}</span>` : '';
  
  return `
    <div class="game-card">
      <div class="game-image-container">
        <img src="${game.image}" alt="${game.name[langId]}" class="game-image" />
        ${updatedBadge}
      </div>
      <div class="game-info">
        <h3 class="game-name">${game.name[langId]}</h3>
        <p class="game-genre">${game.genre}</p>
        <p class="game-description">${game.description[langId]}</p>
        <div class="game-meta">
          <span class="difficulty-badge" title="${t.difficulty}">${diffStars}</span>
        </div>
        <div class="game-tags">${tags}</div>
        <a href="${game.url}" target="_blank" rel="noopener" class="btn game-play-btn">${t.play}</a>
      </div>
    </div>
  `;
}

// Renderizar sección de juego destacado
function renderFeaturedGame(langId) {
  const t = DISCOVER_COPY[langId];
  const featured = getFeaturedGame();
  const updatedBadge = featured.updated ? `<span class="badge-updated">${t.updated}</span>` : '';
  
  return `
    <div class="featured-game">
      <div class="featured-content">
        <h2 class="featured-title">${t.gameOfDay}</h2>
        <div class="featured-body">
          <img src="${featured.image}" alt="${featured.name[langId]}" class="featured-image" />
          <div class="featured-text">
            <div class="featured-header">
              <h3 class="featured-name">${featured.name[langId]}</h3>
              ${updatedBadge}
            </div>
            <p class="featured-genre">${featured.genre}</p>
            <p class="featured-description">${featured.description[langId]}</p>
            <div class="featured-tags">
              ${featured.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${featured.url}" target="_blank" rel="noopener" class="btn btn-large">${t.playNow}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Renderizar filtros
function renderFilters(langId) {
  const categories = ['all', ...getAllCategories()];
  const t = DISCOVER_COPY[langId];
  
  return categories.map(cat => {
    const label = cat === 'all' ? t.allGames : cat;
    const active = currentFilter === cat ? 'active' : '';
    return `<button class="chip ${active}" data-category="${cat}">${label}</button>`;
  }).join('');
}

// Filtrar y renderizar juegos
function renderGamesGrid(langId) {
  let games = GAMES;
  
  // Aplicar filtro de categoría
  if (currentFilter !== 'all') {
    games = games.filter(g => g.tags.includes(currentFilter));
  }
  
  // Aplicar búsqueda
  if (currentSearch) {
    games = searchGames(currentSearch, langId);
  }
  
  const t = DISCOVER_COPY[langId];
  
  if (games.length === 0) {
    return `<div class="no-results">${t.noGamesFound}</div>`;
  }
  
  return games.map(game => renderGameCard(game, langId)).join('');
}

// Renderizar juegos relacionados
function renderRelatedGames(gameId, langId) {
  const related = getRelatedGames(gameId, 3);
  const t = DISCOVER_COPY[langId];
  
  if (related.length === 0) return '';
  
  const cards = related.map(game => `
    <div class="related-game-card">
      <img src="${game.image}" alt="${game.name[langId]}" class="related-image" />
      <h4>${game.name[langId]}</h4>
      <a href="${game.url}" target="_blank" rel="noopener" class="btn small">${t.play}</a>
    </div>
  `).join('');
  
  return `
    <section class="related-games">
      <h3>${t.youMayAlsoLike}</h3>
      <div class="related-grid">${cards}</div>
    </section>
  `;
}

// Actualizar vista de Discover
function updateDiscover(langId = currentLang) {
  currentLang = langId;
  
  const featuredEl = document.getElementById('discoverFeatured');
  const filtersEl = document.getElementById('discoverFilters');
  const gamesEl = document.getElementById('discoverGames');
  
  if (featuredEl) featuredEl.innerHTML = renderFeaturedGame(langId);
  if (filtersEl) filtersEl.innerHTML = renderFilters(langId);
  if (gamesEl) gamesEl.innerHTML = renderGamesGrid(langId);
  
  // Re-attach event listeners
  attachDiscoverListeners(langId);
}

// Eventos
function attachDiscoverListeners(langId) {
  // Filtros de categoría
  document.querySelectorAll('#discoverFilters .chip').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#discoverFilters .chip').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.category;
      currentSearch = '';
      document.getElementById('gameSearch').value = '';
      updateDiscover(langId);
    });
  });
  
  // Buscador
  const searchInput = document.getElementById('gameSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (currentSearch) {
        document.querySelectorAll('#discoverFilters .chip').forEach(b => b.classList.remove('active'));
        currentFilter = 'all';
      }
      updateDiscover(langId);
    });
  }
}

// Inicializar Discover
function initDiscover() {
  const discoverSection = document.getElementById('discover');
  if (!discoverSection) return;
  
  updateDiscover(currentLang);
}

// Llamar después de que el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDiscover);
} else {
  initDiscover();
}
