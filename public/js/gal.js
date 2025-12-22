let currentItem = null;

function goBack() { window.history.back(); }
const isDesktop = () => window.innerWidth >= 768;

// Menu data with authentic Italian meal photos
const menu = {
 'apetizers': [
  {
    name: "Classic Bruschetta",
    price: '$8.50',
    desc: "Grilled rustic bread rubbed with garlic and topped with fresh vine-ripened tomatoes, basil, and a drizzle of olive oil.",
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&w=800", // Bruschetta 
    tag: 'V'
  },
  {
    name: "Arancini di Riso",
    price: '$12.00',
    desc: "Crispy, deep-fried saffron risotto balls stuffed with creamy mozzarella and savory ground beef ragu.",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&w=800", // Fried rice balls (close visual)
    tag: 'S'
  },
  {
    name: "Prosciutto e Melone",
    price: '$14.00',
    desc: "Thinly sliced, aged prosciutto ham draped over sweet, seasonal cantaloupe melon slices.",
    img: "https://images.unsplash.com/photo-1631817431403-4e54c59df257?auto=format&w=800", // Melon & prosciutto
    tag: 'G'
  },
],

'first-course': [
  {
    name: "Pasta",
    price: "$18.50",
    desc: "Classic Roman dish with cured pork cheek (guanciale), egg yolks, Pecorino Romano cheese, and black pepper.",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&w=800", // Pasta bowl
    tag: 'P'
  },
  {
    name: "Lasagna Bolognese",
    price: "$22.00",
    desc: "Layers of fresh pasta sheets, rich beef ragu, creamy béchamel sauce, and Parmigiano-Reggiano cheese.",
    img: "https://images.unsplash.com/photo-1605475124529-8a9f385b6bc1?auto=format&w=800", // Lasagna plate
    tag: 'C'
  },
  {
    name: "Cacio e Pepe",
    price: "$16.00",
    desc: "Simple but elegant pasta dish: spaghetti tossed with Pecorino Romano cheese and freshly cracked black pepper.",
    img: "https://images.unsplash.com/photo-1617191511779-52a82fbeb7af?auto=format&w=800", // Cheese + pepper pasta
    tag: 'V'
  },
  {
    name: "Ravioli di Zucca",
    price: "$20.00",
    desc: "Handmade ravioli filled with sweet butternut squash and served in a sage butter sauce.",
    img: "https://images.unsplash.com/photo-1562967916-eb82221dfb6b?auto=format&w=800", // Ravioli shot
    tag: 'V'
  },
],

'second-courses': [
  {
    name: "Ossobuco alla Milanese",
    price: "$32.00",
    desc: "Braised veal shanks served with a gremolata (lemon zest, garlic, parsley) and saffron risotto.",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&w=800", // Braised dish
    tag: 'M'
  },
  {
    name: "Pollo Marsala",
    price: "$24.50",
    desc: "Chicken cutlets lightly dusted in flour, sautéed in a mushroom and Marsala wine reduction.",
    img: "https://images.unsplash.com/photo-1586190848496-4caa1b8908fa?auto=format&w=800", // Chicken dish
    tag: 'C'
  },
  {
    name: "Grilled Swordfish",
    price: "$28.00",
    desc: "Fresh swordfish steak grilled and seasoned with lemon and herbs, served with a side of mixed greens.",
    img: "https://images.unsplash.com/photo-1587345291147-1a7806f3d01d?auto=format&w=800", // Grilled fish
    tag: 'F'
  },
],

'side-dishes': [
  {
    name: "Creamy Polenta",
    price: "$6.00",
    desc: "Slow-cooked cornmeal, incredibly smooth and often served with a touch of butter and cheese.",
    img: "https://images.unsplash.com/photo-1599785209707-6c938d96418b?auto=format&w=800", // Polenta bowl
    tag: 'V'
  },
  {
    name: "Sautéed Spinach",
    price: "$7.50",
    desc: "Fresh spinach leaves quickly sautéed with garlic and a hint of red pepper flakes.",
    img: "https://images.unsplash.com/photo-1589719470456-0d37d5e9f085?auto=format&w=800", // Spinach sauté
    tag: 'V'
  },
  {
    name: "Roasted Potatoes",
    price: "$6.50",
    desc: "Crispy rosemary and thyme roasted new potatoes.",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&w=800", // Roasted potatoes
    tag: 'V'
  },
],

'desserts': [
  {
    name: "Tiramisu Classico",
    price: "$10.00",
    desc: "Layers of coffee-soaked ladyfingers, rich mascarpone cream, and cocoa powder.",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&w=800", // Tiramisu style
    tag: 'D'
  },
  {
    name: "Panna Cotta",
    price: "$9.50",
    desc: "Silky smooth cooked cream dessert topped with a vibrant raspberry coulis.",
    img: "https://images.unsplash.com/photo-1599785209707-6c938d96418b?auto=format&w=800", // Panna cotta look
    tag: 'D'
  },
  {
    name: "Cannoli Siciliani",
    price: "$8.00",
    desc: "Crispy fried pastry shells filled with sweet, creamy ricotta cheese and candied fruit.",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&w=800", // Cannoli styled
    tag: 'D'
  },
],

'drinks': [
  {
    name: "Red Wine (Chianti)",
    price: "$10.00",
    desc: "A robust and dry Italian red, perfect for pairing with pasta or red meats.",
    img: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&w=800", // Chianti wine
    tag: 'A'
  },
  {
    name: "Sparkling Water",
    price: "$3.50",
    desc: "Refreshing Italian sparkling mineral water.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&w=800", // Sparkling water
    tag: 'N'
  },
  {
    name: "Coffee Cappuccino",
    price: "$11.00",
    desc: "Classic Italian cappuccino with espresso and steamed milk foam.",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&w=800", // Cappuccino
    tag: 'A'
  },
]
};

