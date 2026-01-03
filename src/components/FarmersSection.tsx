import { motion } from "motion/react";
import { ArrowRight, Users, Smartphone, Tent } from "lucide-react";
import { FIGMA_IMAGES, UNSPLASH_IMAGES } from "./assets";

export function FarmersSection() {
  return (
    <section id="farmers" className="py-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Panel - Dark Green */}
          <div className="bg-[#004733] p-8 md:p-12 flex flex-col relative">
            <div className="relative z-10">
              <span className="text-[#F4D35E] font-mono text-sm tracking-widest uppercase mb-4 block">
                FARMERS — Our Heartbeat
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Farmers First. <br /> Always.
              </h2>
              <p className="text-white/80 text-lg mb-12 font-light max-w-md leading-relaxed">
                We uplift local farmers through tech, training, and guaranteed buyback systems.
              </p>

              {/* Farmer Image Card */}
              <div className="relative">
                 <div className="bg-white p-2 rounded-2xl rotate-1 hover:rotate-0 transition-transform duration-500 shadow-lg max-w-sm mx-auto lg:mx-0">
                    <img
                      src={FIGMA_IMAGES.farmerPortrait}
                      alt="Farmer Portrait"
                      className="w-full aspect-[4/5] object-cover rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    />
                 </div>
              </div>
            </div>
            
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>

          {/* Right Panel - Split Layout */}
          <div className="flex flex-col h-full">
            {/* Top Image */}
            <div className="h-64 lg:h-1/2 relative overflow-hidden">
              <img
                src={UNSPLASH_IMAGES.MODERN_FARMING}
                alt="Modern Farming"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Bottom Content - Light Green Theme */}
            <div className="bg-[#E9F5E6] p-8 md:p-12 flex-1 flex flex-col justify-center">
               <h3 className="text-2xl font-serif text-[#004733] mb-8">
                  Community Initiatives
               </h3>
               <div className="space-y-6">
                  {[
                    { title: "Local Farmer Collaboration", icon: Users, desc: "Building strong regional networks." },
                    { title: "Training Through Our App", icon: Smartphone, desc: "Digital tools for modern agronomy." },
                    { title: "Farmer Camps", icon: Tent, desc: "Women, Students & Community workshops." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                       <div className="bg-white p-3 rounded-xl text-[#004733] shadow-sm group-hover:bg-[#F4D35E] transition-colors duration-300">
                          <item.icon className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-[#004733] text-lg">{item.title}</h4>
                          <p className="text-[#5A4631]/80 text-sm">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
