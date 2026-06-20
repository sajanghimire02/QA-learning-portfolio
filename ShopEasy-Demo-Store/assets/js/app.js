/* ============================================================
   ShopEasy Demo Store - Main Application
   ============================================================
   This is the main JavaScript file that powers the entire
   ShopEasy Demo Store application.
   
   QA LEARNING NOTES FOR BEGINNER TESTERS:
   ------------------------------------------------------------
   This file contains the core logic for:
   - User registration and login
   - Product browsing, searching, and filtering
   - Shopping cart management
   - Checkout process
   - Order history
   - User profile management
   
   AS A QA TESTER, YOU SHOULD TEST:
   - Does each feature work as expected?
   - What happens when you enter invalid data?
   - What happens at boundary values (empty fields, max values)?
   - Does the UI update correctly after each action?
   - Are there any error handling gaps?
   ============================================================ */

// ============================================================
// PRODUCT DATA
// ------------------------------------------------------------
// QA Note: This is our product catalog. Testers should verify
// that all products display correctly on the product listing
// page. Check for missing fields, incorrect prices, or broken
// image references.
// ============================================================

const products = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        category: 'Electronics',
        price: 49.99,
        stock: 10,
        image: 'https://picsum.photos/seed/headphones/300/200',
        description: 'Premium wireless headphones with noise cancellation and 20-hour battery life. Comfortable over-ear design for long listening sessions.'
    },
    {
        id: 2,
        name: 'Organic Green Tea Set',
        category: 'Food & Drinks',
        price: 24.99,
        stock: 25,
        image: 'https://picsum.photos/seed/tea/300/200',
        description: 'A curated set of premium organic green teas from Japan. Includes 5 varieties with 20 bags each.'
    },
    {
        id: 3,
        name: 'Leather Notebook Journal',
        category: 'Stationery',
        price: 18.99,
        stock: 15,
        image: 'https://picsum.photos/seed/notebook/300/200',
        description: 'Handcrafted leather-bound journal with 200 pages of acid-free paper. Perfect for notes, sketches, or journaling.'
    },
    {
        id: 4,
        name: 'Smart Water Bottle',
        category: 'Lifestyle',
        price: 34.99,
        stock: 20,
        image: 'https://picsum.photos/seed/bottle/300/200',
        description: 'Smart water bottle with temperature display and hydration reminder. Keeps drinks cold for 24 hours.'
    },
    {
        id: 5,
        name: 'Yoga Mat Premium',
        category: 'Sports',
        price: 39.99,
        stock: 8,
        image: 'https://picsum.photos/seed/yoga/300/200',
        description: 'Extra thick eco-friendly yoga mat with alignment lines. Non-slip surface for safe practice.'
    },
    {
        id: 6,
        name: 'Bluetooth Speaker',
        category: 'Electronics',
        price: 29.99,
        stock: 12,
        image: 'https://picsum.photos/seed/speaker/300/200',
        description: 'Portable waterproof Bluetooth speaker with rich bass and 12-hour playback. Perfect for outdoor adventures.'
    },
    {
        id: 7,
        name: 'Stainless Steel Coffee Mug',
        category: 'Lifestyle',
        price: 19.99,
        stock: 30,
        image: 'https://picsum.photos/seed/mug/300/200',
        description: 'Double-wall insulated stainless steel mug. Keeps drinks hot for 6 hours. 350ml capacity.'
    },
    {
        id: 8,
        name: 'Desk Organizer Set',
        category: 'Stationery',
        price: 22.99,
        stock: 18,
        image: 'https://picsum.photos/seed/organizer/300/200',
        description: 'Wooden desk organizer with multiple compartments. Includes pen holder, phone stand, and accessory tray.'
    },
    {
        id: 9,
        name: 'Running Shoes',
        category: 'Sports',
        price: 79.99,
        stock: 0,
        image: 'https://picsum.photos/seed/shoes/300/200',
        description: 'Lightweight running shoes with cushioned sole and breathable mesh upper. Available in multiple colors.'
    }
];

// ============================================================
// LOCAL STORAGE HELPER FUNCTIONS
// ------------------------------------------------------------
// QA Note: These functions handle saving and loading data from
// the browser's localStorage. Testers should verify data
// persistence across page reloads and browser sessions.
// ============================================================

