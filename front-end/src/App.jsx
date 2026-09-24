import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
