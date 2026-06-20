# ShopEasy Demo Store 🛒

> A realistic e-commerce web application designed for QA testing practice and learning.

[![QA Learning Project](https://img.shields.io/badge/QA-Learning%20Project-blue)](#)
[![Beginner Friendly](https://img.shields.io/badge/Beginner-Friendly-brightgreen)](#)
[![Portfolio Ready](https://img.shields.io/badge/Portfolio-Ready-orange)](#)

---

## 📋 Project Overview

**ShopEasy Demo Store** is a complete, browser-based e-commerce web application built specifically for aspiring QA professionals to practice software testing. It simulates a real online store with features like user registration, product browsing, shopping cart, checkout, and order history.

**This is NOT a production application.** It is designed as a learning tool with intentionally included bugs for testers to discover. The code is kept simple and readable for beginners.

**🔴 Important:** This application contains approximately 15-20 intentional bugs across different categories (UI, validation, functional, edge-case). Finding and documenting these bugs is part of the learning experience!

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **User Registration** | Create a new account with name, email, and password |
| **User Login** | Authenticate with registered credentials |
| **Forgot Password** | Password reset flow simulation |
| **Product Listing** | Browse 9 sample products with images and details |
| **Product Search** | Search products by name |
| **Product Filtering** | Filter by category and price range |
| **Product Details** | View full product information and stock status |
| **Add to Cart** | Add products with desired quantities |
| **Remove from Cart** | Remove items or adjust quantities |
| **Checkout** | Complete purchase with shipping and payment form |
| **User Profile** | View and update profile information |
| **Order History** | View past orders with details |

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure and content |
| **CSS3** | Styling, layout, and responsive design |
| **JavaScript (Vanilla)** | All application logic (no frameworks) |
| **localStorage** | Data persistence (user accounts, cart, orders) |

**Why no frameworks?** This is intentionally built with plain HTML/CSS/JS so beginners can easily read and understand every line of code.

---

## 🎯 QA Learning Objectives

This project helps you learn and practice:

### 1. Test Documentation
- Writing Test Plans
- Creating Test Scenarios and Test Cases
- Writing professional Bug Reports
- Summarizing testing results

### 2. Testing Techniques
- **Functional Testing:** Verify each feature works correctly
- **UI Testing:** Check visual consistency and responsiveness
- **Validation Testing:** Test form inputs and error handling
- **Edge Case Testing:** Boundary values, empty states, unusual inputs
- **Exploratory Testing:** Discover unexpected issues without scripts

### 3. QA Fundamentals
- Understanding SDLC and STLC
- Severity vs Priority classification
- Smoke Testing vs Regression Testing
- Real-world testing mindset

### 4. Tools & Workflow
- Browser Developer Tools (Console, Storage, Network)
- LocalStorage inspection
- Manual testing best practices

---

## 🔬 Testing Scope

### What to Test
| Area | Focus |
|------|-------|
| **Registration** | Field validation, duplicate accounts, password rules |
| **Login** | Authentication, error messages, session persistence |
| **Product Search & Filter** | Accuracy, case sensitivity, combined filters |
| **Cart** | Add/remove items, quantity limits, price calculations |
| **Checkout** | Form validation, card validation, order creation |
| **Profile** | Display, update, phone validation |
| **Order History** | Display, sorting, data persistence |
| **Navigation** | Links, cart badge, login state, responsive layout |

### Bug Categories to Find
- 🖥 **UI Bugs** — Visual inconsistencies, broken layouts
- ✅ **Validation Bugs** — Missing or incorrect input validation
- ⚙ **Functional Bugs** — Features not working as expected
- 🔄 **Edge-Case Bugs** — Issues at boundaries or unusual conditions

---

## 📁 Project Structure

```
ShopEasy-Demo-Store/
│
├── index.html                 # Homepage
├── register.html              # User registration
├── login.html                 # User login
├── forgot-password.html       # Password reset
├── products.html              # Product listing + search + filters
├── product-details.html       # Individual product view
├── cart.html                  # Shopping cart
├── checkout.html              # Checkout form
├── profile.html               # User profile
├── orders.html                # Order history
│
├── assets/
│   ├── css/
│   │   └── style.css          # All styles
│   ├── js/
│   │   └── app.js             # All application logic
│   └── images/                # (images loaded from external source)
│
├── QA_DOCUMENTATION_TEMPLATE/
│   ├── TEST_PLAN_TEMPLATE.md
│   ├── TEST_SCENARIO_TEMPLATE.md
│   ├── TEST_CASE_TEMPLATE.md
│   ├── BUG_REPORT_TEMPLATE.md
│   └── TEST_SUMMARY_REPORT_TEMPLATE.md
│
├── QA_LEARNING_GUIDE.md       # QA fundamentals for beginners
├── INSTALLATION_GUIDE.md      # Setup instructions
├── FEATURE_LIST.md            # Detailed feature descriptions
├── USER_GUIDE.md              # How to use the application
└── README.md                  # This file
```

---

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open any HTML file** in your browser (start with `index.html`)
3. **Start testing!** Register an account and explore all features

For detailed setup instructions, see [INSTALLATION_GUIDE.md](INSTALLATION_GUIDE.md).

---

## 📚 Learning Resources

| Resource | Description |
|----------|-------------|
| [QA Learning Guide](QA_LEARNING_GUIDE.md) | Beginner-friendly guide to QA fundamentals |
| [Test Plan Template](QA_DOCUMENTATION_TEMPLATE/TEST_PLAN_TEMPLATE.md) | Template for planning your testing |
| [Test Scenario Template](QA_DOCUMENTATION_TEMPLATE/TEST_SCENARIO_TEMPLATE.md) | Example scenarios to guide your testing |
| [Test Case Template](QA_DOCUMENTATION_TEMPLATE/TEST_CASE_TEMPLATE.md) | Detailed test cases with examples |
| [Bug Report Template](QA_DOCUMENTATION_TEMPLATE/BUG_REPORT_TEMPLATE.md) | Professional bug reporting format |
| [Test Summary Template](QA_DOCUMENTATION_TEMPLATE/TEST_SUMMARY_REPORT_TEMPLATE.md) | Summarize your testing results |
| [Feature List](FEATURE_LIST.md) | Detailed feature descriptions |
| [User Guide](USER_GUIDE.md) | How to use the application |

---

## 🔮 Future Improvements

If this project continues to grow, potential improvements include:

- **Backend integration** with a real database
- **REST API** for product and user management
- **Unit tests** using Jest or Mocha
- **Automated UI tests** with Selenium or Cypress
- **Performance testing** scenarios
- **More products** and categories
- **Payment gateway** simulation
- **Wishlist feature**
- **Product reviews and ratings**
- **Multi-language support**

---

## 💡 What I Learned

*Building this project helped me learn:*

- How to structure a web application project
- How user authentication and sessions work in practice
- How e-commerce workflows connect (browse → cart → checkout → order)
- The importance of input validation and error handling
- How to think like a QA tester — anticipating what could go wrong
- How to write comprehensive test documentation
- How to use browser DevTools for debugging and testing
- That finding bugs is fun! 🔍

---

## 📬 Contact

[Your Name] — [Your Email] — [Your LinkedIn]

**Portfolio:** [Link to your portfolio]
**GitHub:** [https://github.com/sajanghimire02/QA-learning-portfolio](https://github.com/sajanghimire02/QA-learning-portfolio)

---

> **⭐ If you find this project useful, please star it on GitHub!**
>
> *Happy Testing!* 🐛✨