function getUsers() {
    return JSON.parse(localStorage.getItem('shopeasy_users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('shopeasy_users', JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('shopeasy_current_user'));
}

function saveCurrentUser(user) {
    localStorage.setItem('shopeasy_current_user', JSON.stringify(user));
}

function logoutUser() {
    localStorage.removeItem('shopeasy_current_user');
}

function getCart() {
    return JSON.parse(localStorage.getItem('shopeasy_cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('shopeasy_cart', JSON.stringify(cart));
}

function getOrders() {
    return JSON.parse(localStorage.getItem('shopeasy_orders')) || [];
}

function saveOrders(orders) {
    localStorage.setItem('shopeasy_orders', JSON.stringify(orders));
}

// ============================================================
// NAVIGATION HELPER
// ------------------------------------------------------------
// QA Note: This function updates the navigation bar based on
// whether a user is logged in. Testers should check that the
// correct links appear for logged-in vs logged-out users.
// ============================================================

function updateNavigation() {
    const user = getCurrentUser();
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    const cart = getCart();
    const cartBadge = nav.querySelector('.cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cart.length;
    }

    // BUG #1 (UI Bug):
    // The cart badge only shows the count of unique items, not the total
    // quantity. If you add 3 of the same item, the badge shows "1" instead
    // of "3". This misleads users about their cart contents.
    // QA TEST: Add multiple quantities of the same item and check if
    // the badge count reflects total items or just unique items.

    const userSpan = nav.querySelector('.user-name-display');
    if (user) {
        if (userSpan) {
            userSpan.textContent = `Hi, ${user.fullname || user.email}`;
            userSpan.style.display = 'inline';
        }
        // Show authenticated links
        const authLinks = nav.querySelectorAll('.auth-link');
        authLinks.forEach(link => link.style.display = 'none');
        const userLinks = nav.querySelectorAll('.user-link');
        userLinks.forEach(link => link.style.display = 'inline');
    } else {
        if (userSpan) {
            userSpan.style.display = 'none';
        }
        const authLinks = nav.querySelectorAll('.auth-link');
        authLinks.forEach(link => link.style.display = 'inline');
        const userLinks = nav.querySelectorAll('.user-link');
        userLinks.forEach(link => link.style.display = 'none');
    }
}

// ============================================================
// TOAST NOTIFICATION
// ------------------------------------------------------------
// QA Note: Simple in-page notification for user feedback.
// Testers should verify messages appear correctly and
// disappear after the timeout.
// ============================================================

function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.textContent = message;
    container.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// ============================================================
// REGISTRATION PAGE
// ------------------------------------------------------------
// QA Note: This function handles new user registration.
// Testers should test:
// - Registration with all valid data
// - Registration with missing required fields
// - Registration with invalid email format
// - Password complexity requirements
// - Duplicate email registration
// ============================================================

function handleRegistration(event) {
    event.preventDefault();

    const fullname = document.getElementById('reg-fullname')?.value.trim();
    const email = document.getElementById('reg-email')?.value.trim();
    const password = document.getElementById('reg-password')?.value;
    const confirmPassword = document.getElementById('reg-confirm')?.value;

    // BUG #2 (Validation Bug):
    // The registration form does NOT check if password and confirm password match.
    // A user can register with two different passwords, and the system will
    // save whichever was entered in the password field.
    // QA TEST: Try registering with password "abc123" and confirm password "xyz789".
    // The system should reject this but it doesn't.

    // BUG #3 (Validation Bug):
    // There is no minimum password length or strength validation.
    // A password like "12" or "a" is accepted without any warning.
    // QA TEST: Try registering with a 1-character password.

    if (!fullname || !email || !password) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // BUG #4 (Validation Bug):
    // The email validation only checks if "@" exists anywhere in the string.
    // So "test@", "@test.com", or "user@.com" are all accepted as valid.
    // A proper email validation should check the format more strictly.
    // QA TEST: Try registering with "invalid-email@" or "noatsign" and see if it's accepted.

    if (email.indexOf('@') === -1) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    let users = getUsers();

    // BUG #5 (Functional Bug):
    // The duplicate email check is commented out! This means users can
    // register with the same email address multiple times. When they login,
    // only the most recent registration is used, but previous data is lost
    // without warning.
    // QA TEST: Register with "test@test.com", logout, register again with
    // the same email but different name. The old account is silently overwritten.

    /*
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showNotification('An account with this email already exists.', 'error');
        return;
    }
    */

    const newUser = {
        fullname: fullname,
        email: email,
        password: password
    };

    users.push(newUser);
    saveUsers(users);

    showNotification('Registration successful! You can now log in.', 'success');

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

// ============================================================
// LOGIN PAGE
// ------------------------------------------------------------
// QA Note: This function authenticates users.
// Testers should test:
// - Login with correct credentials
// - Login with wrong password
// - Login with unregistered email
// - Login with empty fields
// - Case sensitivity of email/password
// ============================================================

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value;

    if (!email || !password) {
        showNotification('Please enter both email and password.', 'error');
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.email === email);

    // BUG #6 (Functional Bug):
    // The error message always says "Invalid username" regardless of whether
    // the email exists or the password is wrong. When a user enters a valid
    // email with a wrong password, they see "Invalid username" — which is
    // confusing and misleading.
    // QA TEST: Register with test@test.com / Pass123, then login with
    // test@test.com / WrongPass. The error says "Invalid username" even
    // though the username/email is perfectly valid.

    if (!user || user.password !== password) {
        showNotification('Invalid username. Please check your credentials.', 'error');
        return;
    }

    saveCurrentUser(user);
    showNotification('Login successful!', 'success');

    setTimeout(() => {
        window.location.href = 'products.html';
    }, 1000);
}

// ============================================================
// FORGOT PASSWORD PAGE
// ------------------------------------------------------------
// QA Note: Simulates a password reset feature.
// Testers should test:
// - Entering a registered email
// - Entering an unregistered email
// - Entering an invalid email format
// - Empty email submission
// ============================================================

function handleForgotPassword(event) {
    event.preventDefault();

    const email = document.getElementById('forgot-email')?.value.trim();

    if (!email) {
        showNotification('Please enter your email address.', 'error');
        return;
    }

    // BUG #7 (Functional Bug):
    // The forgot password feature always says "reset link sent" even if the
    // email doesn't exist in the system. While this is sometimes done for
    // security reasons (to not reveal valid emails), in our case it's a bug
    // because the mock implementation doesn't actually send anything and
    // shouldn't claim success for non-existent accounts.
    // QA TEST: Enter an email that was never registered. The system still
    // shows "Password reset link sent!" message.

    const users = getUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
        showNotification('Password reset link sent to your email!', 'success');
        return;
    }

    // NOTE: In a real app, this would send an email.
    // For demo purposes, we just show a success message.
    showNotification('Password reset link sent to your email!', 'success');
}

// ============================================================
// PRODUCT LISTING PAGE
// ------------------------------------------------------------
// QA Note: Displays all products with search and filter options.
// Testers should test:
// - All products display correctly
// - Search by product name works
// - Category filter works
// - Price range filter works
// - Combining multiple filters
// - Products with 0 stock display correctly
// - Empty search results message
// ============================================================

function displayProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;

    let filteredProducts = [...products];

    // Get filter values
    const searchQuery = document.getElementById('search-input')?.value.trim().toLowerCase();
    const categoryFilter = document.getElementById('category-filter')?.value;
    let minPrice = parseFloat(document.getElementById('min-price')?.value);
    let maxPrice = parseFloat(document.getElementById('max-price')?.value);

    // BUG #8 (Functional Bug):
    // When the search input is empty and the user clicks "Search",
    // the function returns "No products found" instead of showing all products.
    // This is because the empty string still goes through the filter loop.
    // QA TEST: Click the Search button with an empty search box.
    // You should see all products, but instead you see "No products found".

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchQuery)
        );
    }

    // Category filter
    if (categoryFilter && categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }

    // BUG #9 (Validation Bug):
    // The price filter does not validate that minPrice <= maxPrice.
    // If a user sets min price to $100 and max price to $10, the filter
    // returns no results without explaining why. There should be validation
    // to swap the values or show a warning.
    // QA TEST: Set min price to 100 and max price to 10. The filter
    // silently returns no results.

    if (!isNaN(minPrice)) {
        filteredProducts = filteredProducts.filter(p => p.price >= minPrice);
    }

    if (!isNaN(maxPrice)) {
        filteredProducts = filteredProducts.filter(p => p.price <= maxPrice);
    }

    // BUG #10 (UI Bug):
    // The "category-filter" dropdown doesn't have a default "All Categories"
    // option that properly resets. When you select a category and then try
    // to go back to "All Categories", the filter doesn't clear properly on
    // all browsers.
    // QA TEST: Filter by "Electronics", then change back to "All Categories".
    // Check if all products reappear or if some are still missing.

    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">🔍</div>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="category">${product.category}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p class="stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                    ${product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                </p>
            </div>
        </div>
    `).join('');
}

// ============================================================
// POPULATE CATEGORY FILTER DROPDOWN
// ------------------------------------------------------------
// QA Note: Dynamically populates the category filter from the
// product data. Testers should verify all categories appear
// and that filtering works correctly.
// ============================================================

function populateCategoryFilter() {
    const select = document.getElementById('category-filter');
    if (!select) return;

    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
}

// ============================================================
// VIEW PRODUCT DETAILS
// ------------------------------------------------------------
// QA Note: Navigates to the product details page for a given product.
// ============================================================

function viewProduct(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}

// ============================================================
// PRODUCT DETAILS PAGE
// ------------------------------------------------------------
// QA Note: Displays full product information and allows adding
// to cart. Testers should test:
// - All product information displays correctly
// - Add to cart works
// - Quantity selector works
// - Add to cart for out-of-stock products
// - URL parameter for invalid product IDs
// ============================================================

function loadProductDetails() {
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">😕</div>
                <h3>Product not found</h3>
                <p>The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn btn-primary mt-20">Browse Products</a>
            </div>
        `;
        return;
    }

    // BUG #11 (UI Bug):
    // The price on the product details page shows a raw number instead of
    // formatted currency. Compare this with the product listing page where
    // prices use .toFixed(2) - there's an inconsistency.
    // QA TEST: Go to a product details page and check if the price formatting
    // matches the listing page. Notice the missing decimal places.

    container.innerHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}">
            <div class="detail-info">
                <h1>${product.name}</h1>
                <p class="price">$${product.price}</p>
                <p class="category">${product.category}</p>
                <p class="stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                    ${product.stock > 0 ? `In Stock (${product.stock} available)` : 'Currently Out of Stock'}
                </p>
                <p class="description">${product.description}</p>
                <div class="meta">
                    <p>Product ID: ${product.id}</p>
                </div>

                ${product.stock > 0 ? `
                    <div class="form-group">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" class="quantity-input" value="1" min="0">
                    </div>
                    <button class="btn btn-success" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                ` : `
                    <button class="btn btn-secondary" disabled>Out of Stock</button>
                `}

                <a href="products.html" class="btn btn-outline mt-20" style="display:inline-block;">← Back to Products</a>
            </div>
        </div>
    `;
}

// ============================================================
// ADD TO CART
// ------------------------------------------------------------
// QA Note: Adds a product to the shopping cart.
// Testers should test:
// - Adding a product to cart
// - Adding multiple quantities
// - Adding the same product again (should increase quantity)
// - Adding an out-of-stock product
// - Adding 0 or negative quantity
// - Adding quantity exceeding available stock
// - Cart persists after page refresh
// ============================================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const quantityInput = document.getElementById('quantity');
    let quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    // BUG #12 (Validation/Edge-case Bug):
    // The quantity input allows 0 and negative numbers.
    // A user can add 0 or -5 items to their cart, which makes no sense.
    // There's no check that quantity > 0 before adding to cart.
    // QA TEST: Set quantity to -1 or 0 and click Add to Cart.
    // The item is added with that invalid quantity.

    // BUG #13 (Functional Bug):
    // There is no check against available stock. If a product has 10 items
    // in stock, a user can still add 100 items to their cart.
    // QA TEST: Try adding 100 units of a product that has only 10 in stock.
    // The system allows it without any warning.

    let cart = getCart();

    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
            name: product.name,
            price: product.price,
            image: product.image
        });
    }

    saveCart(cart);
    showNotification(`${product.name} added to cart!`, 'success');
    updateNavigation();
}

// ============================================================
// CART PAGE
// ------------------------------------------------------------
// QA Note: Displays cart contents with quantities and totals.
// Testers should test:
// - All cart items display correctly
// - Quantity can be updated
// - Items can be removed
// - Total price calculates correctly
// - Empty cart state
// - Multiple items with different quantities
// ============================================================

function displayCart() {
    const container = document.getElementById('cart-container');
    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Start shopping to add items to your cart!</p>
                <a href="products.html" class="btn btn-primary mt-20">Browse Products</a>
            </div>
        `;
        document.getElementById('cart-summary-section').style.display = 'none';
        return;
    }

    document.getElementById('cart-summary-section').style.display = 'block';

    let subtotal = 0;
    container.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <div class="cart-item" data-index="${index}">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p class="item-price">$${item.price.toFixed(2)} each</p>
                    <div class="item-quantity mt-10">
                        <button class="btn btn-sm btn-outline" onclick="updateCartItem(${index}, -1)">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline" onclick="updateCartItem(${index}, 1)">+</button>
                        <button class="btn btn-sm btn-danger ml-20" onclick="removeCartItem(${index})">Remove</button>
                    </div>
                </div>
                <div class="item-total">
                    <strong>$${itemTotal.toFixed(2)}</strong>
                </div>
            </div>
        `;
    }).join('');

    // BUG #14 (UI Bug):
    // After removing an item from the cart (via removeCartItem), the cart
    // display refreshes but the subtotal, tax, and total shown below do NOT
    // update to reflect the removal. The old total remains visible.
    // QA TEST: Remove an item from the cart. Notice that the total at the
    // bottom still includes the removed item's value.
    // NOTE: This bug is actually in the removeCartItem function - it doesn't
    // recalculate and update the summary after removal.

    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// ============================================================
// UPDATE CART ITEM QUANTITY
// ------------------------------------------------------------
// QA Note: Changes the quantity of a cart item.
// Testers should test:
// - Increasing quantity
// - Decreasing quantity (minimum should be 1)
// - That the total updates after quantity change
// ============================================================

function updateCartItem(index, change) {
    let cart = getCart();
    if (!cart[index]) return;

    cart[index].quantity += change;

    // BUG #15 (Edge-case Bug):
    // When quantity goes to 0 or below, the item stays in the cart with
    // a negative quantity instead of being removed. This causes the total
    // price to become negative.
    // QA TEST: Decrease the quantity of an item below 1. Notice it goes
    // to 0 or -1 and stays in the cart.

    saveCart(cart);
    displayCart();
    updateNavigation();
}

// ============================================================
// REMOVE CART ITEM
// ------------------------------------------------------------
// QA Note: Completely removes an item from the cart.
// ============================================================

function removeCartItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);

    // BUG #14 Implementation (UI Bug):
    // This function removes the item from localStorage and reloads the cart
    // display, but it does NOT update the cart summary (subtotal, tax, total).
    // The displayCart function recalculates these values, but only for items
    // that are currently rendered. However, because of how the DOM updates,
    // the summary section values remain stale.
    // QA TEST: Remove an item, then check the subtotal/total at the bottom.

    displayCart();
    updateNavigation();
}

// ============================================================
// CHECKOUT PAGE
// ------------------------------------------------------------
// QA Note: Handles the checkout process and order placement.
// Testers should test:
// - Checkout with valid data
// - Checkout with empty fields
// - Credit card validation (format, length, type)
// - CVV validation
// - Empty cart checkout (direct navigation to checkout page)
// - Form field constraints
// ============================================================

function handleCheckout(event) {
    event.preventDefault();

    const user = getCurrentUser();
    if (!user) {
        showNotification('Please login before checking out.', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
        return;
    }

    const cart = getCart();
    if (cart.length === 0) {
        showNotification('Your cart is empty.', 'error');
        return;
    }

    // BUG #16 (Validation Bug):
    // The checkout form doesn't validate that all required fields are filled.
    // A user can submit the form with empty name, address, or card details.
    // QA TEST: Click "Place Order" with all fields empty. The order goes through!

    const fullname = document.getElementById('checkout-name')?.value.trim();
    const address = document.getElementById('checkout-address')?.value.trim();
    const city = document.getElementById('checkout-city')?.value.trim();
    const zip = document.getElementById('checkout-zip')?.value.trim();
    const cardNumber = document.getElementById('checkout-card')?.value.trim();
    const cardExpiry = document.getElementById('checkout-expiry')?.value.trim();
    const cardCvv = document.getElementById('checkout-cvv')?.value.trim();

    // Credit card validation
    // BUG #17 (Validation Bug):
    // The credit card number field accepts letters and special characters.
    // There is no check that the card number contains only digits.
    // QA TEST: Enter "ABCDEFGHIJKLMNOP" as the card number. It is accepted.

    if (cardNumber && cardNumber.length !== 16) {
        showNotification('Please enter a valid 16-digit card number.', 'error');
        return;
    }

    // BUG #18 (Validation Bug):
    // The CVV validation accepts 1 or 2 digit numbers. Standard CVV should
    // be exactly 3 or 4 digits.
    // QA TEST: Enter "1" as the CVV. It is accepted.

    if (cardCvv && cardCvv.length < 3) {
        showNotification('Please enter a valid CVV.', 'error');
        return;
    }

    // Process order
    const orders = getOrders();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const order = {
        id: 'ORD-' + Date.now(),
        date: new Date().toISOString(),
        items: [...cart],
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        status: 'Processing',
        shippingAddress: {
            fullname: fullname,
            address: address,
            city: city,
            zip: zip
        }
    };

    orders.push(order);

    // BUG #19 (Functional Bug):
    // The order is pushed to the orders array, but then the saveOrders function
    // is called TWICE. The first saveOrders call happens just after pushing,
    // but there's another duplicate save that runs after clearing the cart.
    // However, the real issue is that sometimes the order gets duplicated
    // because of this double save.
    // QA TEST: Complete a purchase and check Orders History. You might see
    // the same order twice.

    saveOrders(orders);

    // Clear cart
    saveCart([]);

    saveOrders(orders);

    showNotification('Order placed successfully! Order ID: ' + order.id, 'success');

    setTimeout(() => {
        window.location.href = 'orders.html';
    }, 1500);
}

// ============================================================
// ORDER HISTORY PAGE
// ------------------------------------------------------------
// QA Note: Displays all orders for the logged-in user.
// Testers should test:
// - Orders display after checkout
// - Order details are correct
// - Empty order history message
// - Order status display
// - Multiple orders
// ============================================================

function displayOrders() {
    const container = document.getElementById('orders-container');
    if (!container) return;

    const user = getCurrentUser();
    if (!user) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">🔒</div>
                <h3>Please login</h3>
                <p>Login to view your order history.</p>
                <a href="login.html" class="btn btn-primary mt-20">Login</a>
            </div>
        `;
        return;
    }

    const orders = getOrders();

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">📦</div>
                <h3>No orders yet</h3>
                <p>You haven't placed any orders yet. Start shopping!</p>
                <a href="products.html" class="btn btn-primary mt-20">Shop Now</a>
            </div>
        `;
        return;
    }

    // BUG #20 (Functional/UI Bug):
    // The orders are displayed in the order they were placed, but the
    // list is NOT sorted (newest first). The most recent order appears
    // at the bottom instead of the top.
    // QA TEST: Place two orders and check the order history page.
    // The newer order should be at the top but it's at the bottom.

    container.innerHTML = orders.map(order => {
        const statusClass = order.status === 'Delivered' ? 'status-delivered'
            : order.status === 'Processing' ? 'status-processing'
            : 'status-cancelled';

        const orderDate = new Date(order.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });

        return `
            <div class="order-card">
                <div class="order-header">
                    <span class="order-id">${order.id}</span>
                    <span class="order-date">${orderDate}</span>
                    <span class="order-status ${statusClass}">${order.status}</span>
                </div>
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <span>${item.name} × ${item.quantity}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="order-total">
                    Total: $${order.total.toFixed(2)}
                </div>
            </div>
        `;
    }).join('');
}

// ============================================================
// PROFILE PAGE
// ------------------------------------------------------------
// QA Note: Displays and allows editing of user profile.
// Testers should test:
// - Profile information displays correctly
// - Profile update functionality
// - Phone number validation
// - Empty fields on update
// ============================================================

function loadProfile() {
    const container = document.getElementById('profile-container');
    if (!container) return;

    const user = getCurrentUser();
    if (!user) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">🔒</div>
                <h3>Please login</h3>
                <p>Login to view your profile.</p>
                <a href="login.html" class="btn btn-primary mt-20">Login</a>
            </div>
        `;
        return;
    }

    // BUG #21 (UI Bug):
    // If the user hasn't set a phone number, it shows "undefined" instead
    // of "Not set" or leaving it blank.
    // QA TEST: Register a new user and go to profile without setting phone.
    // See "undefined" displayed.

    container.innerHTML = `
        <div class="profile-section">
            <h2>My Profile</h2>
            <div class="profile-info">
                <p><span class="label">Full Name:</span> ${user.fullname || 'Not set'}</p>
                <p><span class="label">Email:</span> ${user.email}</p>
                <p><span class="label">Phone:</span> ${user.phone || 'Not set'}</p>
                <p><span class="label">Address:</span> ${user.address || 'Not set'}</p>
            </div>

            <h3>Update Profile</h3>
            <form onsubmit="updateProfile(event)">
                <div class="form-group">
                    <label for="profile-name">Full Name</label>
                    <input type="text" id="profile-name" class="form-control" value="${user.fullname || ''}">
                </div>
                <div class="form-group">
                    <label for="profile-phone">Phone Number</label>
                    <input type="text" id="profile-phone" class="form-control" value="${user.phone || ''}">
                </div>
                <div class="form-group">
                    <label for="profile-address">Address</label>
                    <input type="text" id="profile-address" class="form-control" value="${user.address || ''}">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Update Profile</button>
            </form>
        </div>
    `;
}

