const pageLang=localStorage.getItem('felipe-lang')||'en';
const pageId=document.body.dataset.gameId;
const game=GAMES.find(g=>g.id===pageId);
const copy={es:{play:'PLAY NOW',related:'YOU MAY ALSO LIKE',updated:'UPDATED',back:'← DISCOVER'},pt:{play:'JOGAR AGORA',related:'VOCÊ TAMBÉM PODE GOSTAR',updated:'ATUALIZADO',back:'← DESCUBRA'},en:{play:'PLAY NOW',related:'YOU MAY ALSO LIKE',updated:'UPDATED',back:'← DISCOVER'}}[pageLang]||null;
if(game&&copy){
 document.documentElement.lang=pageLang;
 const name=game.name[pageLang]||game.name.en,desc=game.description[pageLang]||game.description.en;
 document.getElementById('gameName').textContent=name;document.getElementById('gameDescription').textContent=desc;document.getElementById('gameGenre').textContent=game.genre+' · '+game.tags.slice(0,3).join(' · ');document.getElementById('gameImage').src=game.image;document.getElementById('gameImage').alt='Preview of '+name;document.getElementById('playGame').href=game.url;document.getElementById('playGame').textContent=copy.play;document.getElementById('backDiscover').textContent=copy.back;
 if(game.updated)document.getElementById('updatedBadge').textContent=copy.updated; else document.getElementById('updatedBadge').remove();
 const related=getRelatedGames(game.id,3);document.getElementById('relatedTitle').textContent=copy.related;document.getElementById('relatedGames').innerHTML=related.map(g=>`<article class="game-card"><a href="${getGameUrl(g.id)}"><div class="game-image-container"><img class="game-image" src="${g.image}" alt="Preview of ${g.name[pageLang]||g.name.en}" loading="lazy"></div></a><div class="game-info"><h3 class="game-name">${g.name[pageLang]||g.name.en}</h3><p class="game-genre">${g.genre}</p><a class="btn game-play-btn" href="${getGameUrl(g.id)}">${copy.play.replace(' NOW','')}</a></div></article>`).join('');
}
