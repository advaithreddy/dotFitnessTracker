import Image from "next/image";
import Link from "next/link";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Section */}
      <div className="footer-left">
        <div className="footer-logo-section">
          <Image src="/dotlogo.svg" alt="Dot Logo" width={70} height={70} />
          <h2 className="footer-title">dotFitnessTracker</h2>
        </div>
        <div className="footer-bottom-links">
          <Link href="#" className="footer-link">
            Terms
          </Link>
          <span>|</span>
          <Link href="#" className="footer-link">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <div className="footer-nav">
          <Link href="#" className="nav-link">
            Home
          </Link>
          <Link href="#" className="nav-link">
            Dashboard
          </Link>
          <Link href="#" className="nav-link">
            Workouts
          </Link>
          <Link href="#" className="nav-link">
            Nutrition
          </Link>
          <Link href="#" className="nav-link">
            Progress
          </Link>
        </div>

        <div className="footer-help">
          <Link href="#" className="nav-link">
            Help
          </Link>
          <Link href="#" className="nav-link">
            Contact
          </Link>
        </div>

        {/* Developed By Section */}
        <div className="footer-developed">
          <span>Developed by</span>
          <Image
            src="/BoinkersLogo.svg"
            alt="The Boinkers Gang"
            width={40}
            height={40}
            className="developed-logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
