# User Guide

> A complete guide on how to use the ShopEasy Demo Store application.

---

## Table of Contents

1. [Getting Started](#1-getting-started)
2. [Creating an Account](#2-creating-an-account)
3. [Logging In](#3-logging-in)
4. [Browsing Products](#4-browsing-products)
5. [Searching and Filtering](#5-searching-and-filtering)
6. [Viewing Product Details](#6-viewing-product-details)
7. [Managing Your Cart](#7-managing-your-cart)
8. [Checking Out](#8-checking-out)
9. [Viewing Orders](#9-viewing-orders)
10. [Managing Your Profile](#10-managing-your-profile)
11. [Logging Out](#11-logging-out)

---

## 1. Getting Started

1. Open the application by double-clicking `index.html`
2. You will see the homepage with a welcome message and feature cards
3. Use the navigation bar at the top to move between pages

---

## 2. Creating an Account

Before you can make purchases, you need to create an account.

**Steps:**
1. Click **"Register"** in the navigation bar
2. Fill in the following fields:
   - **Full Name:** Your first and last name
   - **Email Address:** A valid email address
   - **Password:** Choose a password
   - **Confirm Password:** Re-enter your password
3. Click **"Create Account"**
4. You will see a success message and be redirected to the login page

**Tips:**
- Use a real email format (e.g., `name@example.com`)
- Remember your email and password for login
- You can use any name — it doesn't have to be real

---

## 3. Logging In

**Steps:**
1. Click **"Login"** in the navigation bar
2. Enter your registered email address
3. Enter your password
4. Click **"Login"**
5. You will be redirected to the Products page

**After Login:**
- The navigation bar will show your name
- New links appear: **Orders**, **Profile**, and **Logout**

---

## 4. Browsing Products

**Steps:**
1. Click **"Products"** in the navigation bar
2. You will see a grid of product cards
3. Each card shows:
   - Product image
   - Product name
   - Category
   - Price
   - Stock status (In Stock or Out of Stock)
4. Click on any product card to view its full details

---

## 5. Searching and Filtering

### Search by Name
1. On the Products page, type a product name in the **search box**
2. The product grid updates automatically as you type
3. Products whose names match your search will appear

### Filter by Category
1. Select a category from the **Category** dropdown
2. The grid updates to show only products in that category
3. Select "All Categories" to show everything again

### Filter by Price
1. Enter a minimum price in the **Min Price ($)** field
2. Enter a maximum price in the **Max Price ($)** field
3. The grid updates to show products within that price range

### Using Multiple Filters
You can combine search, category, and price filters all at the same time!

---

## 6. Viewing Product Details

**Steps:**
1. On the Products page, click any product card
2. The product details page shows:
   - Larger product image
   - Full product name
   - Price
   - Category
   - Stock availability
   - Product description
   - Product ID
3. If the product is in stock, you can:
   - Set a **quantity** using the number input
   - Click **"Add to Cart"** to add it to your shopping cart

---

## 7. Managing Your Cart

### Viewing Your Cart
1. Click **"Cart"** in the navigation bar
2. You will see all items you've added

### Changing Quantities
1. In the cart, use the **+** and **−** buttons to adjust quantities
2. The item subtotal updates automatically

### Removing Items
1. Click the **"Remove"** button next to any item
2. The item will be removed from your cart

### Cart Summary
- **Subtotal:** Sum of all item totals
- **Shipping:** Free for orders over $50, otherwise $5.99
- **Tax:** 8% of subtotal
- **Total:** Final amount to pay

### Proceeding to Checkout
- Click **"Proceed to Checkout"** to place your order
- Click **"Continue Shopping"** to go back to products

---

## 8. Checking Out

**Steps:**
1. From your cart, click **"Proceed to Checkout"**
2. Fill in the **Shipping Information**:
   - Full Name
   - Street Address
   - City
   - ZIP Code
3. Fill in the **Payment Information**:
   - Card Number (16 digits)
   - Expiry Date (MM/YY format)
   - CVV (3 digits)
4. Review your order
5. Click **"Place Order"**

**After Checkout:**
- You will see a success message with your Order ID
- You will be redirected to your **Order History** page
- Your cart will be empty

---

## 9. Viewing Orders

**Steps:**
1. Click **"Orders"** in the navigation bar
2. You will see all your past orders
3. Each order shows:
   - Order ID
   - Date placed
   - Order status
   - Items purchased (name × quantity)
   - Item prices
   - Total amount

---

## 10. Managing Your Profile

**Steps:**
1. Click **"Profile"** in the navigation bar
2. You will see your current profile information
3. To update your profile:
   - Edit the **Full Name**, **Phone Number**, or **Address** fields
   - Click **"Update Profile"**
4. Your changes will be saved

---

## 11. Logging Out

**Steps:**
1. Click **"Logout"** in the navigation bar
2. You will see a logout confirmation message
3. You will be redirected to the homepage
4. The navigation returns to showing Login/Register links

---

## Quick Reference

| Action | Navigation Link | Page |
|--------|-----------------|------|
| Home | Home | index.html |
| Browse Products | Products | products.html |
| View Cart | Cart | cart.html |
| Login | Login (when logged out) | login.html |
| Register | Register (when logged out) | register.html |
| View Orders | Orders (when logged in) | orders.html |
| Edit Profile | Profile (when logged in) | profile.html |
| Logout | Logout (when logged in) | — |
| Forgot Password | Link on Login page | forgot-password.html |

---

## Data Storage

This application stores all data in your browser's **localStorage**. This means:
- Your account, cart, and orders are saved on your computer
- Data persists when you close and reopen the browser
- Data is specific to the browser you're using
- Clearing your browser data will erase all information

> **💡 Tip:** Use different browsers (Chrome, Firefox, Edge) to test with multiple accounts simultaneously!
