import { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../images/Header/logo.svg";
import Instagram from "../../images/Footer/in.svg";
import Facebook from "../../images/Footer/f.svg";
import Youtube from "../../images/Footer/y.svg";
import Twitter from "../../images/Footer/t.svg";
import Call from "../../images/Footer/call.svg";
import Send from "../../images/Footer/send.svg";
import Location from "../../images/Footer/location.svg";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Service" },
  { href: "#portfolios", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#client", label: "Client" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://instagram.com", src: Instagram, label: "Instagram" },
  { href: "https://facebook.com", src: Facebook, label: "Facebook" },
  { href: "https://x.com", src: Twitter, label: "X" },
  { href: "https://youtube.com", src: Youtube, label: "YouTube" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const openDiscuss = (event) => {
    event.preventDefault();
    closeMenu();
    window.dispatchEvent(new CustomEvent("open-discuss"));
  };

  return (
    <header className="header sticky top-0 z-40 w-full border-b border-white/5 bg-[#171719]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col px-[10px]">
        <div className="hidden h-[40px] items-center justify-between md:flex">
          <div className="flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[rgba(230,230,230,0.1)] transition-colors duration-300 hover:bg-[rgba(230,230,230,0.22)]"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <img src={social.src} alt="" />
              </a>
            ))}
          </div>
          <div className="flex gap-[28px] pr-[40px] text-sm">
            <a
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
              href="tel:+658436361"
            >
              <img src={Call} alt="" />
              +658436361
            </a>
            <a
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
              href="mailto:gladium1992@gmail.com"
            >
              <img src={Send} alt="" />
              gladium1992@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
              href="https://maps.google.com/?q=Alicante"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Location} alt="" />
              Alicante
            </a>
          </div>
        </div>

        <div className="flex h-[68px] items-center justify-between gap-3">
          <a
            className="relative z-10 flex shrink-0 items-center gap-2 text-white"
            href="#home"
            onClick={closeMenu}
          >
            <img className="h-6 w-6" src={Logo} alt="" />
            <span>designer</span>
          </a>

          <nav
            id="header-nav"
            className={`header__nav ${menuOpen ? "active" : ""}`}
            aria-label="Primary"
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="header__button header__button--menu"
              href="#contact"
              onClick={openDiscuss}
            >
              Discuss for Projects
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="header__button header__button--bar"
              href="#contact"
              onClick={openDiscuss}
            >
              Discuss for Projects
            </a>
            <button
              type="button"
              className={`header__burger md:hidden ${menuOpen ? "active" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="header-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
