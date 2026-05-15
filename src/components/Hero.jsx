import { motion } from "framer-motion";
import heroImg from "../assets/myimage.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.2 },
  };

  return (
    <section
      id="home"
      className="
        w-full
        px-4
        sm:px-8
        lg:px-12

        pt-24
        sm:pt-28
      "
    >
      <motion.div {...fadeIn} className="relative w-full mx-auto max-w-[1400px] h-[500px]
                sm:h-[550px]
                md:h-[650px]
                lg:h-[700px]">

        {/* Purple Box */}
        <div
          className="
          absolute
          top-8
          sm:left-90
          md:left-107
          lg:left-155
          w-[170px] h-[285px]
          sm:w-[300px] sm:h-[400px]
          md:w-[530px] md:h-[575px]
          lg:w-[650px] lg:h-[690px]

          bg-[#B388FF]
          z-0
        "
        />

        {/* image */}
        <img 
          src={heroImg} 
          alt="Rekha Sree" 
          className="
            absolute
            z-10
            top-0
            sm:left-93
            md:left-113
            lg:left-170
            w-[225px] h-[300px]
            sm:w-[315px] sm:h-[450px]
            md:w-[475px] md:h-[620px]
            lg:w-[600px] lg:h-[750px]
            object-cover
          " 
        />

        {/* Glass Box */}
        <div
          className="
          absolute
          
          top-10
          sm:top-18
          md:top-28
          lg:top-28
          
          w-[250px] h-[180px]
          sm:w-[400px] sm:h-[300px]
          md:w-[580px] md:h-[440px]
          lg:w-[680px] lg:h-[560px]

          border border-white/5
          bg-gradient-to-br from-[#2A2A35]/90 to-[#1B1B24]/70
          backdrop-blur-md
          z-20
        "
        />

        {/* Hero Text */}
        <div
          className="
            absolute
            z-30

            left-3
            top-20

            sm:left-8
            sm:top-26

            md:left-16
            md:top-36

            lg:left-10
            lg:top-52

            text-white
          "
        >
          <p className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm
          </p>
          
          <h1 
            className="
            font-['Cormorant_Garamond']
            text-[#7C48FF]
              text-5xl
              sm:text-7xl
              md:text-8xl
              lg:text-9xl

              font-bold
              leading-tight
            "
          >
            Rekha Sree
          </h1>
          <br />
          <TypeAnimation
            sequence={[
              "Building modern and responsive web experiences.",
            ]}
            wrapper="p"
            cursor={true}
            repeat={0}
            speed={50}
            className="mt-2
              sm:mt-4

              text-sm
              sm:text-lg
              md:text-xl
              lg:text-2xl

              text-[#B8B8C0]
              sm:max-w-[320px]
              md:max-w-[360px]
              lg:max-w-[400px]
              leading-relaxed"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;