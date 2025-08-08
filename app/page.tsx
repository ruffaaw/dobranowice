import Investment from "@/components/Investment";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />
      <HomeSection />
      <Investment />
    </div>
  );
}
