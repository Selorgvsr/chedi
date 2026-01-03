import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FIGMA_IMAGES } from "./assets";

export function IntegratedFarming() {
  return (
    <section id="integrated-farming" className="py-28 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-5xl font-serif text-[#004733] mb-6">
             Integrated Farming — Where Everything Connects
           </h2>
           <p className="text-[#004733]/70 text-lg font-medium max-w-2xl mx-auto">
             Nothing is wasted. Everything is connected. A closed-loop system mimicking nature.
           </p>
        </div>

        {/* Desktop Circular Flow */}
        <div className="hidden md:block relative w-full max-w-3xl mx-auto">
           <ImageWithFallback
             src={FIGMA_IMAGES.integratedFarmingImg2}
             alt="Integrated Farming Cycle"
             className="w-full h-auto -mt-12"
           />
        </div>

        {/* Mobile Vertical Flow */}
        <div className="md:hidden space-y-6 max-w-md mx-auto">
           {[
             "Multi-crop", "Animals", "Compost", "Soil", "Water recycling", "Bio-fertilizers", "Outputs"
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-4 bg-[#F9F9F9] p-4 rounded-xl border border-[#004733]/10">
                <div className="w-10 h-10 rounded-full bg-[#004733] text-[#F4D35E] flex items-center justify-center font-bold text-sm">
                   {i + 1}
                </div>
                <span className="text-[#004733] font-medium text-lg">{item}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
