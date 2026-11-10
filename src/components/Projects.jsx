
import { motion } from "framer-motion";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import { FaExternalLinkAlt, FaDumbbell, FaMicroscope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Projects() {
  const fadeInUp = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.2 },
    viewport: { once: true }
  };

  const tech_style =
    "bg-[#2A163D]/80 border border-[#6D3BB8] rounded-full px-4 py-1 text-[#D6B4FF] font-['Afacad'] text-sm sm:text-base md:text-lg lg:text-xl font-semibold";

  const projects = [
    {
      title: "TaskFlow Todo App",
      description:
        "A modern productivity-focused task management web application built with React, TypeScript, and Tailwind CSS. Features include task tracking, an analytics dashboard, dark/light mode, responsive UI, and localStorage persistence for a smooth and interactive user experience.",
      image: (
        <img
          src={project1Img}
          alt="TaskFlow Todo App Preview"
          className="
            w-[375px] h-[190px]
            sm:w-[500px] sm:h-[250px]
            md:w-[585px] md:h-[290px]
            lg:w-[750px] lg:h-[350px]
            object-cover rounded-xl
          "
        />
      ),
      stack: ["React", "Tailwind CSS", "TypeScript"],
      live: "https://taskflow-todo-app-psi.vercel.app/",
      github: "https://github.com/rekha-sree06/taskflow-todo-app",
    },
    {
      title: "FITVERSE",
      description:
        "A collaborative fitness platform designed to make workout exploration easier. My contributions included developing the exercise library, detailed exercise information, equipment guides, alternative equipment suggestions, and exercise video previews.",
      image: (
        <img
          src={project2Img}
          alt="FITVERSE Preview"
          className="
            w-[375px] h-[190px]
            sm:w-[500px] sm:h-[250px]
            md:w-[585px] md:h-[290px]
            lg:w-[750px] lg:h-[350px]
            object-cover rounded-xl
          "
        />
      ),
      stack: [
        "Exercise Library",
        "Equipment Guides",
        "Video Previews",
        "Alternative Exercises",
      ],
      github: "https://github.com/AryanUbale/FITVERSE",
    },
    {
      title: "Malaria Diagnosis using XAI",
      description:
        "An explainable AI-based malaria diagnosis project using an Xception model to classify blood cell images as parasitized or uninfected. Implemented Grad-CAM, LIME, and SHAP to visualize and interpret model predictions, making the classification process more understandable.",
      image: (
        <div className="
          w-[255px] h-[175px]
          sm:w-[420px] sm:h-[240px]
          md:w-[585px] md:h-[305px]
          lg:w-[750px] lg:h-[370px]
          rounded-xl
          bg-gradient-to-br from-[#171A35] via-[#29245A] to-[#17121F]
          border border-[#6D3BB8]/40
          flex flex-col items-center justify-center gap-5
        ">
          <FaMicroscope className="text-6xl sm:text-7xl md:text-8xl text-[#D8B4FE]" />
          <p className="font-['Fredoka'] text-xl sm:text-2xl md:text-3xl text-white text-center px-3">
            MALARIA DIAGNOSIS
          </p>
          <p className="text-[#D6B4FF] text-sm sm:text-base">
            Explainable AI
          </p>
        </div>
      ),
      stack: [
        "Python",
        "TensorFlow",
        "Xception",
        "Grad-CAM",
        "LIME",
        "SHAP",
      ],
      github: "https://github.com/rekha-sree06/Malaria-Diagnosis-XAI"
    },
  ];

  return (
    <section
      id="projects"
      className="
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
        pb-16
      "
    >
      {projects.map((project, index) => (
        <div
          key={project.title}
          className="w-full max-w-[1400px] mb-16 last:mb-0"
        >
          <motion.p
            {...fadeInUp}
            className="section-heading font-['Alan_Sans'] text-center"
          >
            {project.title}
          </motion.p>

          <motion.section
            {...fadeInUp}
            className="
              mt-2
              grid
              sm:grid-cols-1
              md:grid-cols-1
              lg:grid-cols-2
              gap-10
              items-center
              justify-items-center
              mx-auto
            "
          >
            {project.image}

            <section className="flex flex-col justify-center">
              <p className="
                text-[#D4D4D8]
                font-['Afacad']
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-3xl
              ">
                {project.description}
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
                  text-[#D8B4FE]
                ">
                  {index === 1 ? "Key Contributions" : "Tech Stack"}
                </p>

                <div className="mt-2 flex flex-wrap gap-3 sm:gap-4">
                  {project.stack.map((tech) => (
                    <p key={tech} className={tech_style}>
                      {tech}
                    </p>
                  ))}
                </div>
              </section>
            </section>
          </motion.section>

          {(project.live || project.github) && (
            <motion.section
              {...fadeInUp}
              className="
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
                lg:justify-start
              "
            >
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} Live Demo`}
                >
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
                    duration-300
                  ">
                    <FaExternalLinkAlt />
                    <p className="text-[#F1DFFE]">Live Demo</p>
                  </button>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub Repository`}
                >
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
                    duration-300
                  ">
                    <FiGithub className="text-white" />
                  </button>
                </a>
              )}
            </motion.section>
          )}
        </div>
      ))}

      <motion.div
        {...fadeInUp}
        className="
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          text-[#B8B8C0]/70
          text-center
          mt-12
        "
      >
        Explore more on GitHub →{" "}
        <a
          href="https://github.com/rekha-sree06"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          github.com/rekha-sree06
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;
