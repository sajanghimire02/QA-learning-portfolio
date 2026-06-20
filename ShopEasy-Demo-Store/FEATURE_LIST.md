# Feature List

> Complete list of all features in the ShopEasy Demo Store, with detailed descriptions for testing.

---

## 1. User Registration

**Page:** `register.html`

**Description:**
Allows new users to create an account by providing their full name, email address, and password.

**Fields:**
| Field | Type | Notes |
|-------|------|-------|
| Full Name | Text | Required |
| Email | Email | Required, should validate format |
| Password | Password | Required |
| Confirm Password | Password | Should match Password field |

**User Flow:**
1. User fills in the registration form
2. User clicks "Create Account"
3. Success message is displayed
4. User is redirected to the login page

**What to Test:**
- All fields are required
- Email format validation
- Password confirmation matching
- Duplicate email handling
- Special characters in name field
- Very long inputs

---

## 2. User Login

**Page:** `login.html`

**Description:**
Allows registered users to log into their account.

**Fields:**
| Field | Type | Notes |
|-------|------|-------|
| Email | Email | Required |
| Password | Password | Required |

**User Flow:**
1. User enters email and password
2. User clicks "Login"
3. Success message is displayed
4. User is redirected to the products page
5. Navigation updates to show user-specific links

**What to Test:**
- Login with correct credentials
- Login with incorrect password
- Login with unregistered email
- Empty field validation
- Case sensitivity of email
- Session persistence across pages

---

## 3. Forgot Password

**Page:** `forgot-password.html`

**Description:**
Simulates a password reset flow by accepting an email address.

**Fields:**
| Field | Type | Notes |
|-------|------|-------|
| Email | Email | Required |

**User Flow:**
1. User enters their registered email
2. User clicks "Send Reset Link"
3. Success message is displayed

**What to Test:**
- Registered email — does it show success?
- Unregistered email — does it still show success?
- Empty email — error message?
- Invalid email format

---

## 4. Product Listing

**Page:** `products.html`

**Description:**
Displays all available products in a grid layout with images, names, categories, prices, and stock status.

**Products Available:**
| # | Product | Category | Price | Stock |
|---|---------|----------|-------|-------|
| 1 | Wireless Bluetooth Headphones | Electronics | $49.99 | 10 |
| 2 | Organic Green Tea Set | Food & Drinks | $24.99 | 25 |
| 3 | Leather Notebook Journal | Stationery | $18.99 | 15 |
| 4 | Smart Water Bottle | Lifestyle | $34.99 | 20 |
| 5 | Yoga Mat Premium | Sports | $39.99 | 8 |
| 6 | Bluetooth Speaker | Electronics | $29.99 | 12 |
| 7 | Stainless Steel Coffee Mug | Lifestyle | $19.99 | 30 |
| 8 | Desk Organizer Set | Stationery | $22.99 | 18 |
| 9 | Running Shoes | Sports | $79.99 | 0 (Out of Stock) |

**What to Test:**
- All 9 products display correctly
- Images load properly
- Prices formatted correctly
- Stock status shows "Out of Stock" for product 9
- Clicking a product navigates to details page

---

## 5. Product Search

**Location:** Top of `products.html` page

**Description:**
Filters the product grid to show only products whose names match the search query.

**What to Test:**
- Search by full product name ("Headphones")
- Search by partial name ("phone" should find "Headphones")
- Case sensitivity ("headphones" vs "HEADPHONES")
- Search with no matches
- Empty search
- Search with special characters
- Combined with other filters

---

## 6. Product Filtering

**Location:** `products.html` filter section

**Filters Available:**
- **Category Filter:** Dropdown with all product categories
- **Price Range:** Min price and Max price input fields

**What to Test:**
- Filter by each individual category
- Switch between categories
- Price range with only min set
- Price range with only max set
- Price range with both min and max
- Min price higher than max price
- Negative prices
- Zero prices
- Combined with search
- Combined with category + price

