import "./App.css";
import Header from "./components/HeaderBanner/Header";
import ServiceSection from "./components/Service/ServiceSection";
import SkillSection from "./components/Skill/SkillSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";
import PortfolioBody from "./components/Portfolio/PortfolioBody";
import Testimonials from "./components/Testimonial/Testimonials";
import BlogSection from "./components/Blog/BlogSection";
import FormSection from "./components/FormFooter/FormSection";
import Footer from "./components/FormFooter/Footer";
import Modals from "./components/ModalsSection/Modals";
import ScrollToTopButton from "./components/UI/ScrollToTopButton";
import EducationExperienceSection from "./components/Education/EducationExperienceSection";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <About />
      <ServiceSection />
      <SkillSection />
      <PortfolioSection />
      <PortfolioBody />
      <EducationExperienceSection />
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
