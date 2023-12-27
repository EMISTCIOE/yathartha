import './App.css';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';

const App : React.FC = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Footer />
    </>
  )
}

export default App
