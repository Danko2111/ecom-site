import CtaBanner from "@/components/ctaBanner/CtaBanner";
import DiscountSection from "@/components/discountSection/DiscountSection";
import Hero from "@/components/hero/Hero";
import IntroItems from "@/components/introItems/IntroItems";
import NewProducts from "@/components/newProducts/NewProducts";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import CartAside from "@/components/cartAside/CartAside";
import { useAppContext } from "@/context/AppWrapper";

export default function Home() {
  const { setCartOpen, cartOpen } = useAppContext();
  const handleClick = () => {
    if (cartOpen) {
      setCartOpen(false);
    }
  };
  return (
    <main onClick={handleClick}>
      <Header />
      <main className="">
        <Hero />
        <IntroItems />
        <NewProducts />
        <DiscountSection />
        <CtaBanner />
      </main>
      <Footer />
      <CartAside />
    </main>
  );
}
