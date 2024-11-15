import Footer from "@/components/shared/global/Footer";
import BannerText from "@/components/shared/Home/BannerText";
import Communitybanner from "@/components/shared/Home/Communitybanner";
import Discover from "@/components/shared/Home/Discover";
import Hero from "@/components/shared/Home/Hero";
import HomeBanner from "@/components/shared/Home/HomeBanner";
import Platform from "@/components/shared/Home/Platform";
import PlatformItem from "@/components/shared/Home/PlatformItem";
import Products from "@/components/shared/blog/Products";
import { ProductsServer } from "@/components/shared/Home/ProductsServer";
import MobileNav from "@/components/shared/Mobile/MobileNav";

export default function Home() {
  return (
    <main>
      <MobileNav />
      <Hero />
      {/* <Products/> */}
      <ProductsServer />
      <HomeBanner />
      <BannerText />
      <Platform />
      <PlatformItem />
      <Discover />
      <Communitybanner />
    </main>
  );
}
