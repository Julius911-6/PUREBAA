import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { ActionLines } from './components/ActionLines';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-light font-sans flex flex-col">
        <Header />

        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<About />} />
            <Route path="/lineas-de-accion" element={<ActionLines />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
