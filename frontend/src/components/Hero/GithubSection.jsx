import { motion } from "framer-motion";

const GithubSection = () => (
  <section className="h-screen w-full flex justify-center items-starts pt-36 snap-start relative overflow-hidden text-black">
    {/* 1 Ellipse */}
    <motion.div
      className="absolute rounded-[50%] border border-base-content/20
                 w-[1000px] h-[400px] lg:w-[1000px] lg:h-[400px] md:w-[700px] md:h-[300px] sm:w-[500px] sm:h-[250px]"
      style={{ transform: "rotate(15deg)" }}
      animate={{ scale: [1, 1.1, 1], rotate: [15, 25, 15] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* 2 Ellipse */}
    <motion.div
      className="absolute rounded-[60%] border border-base-content/10 backdrop-blur-3xl
                 lg:w-[1200px] lg:h-[500px] md:w-[800px] md:h-[350px] sm:w-[500px] sm:h-[250px] sm:backdrop-blur-md sm:border-base-content/20"
      style={{ transform: "rotate(-10deg)" }}
      animate={{ scale: [1, 1.05, 1], rotate: [-10, -20, -10] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />

    {/*  Panels  */}
    <motion.div
      className="absolute rounded-3xl bg-white/30 shadow-lg backdrop-blur-xl border border-black/5
                 lg:w-[600px] lg:h-[400px] md:w-[450px] md:h-[300px] sm:w-[350px] sm:h-[250px] sm:bg-white/10 sm:shadow-sm sm:backdrop-blur-md"
      animate={{
        x: [-50, 50, -50],
        rotate: [0, 3, -3, 0],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute rounded-2xl bg-white/50 shadow-md backdrop-blur-lg border border-black/10
                 lg:w-[400px] lg:h-[250px] md:w-[300px] md:h-[200px] sm:w-[250px] sm:h-[150px] sm:bg-white/20 sm:shadow-xs sm:backdrop-blur-sm"
      animate={{
        y: [40, -40, 40],
        rotate: [2, -2, 2],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative z-10 text-center max-w-2xl px-6 sm:px-4"
    >
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-noto-sans text-base-content tracking-tight mb-4 md:mb-6">
        Open Source.
        <br />
        Fully Transparent.
      </h2>
      <p className="md:text-lg text-md leading-relaxed text-base-content mb-8">
        The project’s open. You can see how it works, improve it, or build your
        own version.
      </p>

      <motion.button
        onClick={() =>
          window.open("https://github.com/baseer4/examguardai", "_blank")
        }
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-3 rounded-full bg-black text-white font-semibold shadow-2xl"
      >
        Visit GitHub →
      </motion.button>
    </motion.div>
  </section>
);

export default GithubSection;
