# Installation Guide

> How to set up and run the ShopEasy Demo Store on your computer.

---

## System Requirements

- **Operating System:** Windows, macOS, or Linux
- **Browser:** Google Chrome (recommended), Mozilla Firefox, or Microsoft Edge
- **Internet Connection:** Required only for loading product images (from picsum.photos)
- **Storage:** Less than 10 MB
- **No additional software required!**

---

## Option 1: Direct Download

### Step 1: Download the Project
1. Go to the GitHub repository: https://github.com/sajanghimire02/QA-learning-portfolio
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Extract the ZIP file to a folder on your computer

### Step 2: Open the Application
1. Navigate to the extracted folder
2. Open the `ShopEasy-Demo-Store` folder
3. **Double-click** `index.html` to open it in your default browser
4. OR right-click `index.html` → Open with → Choose your browser

### Step 3: Start Testing!
You're all set! The application runs entirely in your browser with no server needed.

---

## Option 2: Using Git (Recommended)

### Step 1: Clone the Repository
Open a terminal/command prompt and run:

```bash
git clone https://github.com/sajanghimire02/QA-learning-portfolio.git
```

### Step 2: Navigate to the Project
```bash
cd QA-learning-portfolio/ShopEasy-Demo-Store
```

### Step 3: Open in Browser
```bash
# On Windows:
start index.html

# On macOS:
open index.html

# On Linux:
xdg-open index.html
```

Or simply double-click `index.html` in your file explorer.

---

## Option 3: Using VS Code Live Server (Optional)

If you have Visual Studio Code, you can use the Live Server extension for a better experience:

1. Install **VS Code** from https://code.visualstudio.com/
2. Install the **Live Server** extension (by Ritwick Dey)
3. Open the project folder in VS Code
4. Right-click on `index.html` → **"Open with Live Server"**
5. The application will open at `http://localhost:5500`

**Benefits of Live Server:**
- Auto-reload when you make changes to files
- Better handling of certain JavaScript features
- More like a real web server environment

---

## How to Verify Installation

After opening the application, you should see:

✅ The ShopEasy homepage with "Welcome to ShopEasy Demo Store" heading
✅ Navigation links at the top (Home, Products, Cart, Login, Register)
✅ Six feature cards explaining the project
✅ A "Quick Start for Testers" section

If any of these are missing, try refreshing the page or opening with a different browser.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| **Images not loading** | Check your internet connection. Images are loaded from picsum.photos. |
| **Features not working** | Make sure JavaScript is enabled in your browser settings. |
| **Data lost after refresh** | This is expected if you clear browser data. The app uses localStorage. |
| **Layout looks broken** | Try a modern browser like Chrome or Firefox. Update your browser if old. |
| **"file://" CORS errors** | Open files directly via file explorer. Or use Live Server in VS Code. |

---

## How to Reset the Application

To reset all data (users, cart, orders):

### In Google Chrome:
1. Open Developer Tools (F12)
2. Go to the **Application** tab
3. In the left sidebar, expand **Storage** → **Local Storage**
4. Right-click and select **Clear**
5. Refresh the page

### Alternative:
1. Open Developer Tools (F12)
2. Go to the **Console** tab
3. Type: `localStorage.clear()`
4. Press Enter
5. Refresh the page

---

## Recommended Browser for Testing

**Google Chrome** is recommended because:
- Excellent Developer Tools
- Easy LocalStorage inspection
- Network throttling for testing
- Device emulation for responsive testing
- Console for debugging

---

## Next Steps

Once installed, read these documents in order:

1. **[USER_GUIDE.md](USER_GUIDE.md)** — Learn how to use the application
2. **[FEATURE_LIST.md](FEATURE_LIST.md)** — Understand all features in detail
3. **[QA_LEARNING_GUIDE.md](QA_LEARNING_GUIDE.md)** — Learn QA fundamentals
4. Start with the **QA Documentation Templates** to plan and document your testing

---

> **💡 Tip:** Bookmark this page for quick access during testing!
