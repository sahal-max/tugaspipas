import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ReadingProgress from './components/layout/ReadingProgress';
import CommandPalette from './components/layout/CommandPalette';
import Home from './pages/Home';
import KabelBawahLaut from './pages/KabelBawahLaut';
import BTS from './pages/BTS';
import Satelit from './pages/Satelit';
import Internet3T from './pages/Internet3T';
import PengaruhGeografis from './pages/PengaruhGeografis';
import NotFound from './pages/NotFound';

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <ReadingProgress />
      <CommandPalette />
      <Nav />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/kabel-bawah-laut" element={<PageTransition><KabelBawahLaut /></PageTransition>} />
            <Route path="/bts" element={<PageTransition><BTS /></PageTransition>} />
            <Route path="/satelit" element={<PageTransition><Satelit /></PageTransition>} />
            <Route path="/internet-3t" element={<PageTransition><Internet3T /></PageTransition>} />
            <Route path="/pengaruh-geografis" element={<PageTransition><PengaruhGeografis /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
