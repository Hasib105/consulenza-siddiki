import Image from "next/image";
import Hero from "./component/Hero";
import { Services } from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
   <div>
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
   </div>
  );
}
