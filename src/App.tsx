import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./pages/landing/Hero";
import Experience from "./pages/landing/Experience";
import AboutMe from "./pages/landing/AboutMe";
import Work from "./pages/landing/work/Work";
import ContactMe from "./pages/landing/ContactMe";
import Stack from "./pages/landing/stack/Stack";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto flex flex-col pb-16 pt-10">
        <Hero />
        <AboutMe />
        <Experience />
        <Work />
        <Stack />
        <ContactMe />
      </main>

      <Footer />
    </div>
  );
}

export default App;
