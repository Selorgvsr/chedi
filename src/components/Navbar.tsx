import {
  FIGMA_IMAGES
} from "./assets";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleHashChange = () => {
      const hash = window.location.hash || "#/";
      setIsHome(hash === "#/" || hash === "");
    };

    // Initial checks
    handleScroll();
    handleHashChange();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "hashchange",
        handleHashChange,
      );
    };
  }, []);

  // Dark Nav is active if we are scrolled OR if we are NOT on the home page
  const useDarkNav = isScrolled || !isHome;

  const navLinks = [
    { name: "Land", path: "#/land" },
    { name: "Project", path: "#/projects" },
    { name: "Farmer", path: "#/farmers" },
    { name: "Model", path: "#/contract-farming" },
    { name: "CSA", path: "#/subscription-land" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white backdrop-blur-lg">
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#/" className="flex items-center gap-2 group">
          <img
            src={FIGMA_IMAGES.navbarExampleImage}
            alt="Chedi"
            className="h-32 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium transition-colors duration-300 hover:opacity-70 text-[#004733] text-[20px]"
            >
              {link.name}
            </a>
          ))}

          <a href="#/contact">
            <Button className="rounded-full px-6 h-10 text-sm font-medium transition-all duration-300 bg-[#F4D35E] text-[004733] hover:bg-[#004733] hover:text-[#F4D35E] text-[16px]">
              Partner With Us
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden transition-colors text-[#004733]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-[#004733]/10 p-6 flex flex-col gap-4 lg:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-[#004733] text-lg font-medium hover:text-[#2B6A4D] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="bg-[#004733] hover:bg-[#003324] text-white w-full rounded-md h-12 mt-2">
              Partner With Us
            </Button>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
