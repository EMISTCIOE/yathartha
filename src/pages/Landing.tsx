import Home from './Home.tsx';
import About from './About.tsx';
import Sponsor from './Sponsor.tsx';
import Schedule from '../components/Schedule';

const Landing : React.FC = () => {
  return (
    <>
        <Home />
        <About />
        {/* <Schedule /> */}
        <Sponsor />
    </>
  )
}

export default Landing