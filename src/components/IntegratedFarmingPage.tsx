import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Wheat, 
  Milk, 
  Droplets, 
  Recycle, 
  Fish, 
  Sun, 
  Zap, 
  Leaf, 
  Sprout, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { FIGMA_IMAGES } from "./assets";

export function IntegratedFarmingPage() {
  return (
    <div className="min-h-screen bg-[#FDFDF9] font-sans text-[#1A3C34]">
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 relative">
         <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
               >
                   <span className="text-[#8B3D3F] font-mono text-sm tracking-widest uppercase mb-4 block">
                      The Future of Sustainable Agriculture
                   </span>
                   <h1 className="text-5xl md:text-7xl font-serif text-[#1A3C34] mb-6 leading-tight">
                      Integrated Farming — <br/>
                      <span className="italic font-light opacity-80">Where Everything Connects</span>
                   </h1>
                   <p className="text-xl text-[#5A4631] font-light leading-relaxed max-w-2xl mx-auto">
                      Multiple income streams. Minimal waste. Maximum output.<br/>
                      A farm that functions like an ecosystem.
                   </p>
               </motion.div>
            </div>

            {/* Illustrated System Flow */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative w-full rounded-[3rem] overflow-hidden bg-white shadow-xl border border-[#1A3C34]/10 p-8 md:p-16 mb-24"
            >
               <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2 order-2 md:order-1">
                     <div className="space-y-8">
                        <div>
                           <h3 className="text-3xl font-serif text-[#1A3C34] mb-4">The Cycle of Life</h3>
                           <p className="text-[#5A4631] leading-relaxed">
                              In our integrated system, nothing is wasted. The output of one process becomes the input for another, creating a self-sustaining loop that regenerates the land.
                           </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-[#F3F4F6] p-4 rounded-2xl">
                              <div className="font-bold text-[#1A3C34] text-lg">Zero</div>
                              <div className="text-sm text-[#5A4631]">Waste Generated</div>
                           </div>
                           <div className="bg-[#F3F4F6] p-4 rounded-2xl">
                              <div className="font-bold text-[#1A3C34] text-lg">100%</div>
                              <div className="text-sm text-[#5A4631]">Organic Cycle</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                     <div className="relative w-full max-w-lg aspect-square">
                        <ImageWithFallback 
                           src={FIGMA_IMAGES.integratedFarmingImg}
                           alt="Integrated Farming Cycle Diagram"
                           className="w-full h-full object-contain drop-shadow-2xl"
                        />
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Components We Build */}
            <div className="mb-24">
               <h2 className="text-4xl font-serif text-[#1A3C34] text-center mb-12">Components We Build</h2>
               <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                     { name: "Crop Farming", icon: <Wheat className="w-8 h-8" />, desc: "Diverse multi-cropping systems" },
                     { name: "Livestock Rearing", icon: <Milk className="w-8 h-8" />, desc: "Dairy, poultry, and goat farming" },
                     { name: "Hydroponics", icon: <Droplets className="w-8 h-8" />, desc: "Soil-less vertical farming" },
                     { name: "Vermicomposting", icon: <Recycle className="w-8 h-8" />, desc: "Turning waste into gold" },
                     { name: "Aquaponics", icon: <Fish className="w-8 h-8" />, desc: "Fish and plant symbiosis" },
                     { name: "Solar Integration", icon: <Sun className="w-8 h-8" />, desc: "Renewable energy inputs" },
                     { name: "Biogas Units", icon: <Zap className="w-8 h-8" />, desc: "Fuel from organic matter" },
                     { name: "Bio-Fertilizers", icon: <Leaf className="w-8 h-8" />, desc: "Natural soil enhancers" }
                  ].map((item, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-[#1A3C34]/5 flex flex-col items-center text-center group hover:border-[#1A3C34]/20 transition-all"
                     >
                        <div className="w-16 h-16 bg-[#F4D35E]/10 rounded-full flex items-center justify-center mb-6 text-[#1A3C34] group-hover:bg-[#F4D35E] transition-colors">
                           {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#1A3C34] mb-2">{item.name}</h3>
                        <p className="text-[#5A4631] text-sm">{item.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* Outcome & Why It Matters */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-[#1A3C34] text-white p-12 rounded-[3rem] relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                     <Sprout className="w-64 h-64" />
                  </div>
                  <h3 className="text-3xl font-serif mb-6 relative z-10">Outcome</h3>
                  <ul className="space-y-4 relative z-10">
                     {["Balanced Soil Health", "Nutrient-Dense Crops", "Reduced Operational Costs", "Higher Profitability"].map((outcome, i) => (
                        <li key={i} className="flex items-center gap-3 text-lg opacity-90">
                           <CheckCircle2 className="w-6 h-6 text-[#F4D35E]" />
                           {outcome}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="bg-[#F4D35E] text-[#1A3C34] p-12 rounded-[3rem] relative overflow-hidden flex flex-col justify-center">
                   <h3 className="text-3xl font-serif mb-6">Why It Matters</h3>
                   <p className="text-xl font-medium leading-relaxed mb-6">
                      "Integrated farming keeps the land alive. It turns a farm into a cycle — not a struggle."
                   </p>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
