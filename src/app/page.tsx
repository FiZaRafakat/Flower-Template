import FlowerShop from "./components/FlowerShop";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Offer from "./components/Offer";
import Section from "./components/Section";

function Header(){
  return(
      <main className="bg-[rgb(244,242,236)] flex justify-center items-center w-full flex-col select-none">
       <div className="w-[1100px] h-[3150px]">
       <Nav />
       <div className=" bg-[url(images/hero-section.webp)] h-[900px] w-full bg-cover bg-no-repeat bg-fixed pt-10">
       <Hero />
       <Offer />
       <Section />
      <FlowerShop />
       </div>
       </div>
       <Footer/>
      </main>
  )
}
export default Header ;
