import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./routes/index";
import Portrait from "./routes/portrait";
import Galerie from "./routes/galerie";
import Fonderie from "./routes/fonderie";
import Encres from "./routes/encres";
import Cyanotypes from "./routes/cyanotypes";
import Expositions from "./routes/expositions";
import Contact from "./routes/contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/fonderie" element={<Fonderie />} />
        <Route path="/encres" element={<Encres />} />
        <Route path="/cyanotypes" element={<Cyanotypes />} />
        <Route path="/expositions" element={<Expositions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}