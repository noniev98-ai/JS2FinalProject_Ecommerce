const Cart = {
    key: 'acv_cart',
    currency: 'EUR',
    phpRate: 68.5,
    installmentOn: false,
    installYears: 1,
    interestRate: 0.03,
    monthlyAmount: 0,

  get() {
         return JSON.parse(localStorage.getItem(this.key) || '[]');
         },
  save(items) {
         localStorage.setItem(this.key, JSON.stringify(items)); 
        this.resetInstallment();   // amounts changed → reset breakdown
        this.render();
  },
 add(product, qty = 1) {
        const items = this.get();
        const existing = items.find(i => i.id === product.id);
        if (existing) existing.qty += qty;
        else items.push({ id: product.id , name: product.name, price: product.price, image: product.images[0], qty });
        this.save(items);
        this.toast(`✓ Added "${product.name}" to cart`);
 },
remove(id) { this.save(this.get().filter(i => i.id !== id)); 
},
updateQty(id, qty) {
  const items = this.get();
  const it = items.find(i => i.id === id);
  if (it) {it.qty = Math.max(1, qty); this.save(items);}
},
count() { return this.get().reduce((s, i) => s + i.qty, 0); 
},
totalEUR() { return this.get().reduce((s, i) => s + i.qty * i.price, 0);   // Base total in EUR
},
totalDisplay() { 
    const eur = this.totalEUR();
    return this.currency === 'EUR' ? eur : eur * this.phpRate; 
},
fmt(amount) {
    if (this.currency==='EUR') return '€' + amount.toFixed(2);
    return  '₱' + amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });  //formatting display
},
switchCurrency(toPHP) {
    this.currency = toPHP ? 'PHP' : 'EUR';// toggle 
    this.resetInstallment();
    this.render();
},
toggleInstallment(on) {   //installement
  this.installmentOn = on;
  const controls = document.getElementById('installControls');
  if (controls) controls.style.display= on ? 'block':'none';
  this.resetInstallment();
  this.render();
},
setYears(y) {
  this.installYears = parseInt(y);
  const bd = document.getElementById('installBreakdown');
  if (bd) bd.style.display = 'none';
  this.monthlyAmount = 0;
  this.render(); 
},
resetInstallment() {
  this.monthlyAmount=0;
  const bd = document.getElementById('installBreakdown');
  if (bd) bd.style.display = 'none';
},
computeInstallment() {
  const base = this.totalDisplay();
  const years = this.installYears;
  
  if (base <= 0){
     this.toast('⚠ Cart is empty!');
      return;
  }

  const totalInterest = base * this.interestRate * years; // Total Interest = base × interest rate × years
  const totalPayment = base + totalInterest; //Total Payment = base + total interest
  const yearlyPayment = totalPayment / years; //Yearly Payment = total payment / years
  const monthlyPayment = totalPayment / (years * 12); //Monthly Payment = total payment / (years × 12)

  this.monthlyAmount = monthlyPayment; //checkout amount

  document.getElementById('bdInterest').textContent = this.fmt(totalInterest);
  document.getElementById('bdTotalPay').textContent = this.fmt(totalPayment);
  document.getElementById('bdYearly').textContent = this.fmt(yearlyPayment);
  document.getElementById('bdMonthly').textContent = this.fmt(monthlyPayment);
  document.getElementById('installBreakdown').style.display='block';

  this.render();
  this.toast(`✓ Monthly payment: ${this.fmt(monthlyPayment)}`);
},
goToCheckout(){
  if (this.get().length === 0) {
    this.toast('⚠ Your cart is empty!');
    return;
  }
  
const finalAmount = this.installmentOn && this.monthlyAmount > 0  
    ? this.monthlyAmount
    : this.totalDisplay();

  const checkoutData = {   // checkout data
    currency: this.currency,
    phpRate: this.phpRate,
    installment: this.installmentOn,
    years: this.installYears,
    monthly: this.monthlyAmount,
    finalAmount: finalAmount
  };

  const items = this.get();   // alert
  let summary = '🛒 ORDER CONFIRMATION\n';
  summary += '━━━━━━━━━━━━━━━━━━━━━━━━\n\n';

  summary += 'ITEMS:\n';
  items.forEach(i => {   // items
    const unit = this.currency === 'EUR' ? i.price : i.price * this.phpRate;
    summary += `• ${i.name}\n   ${i.qty} × ${this.fmt(unit)} = ${this.fmt(unit * i.qty)}\n`;
  });

  summary += '\n━━━━━━━━━━━━━━━━━━━━━━━━\n';
  summary += `Currency: ${this.currency}\n`;
  summary += `Cart Total: ${this.fmt(this.totalDisplay())}\n`;

  
  if (checkoutData.installment && checkoutData.monthly > 0) {  // Installment details (only if enabled & computed)
    summary += `\nINSTALLMENT PLAN:\n`;
    summary += `• Term: ${checkoutData.years} year(s) (${checkoutData.years * 12} months)\n`;
    summary += `• Interest Rate: 3% per year\n`;
    summary += `• Monthly Payment: ${this.fmt(checkoutData.monthly)}\n`;
  }

  summary += '\n━━━━━━━━━━━━━━━━━━━━━━━━\n';
  summary += `💰 AMOUNT TO CHECKOUT: ${this.fmt(checkoutData.finalAmount)}`;
  if (checkoutData.installment && checkoutData.monthly > 0) {
    summary += ' /month';
  }
  summary += '\n\nDo you want to proceed with checkout?';

  const confirmed = window.confirm(summary);  // Confirm dialog
  

  if (confirmed) {
   if (confirm('Would you like to place this order?')) {
   
    localStorage.removeItem(this.key);  // User clicked OK → clear the cart
    this.resetInstallment();
    this.installmentOn = false;
    this.currency = 'EUR';

     const phpToggle = document.getElementById('phpToggle');  // Reset UI controls
    if (phpToggle) phpToggle.checked = false;
    const installToggle = document.getElementById('installToggle');
    if (installToggle) installToggle.checked = false;
    const installControls = document.getElementById('installControls');
    if (installControls) installControls.style.display = 'none';

    this.render();
    this.toast('✓ Order placed! Thank you for your purchase.');

    const drawer = document.getElementById('cartDrawer');   // Close the drawer
    const overlay = document.getElementById('overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
   }
   else {
     this.toast('Checkout cancelled — your cart is saved.'); // User clicked Cancel → cart stays intact
   }
  } else {
    this.toast('Checkout cancelled — your cart is saved.');  // User clicked Cancel → cart stays intact
  }

},
render() {
    const countE1 = document.getElementById('cartCount');   //cart counter in header
    if (countE1) countE1.textContent = this.count();

    const body = document.getElementById('cartBody');
    if (!body) return;

    const items = this.get();
    if (!items.length) {
        body.innerHTML = '<div class="cart-empty"> <div style="font-size:40px;"> 🎸 </div>  Your cart is empty 🛒</div>';}
        else{
        body.innerHTML = items.map(i => `
        <div class="cart-item">
          <img src="${i.image}" alt="">
          <div>
            <div class="cart-item__name">${i.name}</div>
            <div class="cart-item__price">${this.fmt(this.currency === 'EUR' ? i.price : i.price * this.phpRate)}</div>
            <div class="cart-item__qty">
              <button onclick="Cart.updateQty(${i.id},${i.qty - 1})">−</button>
              <span>${i.qty}</span>
              <button onclick="Cart.updateQty(${i.id},${i.qty + 1})">+</button>
            </div>
          </div>
          <button class="cart-item__remove" onclick="Cart.remove(${i.id})">✕</button>
        </div>`).join('');
    }
        
    const totalLabel = document.getElementById('totalLabel'); // Total label 
    const totalEl = document.getElementById('cartTotal');
    const checkoutAmt = document.getElementById('checkoutAmount');

    if (totalEl) {
      if (this.installmentOn && this.monthlyAmount > 0) {
        totalLabel.textContent = 'Monthly:';
        totalEl.textContent = this.fmt(this.monthlyAmount);
        checkoutAmt.textContent = `(${this.fmt(this.monthlyAmount)}/mo)`;
      } else {
        totalLabel.textContent = 'Total:';
        totalEl.textContent = this.fmt(this.totalDisplay());
        checkoutAmt.textContent = '';
      }
    }
},

 toast(msg) {  // Toast function
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add('show'));
    clearTimeout(this._tid);
    this._tid = setTimeout(() => t.classList.remove('show'), 2500);
  },

  async fetchRate() {   // ===== Live exchange rate Eur to PHP=====
    try {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
      const data = await res.json();
      if (data.rates && data.rates.PHP) {
        this.phpRate = data.rates.PHP;
        this.render();
      }
    } catch (e) {
      console.log('Using fallback PHP rate: 68.5');
    }
  },
  init() { //initialization
    this.render();
    this.fetchRate();

    const open = document.getElementById('openCart');
    const close = document.getElementById('closeCart');
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');

    const toggle = (on) => {
      drawer.classList.toggle('open', on);
      overlay.classList.toggle('active', on);
    };
    open && open.addEventListener('click', () => toggle(true));
    close && close.addEventListener('click', () => toggle(false));
    overlay && overlay.addEventListener('click', () => toggle(false));

    const phpToggle = document.getElementById('phpToggle'); // Currency toggle
    if (phpToggle) phpToggle.addEventListener('change', e => this.switchCurrency(e.target.checked));

    const installToggle = document.getElementById('installToggle');  // Installment toggle
    if (installToggle) installToggle.addEventListener('change', e => this.toggleInstallment(e.target.checked));

    const yearsSel = document.getElementById('installYears');  // Years selector
    if (yearsSel) yearsSel.addEventListener('change', e => this.setYears(e.target.value));

    const computeBtn = document.getElementById('computeBtn');  // Compute button
    if (computeBtn) computeBtn.addEventListener('click', () => this.computeInstallment());
  }
};

document.addEventListener('DOMContentLoaded', () => Cart.init());