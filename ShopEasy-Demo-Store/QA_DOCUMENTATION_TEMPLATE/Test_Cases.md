# Test Cases

**Tester:** Sajan Ghimire
**Application:** ShopEasy Demo Store

---

## Registration & Login

### TC_REG_001 — Registration with mismatched passwords

| Field | Value |
|-------|-------|
| **Module** | User Registration |
| **Preconditions** | On register.html. No account exists with this email. |
| **Test Data** | Name: `Test User`, Email: `testuser@example.com`, Password: `1234567890`, Confirm: `0987654321` |

**Steps:**
1. Go to register.html
2. Enter "Test User" in Full Name
3. Enter "testuser@example.com" in Email
4. Enter "1234567890" in Password
5. Enter "0987654321" in Confirm Password
6. Click "Create Account"

| | |
|---|---|
| **Expected** | Error "Passwords do not match". Registration blocked. |
| **Actual** | Success "Registration successful! You can now log in." Redirected to login.html. |
| **Status** | **Fail** |

---

### TC_LOG_001 — Login with saved password

| Field | Value |
|-------|-------|
| **Module** | User Login |
| **Preconditions** | Account exists with email `testuser@example.com`, password `1234567890` |
| **Test Data** | Email: `testuser@example.com`, Password: `1234567890` |

**Steps:**
1. Go to login.html
2. Enter "testuser@example.com"
3. Enter "1234567890"
4. Click "Login"

| | |
|---|---|
| **Expected** | Success "Login successful!". Redirect to products.html. |
| **Actual** | Login successful. Redirected to products page. |
| **Status** | **Pass** |

---

### TC_LOG_002 — Login with wrong password

| Field | Value |
|-------|-------|
| **Module** | User Login |
| **Preconditions** | Account exists with email `testuser@example.com`, password `1234567890` |
| **Test Data** | Email: `testuser@example.com`, Password: `0987654321` |

**Steps:**
1. Go to login.html
2. Enter "testuser@example.com"
3. Enter "0987654321"
4. Click "Login"

| | |
|---|---|
| **Expected** | Error "Invalid password." User stays on login page. |
| **Actual** | Error "Invalid username. Please check your credentials." Email was correct, only password was wrong. |
| **Status** | **Fail** |

---

## Product Listing

### TC_PROD_001 — All products display on page load

| Field | Value |
|-------|-------|
| **Module** | Product Listing |
| **Preconditions** | Navigate to products.html |
| **Test Data** | None |

**Steps:**
1. Go to products.html
2. Observe the product grid

| | |
|---|---|
| **Expected** | All 9 products visible with image, name, category, price, stock status. |
| **Actual** | 9 products displayed correctly. Prices formatted as $XX.XX. |
| **Status** | **Pass** |

---

### TC_PROD_002 — Search by product name

| Field | Value |
|-------|-------|
| **Module** | Product Search |
| **Preconditions** | On products.html |
| **Test Data** | Search: `Headphones` |

**Steps:**
1. Type "Headphones" in search box
2. Observe results update

| | |
|---|---|
| **Expected** | Only "Wireless Bluetooth Headphones" shown. |
| **Actual** | Correct. Single product displayed. |
| **Status** | **Pass** |

---

### TC_PROD_003 — Partial search

| Field | Value |
|-------|-------|
| **Module** | Product Search |
| **Preconditions** | On products.html |
| **Test Data** | Search: `phone` |

**Steps:**
1. Type "phone" in search box
2. Observe results

| | |
|---|---|
| **Expected** | "Wireless Bluetooth Headphones" should appear (contains "phone"). |
| **Actual** | Correct. Partial match works. |
| **Status** | **Pass** |

---

### TC_PROD_004 — Empty search shows all products

| Field | Value |
|-------|-------|
| **Module** | Product Search |
| **Preconditions** | On products.html. Some products may be filtered. |
| **Test Data** | Search: `` (empty) |

**Steps:**
1. First search for something (e.g., "Headphones") to filter
2. Clear the search box completely
3. Observe results

| | |
|---|---|
| **Expected** | All 9 products should reappear since filter is cleared. |
| **Actual** | Shows "No products found" when search field is empty. Bug in filter logic. |
| **Status** | **Fail** |

---

### TC_PROD_005 — Category filter

