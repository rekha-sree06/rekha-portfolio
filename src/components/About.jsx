
import {
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaFigma,
  FaServer,
  FaBrain,
  FaTools,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiTensorflow,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";

import { motion } from "framer-motion";

function About() {

  const fadeInUp = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.2 },
    viewport: { once: true }
  };

  const skillCard =
    "w-full min-h-[170px] sm:min-h-[190px] md:min-h-[210px] bg-[#2A2A35]/70 backdrop-blur-md border border-white/10 flex flex-col justify-center gap-4 text-center items-center hover:border-[#B388FF] hover:scale-[1.03] transition-all duration-300 hover:bg-[#31293F]/80 rounded-xl p-4";

  const skillCard_icon =
    "text-2xl sm:text-3xl md:text-4xl text-[#B388FF]";

  const skillCard_text =
    "text-sm sm:text-base md:text-lg";

  const skillTag =
    "px-2.5 py-1.5 text-xs sm:text-sm md:text-base text-[#E9D5FF] bg-[#B388FF]/10 border border-[#B388FF]/20 rounded-lg";

  const categories = [
    {
      title: "Frontend Development",
      icon: <FaReact className={skillCard_icon} />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "TypeScript (Basic)",
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer className={skillCard_icon} />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <FaBrain className={skillCard_icon} />,
      skills: [
        "Python",
        "TensorFlow",
        "Grad-CAM",
        "LIME",
        "SHAP",
        "Explainable AI",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools className={skillCard_icon} />,
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Figma",
        "UI/UX Basics",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="
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
        lg:pt-32
      "
    >
      <motion.div
        {...fadeInUp}
        className="
          section-heading
          font-['Fredoka']
          drop-shadow-[0_0_12px_rgba(179,136,255,0.7)]
        "
      >
        About me
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          max-w-[1325px]
          font-['DM_Sans']
          mx-auto
          text-center
          mt-8
        "
      >
        I'm a Computer Science student at IIIT Dharwad, passionate
        about software development and creating modern digital
        experiences. I enjoy building interactive web applications,
        exploring AI technologies, solving real-world problems, and
        continuously improving my skills through hands-on projects
        and learning.
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          text-[#D8B4FE]
          font-['Fredoka']
          mx-auto
          text-center
          mt-25
        "
      >
        Skills
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-5
          sm:gap-6
          md:gap-8
          lg:gap-10
          mt-10
          w-full
          max-w-[1050px]
        "
      >
        {categories.map((category) => (
          <div
            key={category.title}
            className={skillCard}
          >
            <div className="flex items-center justify-center gap-3">
              {category.icon}

              <h3 className="
                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
                font-['Fredoka']
                text-white
              ">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={skillTag}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default About;
