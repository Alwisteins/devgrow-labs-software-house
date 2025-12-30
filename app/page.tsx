import { Navbar } from "./components/navbar";
import Hero from "./sections/hero";
import TrustedBy from "./components/trusted-by";
import Problem from "./sections/problem";
import Solution from "./sections/solution";
import Services from "./sections/services";
import Portfolio from "./sections/portfolios";
import HowWeWork from "./sections/how-we-work";
import CTA from "./sections/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Problem />
      <Solution />
      <Services />
      <Portfolio />
      <HowWeWork />
      <CTA />
      <Footer />
    </div>
  );
}
