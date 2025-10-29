"use client";
import "./Header.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setIsVisible(false);
      } else {
        // scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header className={`app-header ${isVisible ? "visible" : "hidden"}`}>
      <div className="hd-left">
        <Image
          src="/dotlogoblck.svg"
          alt="dotFitnessTracker Logo"
          className="hdlogo"
          width={30}
          height={30}
        />
        <h1 className="hdTitle">dotFitnessTracker</h1>
      </div>

      <nav className="hd-right">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/fitness" className="nav-link">Fitness</Link>
        <Link href="/nutrition" className="nav-link">Nutrition</Link>
        <Link href="/progress" className="nav-link">Progress</Link>
        <Link href="/auth" className="signup-btn">Get Started</Link>

      </nav>
    </header>
  );
};

export default Header;
