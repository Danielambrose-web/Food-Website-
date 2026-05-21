import { assets } from "../../assets/assets";
import './Footer.css';

const Footer = () => {
  return (
    <div className="div" id="footer">
      <div className="footer-left">
        <img src={assets.logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          ratione, voluptatem necessitatibus unde dolorem sapiente dolor? Nobis
          sint odit numquam.
        </p>
        <div className="footer-socail">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      <div className="footer-center">
        <h1>Mr. Smart</h1>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQ</li>
        </ul>
      </div>
      <div className="footer-right">
        <h2>Get in Touch</h2>
        <ul>
            <li>+234 704 625 3879</li>
            <li>info@mrsmart.com</li>
        </ul>
      </div>
      <hr />
      <p>&copy; 2026 Mr. Smart. All rights reserved.</p>
    </div>
  );
};

export default Footer;
