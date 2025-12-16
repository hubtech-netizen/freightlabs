import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { RouteForge } from '@/pages/RouteForge';
import { LaneMaker } from '@/pages/LaneMaker';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="routeforge" element={<RouteForge />} />
            <Route path="lanemaker" element={<LaneMaker />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
