import './App.css';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';

const App : React.FC = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    </>
  )
}

export default App
