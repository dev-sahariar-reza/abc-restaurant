import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="abc-footer-grid">
        <div className="abc-footer-box-1">
          <h3 className="abc-footer-title">Contact Us</h3>
          <p className="abc-footer-text">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="abc-footer-text">+88 123456789</p>
          <p className="abc-footer-text">Mon - Fri: 08:00 - 22:00</p>
          <p className="abc-footer-text">Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="abc-footer-box-2">
          <h3 className="abc-footer-title">Follow Us</h3>
          <p className="abc-footer-text">Join us on social media</p>
          <div className="abc-footer-icon-box">
            <span>
              <FaFacebookF className="h-6 w-6" />
            </span>
            <span>
              <FaInstagram className="h-6 w-6" />
            </span>
            <span>
              <FaXTwitter className="h-6 w-6" />
            </span>
          </div>
        </div>
      </div>

      <div className="abc-footer-copyright">
        <p>Copyright © 2023 ABC Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
