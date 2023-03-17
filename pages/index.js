import CtaBanner from "@/components/ctaBanner/CtaBanner";
import DiscountSection from "@/components/discountSection/DiscountSection";
import Hero from "@/components/hero/Hero";
import IntroItems from "@/components/introItems/IntroItems";
import NewProducts from "@/components/newProducts/NewProducts";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <IntroItems />
        <NewProducts />
        <DiscountSection />
        <CtaBanner />
      </main>
    </>
  );
}
