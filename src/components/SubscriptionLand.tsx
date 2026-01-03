import { motion } from "motion/react";
import { Carrot, Sprout, LayoutDashboard } from "lucide-react";

export function SubscriptionLand() {
  return (
    <section id="subscription-land" className="py-32 bg-[#F4D35E] text-[#004733] overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(#004733 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-20">
           <div className="lg:w-1/2">
              <span className="text-[#004733] font-mono text-sm tracking-widest uppercase mb-6 block">Farming as a Service</span>
              <h2 className="text-5xl lg:text-7xl font-serif mb-8 leading-[1.1]">
                Your Farm. <br/> Managed by Us.
              </h2>
              <p className="text-xl text-[#004733]/80 font-medium mb-12 max-w-md">
                Subscribe to a soil, manage it via our app, and receive your own organic produce. No mud on your boots.
              </p>
              <a href="#/subscription-land" className="bg-[#004733] text-white hover:bg-[#003828] rounded-full px-8 h-14 text-base font-medium inline-flex items-center justify-center">
                 Start Subscription
              </a>
           </div>

           <div className="lg:w-1/2 grid gap-8">
              {[
                {
                  icon: <Carrot className="w-6 h-6" />,
                  title: "Curated Catalog",
                  desc: "Choose from 30+ seasonal heirloom varieties.",
                },
                {
                  icon: <LayoutDashboard className="w-6 h-6" />,
                  title: "Digital Twin",
                  desc: "Monitor soil health and growth via real-time dashboard.",
                },
                {
                  icon: <Sprout className="w-6 h-6" />,
                  title: "Doorstep Harvest",
                  desc: "Fresh produce delivered within 24 hours of harvest.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 p-6 border-b border-[#004733]/10 hover:bg-[#004733]/5 transition-colors"
                >
                   <div className="text-[#004733]">{feature.icon}</div>
                   <div>
                      <h4 className="text-xl font-medium mb-2">{feature.title}</h4>
                      <p className="text-[#004733]/70 font-medium">{feature.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
