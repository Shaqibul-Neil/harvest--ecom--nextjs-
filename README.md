# 🌿 Harvest — Premium Organic E-Commerce Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb)

**A modern, full-stack e-commerce application for organic groceries built with Next.js 16 App Router, featuring a premium UI/UX design, real-time cart management, and secure authentication.**

</div>

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Implemented Features](#-implemented-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Route Summary](#-route-summary)
- [Project Architecture](#-project-architecture)
- [Feature Breakdown](#-feature-breakdown)
- [Future Roadmap](#-future-roadmap)

---

## 🌟 Project Overview

**Harvest** is a production-ready e-commerce platform designed for organic and farm-fresh grocery shopping. The application showcases modern web development practices with a focus on performance, accessibility, and beautiful design aesthetics. Built with Next.js 16's App Router for optimal SEO and server-side rendering capabilities.

---

## ✅ Implemented Features

### 🔐 Authentication & Security

- [x] **Email/Password Login** — Secure credential-based authentication
- [x] **Google OAuth** — One-click social login integration
- [x] **User Registration** — Complete signup flow with form validation
- [x] **Password Hashing** — bcrypt encryption for secure storage
- [x] **Protected Routes** — NextAuth.js middleware for route protection
- [x] **Role-based Access** — User/Admin role differentiation

### 🛒 Cart System

- [x] **Add to Cart** — Add products with quantity selection
- [x] **Update Quantity** — Increase/decrease item quantities
- [x] **Remove Items** — Delete products from cart
- [x] **Real-time Sync** — Cart persists in MongoDB for logged-in users
- [x] **Stock Validation** — Prevents exceeding available stock
- [x] **Price Change Detection** — Notifies when product prices change after adding to cart

### 📦 Product Display

- [x] **Product Listing** — Responsive grid with all products
- [x] **Product Details Page** — Dynamic `[id]` route with full product info
- [x] **Star Rating Display** — Visual 5-star rating system
- [x] **Price & Discount** — Shows MRP, discount percentage, and final price
- [x] **Category Labels** — Product categorization display

### 🎨 UI/UX Design

- [x] **Responsive Layout** — Mobile, Tablet, Desktop optimized
- [x] **Hero Banner Slider** — Swiper.js carousel with animations
- [x] **Loading Skeletons** — Placeholder UI during data fetch
- [x] **Toast Notifications** — React Hot Toast for user feedback
- [x] **Framer Motion Animations** — Smooth page transitions and micro-interactions
- [x] **Custom Error Pages** — 404, Error, Forbidden pages

### 🏠 Homepage Sections

- [x] **Hero Banner** — Full-width promotional slider
- [x] **Featured Products** — Highlighted product grid
- [x] **Why Choose Us** — Trust badges and USPs
- [x] **Featured Highlight** — Special category spotlight
- [x] **Seasonal Promo** — Limited-time offers section
- [x] **Sustainability Section** — Brand story with animated stats
- [x] **Recent Posts** — Blog/news preview cards
- [x] **Newsletter** — Email subscription banner

### 📄 Static Pages

- [x] **About Page** — Company information
- [x] **Contact Page** — Contact details

---

## 🛠 Tech Stack

| Category           | Technologies                                |
| ------------------ | ------------------------------------------- |
| **Framework**      | Next.js 16.1.1 (App Router)                 |
| **Frontend**       | React 19.2.3, Tailwind CSS 4                |
| **Authentication** | NextAuth.js v4 (Credentials + Google OAuth) |
| **Database**       | MongoDB 7.0                                 |
| **UI Components**  | shadcn/ui, Radix UI Primitives              |
| **Forms**          | React Hook Form + Zod Validation            |
| **Animations**     | Framer Motion (motion)                      |
| **Carousel**       | Swiper.js 12                                |
| **Icons**          | Lucide React, React Icons                   |
| **Notifications**  | React Hot Toast, SweetAlert2                |
| **Utilities**      | clsx, tailwind-merge (cn function)          |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**
- **MongoDB** database (local or Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/harvest.git
   cd harvest
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables) section)

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**  
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB
MONGODB_URI=mongodb+srv://your-connection-string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

---

## 🗺 Route Summary

### Public Routes

| Route            | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `/`              | Home page with hero banner, featured products, and promotional sections |
| `/products`      | Product listing page with all available products                        |
| `/products/[id]` | Individual product details page                                         |
| `/about`         | About us page                                                           |
| `/contact`       | Contact information page                                                |
| `/login`         | User login page                                                         |
| `/register`      | New user registration page                                              |

### Protected Routes (Authentication Required)

| Route                | Description             |
| -------------------- | ----------------------- |
| `/cart`              | Shopping cart page      |
| `/cart/checkout`     | Checkout process page   |
| `/dashboard`         | User/Admin dashboard    |
| `/dashboard/profile` | User profile management |

### API Routes

| Endpoint                  | Method   | Description                          |
| ------------------------- | -------- | ------------------------------------ |
| `/api/auth/[...nextauth]` | GET/POST | NextAuth.js authentication endpoints |
| `/api/cart`               | GET      | Fetch user's cart items              |
| `/api/cart`               | POST     | Add item to cart                     |
| `/api/cart`               | DELETE   | Remove item from cart                |

### Special Pages

| Route        | Description                               |
| ------------ | ----------------------------------------- |
| `/forbidden` | Access denied page for unauthorized users |
| `/not-found` | Custom 404 page                           |
| `/error`     | Custom error boundary page                |

---

## 📁 Project Architecture

```
harvest/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (commonLayout)/       # Routes with header/footer
│   │   │   ├── (auth)/           # Login & Register
│   │   │   ├── about/
│   │   │   ├── cart/
│   │   │   ├── contact/
│   │   │   └── products/
│   │   ├── (dashboardLayout)/    # Dashboard routes
│   │   │   └── dashboard/
│   │   ├── api/                  # API route handlers
│   │   │   ├── auth/
│   │   │   └── cart/
│   │   ├── globals.css
│   │   ├── layout.jsx            # Root layout
│   │   └── page.jsx              # Home page
│   │
│   ├── components/
│   │   ├── animation/            # Animation wrapper components
│   │   ├── cards/                # ProductCard, CartCard, etc.
│   │   ├── cart/                 # Cart-specific components
│   │   ├── form/                 # Login, Register forms
│   │   ├── home/                 # Homepage sections
│   │   ├── shared/               # Reusable UI elements
│   │   │   ├── button/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── headings/
│   │   │   └── skeletons/
│   │   └── ui/                   # shadcn/ui components
│   │
│   ├── context/                  # React Context providers
│   │   └── CartContext.jsx
│   │
│   ├── controllers/              # Business logic layer
│   │   ├── cartController.js
│   │   ├── productsController.js
│   │   └── userController.js
│   │
│   ├── lib/                      # Utility libraries
│   │   ├── authOptions.js        # NextAuth configuration
│   │   ├── dbConnect.js          # MongoDB connection
│   │   ├── toast.js              # Custom toast helpers
│   │   └── utils.js              # cn() helper function
│   │
│   ├── provider/                 # App-level providers
│   │
│   ├── repositories/             # Data access layer
│   │   ├── cartRepository.js
│   │   ├── productRepository.js
│   │   └── userRepository.js
│   │
│   ├── schemas/                  # Zod validation schemas
│   │   └── userSchema.js
│   │
│   └── services/                 # Service layer
│       ├── cartService.js
│       ├── productServices.js
│       └── userServices.js
│
├── public/                       # Static assets
├── .env                          # Environment variables
├── package.json
├── tailwind.config.js
└── next.config.mjs
```

---

## 📚 Feature Breakdown

### 🔐 Authentication System

The authentication system uses **NextAuth.js** with multiple providers:

- **Credentials Provider**: Traditional email/password login with bcrypt password hashing
- **Google OAuth**: One-click Google sign-in
- **JWT Tokens**: Secure session management with custom callbacks
- **Role-based Access**: Users are assigned roles (user/admin) stored in MongoDB

**Form Validation**: Uses Zod schemas for comprehensive validation including:

- Email format validation
- Password strength requirements (uppercase, lowercase, number, special character)
- Phone number validation
- Required field checks

### 🛒 Cart Management System

An **Amazon-style cart** implementation with the following features:

| Feature                    | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| **Real-time Sync**         | Cart automatically syncs with MongoDB for logged-in users |
| **Optimistic Updates**     | UI updates immediately, API calls happen in background    |
| **Price Change Detection** | Tracks if product prices changed since adding to cart     |
| **Stock Validation**       | Prevents adding more items than available stock           |
| **Guest Protection**       | Only authenticated users can add items to cart            |

**Context API Architecture**:

```
CartContext.jsx
├── cart state (array of items)
├── addToStorage() - Add product to cart
├── increaseQuantity() - Increment item quantity
├── decreaseQuantity() - Decrement item quantity
└── removeFromCart() - Delete item from cart
```

### 🎨 UI Component System

Built with **shadcn/ui** components enhanced with custom styling:

- **Button**: Multiple variants (default, destructive, outline, ghost, link)
- **Form**: React Hook Form integration with automatic error handling
- **Input**: Styled input fields with validation states
- **Dropdown Menu**: Radix-based accessible dropdown
- **Navigation Menu**: Responsive navigation component

**The `cn()` Utility Function**:

```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

This function merges Tailwind classes intelligently, resolving conflicts where the last class wins.

### 🏠 Homepage Sections

| Section                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| **Banner**             | Hero carousel with promotional slides using Swiper.js |
| **Featured Products**  | Grid display of highlighted products                  |
| **Why Choose Us**      | Trust badges and value propositions                   |
| **Featured Highlight** | Spotlight on special product categories               |
| **Seasonal Promo**     | Time-limited promotional offers                       |
| **Sustainability**     | Brand story with animated statistics                  |
| **Recent Posts**       | Blog/news preview cards                               |
| **Newsletter**         | Email subscription banner                             |

### 📦 Product Features

- **Product Card**: Displays image, title, category, rating, price, and quick-add button
- **Product Details Page**: Full product information with image gallery, specifications, and add-to-cart functionality
- **Rating System**: 5-star rating display with average calculation
- **Discount Display**: Shows original price, discount percentage, and final price

---

## 🚀 Future Roadmap

The following features are planned for future development to make this a **production-grade e-commerce platform**:

### 💳 Payment & Checkout

| Feature                   | Description                                             |
| ------------------------- | ------------------------------------------------------- |
| **Payment Gateway**       | Stripe/SSLCommerz/bKash integration for secure payments |
| **Multi-step Checkout**   | Address → Shipping → Payment → Confirmation flow        |
| **Order Summary**         | Detailed breakdown before payment                       |
| **Saved Payment Methods** | Store cards securely for faster checkout                |
| **Invoice Generation**    | Auto-generate PDF invoices for orders                   |
| **Promo Codes & Coupons** | Apply discount codes at checkout                        |

### 📦 Order Management

| Feature                 | Description                                                       |
| ----------------------- | ----------------------------------------------------------------- |
| **Order Tracking**      | Real-time order status updates (Processing → Shipped → Delivered) |
| **Order History**       | View past orders with reorder option                              |
| **Order Cancellation**  | Cancel orders before shipping                                     |
| **Return & Refund**     | Request returns and track refund status                           |
| **Email Notifications** | Order confirmation, shipping updates, delivery alerts             |

### 👤 User Account Features

| Feature                | Description                              |
| ---------------------- | ---------------------------------------- |
| **Profile Management** | Edit name, phone, profile picture        |
| **Address Book**       | Save multiple shipping/billing addresses |
| **Wishlist**           | Save products for later purchase         |
| **Recently Viewed**    | Track browsing history                   |
| **Password Reset**     | Forgot password with email verification  |
| **Email Verification** | Verify email during registration         |
| **Account Deletion**   | GDPR-compliant account removal           |

### 🔍 Search & Discovery

| Feature                     | Description                                     |
| --------------------------- | ----------------------------------------------- |
| **Search Bar**              | Full-text search with autocomplete              |
| **Advanced Filters**        | Filter by price, category, rating, availability |
| **Sort Options**            | Sort by price, popularity, newest, rating       |
| **Category Navigation**     | Browse products by category/subcategory         |
| **Product Recommendations** | "You may also like" suggestions                 |

### 📊 Admin Dashboard

| Feature                  | Description                                  |
| ------------------------ | -------------------------------------------- |
| **Product CRUD**         | Add, edit, delete products with image upload |
| **Inventory Management** | Track stock levels, low stock alerts         |
| **Order Management**     | View, process, and update order statuses     |
| **User Management**      | View users, change roles, ban/unban          |
| **Sales Analytics**      | Revenue charts, best sellers, traffic stats  |
| **Coupon Management**    | Create and manage discount codes             |
| **Category Management**  | Add/edit product categories                  |
| **Bulk Import/Export**   | CSV upload for products                      |

### ⭐ Reviews & Ratings

| Feature               | Description                                |
| --------------------- | ------------------------------------------ |
| **Product Reviews**   | Customers can write reviews after purchase |
| **Star Ratings**      | Rate products 1-5 stars                    |
| **Review Moderation** | Admin approval for reviews                 |
| **Helpful Votes**     | Mark reviews as helpful                    |
| **Review Images**     | Upload photos with reviews                 |

### 📱 Progressive Web App (PWA)

| Feature                | Description                       |
| ---------------------- | --------------------------------- |
| **Offline Support**    | Browse products without internet  |
| **Push Notifications** | Order updates, promotional alerts |
| **Install to Home**    | Add to home screen on mobile      |
| **Background Sync**    | Sync cart when back online        |

### 🌐 Internationalization

| Feature                | Description                       |
| ---------------------- | --------------------------------- |
| **Multi-language**     | Bengali, English language support |
| **Multi-currency**     | BDT, USD price display            |
| **RTL Support**        | Right-to-left layout for Arabic   |
| **Localized Checkout** | Region-specific payment methods   |

### 🔒 Security & Compliance

| Feature             | Description                                  |
| ------------------- | -------------------------------------------- |
| **Rate Limiting**   | Prevent brute force attacks                  |
| **CAPTCHA**         | Bot protection on forms                      |
| **CSRF Protection** | Cross-site request forgery prevention        |
| **Data Encryption** | Encrypt sensitive data at rest               |
| **GDPR Compliance** | Cookie consent, data export, deletion rights |
| **PCI Compliance**  | Secure payment data handling                 |

### ⚡ Performance & SEO

| Feature                | Description                                |
| ---------------------- | ------------------------------------------ |
| **Image Optimization** | WebP, lazy loading, blur placeholders      |
| **CDN Integration**    | Cloudflare/Vercel Edge for faster delivery |
| **Database Indexing**  | Optimized MongoDB queries                  |
| **Caching Strategy**   | Redis/ISR for frequently accessed data     |
| **Structured Data**    | JSON-LD for rich search results            |
| **Sitemap Generation** | Auto-generated XML sitemap                 |
| **Core Web Vitals**    | Optimize LCP, FID, CLS scores              |

### 📧 Marketing & Engagement

| Feature                   | Description                             |
| ------------------------- | --------------------------------------- |
| **Email Marketing**       | Newsletter campaigns with Mailchimp     |
| **Abandoned Cart Emails** | Remind users about incomplete purchases |
| **Social Sharing**        | Share products on Facebook, WhatsApp    |
| **Referral Program**      | Earn discounts by referring friends     |
| **Loyalty Points**        | Earn points on purchases                |

### 🧪 Testing & Quality

| Feature              | Description                          |
| -------------------- | ------------------------------------ |
| **Unit Tests**       | Jest for component testing           |
| **E2E Tests**        | Playwright/Cypress for user flows    |
| **API Tests**        | Supertest for endpoint validation    |
| **CI/CD Pipeline**   | GitHub Actions for automated testing |
| **Error Monitoring** | Sentry for real-time error tracking  |

---

## 📄 License

This project is developed as part of the **SCIC Next.js Assignment**.

---

<div align="center">

**Made with 💚 using Next.js**

</div>
