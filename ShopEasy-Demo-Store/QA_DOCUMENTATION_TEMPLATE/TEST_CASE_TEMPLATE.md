# Test Case Template

> **Purpose:** A Test Case is a detailed set of steps to verify a specific feature or behavior. It includes preconditions, test data, execution steps, and expected results. Test cases are the building blocks of your testing effort.

---

## Test Case Format

Each test case should contain:
- **Test Case ID:** Unique identifier
- **Title:** Clear description of what is being tested
- **Module:** Feature area
- **Preconditions:** What must be true before executing
- **Test Data:** Specific input values to use
- **Test Steps:** Numbered step-by-step instructions
- **Expected Result:** What should happen after execution
- **Actual Result:** What actually happened (filled during testing)
- **Status:** Pass / Fail / Blocked / Not Executed

---

## Example Test Cases for ShopEasy Demo Store

### Test Case: Successful User Registration

| Field | Value |
|-------|-------|
| **Test Case ID** | TC_REG_001 |
| **Title** | Verify successful registration with valid data |
| **Module** | User Registration |
| **Preconditions** | User is on the Registration page (register.html) |
| **Test Data** | Full Name: `John Doe`, Email: `john.doe@example.com`, Password: `SecurePass123`, Confirm Password: `SecurePass123` |

**Test Steps:**
1. Navigate to the Registration page
2. Enter "John Doe" in the Full Name field
3. Enter "john.doe@example.com" in the Email field
4. Enter "SecurePass123" in the Password field
5. Enter "SecurePass123" in the Confirm Password field
6. Click the "Create Account" button

| | |
|-------|-------|
| **Expected Result** | A success message "Registration successful! You can now log in." should appear. After 1.5 seconds, the user should be redirected to the login page. |
| **Actual Result** | |
| **Status** | |

---

### Test Case: Registration with Empty Fields

| Field | Value |
|-------|-------|
| **Test Case ID** | TC_REG_002 |
| **Title** | Verify registration fails when required fields are empty |
| **Module** | User Registration |
| **Preconditions** | User is on the Registration page (register.html) |
| **Test Data** | All fields left empty |

**Test Steps:**
1. Navigate to the Registration page
2. Leave all fields empty
3. Click the "Create Account" button

| | |
|-------|-------|
| **Expected Result** | An error message "Please fill in all required fields." should appear. The user should remain on the registration page. |
| **Actual Result** | |
| **Status** | |

---

### Test Case: Login with Correct Credentials

| Field | Value |
|-------|-------|
| **Test Case ID** | TC_LOG_001 |
| **Title** | Verify successful login with valid credentials |
| **Module** | User Login |
| **Preconditions** | A user account exists with email `test@example.com` and password `TestPass123` |
| **Test Data** | Email: `test@example.com`, Password: `TestPass123` |

**Test Steps:**
1. Navigate to the Login page
2. Enter "test@example.com" in the Email field
3. Enter "TestPass123" in the Password field
4. Click the "Login" button

| | |
|-------|-------|
| **Expected Result** | A success message "Login successful!" should appear. After 1 second, the user should be redirected to the products page. The navigation bar should show the user's name. |
| **Actual Result** | |
| **Status** | |

---

### Test Case: Product Search

| Field | Value |
|-------|-------|
| **Test Case ID** | TC_PROD_001 |
| **Title** | Verify product search returns correct results |
| **Module** | Product Listing |
| **Preconditions** | User is on the Products page (products.html) |
| **Test Data** | Search Query: `Headphones` |

**Test Steps:**
1. Navigate to the Products page
2. Type "Headphones" in the search field
3. Observe the product list updates

| | |
|-------|-------|
| **Expected Result** | Only products with "Headphones" in their name should appear. In this case, "Wireless Bluetooth Headphones" should be displayed. All other products should be hidden. |
| **Actual Result** | |
| **Status** | |

---

### Test Case: Add to Cart

| Field | Value |
|-------|-------|
| **Test Case ID** | TC_CART_001 |
| **Title** | Verify adding a product to cart |
| **Module** | Shopping Cart |
| **Preconditions** | User is on a product details page (e.g., product-details.html?id=1) |
| **Test Data** | Quantity: `2` |

**Test Steps:**
1. Navigate to the product details page for "Wireless Bluetooth Headphones"
2. Set quantity to "2"
3. Click "Add to Cart" button

| | |
|-------|-------|
| **Expected Result** | A success notification "Wireless Bluetooth Headphones added to cart!" should appear. The cart badge in the navigation should update to show the total item count. |
| **Actual Result** | |
| **Status** | |

---

### Test Case: Checkout Process

| Field | Value |
|-------|-------|
| **Test Case ID** | TC_CHK_001 |
| **Title** | Verify successful order placement |
| **Module** | Checkout |
| **Preconditions** | User is logged in. Cart has at least one item. User is on the Checkout page. |
| **Test Data** | Name: `John Doe`, Address: `123 Main St`, City: `New York`, ZIP: `10001`, Card: `1234567890123456`, Expiry: `12/25`, CVV: `123` |

**Test Steps:**
1. Fill in the shipping information fields with valid data
2. Fill in the payment information fields with valid data
3. Click the "Place Order" button

| | |
|-------|-------|
| **Expected Result** | A success message "Order placed successfully!" with the Order ID should appear. After 1.5 seconds, the user should be redirected to the order history page. The cart should be empty. |
| **Actual Result** | |
| **Status** | |

---

## Blank Template

### Test Case: [Title]

| Field | Value |
|-------|-------|
| **Test Case ID** | TC_ |
| **Title** | |
| **Module** | |
| **Preconditions** | |
| **Test Data** | |

**Test Steps:**
1.
2.
3.
4.
5.

| | |
|-------|-------|
| **Expected Result** | |
| **Actual Result** | |
| **Status** | |

---

> **📝 QA Learning Tip:** When writing test cases, be specific with test data. Instead of "enter a valid email", write "enter 'testuser@example.com'". This makes your tests reproducible and eliminates ambiguity. Also, one test case should test ONE thing — don't try to verify multiple behaviors in a single test case.
