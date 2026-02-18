import { useEffect, useState } from 'react';
import { useLocation, Outlet } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { theme } from "./components/theme";

/**
 * Main Layout Wrapper
 * Renders the persistent Header and Footer around the current page content.
 */
const RootLayout = () => {
    const { pathname } = useLocation();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const totalScrollable = docHeight - winHeight;
        const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
        setScrollProgress(progress);
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className={theme.layout.page}>
        <div className="fixed top-0 right-0 bottom-0 w-1 z-[60] pointer-events-none flex items-end">
          <div
            className="w-full bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-600 rounded-full transition-all duration-150 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        <Header />
        <main className={theme.layout.mainWithHeaderOffset}>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

  export default RootLayout;
  