import { motion } from "motion/react";
import { Check, Leaf, Sun, Sprout, Shovel, Handshake, Tractor } from "lucide-react";
import { Button } from "./ui/button";
import { ContactDialog } from "./ContactDialog";
import { FIGMA_IMAGES } from "./assets";

export function ContractModels() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           
           <h2 className="text-4xl md:text-5xl font-serif text-[#004733] mb-6 md:whitespace-nowrap">
              Transparent Contracts. Fair Income.
           </h2>
        </div>

        {/* Main Layout Container */}
        <div className="max-w-5xl mx-auto">
           
           {/* Top Hero Image */}
           <div className="relative rounded-[2.5rem] overflow-visible mb-24">   
           </div>

           {/* Cards Grid */}
           <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Model 1 */}
              <motion.div 
                className="bg-[#004733] text-white rounded-[2rem] p-10 relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                 {/* Decor */}
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Handshake className="w-32 h-32" />
                 </div>

                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#F4D35E] rounded-full flex items-center justify-center mb-6 text-[#004733]">
                       <span className="font-bold text-lg">1</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif mb-2">Support + Shared Outcome</h3>
                    <p className="text-white/70 mb-8 text-sm">Full partnership model.</p>
                    
                    <ul className="space-y-4">
                       {[
                          "We provide raw materials",
                          "We fix buyback price",
                          "We deduct expenses & pay the balance"
                       ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                             <Check className="w-5 h-5 text-[#F4D35E] shrink-0 mt-0.5" />
                             <span className="text-white/90 font-medium">{item}</span>
                          </li>
                       ))}
                    </ul>
                     
                     <div className="mt-8 pt-8 border-t border-white/10">
                        <ContactDialog>
                           <Button className="w-full bg-[#F4D35E] hover:bg-[#D4B64C] text-[#1A3C34] font-bold h-12 rounded-xl">
                              Get Started with Model 1
                           </Button>
                        </ContactDialog>
                     </div>
                  </div>
              </motion.div>
              
              {/* Model 2 */}
              <motion.div 
                className="bg-[#E9F5E6] text-[#004733] rounded-[2rem] p-10 relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                 {/* Decor */}
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Tractor className="w-32 h-32" />
                 </div>

                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#004733] rounded-full flex items-center justify-center mb-6 text-[#F4D35E]">
                       <span className="font-bold text-lg">2</span>
                    </div>

                    <h3 className="text-2xl font-serif mb-2">Farmer Independent</h3>
                    <p className="text-[#5A4631]/70 mb-8 text-sm">Self-sufficient growth.</p>
                    
                    <ul className="space-y-4">
                       {[
                          "Farmer invests in inputs",
                          "We give free training",
                          "We buy at market or pre-fixed rates"
                       ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                             <Check className="w-5 h-5 text-[#004733] shrink-0 mt-0.5" />
                             <span className="text-[#004733]/90 font-medium">{item}</span>
                          </li>
                       ))}
                    </ul>

                     <div className="mt-8 pt-8 border-t border-[#004733]/10">
                        <ContactDialog>
                           <Button className="w-full bg-[#004733] hover:bg-[#003324] text-white font-bold h-12 rounded-xl">
                              Get Started with Model 2
                           </Button>
                        </ContactDialog>
                     </div>
                  </div>
              </motion.div>

           </div>
        </div>
      </div>
    </section>
  );
}
