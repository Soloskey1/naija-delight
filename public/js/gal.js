let currentItem = null;

function goBack() { window.history.back(); }
const isDesktop = () => window.innerWidth >= 768;

// Add this helper function at the top
function shouldUseMobileModal() {
    return window.innerWidth < 768; // MD breakpoint
}

// Menu data with authentic Nigerian meal photos
const menu = {
 'Small Chops': [
  {
    name: "Puff Puff",
    price: '₦1,500',
    desc: "Deep-fried sweet dough balls, soft and fluffy inside, a popular Nigerian street snack.",
    img: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/480992862_612640714965809_7629121884984362773_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeElMiuDXC1ZYurkqC__hxjaDR33GgB0FRwNHfcaAHQVHAE_SN_urgSnnoEfoJgyrhiftzHdh8D3PtMD13lzEWfq&_nc_ohc=pYlTTu6LFgIQ7kNvwGLPBnq&_nc_oc=Adn7KXCuJxRUySuJ9CHLL2YlYb9qWjaX73C6VU59qyJYYFDOluuOjK30gFK4hp32a3E&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&_nc_gid=u5jyZ-Pw4bVscJl6sYCf3g&oh=00_AfoL6StgV6Bpfif8P0D6-sQ84EbPH3viC2Hsm1AHGfrAJw&oe=6976DB7B",
    tag: 'V'
  },
  {
    name: "Meat Pie",
    price: '₦2,000',
    desc: "Flaky pastry filled with seasoned minced meat, carrots, and potatoes.",
    img: "https://www.seriouseats.com/thmb/2E-RocNOTLxwZRjDMFQkmd5yflk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220809-NigerianMeatpies-MaureenCelestine-hedenote-939cb7af957a40a9b8af6f6dfe323ff1.JPG",
    tag: 'M'
  },
  {
    name: "Stewed Gizzard",
    price: '₦3,500',
    desc: "Spicy, tender chicken gizzards sautéed with peppers, onions, and Nigerian spices.",
    img: "https://eatwellabi.com/wp-content/uploads/2022/09/gizzard-8-720x480.jpg",
    tag: 'S'
  }
],

'Swallow (main)': [
  {
    name: "Pounded Yam with Egusi",
    price: "₦8,000",
    desc: "Smooth, stretchy pounded yam served with melon seed soup containing assorted meats and fish.",
    img: "https://i.ytimg.com/vi/Kl57yfVNIoE/maxresdefault.jpg",
    tag: 'M'
  },
  {
    name: "Jollof Rice",
    price: "₦7,000",
    desc: "Famous West African one-pot rice cooked in a rich tomato and pepper sauce with chicken.",
    img: "https://media.istockphoto.com/id/1404501005/photo/jollof-rice.jpg?s=612x612&w=0&k=20&c=jMHne7L_u5mE5yqB9Bmofsv5eIAfBZi82i0_EBA7gJM=",
    tag: 'C'
  },
  {
    name: "Eba with Okra Soup",
    price: "₦6,500",
    desc: "Garri (cassava flakes) prepared with hot water, served with slimy okra soup and fish.",
    img: "https://hfce.eu/app/uploads/2022/08/Eba-with-Okra-Soup.jpg",
    tag: 'V'
  },
  {
    name: "Amala with Ewedu",
    price: "₦7,500",
    desc: "Yam flour swallow with jute leaf soup, served with assorted meat and cow skin (ponmo).",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiDxP8nueXEb-1xTlS0cW5P0gUxwtF1_U6TpKnk546d8zPAZ-jq2LvPxiqR_dj0ImheQVtz9045m18-vhK7ZZOLVuJq3QLIDag28-DYM&s=10",
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
    img: "https://www.foodandwine.com/thmb/_ju2mYmL_AkuJyJMRABWX9UgX9I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Carribbean-Inspired-Fish-Stew-FT-RECIPE1122-9b13a2a2e3db4a94b793e44eae44bc08.jpg",
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
    img: "https://simshomekitchen.com/wp-content/uploads/2021/09/sweet-fried-plantains.jpg",
    tag: 'V'
  },
  {
    name: "Moi Moi",
    price: "₦2,500",
    desc: "Steamed bean pudding made from blended beans, peppers, and oil, often with eggs or fish.",
    img: "https://celebrationgeneration.com/wp-content/uploads/2018/02/Moi-Moi-7.jpg",
    tag: 'V'
  },
  {
    name: "Coleslaw",
    price: "₦2,000",
    desc: "Fresh cabbage and carrot salad with creamy mayonnaise dressing.",
    img: "https://i.ytimg.com/vi/z_URfRzb5ic/maxresdefault.jpg",
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
    price: "₦800",
    desc: "Traditional alcoholic beverage tapped from palm trees, naturally sweet and slightly effervescent.",
    img: "https://i.redd.it/xdqoe3r0g7321.jpg",
    tag: 'A'
  },
  {
    name: "Wine",
    price: "₦1,500",
    desc: "Refreshing hibiscus tea infused with ginger, pineapple, and spices.",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    tag: 'N'
  },
  {
    name: "Chapman",
    price: "₦3,500",
    desc: "Popular Nigerian cocktail with mixed fruits, Angostura bitters, and soda.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48qMnNm98Mh44uVs8Cfx-Pb5XPRQayFNLSw&s",
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

// Updated function to check screen size
function openOrderModal(item) {
    currentItem = item;
    
    // Check if we should use mobile modal instead
    if (shouldUseMobileModal()) {
        openMobileItemModal(item);
        return;
    }
    
    const modal = document.getElementById('orderModal');
    const details = document.getElementById('orderItemDetails');

    details.innerHTML = `
        <div class="space-y-6">
            <!-- Food Image for Desktop Modal -->
            <div class="w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-4">
                <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover">
            </div>
            
            <div class="bg-stone-50 p-4 rounded-2xl flex justify-between items-center">
                <span class="font-bold text-dark">${item.name}</span>
                <span class="text-primary font-bold">${item.price}</span>
            </div>
            <div>
                <p class="text-stone-600 text-base leading-relaxed mb-4">${item.desc}</p>
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

// Add resize listener to handle screen size changes
window.addEventListener('resize', function() {
    // If a modal is open and screen size changes, we might want to close and reopen
    // This is optional but improves user experience
    const orderModal = document.getElementById('orderModal');
    const mobileModal = document.getElementById('mobileItemModal');
    
    if (!orderModal.classList.contains('hidden') && shouldUseMobileModal()) {
        // If desktop modal is open but now on mobile, close it
        closeOrderModal();
    }
    
    if (!mobileModal.classList.contains('hidden') && !shouldUseMobileModal()) {
        // If mobile modal is open but now on desktop, close it
        closeMobileItemModal();
    }
});

window.addEventListener('load', () => {
    renderCategoryButtons();
    // Default to first category
    const firstCat = Object.keys(menu)[0];
    if (firstCat) filterCategory(firstCat);
});