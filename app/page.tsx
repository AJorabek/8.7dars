import About from "./layouts/About";
import Companies from "./layouts/Companies";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import Popular from "./layouts/Popular";
import Shop from "./layouts/Shop";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Companies />
      <About />
      <Popular />
      <Shop/>
      <Footer />
    </main>
  );
}
