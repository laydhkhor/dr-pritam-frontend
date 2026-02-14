import { useEffect} from 'react';
import { useLocation, Outlet } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";

/**
 * Main Layout Wrapper
 * Renders the persistent Header and Footer around the current page content.
 */
const RootLayout = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
  
    return (
      <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
        <Header />
        <main className="flex-grow pt-[80px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

  export default RootLayout;
  