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
      <motion.div
        {...fadeIn}
        className="
          relative
          w-full
          max-w-[1400px]
          mx-auto

          flex
          flex-col
          items-center
          justify-center

          lg:block

          min-h-[700px]
          sm:min-h-[850px]
          lg:h-[700px]
        "
      >

        {/* Purple Box */}
        <div
          className="
            absolute

            top-32
            w-[240px]
            h-[340px]

            sm:w-[320px]
            sm:h-[450px]

            lg:top-8
            lg:left-155
            lg:w-[650px]
            lg:h-[690px]

            bg-[#B388FF]
            z-0
          "
        />

        {/* Image */}
        <img
          src={heroImg}
          alt="Rekha Sree"
          className="
            absolute
            z-10

            top-36
            w-[220px]
            h-[320px]

            sm:w-[320px]
            sm:h-[450px]

            lg:top-0
            lg:left-170
            lg:w-[600px]
            lg:h-[750px]

            object-cover
          "
        />

        {/* Glass Box */}
        <div
          className="
            relative
            z-20

            mt-10

            w-full
            max-w-[320px]

            sm:max-w-[500px]

            lg:absolute
            lg:top-28
            lg:left-0
            lg:max-w-[680px]

            min-h-[260px]
            sm:min-h-[320px]
            lg:min-h-[560px]

            border border-white/5
            bg-gradient-to-br from-[#2A2A35]/90 to-[#1B1B24]/70
            backdrop-blur-md

            p-6
            sm:p-10
            lg:p-16
          "
        >

          <div className="text-white">
            <p className="text-2xl sm:text-5xl lg:text-7xl">
              Hi, I'm
            </p>

            <h1
              className="
                font-['Cormorant_Garamond']
                text-[#7C48FF]

                text-5xl
                sm:text-7xl
                lg:text-9xl

                font-bold
                leading-tight
              "
            >
              Rekha Sree
            </h1>

            <TypeAnimation
              sequence={[
                "Building modern and responsive web experiences.",
              ]}
              wrapper="p"
              cursor={true}
              repeat={0}
              speed={50}
              className="
                mt-4

                text-sm
                sm:text-lg
                lg:text-2xl

                text-[#B8B8C0]

                leading-relaxed
              "
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;