import { useEffect } from "react";

function NavBar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""; // changes the entire page scroll behavior
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Ana<span className="text-purple-400">Tauva</span>
          </a>

          {/* mobile menu button */}
          <div
            className="md:hidden w-7 h-5 relative cursor-pointer z-40" // hidden on medium and large screens
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/*hidden by default, flex on medium and larger screens*/}
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
