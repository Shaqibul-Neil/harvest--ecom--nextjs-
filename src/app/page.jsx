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

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-20">
      <p>Server : {JSON.stringify(session)}</p>
      {/* <p>{session.user.role}</p> */}
      <Test />
      <section>
        <Banner />
      </section>
      <section className="max-w-[1440px] w-11/12 mx-auto px-5">
        <FeaturedProducts />
      </section>
      <section className="bg-green-100 py-8 md:mb-24 mb-16">
        <WhyChooseUs />
      </section>
      <section className=" py-8 md:mb-24 mb-16">
        <SeasonalPromoSection />
      </section>
      <section className="max-w-[1440px] w-11/12 mx-auto px-5 lg:pb-20 md:pb-16 pb-10">
        <FeaturedHighlightSection />
      </section>
      <section className="max-w-[1440px] w-11/12 mx-auto px-5 lg:pb-20 md:pb-10 pb-4">
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
