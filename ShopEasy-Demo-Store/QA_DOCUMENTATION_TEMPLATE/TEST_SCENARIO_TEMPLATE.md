# Test Scenario Template

> **Purpose:** A Test Scenario is a high-level description of what to test. Each scenario covers a specific feature or user flow. Scenarios help ensure complete test coverage without getting into step-by-step details.

---

## Scenario Format

```
[Feature Area] - [Specific Function/Flow Being Tested]
```

---

## Example Test Scenarios for ShopEasy Demo Store

### Module: User Registration

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_REG_001 | Verify successful registration with valid data | Register a new user with valid full name, email, and password. Verify success message and redirect to login page. |
| TS_REG_002 | Verify registration with missing fields | Attempt registration with empty fields one at a time. Verify appropriate error messages. |
| TS_REG_003 | Verify registration with invalid email format | Test emails without "@", without domain, and with invalid characters. Verify validation rejects them. |
| TS_REG_004 | Verify registration with mismatched passwords | Enter different values in Password and Confirm Password fields. Verify error message. |
| TS_REG_005 | Verify registration with existing email | Register twice with the same email. Verify duplicate account is handled correctly. |
| TS_REG_006 | Verify registration with weak password | Test very short passwords (1-3 characters). Verify minimum password requirements. |

### Module: User Login

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_LOG_001 | Verify successful login with correct credentials | Login with registered email and correct password. Verify redirect to products page. |
| TS_LOG_002 | Verify login with incorrect password | Login with valid email but wrong password. Verify error message. |
| TS_LOG_003 | Verify login with unregistered email | Login with an email that was never registered. Verify error message. |
| TS_LOG_004 | Verify login with empty fields | Click Login button with empty email and/or password. Verify validation. |
| TS_LOG_005 | Verify login with case-sensitive email | Register with lowercase email, try logging in with uppercase. Verify behavior. |

### Module: Forgot Password

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_FP_001 | Verify forgot password with registered email | Enter a valid registered email. Verify success message. |
| TS_FP_002 | Verify forgot password with unregistered email | Enter an email that was never registered. Verify behavior. |
| TS_FP_003 | Verify forgot password with empty email | Click submit with empty email field. Verify validation. |

### Module: Product Listing and Search

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_PROD_001 | Verify all products display on page load | Navigate to products page. Verify all 9 products are visible with correct details. |
| TS_PROD_002 | Verify search by product name | Search for "Headphones" and verify matching products appear. |
| TS_PROD_003 | Verify partial search | Search for partial words like "phone" and verify "Headphones" appears. |
| TS_PROD_004 | Verify search case sensitivity | Search with different cases (e.g., "HEADPHONES" vs "headphones"). |
| TS_PROD_005 | Verify search with no results | Search for a non-existent product. Verify "No products found" message. |
| TS_PROD_006 | Verify empty search | Click search with empty input. Verify all products show or appropriate message. |

### Module: Product Filtering

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_FIL_001 | Verify category filter | Filter by "Electronics". Verify only electronics products appear. |
| TS_FIL_002 | Verify price range filter (min only) | Set minimum price to $30. Verify only products ≥ $30 appear. |
| TS_FIL_003 | Verify price range filter (max only) | Set maximum price to $25. Verify only products ≤ $25 appear. |
| TS_FIL_004 | Verify price range filter (min and max) | Set min $10 and max $50. Verify products within this range appear. |
| TS_FIL_005 | Verify combined filters | Search + category + price range together. Verify combined results. |
| TS_FIL_006 | Verify filter with invalid price range | Set min price higher than max price. Verify behavior. |

### Module: Product Details

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_DET_001 | Verify product details page | Click a product and verify full details (name, price, description, stock) display correctly. |
| TS_DET_002 | Verify invalid product ID | Navigate to product-details.html?id=999. Verify "Product not found" message. |
| TS_DET_003 | Verify out-of-stock product | View product with stock=0. Verify "Add to Cart" button is disabled. |
| TS_DET_004 | Verify price formatting | Check price format matches the listing page format. |

### Module: Shopping Cart

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_CART_001 | Verify add to cart | Add a product to cart. Verify success notification and cart badge update. |
| TS_CART_002 | Verify add multiple quantities | Add 3 of the same product. Verify cart shows quantity 3. |
| TS_CART_003 | Verify add different products | Add multiple different products. Verify all appear in cart. |
| TS_CART_004 | Verify quantity increase/decrease | Use + and - buttons in cart. Verify quantity updates correctly. |
| TS_CART_005 | Verify remove item from cart | Remove an item from cart. Verify it disappears and total updates. |
| TS_CART_006 | Verify empty cart | Remove all items. Verify empty cart message displays. |
| TS_CART_007 | Verify negative quantity | Decrease quantity below 1. Verify behavior. |
| TS_CART_008 | Verify cart total calculation | Add items with known prices and quantities. Verify subtotal, tax, shipping, and total are correct. |

### Module: Checkout

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_CHK_001 | Verify checkout with valid data | Fill all fields with valid data and place order. Verify success message. |
| TS_CHK_002 | Verify checkout with empty fields | Submit checkout form with empty fields. Verify validation. |
| TS_CHK_003 | Verify credit card validation | Enter non-numeric card number. Verify validation. |
| TS_CHK_004 | Verify CVV validation | Enter 1-digit CVV. Verify validation. |
| TS_CHK_005 | Verify checkout without login | Navigate to checkout page without logging in. Verify redirect to login. |
| TS_CHK_006 | Verify checkout with empty cart | Clear cart and attempt checkout. Verify error message. |
| TS_CHK_007 | Verify order after checkout | After placing order, verify redirect to order history with correct details. |

### Module: User Profile

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_PROF_001 | Verify profile displays user info | Login and navigate to profile. Verify user details are correct. |
| TS_PROF_002 | Verify profile update | Update name, phone, and address. Verify changes are saved. |
| TS_PROF_003 | Verify phone number validation | Enter letters in the phone field. Verify validation. |
| TS_PROF_004 | Verify profile without login | Access profile page without logging in. Verify redirect/prompt. |

### Module: Order History

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_ORD_001 | Verify orders display after purchase | Place an order and verify it appears in order history. |
| TS_ORD_002 | Verify order details | Check order ID, date, items, quantities, and total are correct. |
| TS_ORD_003 | Verify multiple orders | Place multiple orders and verify all appear in history. |
| TS_ORD_004 | Verify order sorting | Check if newest orders appear first. |
| TS_ORD_005 | Verify empty order history | Check order history without placing any orders. Verify empty state message. |

---

## Blank Template

| ID | Test Scenario | Description |
|----|---------------|-------------|
| TS_001 | | |
| TS_002 | | |
| TS_003 | | |
| TS_004 | | |
| TS_005 | | |

---

> **📝 QA Learning Tip:** Write test scenarios before test cases. Scenarios help you think about what to test without getting lost in the details of how to test. Once your scenarios are complete, you can expand each one into detailed test cases.
