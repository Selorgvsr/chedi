import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ContactDialog } from "./ContactDialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Check, 
  ArrowRight, 
  Package, 
  Sprout, 
  Hammer, 
  GraduationCap, 
  HandHeart, 
  CheckCircle, 
  BadgeCheck, 
  ShieldCheck,
  Wallet,
  TrendingUp
} from "lucide-react";
import { FIGMA_IMAGES, UNSPLASH_IMAGES } from "./assets";

export function ContractFarmingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1A3C34]">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-[#1A3C34]">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={FIGMA_IMAGES.contractImage}
              alt="Farmers Shaking Hands"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/90 via-[#1A3C34]/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
            >
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
                  Fair Contracts. <br />
                  <span className="text-[#F4D35E]">Real Partnership.</span>
               </h1>
               <p className="text-xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
                  No hidden clauses. No fine print surprises. Just a fair partnership built on trust and transparency.
               </p>
            </motion.div>
        </div>
      </section>

      {/* Section 3: Model 1 — Support + Shared Outcome */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFBF0] border-y border-[#1A3C34]/5 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(#F4D35E_1px,transparent_1px)] [background-size:20px_20px]" />
         
         <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               {/* Left: Visual */}
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#F2F4F3] rounded-[3rem] p-8 md:p-12 h-[500px] md:h-[600px] flex items-center justify-center relative overflow-hidden shadow-xl order-2 lg:order-1"
               >
                  <ImageWithFallback 
                      src={UNSPLASH_IMAGES.FARMING_KIT}
                      alt="Farming Kit"
                      className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1A3C34]/20 mix-blend-multiply" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-lg border border-white/50">
                     <div className="flex items-center gap-4">
                        <div className="bg-[#1A3C34] p-3 rounded-full text-[#F4D35E]">
                           <Package className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-[#1A3C34] font-bold text-lg">Complete Farming Kit</p>
                           <p className="text-sm text-[#4A5D58]">Everything you need to start.</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Right: Content */}
               <div className="space-y-10 order-1 lg:order-2">
                  <div className="inline-block bg-[#1A3C34] text-[#F4D35E] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                     Model 1
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34]">
                     Support + Shared Outcome
                  </h2>
                  
                  {/* Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {[
                        { icon: Sprout, text: "Seeds" },
                        { icon: Package, text: "Raw Materials" },
                        { icon: Hammer, text: "Tools" },
                        { icon: GraduationCap, text: "Training" },
                        { icon: HandHeart, text: "Farming Guidance" },
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group p-2 rounded-lg hover:bg-[#F2F4F3] transition-colors">
                           <div className="w-10 h-10 bg-[#F4D35E]/20 rounded-full flex items-center justify-center group-hover:bg-[#F4D35E] transition-colors">
                              <item.icon className="w-5 h-5 text-[#1A3C34]" />
                           </div>
                           <span className="text-[#4A5D58] font-medium text-lg">{item.text}</span>
                        </div>
                     ))}
                  </div>

                  <div className="h-px bg-[#1A3C34]/10 w-full" />

                  {/* Process Text */}
                  <div className="space-y-4 text-[#4A5D58] text-lg leading-relaxed pl-4 border-l-4 border-[#F4D35E]">
                     <p>“Farmers produce the crop.”</p>
                     <p>“We pre-fix the buy-back price.”</p>
                     <p>“At harvest, we deduct expenses and pay them the remaining amount.”</p>
                     <p className="font-bold text-[#1A3C34] text-xl mt-2">“No surprises. No exploitation. Just growth.”</p>
                  </div>

                  {/* Flowchart Graphic */}
                  <div className="bg-[#F2F4F3] rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 text-sm font-bold text-[#1A3C34] shadow-inner">
                     <span className="bg-white px-3 py-1 rounded-md shadow-sm">Input</span>
                     <ArrowRight className="w-4 h-4 text-[#4A5D58]" />
                     <span className="bg-white px-3 py-1 rounded-md shadow-sm">Farming</span>
                     <ArrowRight className="w-4 h-4 text-[#4A5D58]" />
                     <span className="bg-white px-3 py-1 rounded-md shadow-sm">Buy-back</span>
                     <ArrowRight className="w-4 h-4 text-[#4A5D58]" />
                     <span className="text-[#2E7D32] flex items-center gap-2 bg-white px-3 py-1 rounded-md shadow-sm ring-1 ring-[#2E7D32]/20">
                        Settlement <CheckCircle className="w-4 h-4" />
                     </span>
                  </div>
                  
                  <div className="pt-6">
                    <ContactDialog>
                      <Button className="h-12 px-8 rounded-full bg-[#1A3C34] hover:bg-[#142f29] text-[#F4D35E] font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                         Get Started with Model 1
                      </Button>
                    </ContactDialog>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Transparency Message */}
      <section className="py-24 px-6 md:px-12 bg-[#E2F1E6]">
         <div className="container mx-auto max-w-6xl">
            <div className="bg-[#1A3C34] text-white rounded-[2rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
               {/* Decorative Background */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F4D35E] rounded-full blur-[80px] opacity-20 pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4D35E] to-transparent opacity-50" />

               <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                  {/* Icon / Badge */}
                  <div className="shrink-0">
                     <div className="w-24 h-24 bg-[#F4D35E] rounded-2xl rotate-3 flex items-center justify-center text-[#1A3C34] shadow-lg group-hover:rotate-6 transition-transform duration-300">
                        <ShieldCheck className="w-12 h-12" />
                     </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 text-left">
                     <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                       “We keep things transparent. <br/>
                       <span className="text-[#F4D35E]">Every farmer signs a clear, fair contract.”</span>
                     </h3>
                     <div className="h-px w-20 bg-white/20" />
                     <p className="text-lg text-[#A5C1AE] font-light leading-relaxed max-w-2xl">
                        No hidden clauses. No false promises. No grey areas — only growth.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Section 4: Model 2 — Farmer Independent Model */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFBF0] border-y border-[#1A3C34]/5 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(#F4D35E_1px,transparent_1px)] [background-size:20px_20px]" />
         
         <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               {/* Content (Left for alternation) */}
               <div className="space-y-10 order-1">
                  <div className="inline-block bg-[#1A3C34] text-[#F4D35E] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                     Model 2
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34]">
                     Farmer Independent Model
                  </h2>

                   {/* Points */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {[
                        { icon: Wallet, text: "Farmer Pays Expenses" },
                        { icon: GraduationCap, text: "Free Training" },
                        { icon: TrendingUp, text: "Market Buy-back Rates" },
                        { icon: ShieldCheck, text: "Full Control" },
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group p-2 rounded-lg hover:bg-white/50 transition-colors">
                           <div className="w-10 h-10 bg-[#1A3C34] rounded-full flex items-center justify-center group-hover:bg-[#F4D35E] group-hover:text-[#1A3C34] text-[#F4D35E] transition-all">
                              <item.icon className="w-5 h-5" />
                           </div>
                           <span className="text-[#4A5D58] font-medium text-lg">{item.text}</span>
                        </div>
                     ))}
                  </div>

                  <div className="h-px bg-[#1A3C34]/10 w-full" />

                  {/* Process Text */}
                  <div className="space-y-4 text-[#4A5D58] text-lg leading-relaxed pl-4 border-l-4 border-[#1A3C34]">
                     <p>“You manage the inputs and the process.”</p>
                     <p>“We provide knowledge and support.”</p>
                     <p>“We buy the output at market competitive rates.”</p>
                     <p className="font-bold text-[#1A3C34] text-xl mt-2 italic">“Maximum freedom. Maximum reward.”</p>
                  </div>

                   {/* Flowchart Graphic */}
                   <div className="bg-white rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 text-sm font-bold text-[#1A3C34] shadow-sm border border-[#1A3C34]/5">
                     <span className="bg-[#FFFBF0] px-3 py-1 rounded-md border border-[#F4D35E]/20">Self-Funded</span>
                     <ArrowRight className="w-4 h-4 text-[#4A5D58]" />
                     <span className="bg-[#FFFBF0] px-3 py-1 rounded-md border border-[#F4D35E]/20">Indep. Farming</span>
                     <ArrowRight className="w-4 h-4 text-[#4A5D58]" />
                     <span className="text-[#2E7D32] flex items-center gap-2 bg-[#FFFBF0] px-3 py-1 rounded-md border border-[#F4D35E]/20">
                        Market Sale <CheckCircle className="w-4 h-4" />
                     </span>
                  </div>

                  <div className="pt-6">
                    <ContactDialog>
                      <Button className="h-12 px-8 rounded-full bg-[#1A3C34] hover:bg-[#142f29] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                         Get Started with Model 2
                      </Button>
                    </ContactDialog>
                  </div>
               </div>

               {/* Visual (Right) */}
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[3rem] p-8 md:p-12 h-[500px] md:h-[600px] flex items-center justify-center relative overflow-hidden shadow-xl order-2"
               >
                  <ImageWithFallback 
                      src={FIGMA_IMAGES.independentFarmerImage}
                      alt="Independent Farmer"
                      className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1A3C34]/10 mix-blend-multiply" />
                   
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 left-8 right-8 bg-[#1A3C34]/95 backdrop-blur p-6 rounded-2xl shadow-lg border border-[#F4D35E]/30">
                     <div className="flex items-center gap-4">
                        <div className="bg-[#F4D35E] p-3 rounded-full text-[#1A3C34]">
                           <BadgeCheck className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-[#F4D35E] font-bold text-lg">Full Independence</p>
                           <p className="text-sm text-white/80">Your Farm. Your Rules.</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 text-center bg-[#1A3C34] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10" />

         
         <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
               Choose the model that fits your journey. <br/> 
               <span className="text-[#F4D35E]">We’re here to support every path.</span>
            </h2>
            
            <div className="flex justify-center">
               <ContactDialog>
                 <Button className="h-16 px-12 rounded-full bg-[#F4D35E] hover:bg-[#D4B64C] text-[#1A3C34] text-xl font-bold tracking-wide shadow-2xl hover:scale-105 transition-all">
                    Partner With Us
                 </Button>
               </ContactDialog>
            </div>
         </div>
      </section>

    </div>
  );
}
