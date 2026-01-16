import { getFeaturedProductsController } from "@/controllers/productsController";
import PrimaryButton from "../shared/button/PrimaryButton";
import MainHeadings from "../shared/headings/MainHeadings";
import SubHeadings from "../shared/headings/SubHeadings";
import ProductCard from "../cards/ProductCard";
import AnimateOnScroll from "../animation/AnimateOnScroll";
//const delay = (ms)=> new Promise(resolve=>setTimeout(resolve, ms))

const FeaturedProducts = async () => {
  //await delay(10000);
  //fetch data
  const { result } = await getFeaturedProductsController();
  //console.log(result);
  return (
    <div className="space-y-16 py-12">
      <div className="lg:space-y-8 space-y-6">
        <AnimateOnScroll delay={300} offset={20}>
          <SubHeadings>Featured Products</SubHeadings>
        </AnimateOnScroll>

        <div className="flex lg:justify-between lg:items-end lg:flex-row flex-col gap-6">
          <AnimateOnScroll delay={300} offset={20}>
            <MainHeadings
              className="animate-fadeInUp"
              style={{ animationDelay: `${400}ms` }}
              highlight="Collection"
            >
              Our Featured{" "}
            </MainHeadings>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300} offset={20}>
            <div className="flex gap-4">
              <PrimaryButton>Explore Shop</PrimaryButton>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {result.map((product, idx) => (
          <AnimateOnScroll key={product._id} delay={idx * 200}>
            <ProductCard product={product} />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
