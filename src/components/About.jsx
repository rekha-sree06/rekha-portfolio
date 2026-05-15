import {
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaFigma 
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

function About() {
  
  const fadeInUp = {
    initial: { opacity:0},
    whileInView: { opacity:1},
    transition: {duration:1.2},
    viewport: { once: true }
  }
  
  const skillCard ="w-[70px] h-[70px] sm:w-[120px] sm:h-[110px] md:w-[145px] md:h-[130px] lg:w-[170px] lg:h-[150px]  bg-[#2A2A35]/70 backdrop-blur-md border border-white/10 flex flex-col justify-center gap-2 text-center items-center hover:border-[#B388FF] hover:scale-110 transition-all duration-300 hover:bg-[#31293F]/80"

  const skillCard_icon="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#B388FF]"

  const skillCard_text="text-[10px] sm:text-lg md:text-xl lg:text-2xl"

  return (
    <section id="about" className="
        scroll-mt-48
        min-h-[60vh]
        flex
        flex-col
        items-center
        justify-center
        px-6
        text-white
        pt-20
        sm:pt-24
        md:pt-28
        lg:pt-32">
      <motion.div {...fadeInUp} className="
        section-heading

        font-['Fredoka']
        drop-shadow-[0_0_12px_rgba(179,136,255,0.7)]">
          About me
      </motion.div>
      <motion.div {...fadeInUp} className="
        text-lg
        sm:text-xl
        md:text-2xl
        lg:text-3xl

        max-w-[1325px]
        font-['DM_Sans']
        mx-auto
        text-center
        mt-8"
        >
          Passionate about software development and creating modern digital experiences through clean design and interactive applications. I enjoy exploring new technologies, solving real-world problems, and continuously improving my development skills through projects and learning.
      </motion.div>
      
      <motion.div {...fadeInUp} className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl

        text-[#D8B4FE]
        font-['Fredoka']
        mx-auto
        text-center
        mt-25">
          Skills
      </motion.div>

      <motion.div {...fadeInUp} className="
      grid
      grid-cols-5
      gap-1.5
      sm:gap-6
      md:gap-10.5
      lg:gap-15
      mt-10">
        <div className={skillCard}>
          <SiTailwindcss className={skillCard_icon}/>
          <p className={skillCard_text}>
            Tailwind CSS
          </p>
        </div>
        <div className={skillCard}>
          <FaJsSquare className={skillCard_icon}/>
          <p className={skillCard_text}>
            JavaScript
          </p>
        </div>
        <div className={skillCard}>
          <FaReact className={skillCard_icon}/>
          <p className={skillCard_text}>
            React
          </p>
        </div>
        <div className={skillCard}>
          <FaFigma className={skillCard_icon}/>
          <p className={skillCard_text}>
            UI/UX Basics
          </p>
        </div>
        <div className={skillCard}>
          <FaHtml5 className={skillCard_icon}/>
          <p className={skillCard_text}>
            HTML
          </p>
        </div>
        
      </motion.div>
    </section>
  );
}

export default About;