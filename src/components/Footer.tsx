
import Logo from "../assets/logo.jpg";
import "../styles/footer.css"
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { FaMobileScreen, FaRegEnvelope, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="motto">
            <img src={Logo} alt="Logo" className="footer-logo"/>
            <h1>YATHARTHA</h1>
          
          <h2>Connecting Engineers</h2>
        </div>
        <div className="quick-links">
          <h1>Quick Links</h1>
          <ul className="links">
            <li>Home</li>
            <li>Events</li>
            <li>Projects</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="contact-us">
          <h1>Contact Us</h1>

          <div className="mobile">
            <FaMobileScreen />
            <span>+977 984534343, +977 988786876</span>
          </div>

          <div className="email">
            <FaRegEnvelope />
            <span>techfest@tcioe.edu.np</span>
          </div>

          <div className="location">
            <FaLocationDot />
            <span>IOE Thapathali Campus, Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="social-title">
        <h2>Connect with us on:</h2>
        </div>
        <div className="social-links">
          <div className="instagram">
            <FaInstagram />
          </div>
          <div className="linkedin">
            <FaLinkedin />
          </div>
          <div className="facebook">
            <FaFacebook />
          </div>
          <div className="mail">
            <FaEnvelope />
          </div>
        </div>
        <div className="copyright">
          Copyright &copy; {currentYear} | Yathartha | All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
