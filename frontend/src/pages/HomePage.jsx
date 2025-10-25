import React from "react";
import { useNavigate } from "react-router-dom";
import {MousePointer2} from "lucide-react";
import { motion } from "framer-motion";
import GithubSection from "../components/Hero/GithubSection";
import Keyfeatures from "../components/Hero/Keyfeatures";

const HomePage = () => {
  const navigate = useNavigate();
 
  const circularFlyIn = {
    hidden: { opacity: 0, x: -150, y: -100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full">
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Gradient BG */}
        <div
          className="fixed inset-0 -z-10 bg-base-300"
          style={{
            background: `
                          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
                          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
                          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
                          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%)
                        `,
          }}
        />

        {/* ===== Screen 1 ===== */}
        <section className="h-screen relative flex justify-center items-start py-25 md:py-44 snap-start">
          <div className="max-w-2xl text-center px-6">
            <h1 className="text-5xl md:text-6xl font-noto-sans font-semibold text-base-content tracking-tight">
              Experience a New Era of AI Proctoring
            </h1>
            <p className="mt-5 font-semibold text-md md:text-lg text-gray-500">
                ExamGuardAI makes cheating impossible. With intelligent monitoring and instant reporting, every exam is safe, fair, and fully transparent.

            </p>

            <div className="mt-10 flex gap-5 justify-center">
              <button
                className="btn btn-neutral hover:animate-fade-in-scale"
                onClick={() => navigate("/join")}
              >
                Take a Test
              </button>
              <button
                className="btn btn-neutral hover:animate-fade-in-scale"
                onClick={() => navigate("/create")}
              >
                Create a Test
              </button>
            </div>
          </div>
          <motion.div
            className="hidden lg:block absolute top-1/5.5 right-1/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={circularFlyIn}
          >
            <div className="relative">
              <MousePointer2 className="absolute -top-4.5 -left-4.5 text-base-content" />
            </div>
            <div className="px-4 py-1.5 bg-[#F39E60] w-auto rounded-r-2xl rounded-bl-2xl">
              <p className="text-white text-center">AI proctor</p>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute bottom-1/3 left-1/5"
            initial={{ opacity: 0, x: 50, y: 50 }} // start diagonally opposite
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative">
              <MousePointer2
                style={{ transform: "rotate(90deg)" }}
                className="absolute -top-4.5 -right-4.5 text-base-content"
              />
            </div>
            <div className="px-4 py-1.5 bg-[#c8d1a7] w-auto rounded-br-2xl rounded-l-2xl">
              <p className="text-white text-center">Exam Monitoring</p>
            </div>
          </motion.div>
        </section>

        {/* ===== Screen 2: Key Features ===== */}
        <Keyfeatures />
       
        {/* ===== Screen 3: Open Source Section (No Color, Structural Aesthetic) ===== */}
          <GithubSection />
      </div>
      
    </div>
  );
};

export default HomePage;
