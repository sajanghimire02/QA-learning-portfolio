# Test Scenarios

**Tester:** Sajan Ghimire
**Application:** ShopEasy Demo Store

---

## Module: User Registration

| ID | Test Scenario | Description | Status |
|----|---------------|-------------|--------|
| TS_REG_001 | Successful registration with matching passwords | Register with valid data, matching password & confirm. Should succeed. | Pass |
| TS_REG_002 | Registration with mismatched passwords | Enter different values in Password and Confirm Password. Should show error. | Fail (Bug) |

## Module: User Login

| ID | Test Scenario | Description | Status |
|----|---------------|-------------|--------|
| TS_LOG_001 | Login with password used during registration | Login with email + password from Password field. Should succeed. | Pass |
| TS_LOG_002 | Login with confirm-password value | Login with email + value from Confirm Password field. Should fail. | Fail (Bug - wrong error msg) |

## Module: Product Listing & Search

| ID | Test Scenario | Description | Status |
|----|---------------|-------------|--------|
| TS_PROD_001 | All products display on page load | Navigate to products.html. Verify all 9 products visible with correct details. | Pass |
| TS_PROD_002 | Search by full product name | Search "Headphones". Only matching product should appear. | Pass |
| TS_PROD_003 | Partial search | Search "phone". Should find "Wireless Bluetooth Headphones". | Pass |
| TS_PROD_004 | Search case insensitivity | Search "HEADPHONES" vs "headphones". Both should return same results. | Pass |
| TS_PROD_005 | Search with no results | Search "xyz123nonexistent". Should show "No products found" message. | Pass |
| TS_PROD_006 | Empty search input | Click search with empty field. Should show all products. | Fail (Bug) |
| TS_PROD_007 | Category filter | Filter by "Electronics". Only electronics products should appear. | Pass |
| TS_PROD_008 | Category filter switch back to All | Select a category, then switch back to "All Categories". All products should return. | Pass |
| TS_PROD_009 | Price filter with min only | Set min price to $30. Products >= $30 should appear. | Pass |
| TS_PROD_010 | Price filter with max only | Set max price to $25. Products <= $25 should appear. | Pass |
| TS_PROD_011 | Price filter min > max | Set min $100, max $10. Should show warning or swap values. | Fail (Bug) |
| TS_PROD_012 | Combined filters | Search + category + price range combined. Should work together. | Pass |

## Module: Product Details

| ID | Test Scenario | Description | Status |
|----|---------------|-------------|--------|
| TS_DET_001 | View product details | Click a product. All details (name, price, desc, stock) should display. | Pass |
| TS_DET_002 | Price formatting consistency | Price on details page should match listing page format ($XX.XX). | Fail (Bug) |
| TS_DET_003 | Invalid product ID | Visit product-details.html?id=999. Should show "Product not found". | Pass |
| TS_DET_004 | Out of stock product display | View Running Shoes (stock=0). Add to Cart should be disabled. | Pass |

## Module: Shopping Cart

| ID | Test Scenario | Description | Status |
|----|---------------|-------------|--------|
| TS_CART_001 | Add single item to cart | Add 1 Headphones. Notification + badge should update. | Pass |
| TS_CART_002 | Add multiple quantities of same item | Add 3 Headphones. Cart should reflect qty 3. | Pass |
| TS_CART_003 | Cart badge shows total items | Badge should show total quantity (sum of all items), not unique count. | Fail (Bug) |
| TS_CART_004 | Add different products | Add Headphones + Tea Set. Both should appear in cart. | Pass |
| TS_CART_005 | Increase quantity via + button | Click + on cart item. Quantity should increment. | Pass |
| TS_CART_006 | Decrease quantity via - button | Click - on cart item. Quantity should decrement. | Pass |
| TS_CART_007 | Decrease quantity below 1 | Click - when qty is 1. Should remove item or show minimum warning. | Fail (Bug) |
| TS_CART_008 | Add negative quantity | Set quantity to -1 and add to cart. Should reject. | Fail (Bug) |
| TS_CART_009 | Add quantity exceeding stock | Add 100 units of a product with stock=10. Should warn or cap. | Fail (Bug) |
| TS_CART_010 | Remove item from cart | Click Remove. Item should disappear. | Pass |
| TS_CART_011 | Cart total updates after remove | Remove item. Subtotal/total should recalculate. | Fail (Bug) |
| TS_CART_012 | Empty cart display | Remove all items. Should show empty cart message. | Pass |
| TS_CART_013 | Price calculations | Verify subtotal, shipping ($5.99 or free over $50), tax (8%), total. | Pass |

## Module: Checkout

| ID | Test Scenario | Description | Status |
|----|---------------|-------------|--------|
| TS_CHK_001 | Checkout with valid data | Fill all fields, place order. Should succeed. | Pass |
| TS_CHK_002 | Checkout without login | Access checkout.html when not logged in. Should redirect to login. | Pass |
| TS_CHK_003 | Checkout with empty cart | Clear cart, go to checkout. Should show error. | Pass |
| TS_CHK_004 | Submit with all fields empty | Click Place Order with empty form. Should validate. | Fail (Bug) |
| TS_CHK_005 | Card number with letters | Enter "ABCDEFGHIJKLMNOP" as card. Should reject. | Fail (Bug) |
| TS_CHK_006 | Card number wrong length | Enter 15 or 17 digits. Should validate. | Pass |
| TS_CHK_007 | CVV with 1 digit | Enter "1" as CVV. Should reject. | Fail (Bug) |
| TS_CHK_008 | CVV with 2 digits | Enter "12" as CVV. Should reject. | Fail (Bug) |
| TS_CHK_009 | Order appears in history | After placement, check orders.html. Order should be there. | Pass |
| TS_CHK_010 | Order duplication | Check if order appears once or twice in history. | Fail (Bug - potential duplicate) |

## Module: Forgot Password

| ID | Test Scenario | Description | Status |
|----|---------------|-------------|--------|
| TS_FP_001 | Forgot password with registered email | Enter a valid registered email. Should show success. | Pass |
| TS_FP_002 | Forgot password with unregistered email | Enter email not in system. Should show appropriate message. | Fail (Bug - always says success) |
| TS_FP_003 | Forgot password with empty email | Click submit with empty field. Should validate. | Pass |

## Module: Order History

| ID | Test Scenario | Description | Status |
|----|---------------|-------------|--------|
| TS_ORD_001 | Orders display after checkout | Place an order, check orders.html. Should appear. | Pass |
| TS_ORD_002 | Order details accuracy | Verify order ID, date, items, totals are correct. | Pass |
| TS_ORD_003 | Order sorting | Newest orders should appear at top. | Fail (Bug) |
| TS_ORD_004 | Empty order history | No orders placed. Should show empty message. | Pass |
| TS_ORD_005 | Order history without login | Access orders.html not logged in. Should prompt login. | Pass |

## Module: User Profile

| ID | Test Scenario | Description | Status |
|----|---------------|-------------|--------|
| TS_PROF_001 | Profile displays user info | Login, go to profile. Name, email should show. | Pass |
| TS_PROF_002 | Update profile fields | Update name, phone, address. Should save. | Pass |
| TS_PROF_003 | Phone number shows undefined when not set | Register without phone, check profile. Should show "Not set". | Fail (Bug) |
| TS_PROF_004 | Phone accepts letters | Enter "abc" as phone number. Should reject. | Fail (Bug) |
| TS_PROF_005 | Profile without login | Access profile.html not logged in. Should prompt login. | Pass |
