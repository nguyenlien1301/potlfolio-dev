import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
// import Experience from './components/Experience';
import Projects from './components/Projects';
// import Awards from './components/Awards';
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useThemeStore } from './store/themeStore';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence,useScroll, useSpring } from 'framer-motion';

function App() {
  const { isDarkMode } = useThemeStore();
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--bg-card', '#1f2937');
      document.documentElement.style.setProperty('--text-primary', '#f9fafb');
      document.documentElement.style.setProperty('--border-color', '#374151');
      document.documentElement.style.setProperty('--icon-bg', '#3b82f6');
      document.documentElement.style.setProperty('--icon-border', '#1e40af');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--bg-card', '#ffffff');
      document.documentElement.style.setProperty('--text-primary', '#1f2937');
      document.documentElement.style.setProperty('--border-color', '#e5e7eb');
      document.documentElement.style.setProperty('--icon-bg', '#3b82f6');
      document.documentElement.style.setProperty('--icon-border', '#93c5fd');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[9999]"
        style={{ scaleX }}
      />
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Home />
            <AboutMe />
            {/* <Experience /> */}
            <Projects />
            {/* <Awards /> */}
            <Blog />
            <Contact />
          </main>
        } />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
      
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-50"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;