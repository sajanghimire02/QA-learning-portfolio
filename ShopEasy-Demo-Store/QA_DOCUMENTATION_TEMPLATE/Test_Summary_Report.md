# Test Summary Report

**Prepared By:** Sajan Ghimire
**Test Period:** June 4, 2026
**Application:** ShopEasy Demo Store v1.0

---

## 1. Executive Summary

Full test cycle completed across all 10 modules. 42 test cases executed — 26 passed, 16 failed. Found 17 bugs total (1 Critical, 7 Major, 9 Minor). Core user flows (login, browse, purchase) work but have validation gaps and UI inconsistencies that need addressing.

---

## 2. Test Results

| Metric | Count |
|--------|-------|
| Total Test Cases | 42 |
| Passed | 26 |
| Failed | 16 |
| Pass Rate | 62% |

### By Module

| Module | Passed | Failed | Total | Pass Rate |
|--------|--------|--------|-------|-----------|
| Registration | 0 | 1 | 1 | 0% |
| Login | 1 | 1 | 2 | 50% |
| Product Listing/Search | 6 | 2 | 8 | 75% |
| Product Details | 3 | 1 | 4 | 75% |
| Shopping Cart | 3 | 5 | 8 | 38% |
| Checkout | 3 | 4 | 7 | 43% |
| Forgot Password | 2 | 1 | 3 | 67% |
| Order History | 4 | 1 | 5 | 80% |
| User Profile | 4 | 1 | 5 | 80% |

---

## 3. Bug Summary

| Severity | Count |
|----------|-------|
| Critical | 1 |
| Major | 7 |
| Minor | 9 |
| **Total** | **17** |

### All Bugs Found

| ID | Title | Module | Severity |
|----|-------|--------|----------|
| BUG-001 | Registration accepts mismatched passwords | Registration | Major |
| BUG-002 | Login error says "Invalid username" for wrong password | Login | Minor |
| BUG-003 | Empty search shows "No products found" | Products | Major |
| BUG-004 | Price filter min > max gives no warning | Products | Minor |
| BUG-005 | Price format inconsistent on details page | Products | Minor |
| BUG-006 | Cart badge shows unique items not total qty | Cart | Minor |
| BUG-007 | Quantity input accepts negative numbers | Cart | Major |
| BUG-008 | No stock limit check when adding to cart | Cart | Major |
| BUG-009 | Decreasing quantity below 1 keeps item in cart | Cart | Major |
| BUG-010 | Cart total does not update after removing item | Cart | Major |
| BUG-011 | Checkout form has no field validation | Checkout | Critical |
| BUG-012 | Card number accepts letters/special chars | Checkout | Major |
| BUG-013 | CVV accepts 1 or 2 digit values | Checkout | Major |
| BUG-014 | Potential order duplication from double saveOrders | Checkout | Minor |
| BUG-015 | Forgot password always says "sent" for unregistered emails | Forgot Password | Minor |
| BUG-016 | Orders not sorted newest first | Orders | Minor |
| BUG-017 | Phone number field accepts any characters | Profile | Minor |

---

## 4. Key Observations

- Cart module has the most bugs (5) — quantity validation is missing entirely
- Checkout has the most severe bug — no field validation means empty orders go through
- Products module works well for basic use but has edge case gaps
- Profile and Orders are the most stable modules

## 5. Recommendations

1. Add password-confirm comparison in registration
2. Add quantity > 0 and stock limit checks in addToCart
3. Add field validation in checkout form
4. Fix card number to only accept digits
5. Fix CVV validation to require exactly 3 or 4 digits
6. Fix cart total recalculation after item removal
7. Fix order sorting to show newest first
