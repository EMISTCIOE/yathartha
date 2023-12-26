import './App.css';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Stats from "./components/stats.tsx";

const App : React.FC = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Stats/>
    <Footer />

    </>
  )
}

export default App
