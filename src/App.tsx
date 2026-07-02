import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./lib/LanguageContext";
import { NotebookPage } from "./components/layout/NotebookPage";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";
import { Stack } from "./components/sections/Stack";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <NotebookPage>
          <Header />
          <main>
            <Hero />
            <Projects />
            <About />
            <Stack />
            <Contact />
          </main>
          <Footer />
        </NotebookPage>
      </LanguageProvider>
    </MotionConfig>
  );
}

export default App;
