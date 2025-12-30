import { Navbar } from "../components/navbar";
import Footer from "../components/footer";
import InsightsHero from "./components/insights-hero";
import InsightsList from "./components/insights-list";

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <InsightsHero />
      <InsightsList />
      <Footer />
    </>
  );
}