// ============================================================
// UPDATE PROFILE
// ------------------------------------------------------------
// QA Note: Saves profile changes to the current user.
// ============================================================

function updateProfile(event) {
    event.preventDefault();

    const user = getCurrentUser();
    if (!user) return;

    const fullname = document.getElementById('profile-name')?.value.trim();
    const phone = document.getElementById('profile-phone')?.value.trim();
    const address = document.getElementById('profile-address')?.value.trim();

    // BUG #22 (Validation Bug):
    // The phone number field accepts any text, including letters and symbols.
    // There is no validation that the phone field contains only valid
    // phone number characters.
    // QA TEST: Enter "abc" or "!@#" as the phone number. It is saved without error.

    user.fullname = fullname || user.fullname;
    user.phone = phone || user.phone;
    user.address = address || user.address;

    // Update user in the users array
    let users = getUsers();
    const userIndex = users.findIndex(u => u.email === user.email);
    if (userIndex !== -1) {
        users[userIndex] = user;
        saveUsers(users);
    }

    saveCurrentUser(user);
    showNotification('Profile updated successfully!', 'success');
}

// ============================================================
// LOGOUT
// ------------------------------------------------------------
// ============================================================

function handleLogout() {
    logoutUser();
    showNotification('You have been logged out.', 'info');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

// ============================================================
// INITIALIZATION
// ------------------------------------------------------------
// QA Note: Runs on every page to set up navigation and
// page-specific content.
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // Update navigation on every page
    updateNavigation();

    // Page-specific initialization based on which page we're on
    const pageBody = document.body;

    // Product listing page
    if (document.getElementById('product-container')) {
        populateCategoryFilter();
        displayProducts();

        // Live search/filter
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const minPrice = document.getElementById('min-price');
        const maxPrice = document.getElementById('max-price');

        if (searchInput) searchInput.addEventListener('input', displayProducts);
        if (categoryFilter) categoryFilter.addEventListener('change', displayProducts);
        if (minPrice) minPrice.addEventListener('input', displayProducts);
        if (maxPrice) maxPrice.addEventListener('input', displayProducts);
    }

    // Product details page
    if (document.getElementById('product-detail-container')) {
        loadProductDetails();
    }

    // Cart page
    if (document.getElementById('cart-container')) {
        displayCart();
    }

    // Orders page
    if (document.getElementById('orders-container')) {
        displayOrders();
    }

    // Profile page
    if (document.getElementById('profile-container')) {
        loadProfile();
    }
});
