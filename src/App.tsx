import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/landing/LandingPage";
import ProjectPage from "./pages/project/ProjectPage";

function App() {
  return (
    <BrowserRouter basename="/gope-dev">
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
