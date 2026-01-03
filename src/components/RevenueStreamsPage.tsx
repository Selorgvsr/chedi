import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { UNSPLASH_IMAGES } from "./assets";
import { 
  Wheat, 
  Factory, 
  Milk, 
  Sun, 
  Tent, 
  ShoppingBag, 
  ArrowUpRight,
  ArrowRight,
  Sprout,
  Leaf
} from "lucide-react";

export function RevenueStreamsPage() {
  // Integrated Farming streams
  const integratedFarmingStreams = [
    {
      title: "Fruits & Vegetables",
      desc: "Seasonal produce grown sustainably.",
      icon: <Wheat className="w-6 h-6" />,
      color: "bg-[#E8F5E9]",
      textColor: "text-[#1A3C34]",
      image: UNSPLASH_IMAGES.POMEGRANATE
    },
    {
      title: "Value-Added Processing",
      desc: "Drying, grinding, extracting & packaging; higher margins, bigger markets.",
      icon: <Factory className="w-6 h-6" />,
      color: "bg-[#FFF8E1]",
      textColor: "text-[#B45309]",
      image: UNSPLASH_IMAGES.PROCESSING
    },
    {
      title: "Livestock Products",
      desc: "Dairy, manure & organic compost.",
      icon: <Milk className="w-6 h-6" />,
      color: "bg-[#F3F4F6]",
      textColor: "text-[#4B5563]",
      image: UNSPLASH_IMAGES.LIVESTOCK
    },
    {
      title: "B2C & B2B Sales",
      desc: "Revenue by selling Farm-Fresh produce with B2B & B2C.",
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "bg-[#FCE4EC]",
      textColor: "text-[#AD1457]",
      image: UNSPLASH_IMAGES.B2B
    }
  ];

  // Renewable Energy streams
  const renewableEnergyStreams = [
    {
      title: "Revenue Generation - Solar Power",
      desc: "Solar Power Generation in Agri land.",
      icon: <Sun className="w-6 h-6" />,
      color: "bg-[#FFF3E0]",
      textColor: "text-[#EA580C]",
      image: UNSPLASH_IMAGES.SOLAR_POWER
    },
    {
      title: "Carbon Credits",
      desc: "Earning revenue from sustainable practices and carbon sequestration.",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-[#E8F5E9]",
      textColor: "text-[#1A3C34]",
      image: UNSPLASH_IMAGES.CARBON_CREDITS_2
    }
  ];

  // Agri Tourism streams
  const agriTourismStreams = [
    {
      title: "Agri-Tourism",
      desc: "Gaining revenue from Farm stay, workshops & weekend retreats.",
      icon: <Tent className="w-6 h-6" />,
      color: "bg-[#E0F2F1]",
      textColor: "text-[#00695C]",
      image: UNSPLASH_IMAGES.AGRI_TOURISM_2
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF0] font-sans text-[#1A3C34]">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
             >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A3C34]/5 text-[#1A3C34] text-xs font-bold tracking-widest uppercase mb-6">
                   <ArrowUpRight className="w-3 h-3" /> Growth Potential
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-[#1A3C34] mb-8 leading-tight">
                   Every Acre Has More <br/> 
                   <span className="italic opacity-60">Potential Than You Think.</span>
                </h1>
                <p className="text-xl text-[#5A4631] font-light leading-relaxed max-w-lg">
                   Our model diversifies earning opportunities so every piece of land becomes a steady, scalable income source.
                </p>
             </motion.div>
             
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
             >
                <ImageWithFallback
                   src={UNSPLASH_IMAGES.DIVERSE_FARM}
                   alt="Diverse sustainable farm aerial view"
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/40 to-transparent"></div>
             </motion.div>
          </div>

          {/* Streams Grid */}
          <div className="space-y-16">
            
            {/* 1. Integrated Farming Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A3C34] mb-8 text-center">
                Integrated Farming
              </h2>
              
              {/* Flowchart Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                {integratedFarmingStreams.map((stream, i) => (
                  <div key={i} className="flex items-start gap-4 h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                      className="group relative bg-white rounded-xl border border-[#1A3C34]/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col flex-1 h-full min-h-[280px]"
                    >
                      <div className="h-32 w-full relative overflow-hidden flex-shrink-0">
                        <ImageWithFallback 
                          src={stream.image} 
                          alt={stream.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/20 to-transparent"></div>
                        
                        <div className="absolute top-2 left-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white/90 backdrop-blur-sm ${stream.textColor} shadow-lg`}>
                            {stream.icon}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="text-lg font-serif text-[#1A3C34] group-hover:text-[#000] transition-colors mb-1">
                          {stream.title}
                        </h3>
                        <p className="text-[#5A4631] text-sm leading-relaxed">
                          {stream.desc}
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Arrow connector - only show between cards, not after last one */}
                    {i < integratedFarmingStreams.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center flex-shrink-0 h-32 mt-0">
                        <ArrowRight className="w-6 h-6 text-[#000000]/30" strokeWidth={5} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Renewable Energy Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A3C34] mb-8 text-center">
                Renewable Energy
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {renewableEnergyStreams.map((stream, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                    className="group relative bg-white rounded-xl border border-[#1A3C34]/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="h-32 w-full relative overflow-hidden">
                      <ImageWithFallback 
                        src={stream.image} 
                        alt={stream.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/20 to-transparent"></div>
                      
                      <div className="absolute top-2 left-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white/90 backdrop-blur-sm ${stream.textColor} shadow-lg`}>
                          {stream.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-serif text-[#1A3C34] group-hover:text-[#000] transition-colors mb-1">
                        {stream.title}
                      </h3>
                      <p className="text-[#5A4631] text-sm leading-relaxed">
                        {stream.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 3. Agri Tourism Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A3C34] mb-8 text-center">
                Agri Tourism
              </h2>
              
              <div className="max-w-md mx-auto">
                {agriTourismStreams.map((stream, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="group relative bg-white rounded-xl border border-[#1A3C34]/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="h-32 w-full relative overflow-hidden">
                      <ImageWithFallback 
                        src={stream.image} 
                        alt={stream.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/20 to-transparent"></div>
                      
                      <div className="absolute top-2 left-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white/90 backdrop-blur-sm ${stream.textColor} shadow-lg`}>
                          {stream.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-serif text-[#1A3C34] group-hover:text-[#000] transition-colors mb-1">
                        {stream.title}
                      </h3>
                      <p className="text-[#5A4631] text-sm leading-relaxed">
                        {stream.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Summary / Decor */}
          <div className="mt-24 text-center opacity-40">
             <div className="inline-flex items-center gap-3 text-[#1A3C34]">
                <Sprout className="w-5 h-5" />
                <span className="text-sm font-mono tracking-widest uppercase">Sustainable Growth Model</span>
                <Sprout className="w-5 h-5" />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
