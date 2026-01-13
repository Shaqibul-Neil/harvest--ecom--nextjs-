This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

🎯 MVC Quick Reference (মনে রাখার শর্টকাট)
📁 Repository = "Database এর সাথে কথা বলে"
যা থাকবে উদাহরণ
find...() findProductById(),
findUserByEmail()
create...() createProduct(),
createUser()
update...() updateProduct(), updateUser()
delete...() deleteProduct(), deleteUser()
getAll...() getAllProducts(), getAllUsers()
মনে রাখুন: শুধু CRUD - কোন logic নেই!

📁 Service = "Business Logic / নিয়ম-কানুন"
যা থাকবে উদাহরণ
Validation validateProductData()
Data processing Password hashing, price calculation
Complex operations Multiple repository calls
Business rules "Admin ছাড়া delete করতে পারবে না"
মনে রাখুন: Repository কে call করবে, logic প্রয়োগ করবে!

📁 Controller = "Request নেয়, Service কে বলে, Response দেয়"
যা থাকবে কাজ
postProduct() Product add এর request নেয়
getProducts() Product list এর request নেয়
updateProduct() Product update এর request নেয়
মনে রাখুন: শুধু traffic police - নিজে কিছু করে না!

🛒 Product এর জন্য উদাহরণ:
📁 repositories/productRepository.js
├── findProductById()
├── findAllProducts()
├── createProduct()
├── updateProduct()
└── deleteProduct()

📁 services/productService.js
├── validateProductData() ← Zod validation
├── addProduct() ← validate → create
├── getProducts() ← filter, sort, paginate
└── updateProductStock() ← business logic

📁 controllers/productController.js
├── postProduct() ← service.addProduct() call
├── getProducts() ← service.getProducts() call
└── deleteProduct() ← service.deleteProduct() call

📌 এক লাইনে মনে রাখুন:
Layer এক কথায়
Repository Database CRUD
Service Validation + Business Logic
Controller Request → Service → Response

⚡ Decision Flowchart:
এই কোড কি database এ যাচ্ছে/আসছে directly?
├── হ্যাঁ → Repository
└── না
└── এই কোড কি validation/business rule/processing?
├── হ্যাঁ → Service
└── না
└── এটা কি request handle করছে?
└── হ্যাঁ → Controller

🎯 কখন Service লাগবে, কখন না?
Operation | Service লাগবে? | কেন?
Create | ✅ হ্যাঁ | Validation, hashing, duplicate check
Get All |❓ |Maybe Filtering, pagination থাকলে হ্যাঁ
Get One | ❌ |না Simple find, no logic
Update | ❓ | Maybe Authorization check থাকলে হ্যাঁ
Delete | ❓ | Mayb "Only admin can delete" থাকলে হ্যাঁ
