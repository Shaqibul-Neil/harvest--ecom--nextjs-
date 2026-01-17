// Server Component - SEO Friendly Banner
import BannerSlider from "./BannerSlider";
// Images
import vegetable from "../../assets/mixedVegetable.webp";
import bakery from "../../assets/mixedBakery.webp";
import fruit from "../../assets/mixedFruit.webp";

// Slide data (defined in server component for SSR)
const slides = [
  {
    dynamic: "Healthy Fresh Fruits",
    offer:
      "10% Off on all fruits — taste the sweetness of nature and boost your day.",
    img: fruit,
    key: 1,
    badge: "Seasonal Pick",
    discount: "Save 10%",
  },
  {
    dynamic: "Warm Bakery Snacks",
    offer:
      "20% Off on all bakery items. Freshly baked, just for you — taste happiness.",
    img: bakery,
    key: 2,
    badge: "Fresh Today",
    discount: "Save 20%",
  },
  {
    dynamic: "Organic Fresh Vegetables",
    offer:
      "Free delivery on all vegetables. Farm-to-table freshness guaranteed.",
    img: vegetable,
    key: 3,
    badge: "Free Delivery",
    discount: "Free Ship",
  },
];

const Banner = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] overflow-hidden py-16"
      aria-label="Featured Products Banner"
    >
      {/* ========== BACKGROUND LAYERS ========== */}

      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-white to-emerald-50/50" />

      {/* Decorative Blur Orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-green-200/50 to-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-lime-200/40 to-green-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-100/20 via-transparent to-green-100/20 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ========== CONTENT CONTAINER ========== */}
      <div className="relative max-w-[1440px] w-11/12 mx-auto px-5 py-6 lg:py-0">
        {/* SEO Hidden Content - Search engines will read this */}
        <div className="sr-only">
          <h1>Harvest - Fresh Organic Products</h1>
          <p>
            Explore our collection of healthy fresh fruits, warm bakery snacks,
            and organic fresh vegetables. Get up to 20% off on all items with
            free delivery on vegetables.
          </p>
          <ul>
            <li>Healthy Fresh Fruits - 10% Off on all fruits</li>
            <li>Warm Snacks - 20% Off on all bakery items</li>
            <li>Organic Fresh Vegetables - Free delivery</li>
          </ul>
        </div>

        {/* Interactive Slider (Client Component) */}
        <BannerSlider slides={slides} />
      </div>

      {/* ========== BOTTOM ACCENT LINE ========== */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />
    </section>
  );
};

export default Banner;
