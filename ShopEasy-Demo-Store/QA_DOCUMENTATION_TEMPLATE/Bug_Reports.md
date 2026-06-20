# Bug Reports

**Tester:** Sajan Ghimire
**Environment:** Chrome, Windows 11

---

### BUG-001: Registration accepts mismatched passwords

**Module:** User Registration | **Severity:** Major | **Priority:** High

**Steps:**
1. Go to register.html
2. Enter name, email
3. Password: `1234567890`
4. Confirm: `0987654321`
5. Click "Create Account"

**Actual:** Account created. Redirected to login. No error.
**Expected:** Error "Passwords do not match". Registration blocked.
**Root Cause:** `app.js:249-301` — `confirmPassword` is read but never compared to `password`.

**Status:** New

---

### BUG-002: Login error says "Invalid username" when password is wrong

**Module:** User Login | **Severity:** Minor | **Priority:** Medium

**Steps:**
1. Go to login.html
2. Enter valid registered email
3. Enter wrong password
4. Click "Login"

**Actual:** "Invalid username. Please check your credentials."
**Expected:** "Invalid password" or generic "Invalid email or password"
**Root Cause:** `app.js:349-350` — both "user not found" and "wrong password" share one error message.

**Status:** New

---

### BUG-003: Empty search shows "No products found"

**Module:** Product Search | **Severity:** Major | **Priority:** High

**Steps:**
1. Go to products.html
2. Search for something (e.g., "Headphones")
3. Clear search box
4. Observe results

**Actual:** Shows "No products found."
**Expected:** All 9 products should reappear when search is empty.
**Root Cause:** `app.js:431-437` — empty string passes through filter loop.

**Status:** New

---

### BUG-004: Price filter min > max gives no warning

**Module:** Product Filtering | **Severity:** Minor | **Priority:** Low

**Steps:**
1. Go to products.html
2. Set Min Price: `100`
3. Set Max Price: `10`
4. Observe

**Actual:** "No products found" shown silently.
**Expected:** Warning that min cannot exceed max, or values should auto-swap.
**Root Cause:** `app.js:449-455` — no validation that minPrice <= maxPrice.

**Status:** New

---

### BUG-005: Price format inconsistent on details page

**Module:** Product Details | **Severity:** Minor | **Priority:** Low

**Steps:**
1. Go to products.html — note price "$49.99"
2. Click any product
3. Observe price on details page

**Actual:** Listing page uses `.toFixed(2)`. Details page uses raw `$${product.price}`.
**Expected:** Consistent formatting using `.toFixed(2)` on both pages.
**Root Cause:** `app.js:574` — uses `$${product.price}` instead of `$${product.price.toFixed(2)}`.

**Status:** New

---

### BUG-006: Cart badge shows unique items count, not total quantity

**Module:** Shopping Cart | **Severity:** Minor | **Priority:** Low

**Steps:**
1. Add 3 of same product
2. Check cart badge in nav

**Actual:** Badge shows "1"
**Expected:** Badge should show "3" (total qty)
**Root Cause:** `app.js:177-183` — badge uses `cart.length` instead of summing quantities.

**Status:** New

---

### BUG-007: Quantity input accepts negative numbers

**Module:** Shopping Cart | **Severity:** Major | **Priority:** High

**Steps:**
1. Go to product details
2. Set qty to -1
3. Click Add to Cart

**Actual:** Item added with -1 quantity.
**Expected:** Error "Quantity must be at least 1."
**Root Cause:** `app.js:623-628` — no check that `quantity > 0` before adding.

**Status:** New

---

### BUG-008: No stock limit check when adding to cart

**Module:** Shopping Cart | **Severity:** Major | **Priority:** High

**Steps:**
1. View Headphones (stock=10)
2. Set qty to 100
3. Click Add to Cart

**Actual:** 100 items added without warning.
**Expected:** Warning "Only 10 available" or auto-cap.
**Root Cause:** `app.js:630-634` — no comparison against `product.stock`.

