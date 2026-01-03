import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FIGMA_IMAGES } from "./assets";

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1A3C34] pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
            
            {/* Center Top: Name and Place */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6 mb-16"
            >
                {/* Logo */}
                <div className="w-48 md:w-64 mx-auto mb-6">
                   <ImageWithFallback 
                      src={FIGMA_IMAGES.kavelLogo}
                      alt="The Kavel Logo"
                      className="w-full h-auto object-contain"
                   />
                </div>

                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#1A3C34]">
                    A Living Blueprint of the Future
                </h1>
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#F4D35E]/20 text-[#004733] font-bold uppercase tracking-widest text-sm md:text-base border border-[#F4D35E]/30">
                    <span>📍</span> Panavayal, Sivagangai, Tamil Nadu
                </div>
            </motion.div>

            {/* Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 aspect-[16/9] relative group"
            >
                 <ImageWithFallback
                    src={FIGMA_IMAGES.landImage}
                    alt="Kavel Project Site"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/60 via-transparent to-transparent" />
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                    <p className="font-mono text-sm uppercase tracking-wider opacity-80 mb-2">Project Status</p>
                    <p className="text-2xl md:text-3xl font-serif">Active Development</p>
                 </div>
            </motion.div>

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-10 text-lg md:text-xl leading-relaxed text-[#4A5D58] max-w-4xl mx-auto"
            >
                <div className="space-y-6">
                    <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#1A3C34] first-letter:mr-3 first-letter:float-left">
                        At Kavel, we’re not talking about farming dreams — we’re building them from the soil up.
                        This land is our pilot ground, where we test, refine, and perfect every cultivation model before taking it to the world.
                    </p>
                    <p>
                        Here, the old rhythm of agriculture meets the clarity of modern systems.
                        We study the land, restore its strength, and choose crops that fit the soil instead of forcing the soil to fit us.
                    </p>
                </div>
                
                <div className="bg-[#F2F4F3] p-8 md:p-12 rounded-[2rem] border-l-8 border-[#F4D35E] my-12 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-3xl font-serif text-[#1A3C34] mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#1A3C34] text-[#F4D35E] flex items-center justify-center text-sm">★</span>
                        Kavel is where:
                    </h3>
                    <ul className="space-y-6">
                        {[
                            "Local farmers are trained hands-on through real field work, workshops, and seasonal camps.",
                            "Integrated farming begins with paddy, vegetables, greens, medicinal plants, and livestock-based organic cycles.",
                            "Sustainable soil practices are brought back — composting, natural inputs, and zero-chemical growth.",
                            "Subscription farming and lease models are first piloted to see how customers can adopt their own patches of land.",
                            "Farmer earning models are tested in real time — from cost-sharing cultivation to farmer-led production.",
                            "Ancillary units like paddy straw processing, natural manures, cow/goat waste compost, and by-products are set up.",
                            "Agrivoltaics, Animal husbandry, and Solar solutions are integrated to create a sustainable, energy-independent ecosystem."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 items-start">
                                <span className="text-[#F4D35E] text-2xl leading-none mt-1">•</span>
                                <span className="text-[#1A3C34] font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6 border-t border-[#1A3C34]/10 pt-10">
                    <p>
                        This isn’t a concept.
                        This is an active project — land measured, soil prepared, crops selected, farmers enrolled, processes running.
                    </p>

                    <div className="py-6 text-center md:text-left">
                        <p className="font-serif text-3xl md:text-4xl text-[#1A3C34] italic">
                            “Kavel is our proof-of-work.”
                        </p>
                    </div>

                    <p>
                        A living, breathing space showing how <img src={FIGMA_IMAGES.chediTextLogo} alt="Chedi" className="h-9 md:h-12 inline-block mx-1 object-contain align-middle" /> can reshape rural livelihoods, revive soil health, and build a community-led agricultural future.
                    </p>
                    <p className="font-bold text-[#1A3C34] text-2xl pt-4">
                        And from this land… the <img src={FIGMA_IMAGES.chediTextLogo} alt="Chedi" className="h-10 md:h-14 inline-block mx-1 object-contain align-middle" /> movement grows.
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  );
}
