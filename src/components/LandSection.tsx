import { motion } from "motion/react";
import { Map, Handshake, Sprout } from "lucide-react";
import {
  FIGMA_IMAGES
} from "./assets";

export function LandSection() {
  const cards = [
    {
      icon: <Map className="h-6 w-6" />,
      title: "Acquisition",
      desc: "Strategic sourcing of high-potential arable land.",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Leasing",
      desc: "Long-term agreements that benefit owner & soil.",
    },
    {
      icon: <Sprout className="h-6 w-6" />,
      title: "Development",
      desc: "Turning raw land into regenerative ecosystems.",
    },
  ];

  return (
    <section id="land" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#004733] leading-tight mb-6">
             Land as a Living Asset
          </h2>
          <p className="text-xl text-[#5A4631] font-light leading-relaxed">
             We move beyond ownership to stewardship. Our model ensures that every acre improves in biodiversity and carbon capture year over year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {[
            {
              title: "Land Purchasing",
              desc: "Sustainably chosen soil with water access + soil health.",
              img: FIGMA_IMAGES.purchasingImage,
              action: "Learn more"
            },
            {
              title: "Land Leasing",
              desc: "Guaranteed returns for landowners; we do all operations.",
              img: FIGMA_IMAGES.leaseImage,
              action: "Learn more"
            },
            {
              title: "Farmer Land Partnerships",
              desc: "Local farmer soil upgraded with training & guidance.",
              img: FIGMA_IMAGES.partnerImage,
              action: "Learn more"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-t-[40%] rounded-b-[2rem]">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                 <img 
                   src={item.img} 
                   alt={item.title}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
              </div>
              
              <h3 className="text-2xl font-serif text-[#004733] uppercase tracking-wide mb-4 relative inline-block">
                {item.title}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F4D35E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 px-2 font-medium">
                {item.desc}
              </p>
              
              <a href="#/land" className="bg-[#F4D35E] hover:bg-[#E0C040] text-[#004733] px-10 py-4 rounded-full text-base font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#F4D35E]/20 hover:shadow-xl hover:-translate-y-1">
                {item.action}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
