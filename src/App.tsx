import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { SuspenseFallback } from "./components/SuspenseFallback";
import BootSequence from "./pages/landing/hero/BootSequence";

const LandingPage = lazy(() => import("./pages/landing/LandingPage"));
const ProjectPage = lazy(() => import("./pages/project/ProjectPage"));

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <BrowserRouter basename="/gope-dev">
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        {!bootComplete ? (
          <BootSequence onComplete={() => setBootComplete(true)} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<SuspenseFallback />}>
                  <LandingPage />
                </Suspense>
              }
            />
            <Route
              path="/project/:projectId"
              element={
                <Suspense fallback={<SuspenseFallback />}>
                  <ProjectPage />
                </Suspense>
              }
            />
          </Routes>
        )}
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
