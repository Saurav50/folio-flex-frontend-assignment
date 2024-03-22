import "./App.css";
import Header from "./components/Header";
import ServiceSection from "./components/ServiceSection";
import SkillSection from "./components/SkillSection";
import PortfolioSection from "./components/PortfolioSection";
import PortfolioBody from "./components/PortfolioBody";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";
import Modals from "./components/Modals";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <Header />
      <ServiceSection />
      <SkillSection />
      <PortfolioSection />
      <PortfolioBody />
      <Testimonials />
      <BlogSection />
      <FormSection />
      <Footer />
      <ScrollToTopButton />
      <Modals />
    </>
  );
}

export default App;
