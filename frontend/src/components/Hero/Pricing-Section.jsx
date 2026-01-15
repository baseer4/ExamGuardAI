import { Check, Github, Star } from "lucide-react"

const features = [
  "Unlimited exams and students",
  "Real-time AI proctoring",
  "All exam modes included",
  "Violation Logs & Reports",
  "Browser & keyboard monitoring",
  "Privacy-First Architecture",
  "Self-hosted deployment",
  "Open Source & Free",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-22">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Star className="text-accent" size={16} />
              <span className="text-sm font-medium">100% Open Source</span>
            </div>

            <h2 className="text-6xl sm:text-7xl font-semibold leading-tight">
              Free
              <br />
              <span className="text-accent">Forever</span>
            </h2>

            <p className="text-xl text-base-content/85 leading-relaxed max-w-lg">
              No hidden fees. No subscriptions. No vendor lock-in. Deploy on your
              own infrastructure and own your data completely.
            </p>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-5xl font-bold">$0</div>
                <div className="text-sm text-base-content/50 mt-1">
                  Total cost
                </div>
              </div>

              <div className="h-16 w-px bg-base-300" />

              <div>
                <div className="text-5xl font-bold">∞</div>
                <div className="text-sm text-base-content/50 mt-1">
                  Students
                </div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="card bg-base-100 border border-primary/20 rounded-3xl p-10 hover:border-primary/40 transition-colors">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Github className="text-accent-content" size={32} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Open Source</h3>
                  <p className="text-base-content/85">MIT Licensed</p>
                </div>
              </div>

              <div className="divider" />

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-accent" size={16} />
                    </div>
                    <span className="text-base-content/80 text-lg">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="btn btn-primary w-full h-14 text-lg font-semibold">
                <Github size={22} />
                Get Started on GitHub
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
