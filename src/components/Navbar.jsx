import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "resume",
        "contact",
      ];

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop - 200;

          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="main-nav"
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2

        w-[92%]
        max-w-[1400px]

        z-50

        flex
        justify-between
        items-center

        px-4
        sm:px-8
        lg:px-24

        py-2
        sm:py-3
        md:py-4
        lg:py-5

        rounded-2xl

        text-[#C3BFBF]
        bg-[#050816]/60
        backdrop-blur-xl

        border border-white/10

        shadow-[0_0_30px_rgba(0,0,0,0.35)]
      "
    >

      {/* Logo */}
      <a
        href="#home"
        className={`
          text-[34px]
          sm:text-[40px]

          leading-none
          transition-all duration-300
          font-['Great_Vibes']

          hover:text-[#B388FF]

          ${active === "home"
            ? "text-[#B388FF] scale-110"
            : "text-white"}
        `}
      >
        mySelf
      </a>

      {/* Desktop Navbar */}
      <ul
        id="right-nav"
        className="
          hidden
          sm:flex

          gap-5
          md:gap-6
          lg:gap-8

          items-center

          text-base
          md:text-lg
          lg:text-[20px]
        "
      >

        <li>
          <a
            href="#about"
            className={`
              hover:text-[#B388FF]
              transition-all duration-300

              ${active === "about"
                ? "text-[#B388FF] scale-110"
                : "text-[#C3BFBF]"}
            `}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={`
              hover:text-[#B388FF]
              transition-all duration-300

              ${active === "projects"
                ? "text-[#B388FF] scale-110"
                : "text-[#C3BFBF]"}
            `}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#resume"
            className={`
              hover:text-[#B388FF]
              transition-all duration-300

              ${active === "resume"
                ? "text-[#B388FF] scale-110"
                : "text-[#C3BFBF]"}
            `}
          >
            Resume
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={`
              hover:text-[#B388FF]
              transition-all duration-300

              ${active === "contact"
                ? "text-[#B388FF] scale-110"
                : "text-[#C3BFBF]"}
            `}
          >
            Contact
          </a>
        </li>

        <li>
          <a
            href="https://github.com/rekha-sree06"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[#B388FF] transition-all duration-300"
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/rekha-sree-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#B388FF] transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </li>

      </ul>

      {/* Mobile Icons */}
      <div className="flex sm:hidden items-center gap-4 text-xl">

        <a
          href="https://github.com/rekha-sree06"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-[#B388FF]"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/rekha-sree-dev"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#B388FF]"
        >
          <FaLinkedin />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;