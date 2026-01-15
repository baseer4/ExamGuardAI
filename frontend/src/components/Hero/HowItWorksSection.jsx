import { Settings, Shield, FileText } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Setup",
    description:
      "Configure exam settings, time limits, and proctoring rules in minutes with our intuitive dashboard.",
  },
  {
    icon: Shield,
    title: "Monitor",
    description:
      "AI monitors candidates in real-time, detecting violations and suspicious behavior automatically.",
  },
  {
    icon: FileText,
    title: "Review",
    description:
      "Get detailed reports with timestamps, screenshots, and violation summaries for every exam.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-22 px-4 lg:px-8 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-28 max-w-3xl">
          <h2 className="text-6xl md:text-7xl font-semibold leading-tight">
            Get started in
            <br />
            <span className="text-accent">three simple steps</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-base-content/85">
            Deploy your AI proctoring system and start monitoring exams in under
            10 minutes
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-20 items-center"
            >
              {/* Text */}
              <div className={index % 2 ? "lg:order-2" : ""}>
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-semibold text-base-content/15 leading-none">
                    0{index + 1}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <step.icon size={18} className="text-accent/70" />
                      <h3 className="text-3xl font-semibold">{step.title}</h3>
                    </div>

                    <p className="text-lg text-base-content/85 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className={index % 2 ? "lg:order-1" : ""}>
                <div className="aspect-video rounded-2xl bg-base-200/40 border border-base-300/40 p-6">
                  <div className="h-full w-full rounded-xl bg-base-100 border border-base-300/40 flex flex-col gap-4 p-4">
                    <div className="h-4 w-1/3 rounded bg-base-300/60" />
                    <div className="h-3 w-2/3 rounded bg-base-300/40" />
                    <div className="flex-1 rounded bg-base-300/30" />
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
