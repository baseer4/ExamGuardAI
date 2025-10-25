import React from "react";
import {
  WandSparkles,
  Code2,
  Sparkles,
  Users,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

const Keyfeatures = () => {
  const line1 = "Key Features that Elevate";
  const line2 = "Your Exam Integrity";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariant = {
    hidden: (i) => ({
      rotate: 180 + Math.random() * 60, //random spin
      y: 60 + Math.random() * 30,
      opacity: 0,
    }),
    visible: {
      rotate: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 14,
      },
    },
  };
  const renderAnimatedText = (text) =>
    text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariant}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
const cards = [
  {
    icon: <Code2 size={36} />,
    title: "Real-Time Monitoring",
    desc: "Track exam activity live with AI-powered insights, keeping every assessment fair and secure.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Sparkles size={36} />,
    title: "Smart AI Detection",
    desc: "Automatically detect suspicious behavior like multiple faces, phone usage, or abnormal gaze patterns.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <Users size={36} />,
    title: "Seamless Collaboration",
    desc: "Enable teachers and admins to manage tests together, review reports and results effortlessly.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: <Shield size={36} />,
    title: "Top-Notch Security",
    desc: "All exam data is encrypted and fully secure, ensuring student privacy and exam integrity at all times.",
    color: "bg-green-100 text-green-600",
  },
];

  return (
    <section className="min-h-screen lg:h-screen flex flex-col items-center snap-start ">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 border-2 border-neutral/80 rounded-4xl p-2 w-fit mx-auto">
          <WandSparkles size={18} />
          <motion.span
            initial={{ rotate: -8 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs md:text-sm font-semibold font-open text-base-content flex items-center gap-1"
          >
            Key Features
          </motion.span>
        </div>

        <motion.h2
          className="mt-2 text-4xl md:text-6xl font-noto-sans font-semibold text-base-content leading-tight tracking-tight inline-block"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} 
        >
          {renderAnimatedText(line1)}
          <br />
          {renderAnimatedText(line2)}
        </motion.h2>

        <motion.h3
          className="mt-4 text-gray-500 max-w-2xl mx-auto text-center leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut",delay:0.5 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          Explore how our features change the way exams are taken & monitored.
          <br />
          From smart tracking to instant reports, every tool is built to make
          testing fair, clear, and effortless.
        </motion.h3>
      </div>
      <div className="w-full py-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl px-6 mb-20 -mt-4">
          {cards.map((card, i) => (
            <div key={i} className="card">
              <div className="card-inner relative">
                <div className="card-shine absolute"></div>
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${card.color} mb-6 mx-auto`}
                >
                  {card.icon}
                </div>
                <h3 className="font-semibold text-center mb-2 text-base-content">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 text-center">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keyfeatures;
