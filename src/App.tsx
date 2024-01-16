import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
import ContactUs from './pages/ContactUs.tsx';

const App : React.FC = () => {
  return (
    <>
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/home" Component={Landing} />
        <Route path="/events" Component={Events} />
        <Route path="/workshops" Component={Workshops} />
        <Route path="/competitions" Component={Competitions} />
        <Route path="/speakers" Component={Speakers} />
        <Route path="/partners" Component={Partners} />
        <Route path="/contactus" Component={ContactUs} />
        <Route path="/" Component={Landing} />
        <Route path="/*" Component={NotFound} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
