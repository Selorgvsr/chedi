import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { UNSPLASH_IMAGES } from "./assets";

export function RevenueStreams() {
  const streams = [
    {
      title: "Solar",
      description: "Clean energy generation utilizing farm infrastructure spaces.",
      image: UNSPLASH_IMAGES.SOLAR,
    },
    {
      title: "Agri Tourism",
      description: "Immersive farm stays, nature retreats, and educational tours.",
      image: UNSPLASH_IMAGES.AGRI_TOURISM,
    },
    {
      title: "Carbon Credits",
      description: "Monetizing carbon sequestration through diverse green cover.",
      image: UNSPLASH_IMAGES.CARBON_CREDITS,
    },
    {
      title: "Ancillary Products",
      description: "Value-added sustainable goods derived from farm by-products.",
      image: UNSPLASH_IMAGES.ANCILLARY,
    }
  ];

  return (
    <section id="revenue-streams" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
             <div className="flex items-center gap-2 text-[#004733]/60 text-sm font-bold tracking-widest uppercase mb-4">
                Diversified Income <ArrowRight className="w-4 h-4" />
             </div>
             <h2 className="text-5xl md:text-6xl font-serif text-[#004733] leading-tight">
               Other Revenue <span className="underline decoration-[#F4D35E] underline-offset-8">Streams</span>
             </h2>
          </div>
          <p className="text-[#004733]/70 max-w-md text-lg leading-relaxed">
            Maximizing value through sustainable diversification and innovative eco-friendly practices.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {streams.map((item, index) => {
            // Uniform card styling: Light Yellow background with Dark Green text
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => window.location.hash = "#/revenue-streams"}
                className="relative rounded-[2.5rem] overflow-hidden p-6 flex flex-col justify-between min-h-[420px] group transition-all duration-500 hover:shadow-2xl bg-[#FFFBEB] text-[#1A3C34] cursor-pointer"
              >
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-medium leading-tight max-w-[85%]">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-6 h-6 text-[#1A3C34]" />
                   </div>
                   <p className="text-base leading-relaxed text-[#1A3C34]/70">
                     {item.description}
                   </p>
                </div>

                <div className="mt-8 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500">
                   <ImageWithFallback 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover"
                   />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
