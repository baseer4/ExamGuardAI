import { CheckCircle2, FileEdit, Code, ArrowUpRight } from "lucide-react";

const modes = [
  {
    icon: CheckCircle2,
    title: "MCQ Exams",
    tag: "Auto-Grading",
    description:
      "Perfect for multiple choice and objective-type assessments with instant result generation and analysis.",
  },
  {
    icon: FileEdit,
    title: "Assignment Tests",
    tag: "Subjective",
    description:
      "Monitor long-form essay writing and subjective exams with comprehensive session tracking and focus monitoring.",
  },
  {
    icon: Code,
    title: "Coding Assessments",
    tag: "IDE Integration BETA*",
    description:
      "Secure coding environment with plagiarism detection. Monitor tab switches even during intensive programming tasks.",
  },
];

export function ExamModesSection() {
  return (
    <section
      id="modes"
      className="relative py-24 px-6 lg:px-8 bg-base-200/20 border-y border-base-200"
    >
      <div className="absolute -z-2 inset-0  bg-grid-pattern text-base-content/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-accent font-mono text-sm font-bold tracking-tighter">
            <span className="w-8 h-[1px] bg-accent"></span>
            VERSATILITY
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Built for every{" "}
            <span className="text-base-content/40">evaluation type.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-base-100 border border-base-300 rounded-3xl overflow-hidden">
          {modes.map((mode, index) => (
            <div
              key={index}
              className={`group relative p-10 transition-all duration-500 hover:bg-base-200/50 
                ${
                  index !== modes.length - 1
                    ? "lg:border-r border-base-300"
                    : ""
                } 
                ${index !== 0 ? "border-t lg:border-t-0 border-base-300" : ""}`}
            >
              {/* Animated Corner Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={20} className="text-base-content/20" />
              </div>

              <div className="space-y-8">
                <div className="flex items-center justify-between lg:flex-col lg:items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-base-200 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-content transition-all duration-300">
                    <mode.icon size={28} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-base-300 rounded text-base-content/50 group-hover:border-accent/40 group-hover:text-accent transition-colors">
                    {mode.tag}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {mode.title}
                  </h3>
                  <p className="text-base-content/60 leading-relaxed text-sm lg:text-base">
                    {mode.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-base-200">
                  <div className="flex flex-wrap gap-2">
                    <div className="h-1.5 w-8 rounded-full bg-base-300 group-hover:bg-accent/40 transition-colors"></div>
                    <div className="h-1.5 w-16 rounded-full bg-base-300 group-hover:bg-accent/40 transition-colors"></div>
                    <div className="h-1.5 w-8 rounded-full bg-base-300 group-hover:bg-accent/40 transition-colors"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
