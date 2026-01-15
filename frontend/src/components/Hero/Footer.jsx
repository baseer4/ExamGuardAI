import { Github, Twitter, Linkedin, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-base-100 pt-20 pb-10 px-6 border-t border-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center text-2xl font-semibold tracking-tight">
              <span>E</span>xam
              <span className="text-accent">G</span>uard
              <span className="text-accent">AI</span>
            </div>
            <p className="text-base-content/50 text-sm leading-relaxed">
              Decentralized, client-side AI proctoring infrastructure. Built
              with MediaPipe and WebAssembly for maximum privacy.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-md bg-base-200 hover:bg-accent hover:text-accent-content transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-base-200 hover:bg-accent hover:text-accent-content transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-base-200 hover:bg-accent hover:text-accent-content transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-10">
            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-base-content/40 font-bold">
                Product
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href="#features"
                    className="hover:text-accent transition-colors"
                  >
                    Proctoring Features
                  </a>
                </li>
                <li>
                  <a
                    href="#modes"
                    className="hover:text-accent transition-colors"
                  >
                    Exam Modes
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-accent transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-base-content/40 font-bold">
                Platform
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href="#architecture"
                    className="hover:text-accent transition-colors"
                  >
                    System Architecture
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-accent transition-colors"
                  >
                    Privacy & Security
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-accent transition-colors"
                  >
                    Open Source
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-base-content/40 font-bold">
                Developers
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-base-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 font-mono text-[10px] text-base-content/40 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              System Stable
            </div>
            <span>v2.4.0-Stable</span>
            <span className="hidden sm:block">MIT License</span>
          </div>

          <div className="text-[11px] font-mono text-base-content/30 flex items-center gap-1">
            <Terminal size={12} />
            Designed by Baseer // {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
