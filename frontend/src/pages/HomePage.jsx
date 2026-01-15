import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Keyfeatures from "../components/Hero/Keyfeatures";
import { Footer } from "../components/Hero/Footer";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { PricingSection } from "../components/Hero/Pricing-Section";
import FAQSection from "../components/Hero/FAQSection";
import { HowItWorksSection } from "../components/Hero/HowItWorksSection";
import { ExamModesSection } from "../components/Hero/ExamModeSection";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* ===== Screen 1: Hero ===== */}
      <section className="flex items-center py-26 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] items-start">
            {/* Left */}
            <div className="space-y-8 md:space-y-8">
              <div className="badge badge-outline badge-accent gap-2 px-3.5 py-4 bg-base-100/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse " />
                Open Source & Free Forever
              </div>

              <h1 className="text-6xl lg:text-[5.25rem] font-semibold leading-[0.95] -mt-2 md:-mt-2">
                AI Exam
                <br />
                <span className="text-accent">Proctoring</span>
                <br />
                Made Simple
              </h1>

              <p className="text-md md:text-xl text-base-content/80 max-w-xl">
                Deploy AI-powered exam monitoring in minutes. Built on Google
                MediaPipe, the system applies exam-specific behavior detection
                to identify cheating patterns in real time, directly in the
                browser.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="btn btn-accent btn-md md:btn-lg gap-2"
                >
                  Get Started Free
                  <FiArrowRight className="text-lg" />
                </Link>

                <a
                  href="https://github.com/baseer4/ExamGuardAI"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-md md:btn-lg gap-2"
                >
                  <FiGithub className="text-lg" />
                  View on GitHub
                </a>
              </div>

              <div className="flex flex-col gap-6 pt-2 md:flex-row md:gap-8">
                <div>
                  <div className="text-xl md:text-2xl font-semibold">
                    Zero setup
                  </div>
                  <div className="text-sm opacity-60">
                    Open link. Start test.
                  </div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-semibold">
                    Real-time
                  </div>
                  <div className="text-sm opacity-60">Monitoring</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-semibold">
                    Built for privacy
                  </div>
                  <div className="text-sm opacity-60">
                    No recordings. No uploads.
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="w-full max-w-[560px]">
                <div className="card h-[600px] border border-accent/30 bg-base-100/95 hover:border-accent/50 transition">
                  <div className="card-body space-y-6">
                    <div className="flex items-center justify-between border-b border-base-300 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-medium">
                          Live Monitoring
                        </span>
                      </div>
                      <span className="text-xs opacity-50">00:34:21</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div className="card bg-base-200/20 border border-base-300">
                        <div className="card-body p-4">
                          <p className="text-xs opacity-50">Eye Tracking</p>
                          <p className="text-3xl font-bold text-accent">
                            Active
                          </p>
                        </div>
                      </div>

                      <div className="card bg-base-200/20 border border-base-300">
                        <div className="card-body p-4">
                          <p className="text-xs opacity-50">Violations</p>
                          <p className="text-3xl font-bold">0</p>
                        </div>
                      </div>

                      <div className="card bg-base-200/20 border border-base-300">
                        <div className="card-body p-4">
                          <p className="text-xs opacity-50">Face Detection</p>
                          <p className="text-3xl font-bold text-accent">✓</p>
                        </div>
                      </div>

                      <div className="card bg-base-200/20 border border-base-300">
                        <div className="card-body p-4">
                          <p className="text-xs opacity-50">Browser Lock</p>
                          <p className="text-3xl font-bold text-accent">✓</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="alert bg-accent/5 border border-accent/20">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        <span>Candidate focused on screen</span>
                      </div>

                      <div className="alert bg-base-200/20 border border-base-300 opacity-70">
                        <span className="w-2 h-2 bg-base-content/50 rounded-full" />
                        <span>No suspicious activity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Screen 2 ===== */}
      <Keyfeatures />

      {/* ===== Screen 3 ===== */}
      <HowItWorksSection />

      {/* ===== Screen 4 ===== */}
      <ExamModesSection />

      {/* ===== Screen 5 ===== */}
      <PricingSection />

      {/* ===== Screen 6 ===== */}
      <FAQSection />

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default HomePage;
