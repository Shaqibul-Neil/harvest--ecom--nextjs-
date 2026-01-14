import Banner from "@/components/home/Banner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import MainHeadings from "@/components/shared/headings/MainHeadings";

export default async function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner />
      </section>
      <section className="max-w-[1440px] w-11/12 mx-auto">
        <FeaturedProducts />
      </section>
    </div>
  );
}
