# APPLICATION ANALYSIS

## 1. Application Overview

- Application: QA Automation Labs E-Commerce Shop
- Base URL: https://shop.qaautomationlabs.com
- Entry Page: /index.php
- Technology observed: PHP server-rendered web application
- Backend observed: PHP/8.2.33
- Product Catalog: 85 products across 4 categories

## 2. Authentication

### Login

- URL: /index.php
- Demo Email: demo@demo.com
- Demo Password: demo

### Verified Selectors

| Element | Selector |
|---|---|
| Email | getByTestId('login-email-input') |
| Password | getByTestId('login-password-input') |
| Password Toggle | getByTestId('login-password-toggle') |
| Remember Me | getByTestId('login-remember-me') |
| Login | getByTestId('login-submit-btn') |

### Logout

Verified selector:

`getByTestId('header-logout-btn')`

Logout redirects the user to the Sign In page.

## 3. Shop

Verified Shop navigation:

`getByTestId('shop-now-mens-wear')`

Observed categories:

- Men Fashion
- Women Fashion
- Kids Fashion
- Electronics

## 4. Men's Wear

Observed:

- 20 products displayed
- Search Products
- Sort By
- Filter by Type
- Filter by Price
- Filter by Size
- Go To Back

### Type Filters

- Formal
- Footwear

### Price Filters

- $0 - $100
- $101 - $200
- $201 - $300
- $301 - $400
- $401 - $500

### Size Filters

- Small
- Medium
- Large
- Extra Large
- Double Extra Large

### Sort Options

1. Price: Low to High
2. Price: High to Low
3. Name: A to Z
4. Name: Z to A

## 5. Product Details

Tested product:

- Product: Black T-Shirt
- Price: $150
- Reviews: 99
- Add to Cart available

Verified selector:

`getByTestId('add-to-cart-21')`

No quantity, size, or color selector was observed on the tested product details page.

## 6. Cart

Verified selectors:

| Element | Selector |
|---|---|
| Cart | getByTestId('header-cart-link') |
| Quantity | getByTestId('cart-qty-21') |
| Checkout | getByTestId('proceed-to-checkout-btn') |

Observed:

- Unit price: $150
- Quantity can be changed
- Quantity 2 resulted in product total $300
- Cart total updated to $300
- Removing the product resulted in an empty cart
- Empty cart message: `Your Cart is Empty`
- Empty cart total: $0
- Start Shopping option available

## 7. Checkout

### Billing Fields

| Field | Required | Selector |
|---|---|---|
| First Name | Yes | getByTestId('checkout-firstname-input') |
| Middle Name | No | Not captured |
| Last Name | Yes | getByTestId('checkout-lastname-input') |
| E-mail | Yes | getByTestId('checkout-email-input') |
| Mobile No. | Yes | getByTestId('checkout-phone-input') |
| Address | Yes | getByTestId('checkout-address-input') |
| State | Yes | getByTestId('checkout-state-input') |
| City | Yes | getByTestId('checkout-city-input') |
| Pin Code | Yes | getByTestId('checkout-pincode-input') |

Continue selector:

`getByTestId('continue-btn')`

### Validation

Submitting the checkout form with empty mandatory fields produced:

`Please enter your first name.`

## 8. Confirm Details

After valid billing information is submitted, the application navigates to:

`Home / Confirm Details`

The following information was displayed:

- First Name
- Middle Name
- Last Name
- Email
- Phone
- Address
- State
- City
- Pin Code

Payment section displayed the order total.

## 9. Order Placement

Verified selector:

`getByTestId('place-order-btn')`

After placing the order:

- Confirmation page: `Home / Thanks`
- Message: `Thank You for Your Order!`
- Message: `Your order has been placed successfully.`
- Cart count becomes 0

Verified selector:

`getByTestId('shop-again-btn')`

No order ID or order status was observed on the confirmation page.

## 10. Network/API Discovery

Network inspection was performed using Chrome DevTools.

Observed Shop request:

- URL: https://shop.qaautomationlabs.com/shop.php
- Method: GET
- Status: 200 OK
- Content-Type: text/html
- Backend: PHP/8.2.33

No REST/JSON API or application Fetch/XHR endpoint was observed during the tested UI flow.

The application appears to rely primarily on server-rendered PHP page requests for the tested functionality.

API automation should therefore NOT be invented. Any API automation must be based on subsequently discovered real endpoints.

## 11. Application Console Observation

During inspection, the browser console displayed:

`Uncaught TypeError: $(...).owlCarousel is not a function`

Location observed:

`main.js`

This is recorded as an application-side console error and is not being treated as an automation framework defect.

## 12. Locator Strategy

Codegen confirmed stable `data-testid` selectors for major application elements.

Preferred locator strategy:

1. data-testid
2. Role-based locator
3. Text locator
4. CSS/XPath only when necessary

Avoid fragile generated selectors such as:

`locator('div').filter({ hasText: 'E-mail*' }).nth(5)`

## 13. Automation Scope

### Authentication
- Login with valid credentials
- Invalid login
- Logout

### Product
- Navigate to category
- Search product
- Filter products
- Sort products
- Open product details
- Add product to cart

### Cart
- Verify product
- Update quantity
- Verify total
- Remove product
- Empty cart validation
- Proceed to checkout

### Checkout
- Mandatory field validation
- Valid billing information
- Confirm details
- Place order
- Verify successful order
- Verify cart reset

### Cross-browser
- Chromium
- Firefox
- WebKit

## 14. Known Limitations / Not Observed

The following were not observed during application inspection and must not be invented:

- Separate payment method fields
- Payment gateway integration
- Order ID
- Order status page
- Product size selection on product details
- Product color selection on product details
- REST API endpoints
- Fetch/XHR business APIs
- Shipping/tax/discount calculations

## 15. Selector Evidence Source

Selectors were captured using Playwright Codegen against the real application.

No selectors should be invented during framework implementation.
