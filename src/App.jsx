import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AllProducts from "./components/products/AllProducts";
import PopularJackets from "./components/products/PopularJackets";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AllProducts />
      <PopularJackets />
    </>
  );
}

export default App;
