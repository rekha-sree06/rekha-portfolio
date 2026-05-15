import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";


function Footer() {
  const icon_hover="hover:text-[#C27AFF] hover:scale-110 transition-all duration-300"

  return (
    <footer className="
    border-t
    border-white/10
    mt-24">
      <div className="
      max-w-[1400px]
      mx-auto

      px-6
      py-6

      flex
      flex-col
      sm:flex-row

      justify-between
      items-center

      gap-4

      text-[#6A7282]
      text-sm
      sm:text-base">
        <div className="flex flex-wrap justify-center gap-3">
          <p>© 2026</p> 
          <p>Built with React & Tailwind CSS</p>
        </div>

        <div className="flex gap-4 text-lg sm:text-xl">
          <a 
          href="https://github.com/rekha-sree06" 
          target="_blank" 
          rel="noopener noreferrer"
          className={icon_hover}
          aria-label="GitHub">
            <FiGithub />
          </a>

          <a 
          href="https://www.linkedin.com/in/rekha-sree-dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className={icon_hover}
          aria-label="LinkedIn">
            <FiLinkedin />
          </a>

          <a 
          href="mailto:rekhasree.work@gmail.com"
          className={icon_hover}
          aria-label="Send Email">
            <FiMail />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;