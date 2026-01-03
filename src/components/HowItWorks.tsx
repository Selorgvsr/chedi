import { motion } from "motion/react";
import { GraduationCap, Handshake, TrendingUp, Leaf, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Training",
      description: "Join our camps to master natural farming techniques.",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Contract Farming",
      description: "Secure agreements with guaranteed support and buyback.",
      icon: Handshake,
      color: "bg-amber-100 text-amber-700"
    },
    {
      title: "Better Pricing",
      description: "Eliminate middlemen and get fair value for your produce.",
      icon: TrendingUp,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Carbon Credit",
      description: "Earn extra income by sequestering carbon in your soil.",
      icon: Leaf,
      color: "bg-emerald-100 text-emerald-700"
    }
  ];

  return (
    <section className="py-20 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A3C34]/5 mb-6 border border-[#1A3C34]/10"
           >
              <span className="w-2 h-2 rounded-full bg-[#F4A261]" />
              <span className="text-[#1A3C34] font-bold text-xs tracking-widest uppercase">
                Simple Process
              </span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-serif text-[#1A3C34] mb-6"
           >
              Your Journey to Growth
           </motion.h2>
           
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-[#5A4631] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
           >
              We've simplified agricultural success into four manageable steps designed to minimize risk and maximize returns.
           </motion.p>
        </div>

        <div className="relative">
           {/* Connecting Line (Desktop) - Behind cards */}
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-0">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-[#1A3C34]/20 to-transparent" />
           </div>

           <div className="grid md:grid-cols-4 gap-6 relative z-10">
             {steps.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.15 }}
                 className="group relative"
               >
                  <div className="h-full bg-white rounded-2xl p-8 pt-12 shadow-sm border border-[#1A3C34]/10 hover:border-[#F4A261]/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                     
                     {/* Step Number Badge */}
                     <div className="absolute -top-5 bg-[#1A3C34] text-[#F4A261] w-10 h-10 rounded-full flex items-center justify-center font-bold font-serif text-lg shadow-lg ring-8 ring-white group-hover:bg-[#F4A261] group-hover:text-[#1A3C34] transition-colors duration-300">
                        {i + 1}
                     </div>

                     {/* Icon */}
                     <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                        <step.icon className="w-10 h-10 text-[#1A3C34]" />
                     </div>
                     
                     <h3 className="text-xl font-bold text-[#1A3C34] mb-3 font-serif">{step.title}</h3>
                     <p className="text-[#5A4631] text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Mobile Arrow */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-6 text-[#1A3C34]/20">
                       <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}