| Field | Value |
|-------|-------|
| **Module** | Product Filtering |
| **Preconditions** | On products.html |
| **Test Data** | Category: `Electronics` |

**Steps:**
1. Select "Electronics" from category dropdown
2. Observe results

| | |
|---|---|
| **Expected** | Only "Wireless Bluetooth Headphones" and "Bluetooth Speaker" shown. |
| **Actual** | Correct. 2 electronics products displayed. |
| **Status** | **Pass** |

---

### TC_PROD_006 — Price filter with min > max

| Field | Value |
|-------|-------|
| **Module** | Product Filtering |
| **Preconditions** | On products.html |
| **Test Data** | Min: `100`, Max: `10` |

**Steps:**
1. Enter 100 in Min Price
2. Enter 10 in Max Price
3. Observe results

| | |
|---|---|
| **Expected** | Warning message or auto-swap of values. No products can satisfy min > max. |
| **Actual** | Silently shows "No products found." No warning to user about invalid range. |
| **Status** | **Fail** |

---

## Product Details

### TC_DET_001 — Price formatting on details page

| Field | Value |
|-------|-------|
| **Module** | Product Details |
| **Preconditions** | On products.html |
| **Test Data** | Product: Headphones (id=1) |

**Steps:**
1. Note price on listing page: "$49.99"
2. Click the product to go to details page
3. Observe price format on details page

| | |
|---|---|
| **Expected** | Price should show as "$49.99" (consistent with listing page). |
| **Actual** | Price shows as "$49.99" — BUT check if it uses `.toFixed(2)`. On details page it's `$${product.price}` without `.toFixed(2)`. |
| **Status** | **Fail** |

---

### TC_DET_002 — View out of stock product

| Field | Value |
|-------|-------|
| **Module** | Product Details |
| **Preconditions** | On products.html |
| **Test Data** | Product: Running Shoes (id=9, stock=0) |

**Steps:**
1. Click on "Running Shoes"
2. Observe the details page

| | |
|---|---|
| **Expected** | "Out of Stock" message. Add to Cart button disabled. |
| **Actual** | Correct. Button shows "Out of Stock" and is disabled. |
| **Status** | **Pass** |

---

---

## Shopping Cart

### TC_CART_001 — Add single item to cart

| Field | Value |
|-------|-------|
| **Module** | Shopping Cart |
| **Preconditions** | On product-details.html for Headphones (id=1). Logged in. |
| **Test Data** | Quantity: `1` |

**Steps:**
1. Go to product-details.html?id=1
2. Set quantity to 1
3. Click "Add to Cart"

| | |
|---|---|
| **Expected** | Notification "added to cart". Cart badge shows "1". |
| **Actual** | Notification shown. Badge updates. |
| **Status** | **Pass** |

---

### TC_CART_002 — Cart badge shows unique items not total quantity

| Field | Value |
|-------|-------|
| **Module** | Shopping Cart |
| **Preconditions** | On product-details.html. Cart empty. |
| **Test Data** | Add same product 3 times |

**Steps:**
1. Go to product-details.html?id=1
2. Set quantity to 3
3. Click "Add to Cart"
4. Check cart badge in navigation

| | |
|---|---|
| **Expected** | Badge should show "3" (total quantity). |
| **Actual** | Badge shows "1" (unique item count, not total qty). Bug in `app.js:177-183`. |
| **Status** | **Fail** |

---

### TC_CART_003 — Add negative quantity

| Field | Value |
|-------|-------|
| **Module** | Shopping Cart |
| **Preconditions** | On product-details.html. |
| **Test Data** | Quantity: `-1` |

**Steps:**
1. Go to product-details.html for any product
2. Type "-1" in quantity field
3. Click "Add to Cart"

| | |
|---|---|
| **Expected** | Error "Invalid quantity". Item should not be added. |
| **Actual** | Item added with -1 quantity. Cart shows negative value. |
| **Status** | **Fail** |

---

### TC_CART_004 — Add quantity exceeding stock

| Field | Value |
|-------|-------|
| **Module** | Shopping Cart |
| **Preconditions** | On product-details.html. Headphones have stock=10. |
| **Test Data** | Quantity: `100` |

**Steps:**
1. Go to product-details.html?id=1 (stock=10)
2. Type "100" in quantity
3. Click "Add to Cart"

