import { motion } from "framer-motion";
import projectsImg from "../assets/project.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Projects() {
  const fadeInUp = {
    initial: { opacity:0},
    whileInView: { opacity:1},
    transition: {duration:1.2},
    viewport: { once: true }
  }

  const tech_style="bg-[#2A163D]/80 border border-[#6D3BB8] rounded-full px-4 py-1 text-[#D6B4FF] font-['Afacad'] text-sm sm:text-base md:text-lg lg:text-xl font-semibold"

  return (
    <section id="projects" className="
        scroll-mt-32
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-6
        text-white
        pt-16
        sm:pt-20
      "
    >
          <motion.p {...fadeInUp} className="
          section-heading
          font-['Alan_Sans']">
            TaskFlow Todo App
          </motion.p>
          <motion.section {...fadeInUp} className="
          mt-2 
          grid
          sm:grid-cols-1
          md:grid-cols-1
          lg:grid-cols-2 
          gap-10
          items-center
          justify-items-center
          max-w-[1400px]
          mx-auto">
            <img src={projectsImg} alt="TaskFlow Todo App Preview" className="w-[255px] h-[175px]
            sm:w-[420px] sm:h-[240px]
            md:w-[585px] md:h-[305px]
            lg:w-[750px] lg:h-[370px]
            object-cover rounded-xl" />
            <section className="flex flex-col justify-center">
              <p className="
              text-[#D4D4D8] 
              font-['Afacad'] 
              text-lg 
              sm:text-xl 
              md:text-2xl 
              lg:text-3xl
              ">A modern productivity-focused task management web application built with React, TypeScript, and Tailwind CSS. Features include task tracking, analytics dashboard, dark/light mode, responsive UI, and localStorage persistence for a smooth and interactive user experience.
              </p>
              <section>
                <p className="
                mt-4
                md:mt-6
                lg:mt-8 
                font-['Orelega_One'] 
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                
                text-[#D8B4FE]">
                  Tech Stack
                </p>
                <div className="
                mt-2
                flex
                flex-wrap
                gap-6">
                  <p className={tech_style}>React</p>
                  <p className={tech_style}>TailwindCSS</p>
                  <p className={tech_style}>TypeScript</p>
                </div>
              </section>
            </section>
          </motion.section>
          <motion.section {...fadeInUp} className="
          flex
          items-center
          gap-6
          px-4
          py-4
          mt-0.5
          sm:mt-2
          md:mt-3.5
          lg:mt-5
          justify-center
          lg:justify-start">
            <a href="https://taskflow-todo-app-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo">
              <button className="
              bg-[#9810FA] 
              flex
              items-center
              justify-center
              gap-3
              px-10
              py-2
              rounded-lg
              sm:text-lg
              md:text-xl
              lg:text-2xl
              hover:scale-105
              transition-all
              duration-300">
                <FaExternalLinkAlt /> <p className="text-[#F1DFFE]">Live Demo</p>
              </button>
            </a>
            <a href="https://github.com/rekha-sree06/taskflow-todo-app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TaskFlow GitHub Repository">
              <button className="
              bg-[#101015]
              border 
              border-[#3E1F5C]
              px-2
              py-2
              rounded-sm
              sm:text-lg
              md:text-xl
              lg:text-2xl
              hover:scale-105
              hover:border-[#B388FF]
              transition-all
              duration-300">
                <FiGithub className="text-white" />
              </button>
            </a>
          </motion.section>
          <motion.div {...fadeInUp} className="
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl

          text-[#B8B8C0]/70">
            Explore more on GitHub → {""}
            <a href="https://github.com/rekha-sree06" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/rekha-sree06
            </a> 
          </motion.div>
    </section>
  );
}

export default Projects;