function formatTitle(cat) { return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); }

function createCard(item) {
    return `
        <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col">
            <div class="relative overflow-hidden h-56">
                <img src="${item.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    ${item.price}
                </div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <h3 class="font-display text-2xl font-bold text-dark mb-2">${item.name}</h3>
                <p class="text-stone-500 text-sm leading-relaxed mb-6 flex-1">${item.desc}</p>
                <button onclick='openOrderModal(${JSON.stringify(item)})' 
                    class="w-full bg-stone-900 text-white py-3 rounded-xl font-bold hover:bg-primary transition-colors duration-300">
                    Order Now
                </button>
            </div>
        </div>
    `;
}

function createMobileListItem(item) {
    return `
        <button onclick='openMobileItemModal(${JSON.stringify(item)})' class="w-full bg-white border border-stone-200 rounded-2xl p-4 flex items-center space-x-4 hover:border-primary hover:shadow-md transition-all duration-300">
            <img src="${item.img}" class="w-20 h-20 rounded-xl object-cover">
            <div class="flex-1 text-left">
                <h3 class="font-display font-bold text-dark mb-1">${item.name}</h3>
                <p class="text-sm text-stone-500 line-clamp-1">${item.desc}</p>
                <p class="text-primary font-bold mt-2">${item.price}</p>
            </div>
            <i class="fas fa-chevron-right text-stone-300"></i>
        </button>
    `;
}

function renderCategoryButtons() {
    const list = document.getElementById('categoryList');
    list.innerHTML = Object.keys(menu).map(cat => `
        <li class="category-btn" data-cat="${cat}">
            <button onclick="handleCategoryClick('${cat}')" class="w-full text-left px-6 py-4 rounded-xl text-stone-400 hover:text-white transition-all duration-300 font-medium flex justify-between items-center">
                ${formatTitle(cat)}
                <i class="fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 transition"></i>
            </button>
        </li>
    `).join('');
}

function filterCategory(cat) {
    // Desktop view
    document.getElementById('currentCategoryTitle').textContent = formatTitle(cat);
    document.getElementById('foodGrid').innerHTML = menu[cat].map(createCard).join('');
    
    // Mobile view
    document.getElementById('currentCategoryTitleMobile').textContent = formatTitle(cat);
    document.getElementById('foodGridMobile').innerHTML = menu[cat].map(createMobileListItem).join('');
    
    document.querySelectorAll('.category-btn').forEach(li => li.classList.toggle('active-cat', li.dataset.cat === cat));
}

function handleCategoryClick(cat) { filterCategory(cat); }