| | |
|---|---|
| **Expected** | Warning "Only 10 available". Should cap or reject. |
| **Actual** | 100 items added without any warning. No stock check. |
| **Status** | **Fail** |

---

### TC_CART_005 — Decrease quantity below 1

| Field | Value |
|-------|-------|
| **Module** | Shopping Cart |
| **Preconditions** | Cart has an item with qty=1. On cart.html. |
| **Test Data** | None |

**Steps:**
1. Go to cart.html
2. Click "-" button on an item with qty=1

| | |
|---|---|
| **Expected** | Item should be removed from cart, or quantity should stay at 1 minimum. |
| **Actual** | Quantity goes to 0 or -1. Item stays in cart with invalid quantity. |
| **Status** | **Fail** |

---

### TC_CART_006 — Remove item and check total update

| Field | Value |
|-------|-------|
| **Module** | Shopping Cart |
| **Preconditions** | Cart has 2+ items. On cart.html. |
| **Test Data** | None |

**Steps:**
1. Go to cart.html with multiple items
2. Note the subtotal and total
3. Click "Remove" on one item
4. Observe the cart summary values

| | |
|---|---|
| **Expected** | Subtotal and total should decrease by the removed item's value. |
| **Actual** | Item disappears from display but summary still shows old totals. Bug in `removeCartItem()`. |
| **Status** | **Fail** |

---

### TC_CART_007 — Empty cart display

| Field | Value |
|-------|-------|
| **Module** | Shopping Cart |
| **Preconditions** | Cart has items. On cart.html. |
| **Test Data** | None |

**Steps:**
1. Go to cart.html
2. Remove all items one by one

| | |
|---|---|
| **Expected** | Empty cart message "Your cart is empty" with link to shop. |
| **Actual** | Empty state displays correctly after all items removed. |
| **Status** | **Pass** |

---

## Checkout

### TC_CHK_001 — Checkout without login

| Field | Value |
|-------|-------|
| **Module** | Checkout |
| **Preconditions** | Not logged in. Cart has items. |
| **Test Data** | None |

**Steps:**
1. Logout if logged in
2. Navigate to checkout.html
3. Click "Place Order"

| | |
|---|---|
| **Expected** | Error "Please login before checking out." Redirect to login. |
| **Actual** | Correct. Redirected to login page. |
| **Status** | **Pass** |

---

### TC_CHK_002 — Checkout with empty cart

| Field | Value |
|-------|-------|
| **Module** | Checkout |
| **Preconditions** | Logged in. Cart is empty. |
| **Test Data** | None |

**Steps:**
1. Ensure cart is empty
2. Navigate to checkout.html
3. Click "Place Order"

| | |
|---|---|
| **Expected** | Error "Your cart is empty." |
| **Actual** | Correct. Error displayed. |
| **Status** | **Pass** |

---

### TC_CHK_003 — Submit with all fields empty

| Field | Value |
|-------|-------|
| **Module** | Checkout |
| **Preconditions** | Logged in. Cart has items. On checkout.html. |
| **Test Data** | All fields left empty |

**Steps:**
1. Go to checkout.html with items in cart
2. Leave all fields empty
3. Click "Place Order"

| | |
|---|---|
| **Expected** | Validation errors for required fields (name, address, card, etc.). |
| **Actual** | Order placed successfully. No field validation. Bug in `handleCheckout()`. |
| **Status** | **Fail** |

---

### TC_CHK_004 — Card number with letters

| Field | Value |
|-------|-------|
| **Module** | Checkout |
| **Preconditions** | Logged in. Cart has items. On checkout.html. |
| **Test Data** | Card: `ABCDEFGHIJKLMNOP` |

**Steps:**
1. Fill valid data in other fields
2. Enter "ABCDEFGHIJKLMNOP" as card number
3. Click "Place Order"

| | |
|---|---|
| **Expected** | Error "Card number must contain only digits." |
| **Actual** | Order placed. Card accepts letters. Only length (16) is checked, not character type. |
| **Status** | **Fail** |

---

### TC_CHK_005 — CVV with 1 digit

| Field | Value |
|-------|-------|
| **Module** | Checkout |
| **Preconditions** | Logged in. Cart has items. On checkout.html. |
| **Test Data** | CVV: `1` |