---

## 7. Product Details Page

**Page:** `product-details.html?id={product_id}`

**Description:**
Shows full product information including description, stock status, and allows adding to cart with quantity selection.

**What to Test:**
- All product details display correctly
- Price formatting
- Stock status for in-stock items
- Stock status for out-of-stock items (product 9)
- Quantity input accepts valid numbers
- Add to Cart button works
- Add to Cart button disabled for out-of-stock
- Invalid product ID in URL
- Missing product ID in URL

---

## 8. Add to Cart

**Location:** `product-details.html` and product cards on `products.html`

**Description:**
Adds a product with specified quantity to the shopping cart. Cart data is stored in the browser's localStorage.

**What to Test:**
- Add single item to cart
- Add multiple quantities
- Add same product again (quantity should increase)
- Add 0 quantity
- Add negative quantity
- Add quantity exceeding stock
- Success notification appears
- Cart badge updates
- Cart persists after page refresh
- Add multiple different products

---

## 9. Remove from Cart

**Location:** `cart.html`

**Description:**
Allows users to remove items from their cart or adjust quantities using + and - buttons.

**What to Test:**
- Remove single item
- Remove all items (empty cart)
- Increase quantity with + button
- Decrease quantity with - button
- Decrease quantity below 1
- Item total updates after quantity change
- Cart total updates after removal
- Empty cart message

---

## 10. Checkout Page

**Page:** `checkout.html`

**Description:**
Collects shipping and payment information to complete the order.

**Fields:**
| Field | Type | Notes |
|-------|------|-------|
| Full Name | Text | Shipping |
| Street Address | Text | Shipping |
| City | Text | Shipping |
| ZIP Code | Text | Shipping |
| Card Number | Text (16 digits) | Payment |
| Expiry Date | Text (MM/YY) | Payment |
| CVV | Text (3-4 digits) | Payment |

**What to Test:**
- Place order with valid data
- Empty fields — validation?
- Credit card with letters
- Credit card with wrong length
- CVV with 1-2 digits
- Expiry date format
- Checkout without login
- Checkout with empty cart
- Successful order — redirect and message
- Order appears in history

---

## 11. User Profile

**Page:** `profile.html`

**Description:**
Displays user information and allows editing profile details.

**Fields (Editable):**
| Field | Type | Notes |
|-------|------|-------|
| Full Name | Text | Editable |
| Phone Number | Text | Should validate numeric |
| Address | Text | Editable |

**Display Fields (Read-only):**
- Email

**What to Test:**
- Display user info correctly
- Update name, phone, address
- Phone number accepts only numbers?
- Empty phone or address
- Very long inputs
- Profile without logging in
- Changes persist after refresh

---

## 12. Order History

**Page:** `orders.html`

**Description:**
Shows all orders placed by the logged-in user with order ID, date, items, and totals.

**What to Test:**
- Orders appear after checkout
- Order details are correct
- Multiple orders display
- Order sorting (newest first?)
- Empty order history
- Order history without logging in
- Data persistence

---

## Navigation

**Location:** Header of every page

**Description:**
Global navigation bar with links to all pages. Adapts based on login state.

**Links:**
- Home (always visible)
- Products (always visible)
- Cart with item count badge (always visible)
- Login (visible when logged out)
- Register (visible when logged out)
- Orders (visible when logged in)
- Profile (visible when logged in)
- Logout (visible when logged in)
- User greeting (visible when logged in)

**What to Test:**
- All links navigate to correct pages
- Links change correctly when logging in/out
- Cart badge shows correct count
- User name displays correctly
- Responsive navigation on mobile

---

## Footer

**Location:** Bottom of every page

**Description:** Simple footer with copyright information.

**What to Test:**
- Footer is visible on all pages
- Footer stays at bottom on short pages
- Text is correct

---

> **📝 QA Learning Tip:** Use this feature list as a checklist while testing. Check off features as you test them and note any issues you find. This ensures complete test coverage.
