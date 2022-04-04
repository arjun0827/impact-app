import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import UsSection from "./components/why-us-section/why-us-section";
import GrowingSection from "./components/why-growing-section/WhyGrowingSection";
import SwiperSection from "./components/slider/SwiperSection";
import BlogPost from "./components/blogPost/BlogPost";
import FooterSection from "./components/footer/FooterSection";
// import Modal from "./components/modal/Modal";
const App = () =>{
  return(
    <div>
      
      <Navbar />
      <HeroSection/>
      <UsSection />
      <GrowingSection />
      <SwiperSection />
      <BlogPost />
      <FooterSection />
      {/* <Modal /> */}

    </div>

  )
}

export default App;
