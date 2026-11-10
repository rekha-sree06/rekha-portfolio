
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaBrain,
  FaDumbbell
} from "react-icons/fa";

function Resume() {

  const fadeInUp = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.2 },
    viewport: { once: true }
  };

  const timeline_item =
    "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6";

  const timeline_circle =
    "rounded-full mx-auto w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px] bg-gradient-to-br from-[#9414FB]/90 to-[#851FFD] shadow-[0_0_25px_rgba(168,85,247,0.5)] relative z-10 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl";

  const timeline_card =
    "flex-1 bg-[#1B1E30]/70 backdrop-blur-md border border-white/10 p-4 hover:border-[#C084FC]/50 duration-300 rounded-xl";

  const timeline_yr =
    "font-['Space_Grotesk'] text-[#C084FC] text-sm sm:text-base md:text-lg lg:text-xl";

  const timeline_title =
    "font-['Sora'] text-[#F5F5F5] text-lg sm:text-xl md:text-2xl lg:text-3xl";

  const timeline_data =
    "font-['DM_Sans'] text-[#B8B8C0] lg:text-lg flex flex-wrap pt-2";

  const journey = [
    {
      year: "2026",
      title: "Developed Malaria Diagnosis using Explainable AI",
      description:
        "Worked on an image classification project using an Xception model to identify malaria-infected and uninfected blood cell images. Explored Grad-CAM, LIME, and SHAP to interpret model predictions.",
      icon: <FaBrain />
    },
    {
      year: "2026",
      title: "Contributed to FITVERSE",
      description:
        "Worked on a collaborative fitness platform, contributing to the exercise library, exercise details, equipment guides, alternative equipment suggestions, and exercise video previews.",
      icon: <FaDumbbell />
    },
    {
      year: "2026",
      title: "Built TaskFlow Todo App",
      description:
        "Developed a productivity-focused Todo application featuring task tracking, an analytics dashboard, dark/light mode, localStorage persistence, and responsive UI using React, TypeScript, and Tailwind CSS.",
      icon: <FaCode />
    },
    {
      year: "2025",
      title: "Explored Modern Web Development",
      description:
        "Started exploring web development and modern frontend technologies while learning responsive design, UI development, and interactive application development.",
      icon: <FaLaptopCode />
    },
    {
      year: "2024",
      title: "Began B.Tech in Computer Science Engineering",
      description:
        "Started pursuing a degree in Computer Science and Engineering at IIIT Dharwad while exploring programming, problem-solving, and software development.",
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section
      id="resume"
      className="
        scroll-mt-32
        min-h-screen
        flex
        flex-col
        items-center
        px-6
        text-white
        pt-20
        sm:pt-24
        md:pt-28
        lg:pt-32
      "
    >
      <motion.p
        {...fadeInUp}
        className="section-heading font-['Alan_Sans']"
      >
        My Journey
      </motion.p>

      <motion.p
        {...fadeInUp}
        className="
          text-sm
          sm:text-lg
          md:text-xl
          lg:text-2xl
          text-[#B8B8C0]/70
          text-center
        "
      >
        A timeline of my learning and growth as a student developer
      </motion.p>

      <motion.div
        {...fadeInUp}
        className="
          relative
          mt-7
          w-full
          max-w-[1400px]
          flex
          flex-col
          gap-7
        "
      >
        <div
          className="
            absolute
            left-[17px]
            sm:left-[24px]
            md:left-[32px]
            lg:left-[39px]
            top-0
            w-[1px]
            h-full
            bg-gradient-to-b
            from-[#B388FF]
            to-transparent
            z-0
          "
        />

        {journey.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-10"
          >
            <div className={timeline_circle}>
              {item.icon}
            </div>

            <div className={timeline_card}>
              <section className={timeline_item}>
                <p className={timeline_yr}>
                  {item.year}
                </p>

                <p className={timeline_title}>
                  {item.title}
                </p>
              </section>

              <p className={timeline_data}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="mt-7 sm:mt-6 md:mt-5 lg:mt-4"
      >
        <a
          href="/T_Rekha_Sree_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume"
        >
          <button
            className="
              bg-[#101015]
              flex
              items-center
              justify-center
              gap-3
              px-8
              sm:px-10
              py-2.5
              border
              border-[#3E1F5C]
              rounded-lg
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              text-[#F1DFFE]
              hover:scale-105
              hover:border-[#B388FF]
              hover:text-[#B388FF]
              transition-all
              duration-300
            "
          >
            <p>View Resume</p>
          </button>
        </a>
      </motion.div>
    </section>
  );
}

export default Resume;
