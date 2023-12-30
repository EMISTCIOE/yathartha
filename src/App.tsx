import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import Landing from './pages/Landing.tsx';
import NotFound from './pages/NotFound.tsx';
import Events from './pages/Events.tsx';
import Workshops from './pages/Workshops.tsx';
import Competitions from './pages/Competitions.tsx';
import Speakers from './pages/Speakers.tsx';
import Partners from './pages/Partners.tsx';

const App : React.FC = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Landing />} />
      <Route path="/events" element={<Events />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/competitions" element={<Competitions />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/" element={<Landing />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
