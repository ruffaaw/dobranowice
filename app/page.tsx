import Investment from "@/components/Investment";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import Profits from "@/components/Profits";
import Gallery from "@/components/Gallery";
import Houses from "@/components/Houses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />
      <HomeSection />
      <Investment />
      <Profits />
      <Houses />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
