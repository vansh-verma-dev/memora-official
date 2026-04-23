import AboutSection from "./components/About/about";
import FAQSection from "./components/FAQ/faq";
import Footer from "./components/Footer/Footer";
import Hero, { TrustSection } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ReviewSection from "./components/Riview/review";
import Stepsection from "./components/Step/step";
import BookShowcase from "./components/TemplateBook/book";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <Stepsection />
      <ReviewSection />
      {/* <BookShowcase /> */}
      <AboutSection />
      <FAQSection />
      <Footer />

    </>
  )
}
export default App;