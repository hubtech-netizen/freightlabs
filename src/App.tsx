import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { RouteForge } from '@/pages/RouteForge';
import { LoadForge } from '@/pages/LoadForge';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import FAQ from '@/pages/FAQ';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="routeforge" element={<RouteForge />} />
            <Route path="loadforge" element={<LoadForge />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
