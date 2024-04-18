import Testimonials from "./components/feedbacks/Testimonials";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AllProducts from "./components/products/AllProducts";
import PopularJackets from "./components/products/PopularJackets";
import Banner from "./components/small sections/Banner";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Banner />
      <AllProducts />
      <PopularJackets />
      <Testimonials />
    </>
  );
}

export default App;