function openOrderModal(item) {
    currentItem = item;
    const modal = document.getElementById('orderModal');
    const details = document.getElementById('orderItemDetails');

    details.innerHTML = `
        <div class="bg-stone-50 p-4 rounded-2xl flex justify-between items-center">
            <span class="font-bold text-dark">${item.name}</span>
            <span class="text-primary font-bold">${item.price}</span>
        </div>
        <div class="flex justify-between items-center py-4">
            <span class="text-sm font-bold text-stone-400 uppercase tracking-widest">Quantity</span>
            <div class="flex items-center space-x-6">
                <button onclick="updateQuantity(-1)" class="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50"> <i class="fas fa-minus text-xs"></i> </button>
                <input type="number" id="itemQuantity" value="1" readonly class="w-8 text-center text-xl font-bold">
                <button onclick="updateQuantity(1)" class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30"> <i class="fas fa-plus text-xs"></i> </button>
            </div>
        </div>
        <div class="border-t border-stone-100 pt-6">
            <div class="flex justify-between items-center mb-6">
                <span class="text-stone-400 font-medium">Subtotal</span>
                <span id="currentTotal" class="text-2xl font-display font-bold text-dark">$0.00</span>
            </div>
            <div class="grid grid-cols-1 gap-3">
                <button onclick="saveAndCheckout()" class="w-full bg-[#059669] text-white py-4 rounded-2xl font-bold hover:bg-[#047857] transition shadow-lg shadow-emerald-100">
                    Proceed to Checkout
                </button>
                <button onclick="addToCart()" class="w-full py-3 text-stone-500 font-semibold hover:text-primary transition">
                    Add & Continue
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    calculateTotal();
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.add('hidden');
    document.getElementById('orderModal').style.display = 'none';
    currentItem = null;
}

function openMobileItemModal(item) {
    currentItem = item;
    const modal = document.getElementById('mobileItemModal');
    
    document.getElementById('mobileItemTitle').textContent = item.name;
    document.getElementById('mobileItemImage').innerHTML = `<img src="${item.img}" class="w-full h-full object-cover">`;
    
    document.getElementById('mobileItemContent').innerHTML = `
        <div class="bg-stone-50 p-4 rounded-2xl flex justify-between items-center">
            <span class="font-bold text-dark">Price</span>
            <span class="text-primary font-bold text-xl">${item.price}</span>
        </div>
        <p class="text-stone-600 text-base leading-relaxed">${item.desc}</p>
        <div class="flex justify-between items-center py-4 border-y border-stone-200">
            <span class="text-sm font-bold text-stone-400 uppercase tracking-widest">Quantity</span>
            <div class="flex items-center space-x-4">
                <button onclick="updateQuantity(-1)" class="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50"> <i class="fas fa-minus text-xs"></i> </button>
                <input type="number" id="itemQuantity" value="1" readonly class="w-8 text-center text-lg font-bold">
                <button onclick="updateQuantity(1)" class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"> <i class="fas fa-plus text-xs"></i> </button>
            </div>
        </div>
        <div class="pt-4">
            <div class="flex justify-between items-center mb-4">
                <span class="text-stone-400 font-medium">Subtotal</span>
                <span id="currentTotal" class="text-2xl font-display font-bold text-dark">$0.00</span>
            </div>
            <div class="grid grid-cols-1 gap-2">
                <button onclick="saveAndCheckout()" class="w-full bg-[#059669] text-white py-3 rounded-xl font-bold hover:bg-[#047857] transition">
                    Checkout
                </button>
                <button onclick="addToCart()" class="w-full py-2 text-stone-500 font-semibold hover:text-primary transition border border-stone-200 rounded-xl">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    calculateTotal();
}

function closeMobileItemModal() {
    document.getElementById('mobileItemModal').classList.add('hidden');
    currentItem = null;
}

function updateQuantity(change) {
    const input = document.getElementById('itemQuantity');
    let val = Math.max(1, parseInt(input.value) + change);
    input.value = val;
    calculateTotal();
}

function calculateTotal() {
    if (!currentItem) return;
    const price = parseFloat(currentItem.price.replace('$',''));
    const qty = parseInt(document.getElementById('itemQuantity').value);
    document.getElementById('currentTotal').textContent = `$${(price * qty).toFixed(2)}`;
}

function addToCart(showPopup = true) {
    if (!currentItem) return;
    const qty = parseInt(document.getElementById('itemQuantity').value);
    const price = parseFloat(currentItem.price.replace('$', ''));
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const idx = cart.findIndex(i => i.name === currentItem.name);
    if (idx > -1) cart[idx].quantity += qty;
    else cart.push({ name: currentItem.name, price: price, quantity: qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    if (showPopup) alert(`${currentItem.name} added!`);
    closeOrderModal();
}

function saveAndCheckout() {
    addToCart(false);
    window.location.href = 'checkout.html';
}

window.addEventListener('load', () => {
    renderCategoryButtons();
filterCategory('antipasti');
});