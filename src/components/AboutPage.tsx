import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { UNSPLASH_IMAGES } from "./assets";
import { 
  Sprout, 
  Handshake, 
  Users, 
  ScanLine, 
  Mountain, 
  Leaf,
  Heart
} from "lucide-react";

export function AboutPage() {
  const bridgePoints = [
    {
      title: "Tech & Innovation",
      icon: <Sprout className="w-6 h-6" />,
      desc: "Enabling farmers with advanced technology and data for better yield."
    },
    {
      title: "Ethical Contracting",
      icon: <Handshake className="w-6 h-6" />,
      desc: "Fair agreements that protect all parties and ensure stability."
    },
    {
      title: "Training & Camps",
      icon: <Users className="w-6 h-6" />,
      desc: "Hands-on workshops to upskill farmers in natural farming."
    },
    {
      title: "Tech-Driven Transparency",
      icon: <ScanLine className="w-6 h-6" />,
      desc: "Traceable, honest supply chains from seed to sale."
    },
    {
      title: "Solar & Renewables",
      icon: <Mountain className="w-6 h-6" />,
      desc: "Powering farms with sustainable energy solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#1A3C34] font-sans">
      
      {/* Hero Section */}
      <div className="pt-40 pb-20 px-6 container mx-auto max-w-7xl">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-4xl mx-auto mb-24"
        >
           <span className="inline-block py-1 px-3 rounded-full bg-[#1A3C34]/5 text-[#1A3C34] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              About Us
           </span>
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-8">
              Rooted in Soil. <br/>
              <span className="italic text-[#B45309]">Driven by Vision.</span>
           </h1>
          <p className="text-xl md:text-3xl text-#F4D35E font-light max-w-3xl mx-auto leading-relaxed">
            Thriving farms, steady cash, chemical-free meals for your kids.</p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
           >
              <ImageWithFallback
                 src={UNSPLASH_IMAGES.HANDS_HOLDING_SOIL}
                 alt="Hands holding rich soil"
                 className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1A3C34]/10 mix-blend-multiply"></div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
              <h2 className="text-4xl font-serif mb-8">The Story</h2>
              <div className="text-xl text-[#5A4631] space-y-6 leading-relaxed">
                 <p>
                    We started with a simple mission:
                 </p>
                 <p className="text-2xl text-[#1A3C34] font-medium border-l-4 border-[#B45309] pl-6 italic">
                    Make agriculture profitable again while healing the land and empowering the people who live on it.
                 </p>
                 <p>
                    It wasn't just about growing crops; it was about growing a future where farming is sustainable, equitable, and thriving for generations to come.
                 </p>
              </div>
           </motion.div>
        </div>

        {/* Bridge Section */}
        <div className="mb-32">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Bridging the Gap</h2>
              <p className="text-xl text-[#5A4631]">
                 Today, we bridge landowners, farmers, and businesses through a holistic approach:
              </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bridgePoints.map((point, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   className="bg-white p-8 rounded-[2rem] border border-[#1A3C34]/5 hover:border-[#B45309]/30 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                   <div className="w-14 h-14 rounded-full bg-[#F3F4F6] group-hover:bg-[#FFF8E1] flex items-center justify-center text-[#1A3C34] group-hover:text-[#B45309] transition-colors mb-6">
                      {point.icon}
                   </div>
                   <h3 className="text-xl font-bold text-[#1A3C34] mb-3">{point.title}</h3>
                   <p className="text-[#5A4631]">{point.desc}</p>
                </motion.div>
              ))}
              
              {/* Last card styling (optional decorative card or just fill) */}
              <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.5 }}
                   className="bg-[#1A3C34] p-8 rounded-[2rem] flex flex-col justify-center items-center text-center text-white shadow-xl"
              >
                  <Leaf className="w-12 h-12 mb-4 text-[#E9C46A]" />
                  <p className="font-serif text-xl">And we're just getting started.</p>
              </motion.div>
           </div>
        </div>

        {/* Promise Section */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-[#E9C46A]/10 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
               {/* Pattern simulation */}
               <div className="w-full h-full bg-[radial-gradient(#1A3C34_1px,transparent_1px)] [background-size:20px_20px]"></div>
           </div>
           
           <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-3 bg-white rounded-full mb-8 shadow-md">
                  <Heart className="w-6 h-6 text-[#B45309] fill-current" />
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#1A3C34] mb-8">We Together</h2>
              <p className="text-2xl md:text-3xl text-[#5A4631] font-light leading-relaxed">
                 "Will build on clarity, honesty, and long-term impact."
              </p>
           </div>
        </motion.div>

      </div>
    </div>
  );
}
