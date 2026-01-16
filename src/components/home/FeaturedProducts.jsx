import { getFeaturedProductsController } from "@/controllers/productsController";
import PrimaryButton from "../shared/button/PrimaryButton";
import MainHeadings from "../shared/headings/MainHeadings";
import SubHeadings from "../shared/headings/SubHeadings";
import ProductCard from "../cards/ProductCard";
//const delay = (ms)=> new Promise(resolve=>setTimeout(resolve, ms))

const FeaturedProducts = async () => {
  //await delay(10000);
  //fetch data
  const { result } = await getFeaturedProductsController();
  //console.log(result);
  return (
    <div className="space-y-16 py-12">
      <div className="lg:space-y-4 md:space-y-2 space-y-1">
        <SubHeadings>Featured Products</SubHeadings>
        <div className="flex lg:justify-between lg:items-end lg:flex-row flex-col gap-6">
          <MainHeadings highlight="Collection">Our Featured </MainHeadings>
          <div className="flex gap-4">
            <PrimaryButton>Explore Shop</PrimaryButton>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {result.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
