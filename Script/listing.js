const state = { page: 1, perPage: 8, cats: new Set(), brands: new Set(),
                priceMin: 0, priceMax: 500, inStock: false, sort: 'categoryAsc',typeFilter: 'all'};

function filteredProducts() {
  return PRODUCTS.filter(p => {
      if (state.typeFilter !== 'all' && p.category !== state.typeFilter) return false;
      return true;
  }).sort((a, b) => {
    switch (state.sort) {
      case 'priceAsc':  return a.price - b.price;
      case 'priceDesc': return b.price - a.price;
      case 'nameAsc':   return a.name.localeCompare(b.name);
      case 'nameDesc':  return b.name.localeCompare(a.name);
      case 'categoryAsc':   return a.category.localeCompare(b.category);
      default:          return b.category.localeCompare(a.category);
    }
  });
}

function renderGrid() {
  const list = filteredProducts();
  debugger;
  const total = list.length;
  //console.log(total.toString());
  const start = (state.page - 1) * state.perPage;
  //console.log("state.page: " + state.page.toString() + " start: " + start.toString());
  const page = list.slice(start, start + state.perPage);
  //console.log("page: " + page.length);
  document.getElementById('resultCount').textContent = `${total} product${total !== 1 ? 's' : ''}`;

  const grid = document.getElementById('productGrid');

   // ===== NEW: empty state =====
  if (total === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="nr-icon">🔍</div>
        <h3>No ${state.typeFilter === 'all' ? '' : state.typeFilter + ' '}guitars found</h3>
        <p>Try a different filter or <button class="link" onclick="resetTypeFilter()">view all products</button>.</p>
      </div>`;
    document.getElementById('pagination').innerHTML = '';
    return;
  }

  grid.innerHTML = page.map(p => `
    <article class="product-card">
      <a href="product.html?id=${p.id}" class="product-card__img">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        ${p.isNew ? '<span class="badge">New</span>' : ''}
        ${p.pack ? '<span class="badge pack">Pack</span>' : ''}
        <button class="wishlist-btn" title="Add to wishlist" onclick="event.preventDefault();Cart.toast('♡ Added to wishlist')">♡</button>
      </a>
      <div class="product-card__body">
        <a href="product.html?id=${p.id}" class="product-card__title">${p.name}</a>
        <div class="product-card__price">€${p.price.toFixed(2)}</div>
        <div class="product-card__stock">In stock</div>
        <div class="product-card__delivery">🚚 1–3 days</div>
        <button class="product-card__btn" onclick="Cart.add(PRODUCTS.find(x=>x.id===${p.id}))">Add to cart</button>
      </div>
    </article>`).join('');

  renderPagination(total);
}

// Helper to reset filter
function resetTypeFilter() {
  state.typeFilter = 'all';
  document.querySelectorAll('.gt-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.gt-btn[data-type="all"]').classList.add('active');
  renderGrid();
}

function renderPagination(total) {
  const pages = Math.max(1, Math.ceil(total / state.perPage));
  const pg = document.getElementById('pagination');
  let html = '';
  if (pages <= 1) { pg.innerHTML = ''; return; }
  html += `<button ${state.page === 1 ? 'disabled' : ''} onclick="goPage(${state.page - 1})">‹</button>`;
  for (let i = 1; i <= pages; i++)
  html += `<button class="${i === state.page ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  html += `<button ${state.page === pages ? 'disabled' : ''} onclick="goPage(${state.page + 1})">›</button>`;
  pg.innerHTML = html;
}

function goPage(n) { state.page = n; renderGrid(); window.scrollTo({ top: 400, behavior: 'smooth' }); }

/* ---- DOM content---- */
document.addEventListener('DOMContentLoaded', () => {
 
  document.getElementById('sortBy').addEventListener('change', e => { state.sort = e.target.value; renderGrid(); });
  renderGrid();
}
);

/*--- Button Filter -----*/
document.querySelectorAll('.gt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    state.typeFilter = btn.dataset.type;
    state.page = 1; //1st page --reset

    renderGrid();

    document.getElementById('productGrid').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
