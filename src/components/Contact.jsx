import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiPhone } from "react-icons/fi";

function Contact() {
  const fadeInUp = {
    initial: { opacity:0},
    whileInView: { opacity:1},
    transition: {duration:1.2},
    viewport: { once: true }
  }

  const card_section="bg-[#1B1E30]/70  backdrop-blur-md border border-white/10 px-5 py-5 md:px-6 md:py-6 hover:border-[#C084FC]/50 hover:scale-[1.02] transition-all duration-300 rounded-xl h-full justify-self-center w-full lg:w-[390px]"

  const card_icon="rounded-full w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] bg-[#3D145D] text-[#C27AFF] relative z-10 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-3xl"

  const card_title="mt-4 font-['Orelega_One'] text-xl sm:text-2xl md:text-3xl lg:text-3xl  text-white"

  const card_data="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#9198A5]/70 hover:text-[#C084FC] transition-colors duration-300 break-words hover:underline"

  return (
    <section id="contact" className="
      scroll-mt-32
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
      <motion.p {...fadeInUp} className="
      section-heading 
      font-['Sora']">
        Let's Connect
      </motion.p>
      <motion.p {...fadeInUp} className="
      text-sm
      sm:text-lg
      md:text-xl
      lg:text-2xl
      text-center
      max-w-[900px]
      text-[#B8B8C0]/70">
        Open to internships, collaborations, and exciting opportunities in frontend development.
      </motion.p>
      <motion.section {...fadeInUp} className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      items-start
      gap-6
      lg:gap-40 
      mt-20
      w-full
      max-w-[1150px]">
        <section className={card_section}>
          <div className={card_icon}>
            <FiMail/>
          </div>
          <p className={card_title}>
              Email
          </p>
          <a 
          href="mailto:rekhasree.work@gmail.com"
          aria-label="Send Email" 
          className={card_data}>
              rekhasree.work@gmail.com
          </a>
        </section>
        <section className={card_section}>
          <div className={card_icon}>
            <FiLinkedin/>
          </div>
          <p className={card_title}>
              LinkedIn
          </p>
          <a 
          href="https://www.linkedin.com/in/rekha-sree-dev" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className={card_data}>
              linkedin.com/in/rekha-sree-dev
          </a>
        </section>
        <section className={`${card_section} sm:col-span-2 sm:max-w-[360px] lg:col-span-1 lg:max-w-[390px] justify-self-center`}>
          <div className={card_icon}>
            <FiPhone/>
          </div>
          <p className={card_title}>
              Phone
          </p>
          <a 
          href="tel:+919392465079" 
          aria-label="Call Rekha Sree"
          className={card_data}>
              +91 93924 65079
          </a>
        </section>
      </motion.section>
    </section>
  );
}

export default Contact;