import Banner from "@/components/home/Banner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Test from "@/components/home/Test";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

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
      <section className="max-w-[1440px] w-11/12 mx-auto">
        <FeaturedProducts />
      </section>
    </div>
  );
}
