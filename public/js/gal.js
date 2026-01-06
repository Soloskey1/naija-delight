let currentItem = null;

function goBack() { window.history.back(); }
const isDesktop = () => window.innerWidth >= 768;

// Menu data with authentic Nigerian meal photos
const menu = {
 'Small Chops': [
  {
    name: "Puff Puff",
    price: '₦1,500',
    desc: "Deep-fried sweet dough balls, soft and fluffy inside, a popular Nigerian street snack.",
    img: "https://images.unsplash.com/photo-1563379091339-03246963d9d6",
    tag: 'V'
  },
  {
    name: "Meat Pie",
    price: '₦2,000',
    desc: "Flaky pastry filled with seasoned minced meat, carrots, and potatoes.",
    img: "https://images.unsplash.com/photo-1602524812560-6a1c0c55a3c7",
    tag: 'M'
  },
  {
    name: "Peppered Gizzard",
    price: '₦3,000',
    desc: "Spicy, tender chicken gizzards sautéed with peppers, onions, and Nigerian spices.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    tag: 'S'
  }
],

'Swallow (main)': [
  {
    name: "Pounded Yam with Egusi",
    price: "₦8,000",
    desc: "Smooth, stretchy pounded yam served with melon seed soup containing assorted meats and fish.",
    img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659",
    tag: 'M'
  },
  {
    name: "Jollof Rice",
    price: "₦7,000",
    desc: "Famous West African one-pot rice cooked in a rich tomato and pepper sauce with chicken.",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    tag: 'C'
  },
  {
    name: "Eba with Okra Soup",
    price: "₦6,500",
    desc: "Garri (cassava flakes) prepared with hot water, served with slimy okra soup and fish.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae4b",
    tag: 'V'
  },
  {
    name: "Amala with Ewedu",
    price: "₦7,500",
    desc: "Yam flour swallow with jute leaf soup, served with assorted meat and cow skin (ponmo).",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    tag: 'V'
  }
],

'Protein Soups': [
  {
    name: "Goat Meat Pepper Soup",
    price: "₦10,000",
    desc: "Spicy, light broth with tender goat meat, utazi leaves, and traditional peppers.",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    tag: 'M'
  },
  {
    name: "Fried Fish with Stew",
    price: "₦8,500",
    desc: "Whole fried tilapia or croaker served with rich Nigerian tomato and pepper stew.",
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    tag: 'F'
  },
  {
    name: "Grilled Suya",
    price: "₦9,000",
    desc: "Skewered spicy beef grilled over open flame, served with sliced onions and tomatoes.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    tag: 'M'
  }
],

'Side Dishes': [
  {
    name: "Fried Plantains (Dodo)",
    price: "₦2,000",
    desc: "Sweet ripe plantains sliced and fried until golden brown and caramelized.",
    img: "https://images.unsplash.com/photo-1571898223471-4c6762f0c1a0",
    tag: 'V'
  },
  {
    name: "Moi Moi",
    price: "₦2,500",
    desc: "Steamed bean pudding made from blended beans, peppers, and oil, often with eggs or fish.",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
    tag: 'V'
  },
  {
    name: "Coleslaw",
    price: "₦2,000",
    desc: "Fresh cabbage and carrot salad with creamy mayonnaise dressing.",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
    tag: 'V'
  }
],

'Desserts': [
  {
    name: "Chin Chin",
    price: "₦3,000",
    desc: "Crispy, sweet fried dough snacks flavored with nutmeg.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
    tag: 'D'
  },
  {
    name: "Pap (Akamu) with Akara",
    price: "₦3,000",
    desc: "Smooth corn pudding served with fried bean cakes for a traditional breakfast or dessert.",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
    tag: 'V'
  },
  {
    name: "Coconut Candy",
    price: "₦2,500",
    desc: "Sweet coconut chunks cooked with sugar until caramelized.",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    tag: 'D'
  }
],

'Drinks': [
  {
    name: "Palm Wine",
    price: "₦3,500",
    desc: "Traditional alcoholic beverage tapped from palm trees, naturally sweet and slightly effervescent.",
    img: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc",
    tag: 'A'
  },
  {
    name: "Zobo Drink",
    price: "₦1,500",
    desc: "Refreshing hibiscus tea infused with ginger, pineapple, and spices.",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    tag: 'N'
  },
  {
    name: "Chapman",
    price: "₦3,500",
    desc: "Popular Nigerian cocktail with mixed fruits, Angostura bitters, and soda.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    tag: 'A'
  }
]
};

function formatTitle(cat) { 
    return cat.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '); 
}

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
                <span id="currentTotal" class="text-2xl font-display font-bold text-dark">₦0</span>
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
                <span id="currentTotal" class="text-2xl font-display font-bold text-dark">₦0</span>
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
    const priceStr = currentItem.price.replace('₦', '').replace(',', '').trim();
    const price = parseFloat(priceStr);
    const qty = parseInt(document.getElementById('itemQuantity').value || 1);
    const total = price * qty;
    // Format with commas for thousands
    const formatted = '₦' + total.toLocaleString('en-NG');
    const totalElements = document.querySelectorAll('#currentTotal');
    totalElements.forEach(el => el.textContent = formatted);
}

function addToCart(showPopup = true) {
    if (!currentItem) return;
    const qty = parseInt(document.getElementById('itemQuantity').value || 1);
    const priceStr = currentItem.price.replace('₦', '').replace(',', '').trim();
    const price = parseFloat(priceStr);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const idx = cart.findIndex(i => i.name === currentItem.name);
    if (idx > -1) {
        cart[idx].quantity += qty;
        cart[idx].total = cart[idx].price * cart[idx].quantity;
    } else {
        cart.push({ name: currentItem.name, price: price, quantity: qty, total: price * qty });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    if (showPopup) alert(`${qty} × ${currentItem.name} added to cart!`);
    closeOrderModal();
    closeMobileItemModal(); // In case mobile modal is open
}

function saveAndCheckout() {
    addToCart(false);
    window.location.href = 'checkout.html';
}

window.addEventListener('load', () => {
    renderCategoryButtons();
    // Default to first category
    const firstCat = Object.keys(menu)[0];
    if (firstCat) filterCategory(firstCat);
});