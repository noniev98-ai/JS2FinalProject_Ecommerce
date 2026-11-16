const params = new URLSearchParams(location.search);
const productId = +params.get('id');
const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

// Wire up the button once DOM is ready
document.addEventListener('DOMContentLoaded', () => WireTheme());

/* ---- RENDER PRODUCT PAGE ---- */
function renderProduct() {
  document.title = `${product.name} — ACV Guitar Shoppe`;
  document.getElementById('crumbName').textContent = product.name;
  const specsHTML = Object.entries(product.specs)
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');

  document.getElementById('productPage').innerHTML = `
    <!-- GALLERY -->
    <div class="pp-gallery">
      <div class="pp-main-img" id="mainImg">
        <img src="${product.images[0]}" alt="${product.name}">
      </div>
      <div class="pp-thumbs" id="thumbs">
        ${product.images.map((src, i) => `
          <div class="pp-thumb ${i === 0 ? 'active' : ''}" data-i="${i}">
            <img src="${src}" alt="">
          </div>`).join('')}
      </div>
    </div>

    <!-- INFO -->
    <div class="pp-info">
      <h1>${product.name}</h1>
      <div class="pp-brand">Brand: <strong>${product.brand}</strong> &nbsp;|&nbsp; SKU: TM-${product.id}</div>
      <div class="pp-rating">
        ${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}
        <span>${product.rating} (${product.reviews} reviews)</span>
      </div>

      <p style="color:#555;margin-bottom:16px">${product.short}</p>

      <div class="pp-price-box">
        <div class="pp-price">€${product.price.toFixed(2)}</div>
        <div class="pp-price-vat">VAT included · Free shipping over €50</div>
        <div class="pp-stock"> delivery 1–3 days</div>
      </div>

      <div class="pp-qty">
        <label>Quantity:</label>
        <div class="qty-ctrl">
          <button id="qtyMinus">−</button>
          <input type="number" id="qtyInput" value="1" min="1" max="${product.stock}">
          <button id="qtyPlus">+</button>
        </div>
      </div>

      <div class="pp-actions">
        <button class="btn btn-primary" id="addToCartBtn">🛒 Add to cart</button>
        <button class="btn btn-outline" onclick="Cart.toast('♡ Added to wishlist')">♡ Wishlist</button>
      </div>

      <ul class="pp-features">
        ${product.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <!-- TABS -->
    <div class="pp-tabs">
      <div class="tab-head">
        <button class="tab-btn active" data-tab="desc">Description</button>
        <button class="tab-btn" data-tab="specs">Specifications</button>
        <button class="tab-btn" data-tab="delivery">Delivery & Returns</button>
      </div>
      <div class="tab-body active" id="tab-desc"><p>${product.description}</p></div>
      <div class="tab-body" id="tab-specs"><table class="spec-table">${specsHTML}</table></div>
      <div class="tab-body" id="tab-delivery">
        <p><strong>Delivery:</strong> 1–3 business days within Lithuania. Free over €50.</p>
        <p><strong>Returns:</strong> 14-day no-questions-asked return policy.</p>
        <p><strong>Warranty:</strong> 24 months.</p>
      </div>
    </div>
  `;

  wireGallery();
  wireTabs();
  wireQty();
  wireAddToCart();

}

/* ---- GALLERY + LIGHTBOX ---- */
let currentImg = 0;
function wireGallery() {
  const mainImg = document.querySelector('#mainImg img');
  const thumbs  = document.querySelectorAll('.pp-thumb');

  thumbs.forEach(t => t.addEventListener('click', () => {
    currentImg = +t.dataset.i;
    mainImg.src = product.images[currentImg];
    thumbs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  }));

  document.getElementById('mainImg').addEventListener('click', () => openLightbox(currentImg));
}

function openLightbox(i) {
  currentImg = i;
  const lb = document.getElementById('lightbox');
  document.getElementById('lbImg').src = product.images[i];
  document.getElementById('lbCounter').textContent = `${i + 1} / ${product.images.length}`;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}
function nav(delta) {
  const n = product.images.length;
  currentImg = (currentImg + delta + n) % n;
  openLightbox(currentImg);
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => nav(-1));
document.getElementById('lbNext').addEventListener('click', () => nav(1));
document.getElementById('lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') nav(-1);
  if (e.key === 'ArrowRight') nav(1);
});

/* ---- TABS ---- */
function wireTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-body').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  }));
}

/* ---- QTY ---- */
function wireQty() {
  const input = document.getElementById('qtyInput');
  document.getElementById('qtyMinus').addEventListener('click', () => input.value = Math.max(1, +input.value - 1));
  document.getElementById('qtyPlus').addEventListener('click', () =>
    input.value = Math.min(product.stock, +input.value + 1));
}

/* ---- ADD TO CART ---- */
function wireAddToCart() {
  document.getElementById('addToCartBtn').addEventListener('click', () => {
    const qty = +document.getElementById('qtyInput').value || 1;
    Cart.add(product, qty);
  });
}

/*load theme */
function WireTheme() {
    const icontheme = document.getElementById("icon-btn");
    const theme = localStorage.getItem("iconTheme");
  
    
   if (theme === "light") {
        document.body.classList.add("light");
      } else {
        document.body.classList.remove("light");
      }

}


renderProduct();