**Status:** New

---

### BUG-009: Decreasing quantity below 1 keeps item in cart

**Module:** Shopping Cart | **Severity:** Major | **Priority:** Medium

**Steps:**
1. Add item
2. Go to cart
3. Click "-" when qty=1

**Actual:** Qty goes to 0 or -1. Item remains in cart.
**Expected:** Item should be removed when qty reaches 0.
**Root Cause:** `app.js:749-754` — no check that `quantity > 0` after decrement.

**Status:** New

---

### BUG-010: Cart total does not update after removing item

**Module:** Shopping Cart | **Severity:** Major | **Priority:** High

**Steps:**
1. Add 2+ items
2. Go to cart, note total
3. Remove one item
4. Check total

**Actual:** Total stays the same after removal.
**Expected:** Total should decrease by removed item value.
**Root Cause:** `app.js:767-782` — `removeCartItem()` summary values go stale.

**Status:** New

---

### BUG-011: Checkout form has no field validation

**Module:** Checkout | **Severity:** Critical | **Priority:** High

**Steps:**
1. Login, add items
2. Go to checkout
3. Leave all fields empty
4. Click Place Order

**Actual:** Order placed with no input data.
**Expected:** Validation errors for required fields.
**Root Cause:** `app.js:815-826` — fields read but never validated before order creation.

**Status:** New

---

### BUG-012: Card number accepts letters and special characters

**Module:** Checkout | **Severity:** Major | **Priority:** High

**Steps:**
1. Go to checkout
2. Enter "ABCDEFGHIJKLMNOP" as card
3. Click Place Order

**Actual:** Order placed. Letters accepted.
**Expected:** Error "Card number must contain only digits."
**Root Cause:** `app.js:834` — only checks length !== 16, no character validation.

**Status:** New

---

### BUG-013: CVV accepts 1 or 2 digit values

**Module:** Checkout | **Severity:** Major | **Priority:** Medium

**Steps:**
1. Go to checkout
2. Enter "1" as CVV
3. Click Place Order

**Actual:** Order placed. 1-digit CVV accepted.
**Expected:** Error "CVV must be 3 or 4 digits."
**Root Cause:** `app.js:844` — checks `< 3` instead of `!== 3 && !== 4`.

**Status:** New

---

### BUG-014: Potential order duplication from double saveOrders

**Module:** Checkout | **Severity:** Minor | **Priority:** Medium

**Steps:**
1. Place order
2. Go to orders.html
3. Check for duplicates

**Actual:** Order may appear twice in history.
**Expected:** Order should appear exactly once.
**Root Cause:** `app.js:884 + 889` — `saveOrders(orders)` called twice.

**Status:** New

---

### BUG-015: Forgot password always says "reset link sent" for unregistered emails

**Module:** Forgot Password | **Severity:** Minor | **Priority:** Low

**Steps:**
1. Go to forgot-password.html
2. Enter unregistered email
3. Click Send Reset Link

**Actual:** "Password reset link sent to your email!" shown for non-existent account.
**Expected:** "Email not found" error for unregistered emails.
**Root Cause:** `app.js:383-403` — same success message regardless of whether email exists.

**Status:** New

---

### BUG-016: Orders not sorted newest first

**Module:** Order History | **Severity:** Minor | **Priority:** Low

**Steps:**
1. Place 2+ orders
2. Go to orders.html

**Actual:** Oldest order appears first.
**Expected:** Newest order at top.
**Root Cause:** `app.js:941-946` — no `.reverse()` or sort by date on orders array.

**Status:** New

---

### BUG-017: Phone number field accepts any characters

**Module:** User Profile | **Severity:** Minor | **Priority:** Low

**Steps:**
1. Login, go to profile
2. Enter "abc!@#" as phone
3. Click Update

**Actual:** Phone saved with letters and symbols.
**Expected:** Error "Phone must contain only digits."
**Root Cause:** `app.js:1060-1064` — no validation on phone field input.

**Status:** New
