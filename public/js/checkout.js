function loadCart() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const container = document.getElementById('cartItemsContainer');
            const emptyMsg = document.getElementById('emptyCartMsg');
            
            if (cart.length === 0) {
                container.classList.add('hidden');
                emptyMsg.classList.remove('hidden');
                updateTotals(0);
                return;
            }

            container.classList.remove('hidden');
            emptyMsg.classList.add('hidden');

            container.innerHTML = cart.map((item, index) => `
                <div class="flex items-center justify-between p-4 border-b last:border-b-0">
                    <div class="flex-1">
                        <h4 class="font-bold text-gray-800">${item.name}</h4>
                        <p class="text-amber-700 font-medium">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button onclick="changeQty(${index}, -1)" class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">-</button>
                        <span class="font-bold w-4 text-center">${item.quantity}</span>
                        <button onclick="changeQty(${index}, 1)" class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">+</button>
                        <button onclick="removeItem(${index})" class="ml-4 text-gray-400 hover:text-red-500">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            updateTotals(total);
        }

        function updateTotals(total) {
            const formatted = `$${total.toFixed(2)}`;
            document.getElementById('summarySubtotal').textContent = formatted;
            document.getElementById('summaryTotal').textContent = formatted;
        }

        function changeQty(index, delta) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            cart[index].quantity += delta;
            
            if (cart[index].quantity < 1) {
                removeItem(index);
            } else {
                localStorage.setItem('cart', JSON.stringify(cart));
                loadCart();
            }
        }

        function removeItem(index) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }

        function processOrder() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) return alert("Your cart is empty!");
            
            const payment = document.querySelector('input[name="payment"]:checked').value;
            
            // Simulate processing
            alert(`Order Successful!\nPayment Method: ${payment.toUpperCase()}\nThank you for dining with Savore.`);
            
            localStorage.removeItem('cart');
            window.location.href = 'index.html'; // Go back to home
        }

        window.onload = loadCart;