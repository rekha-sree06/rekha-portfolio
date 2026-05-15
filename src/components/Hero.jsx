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

          h-[520px]
          sm:h-[650px]
          lg:h-[700px]
        "
      >

        {/* Purple Box */}
        <div
          className="
            absolute

            top-12
            left-40

            w-[190px]
            h-[310px]

            sm:top-7
            sm:left-85
            sm:w-[320px]
            sm:h-[420px]

            lg:top-2
            lg:left-155
            lg:w-[630px]
            lg:h-[600px]

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

            top-20
            left-50

            w-[110px]
            h-[290px]

            sm:top-2
            sm:left-90
            sm:w-[340px]
            sm:h-[470px]

            lg:top-0
            lg:left-170
            lg:w-[570px]
            lg:h-[650px]

            object-cover
          "
        />

        {/* Glass Box */}
        <div
          className="
            absolute
            z-20

            top-22
            left-0

            w-[190px]
            h-[200px]

            sm:top-25
            sm:left-0
            sm:w-[405px]
            sm:h-[320px]

            lg:top-28
            lg:left-0
            lg:w-[650px]
            lg:h-[450px]

            border border-white/5
            bg-gradient-to-br from-[#2A2A35]/90 to-[#1B1B24]/70
            backdrop-blur-md

            p-5
            sm:p-10
            lg:p-16
          "
        >

          <div className="text-white">
            <p className="text-xl sm:text-5xl lg:text-7xl">
              Hi, I'm
            </p>

            <h1
              className="
                font-['Cormorant_Garamond']
                text-[#7C48FF]

                text-3xl
                sm:text-7xl
                lg:text-8xl

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
                mt-10
                sm:mt-4

                text-[10px]
                sm:text-lg
                lg:text-2xl

                text-[#B8B8C0]

                max-w-[420px]
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