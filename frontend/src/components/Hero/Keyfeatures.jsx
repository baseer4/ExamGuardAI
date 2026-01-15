import { Code2, Sparkles, Users, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Real-Time Monitoring",
    description:
      "ExamGuard uses Google MediaPipe FaceMesh (468 3D facial landmarks) to monitor students continuously during the exam, detecting suspicious movements and behaviors in real time.",
  },
  {
    icon: Sparkles,
    title: "Behavioral Analysis",
    description:
      "Monitors student focus by analyzing head pose and gaze direction, flagging suspicious instances of looking off-screen for extended periods.",
  },
  {
    icon: Shield,
    title: "Zero-Knowledge Privacy Architecture",
    description:
      "All analysis runs entirely in the user’s device memory. No video is ever uploaded, giving real-time proctoring with complete privacy.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Enable teachers and admins to manage tests together, review reports and results effortlessly.",
  },
];

export default function KeyFeatures() {
  return (
    <section
      id="features"
      className="relative py-24 px-6 lg:px-8 bg-base-300/10 border-y border-base-300/50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern text-base-content/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-end mb-20">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-base-300 bg-base-200/50 text-xs font-medium uppercase tracking-wider text-base-content/60">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Why Choose Us
            </div>

            <h2 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-base-content">
              Powerful features <br />
              built for{" "}
              <span className="relative whitespace-nowrap text-accent">
                Excellence
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-secondary"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="opacity-60"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="lg:w-1/2 lg:pb-4">
            <div className="pl-6 border-l-4 border-accent/30">
              <p className="text-lg sm:text-xl text-base-content/70 leading-relaxed">
                Comprehensive tools designed to ensure exam integrity, protect
                student data, and streamline the entire assessment process from
                setup to results.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-base-300/40 bg-base-100 p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <div className="mb-6 flex justify-between items-start">
                <div className="w-14 h-14 rounded-xl bg-base-200/50 flex items-center justify-center group-hover:bg-accent text-accent group-hover:text-accent-content transition-all duration-300">
                  <feature.icon size={26} />
                </div>
                <ArrowRight className="w-5 h-5 text-base-content/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>

              <div className="space-y-3 relative z-10">
                <h3 className="text-xl font-bold text-base-content group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base-content/80 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
