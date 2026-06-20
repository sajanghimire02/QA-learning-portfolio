# Bug Report Template

> **Purpose:** A Bug Report documents a defect found during testing. A well-written bug report helps developers understand, reproduce, and fix the issue. It also helps track the quality of the application over time.

---

## Bug Report Format

Each bug report should include:
- **Bug ID:** Unique identifier
- **Title:** Clear, concise description of the bug
- **Module:** Feature area where the bug was found
- **Severity:** How serious the bug is (Critical / Major / Minor / Trivial)
- **Priority:** How urgently it should be fixed (High / Medium / Low)
- **Environment:** Browser, OS, screen resolution
- **Preconditions:** What was set up before finding the bug
- **Steps to Reproduce:** Numbered steps to recreate the bug
- **Actual Result:** What actually happened
- **Expected Result:** What should have happened
- **Attachments:** Screenshots, screen recordings, console logs
- **Status:** New / Open / In Progress / Fixed / Verified / Closed

---

## Severity vs Priority

| | **High Priority** | **Medium Priority** | **Low Priority** |
|--|------------------|--------------------|-------------------|
| **Critical Severity** | Fix immediately | Fix in next build | Fix in next release |
| **Major Severity** | Fix in current sprint | Fix in next build | Fix in next release |
| **Minor Severity** | Fix if time allows | Fix in next sprint | Fix in next release |
| **Trivial Severity** | Defer | Defer | Fix when possible |

### Severity Definitions

| Severity | Definition | Example |
|----------|------------|---------|
| **Critical** | Application crashes, data loss, core feature broken | Cannot complete checkout, payment processing fails |
| **Major** | Important feature not working correctly | Search returns wrong results, incorrect price calculation |
| **Minor** | Feature works but has minor issues | Misaligned button, slightly off color |
| **Trivial** | Cosmetic issue, minor UI glitch | Typo in text, 1px alignment issue |

### Priority Definitions

| Priority | Definition | Example |
|----------|------------|---------|
| **High** | Blocks testing or critical user flow | Cannot register or login |
| **Medium** | Important feature affected but workaround exists | Filter works but needs page refresh |
| **Low** | Minor annoyance, cosmetic only | Slightly inconsistent spacing |

---

## Example Bug Reports for ShopEasy Demo Store

### Example 1: Critical Functional Bug

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-001 |
| **Title** | Users can register without password confirmation matching |
| **Module** | User Registration |
| **Severity** | Major |
| **Priority** | High |
| **Environment** | Chrome 120, Windows 11 |
| **Preconditions** | User is on the Registration page |

**Steps to Reproduce:**
1. Navigate to register.html
2. Enter "Test User" in Full Name
3. Enter "test@example.com" in Email
4. Enter "Password123" in Password
5. Enter "DifferentPassword456" in Confirm Password
6. Click "Create Account"

| | |
|-------|-------|
| **Actual Result** | Account is created successfully. User is redirected to login page. No error about password mismatch. |
| **Expected Result** | An error message "Passwords do not match" should appear. Registration should be blocked. |

**Attachments:** [Screenshot or screen recording]

**Status:** New

---

### Example 2: Minor UI Bug

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-002 |
| **Title** | Price on product details page shows without decimal formatting |
| **Module** | Product Details |
| **Severity** | Minor |
| **Priority** | Low |
| **Environment** | Firefox 121, macOS |
| **Preconditions** | Products are loaded |

**Steps to Reproduce:**
1. Navigate to products.html
2. Note that prices show as "$49.99" (with two decimals)
3. Click on "Wireless Bluetooth Headphones"
4. Observe the price on the details page

| | |
|-------|-------|
| **Actual Result** | Price shows as "$49.99" on listing page but "$49.99" on details page — format is inconsistent. |
| **Expected Result** | Price format should be consistent across all pages (both showing "$49.99"). |

**Attachments:** [Screenshot comparing both pages]

**Status:** New

---

## Blank Bug Report Template

| Field | Value |
|-------|-------|
| **Bug ID** | BUG- |
| **Title** | |
| **Module** | |
| **Severity** | Critical / Major / Minor / Trivial |
| **Priority** | High / Medium / Low |
| **Environment** | |
| **Preconditions** | |

**Steps to Reproduce:**
1.
2.
3.
4.
5.

| | |
|-------|-------|
| **Actual Result** | |
| **Expected Result** | |

**Attachments:** [Screenshots, logs, etc.]

**Status:** New / Open / In Progress / Fixed / Verified / Closed

---

> **📝 QA Learning Tip:** Writing good bug reports is a skill that improves with practice. The golden rule is: **can the developer reproduce the bug by following your steps?** If yes, your bug report is good. Always include screenshots — a picture often explains the issue better than text. And remember: one bug report = one bug. Don't report multiple issues in the same report.