**Steps:**
1. Fill valid data in other fields
2. Enter "1" as CVV
3. Click "Place Order"

| | |
|---|---|
| **Expected** | Error "CVV must be 3 or 4 digits." |
| **Actual** | Order placed. CVV validation only checks `< 3`, so 1 passes. |
| **Status** | **Fail** |

---

### TC_CHK_006 — Successful order placement

| Field | Value |
|-------|-------|
| **Module** | Checkout |
| **Preconditions** | Logged in. Cart has items. On checkout.html. |
| **Test Data** | Name: John, Address: 123 Main St, City: NYC, ZIP: 10001, Card: 1234567890123456, Expiry: 12/26, CVV: 123 |

**Steps:**
1. Fill all fields with valid data
2. Click "Place Order"

| | |
|---|---|
| **Expected** | Success "Order placed successfully!" Redirect to orders.html. Cart empty. |
| **Actual** | Order placed. Redirected. Cart cleared. |
| **Status** | **Pass** |

---

### TC_CHK_007 — Order appears in history

| Field | Value |
|-------|-------|
| **Module** | Order History |
| **Preconditions** | Order just placed. On orders.html. |
| **Test Data** | None |

**Steps:**
1. After placing order, check orders.html
2. Verify order details (ID, date, items, total)

| | |
|---|---|
| **Expected** | Order displays with correct items, prices, and total. |
| **Actual** | Order appears. Check if it appears only once — potential duplicate from double saveOrders call. |
| **Status** | **Pass** (verify no duplicate) |

---

---

## Forgot Password

### TC_FP_001 — Forgot password with unregistered email

| Field | Value |
|-------|-------|
| **Module** | Forgot Password |
| **Preconditions** | On forgot-password.html |
| **Test Data** | Email: `nonexistent@test.com` |

**Steps:**
1. Go to forgot-password.html
2. Enter "nonexistent@test.com"
3. Click "Send Reset Link"

| | |
|---|---|
| **Expected** | Message "Email not found. Please check and try again." |
| **Actual** | "Password reset link sent to your email!" — even though email doesn't exist in system. |
| **Status** | **Fail** |

---

## Order History

### TC_ORD_001 — Order sorting (newest first)

| Field | Value |
|-------|-------|
| **Module** | Order History |
| **Preconditions** | 2+ orders placed. On orders.html. |
| **Test Data** | None |

**Steps:**
1. Place two orders (Order A, then Order B)
2. Go to orders.html
3. Observe order list order

| | |
|---|---|
| **Expected** | Order B (newest) should appear at top, then Order A below. |
| **Actual** | Orders appear in chronological order — oldest first. No reverse sorting. Bug in `displayOrders()`. |
| **Status** | **Fail** |

---

## User Profile

### TC_PROF_001 — Profile shows "undefined" for missing phone

| Field | Value |
|-------|-------|
| **Module** | User Profile |
| **Preconditions** | Registered user without setting phone number. Logged in. |
| **Test Data** | None |

**Steps:**
1. Register a new user (don't set phone)
2. Login
3. Go to profile.html

| | |
|---|---|
| **Expected** | Phone: "Not set" should display. |
| **Actual** | Profile shows phone field correctly as "Not set" (code has `|| 'Not set'` check). Edge case. |
| **Status** | **Pass** |

---

### TC_PROF_002 — Phone number accepts any characters

| Field | Value |
|-------|-------|
| **Module** | User Profile |
| **Preconditions** | Logged in. On profile.html. |
| **Test Data** | Phone: `abc!@#` |

**Steps:**
1. Go to profile.html
2. Enter "abc!@#" in Phone field
3. Click "Update Profile"

| | |
|---|---|
| **Expected** | Error "Phone number must contain only digits." |
| **Actual** | Phone saved successfully with letters and special characters. No validation. |
| **Status** | **Fail** |

---

### TC_DET_003 — Invalid product ID

| Field | Value |
|-------|-------|
| **Module** | Product Details |
| **Preconditions** | None |
| **Test Data** | URL: `product-details.html?id=999` |

**Steps:**
1. Navigate directly to product-details.html?id=999

| | |
|---|---|
| **Expected** | "Product not found" message with link back to products. |
| **Actual** | Correct. Error page shown. |
| **Status** | **Pass** |
