import Banner from "@/components/home/Banner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Test from "@/components/home/Test";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedHighlightSection from "@/components/home/FeaturedHighlightSection";
import RecentPosts from "@/components/home/RecentPosts";
import Newsletter from "@/components/home/Newsletter";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import SeasonalPromoSection from "@/components/home/SeasonalPromoSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <p>Server : {JSON.stringify(session)}</p>
      {/* <p>{session.user.role}</p> */}
      <Test />
      <section>
        <Banner />
      </section>
      <section className="max-w-[1440px] w-11/12 mx-auto px-5 mb-10">
        <FeaturedProducts />
      </section>
      <section className="bg-green-100 py-8 md:mb-10 mb-8">
        <WhyChooseUs />
      </section>
      <section className="lg:mb-20 md:mb-16 mb-8">
        <SeasonalPromoSection />
      </section>
      <section className="max-w-[1440px] w-11/12 mx-auto px-5 lg:mb-20 md:mb-16 mb-12">
        <FeaturedHighlightSection />
      </section>
      <section className="lg:mb-20 md:mb-12 mb-8">
        <SustainabilitySection />
      </section>
      <section className="max-w-[1440px] w-11/12 mx-auto px-5 lg:mb-32 md:mb-28 mb-20">
        {" "}
        <RecentPosts />
      </section>
      <section>
        {" "}
        <Newsletter />
      </section>
    </div>
  );
}
