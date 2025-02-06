import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const features = [
    {
      title: "Initial Setup",
      steps: ["Configure authentication components", "Install required dependencies", "Set up UI components"],
      icon: "🚀"
    },
    {
      title: "Configuration", 
      steps: ["Set environment variables", "Configure authentication", "Set up database connection"],
      icon: "⚙️"
    },
    {
      title: "Deployment",
      steps: ["Verify build process", "Check configurations", "Deploy application"],
      icon: "🌐"
    }
  ];

  return (
    <div className="py-48">
      <main className="h-full">
        <section className="h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-[52rem] mx-auto flex flex-col items-center gap-6 text-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full blur-xl bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <Sparkles className="relative h-16 w-16 text-emerald-400 animate-pulse" />
              </div>
              <div className="space-y-4">
                <h1 className="py-6 font-extrabold text-5xl sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-zinc-200 to-white tracking-tight">
                  Nextjs Starter Kit
                </h1>
                <Link 
                  href="https://codinzero.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block group"
                >
                  <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 tracking-tight group-hover:opacity-90 transition-all duration-300">
                    codinzero.com
                  </h2>
                </Link>
              </div>
            </div>
            <div className="mt-12 mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-emerald-700/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative h-full rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-xl group-hover:border-emerald-500/30 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-white">
                          {feature.title}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {feature.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-center gap-3 text-zinc-400">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50"></div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}