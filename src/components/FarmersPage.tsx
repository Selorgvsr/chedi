import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FIGMA_IMAGES, UNSPLASH_IMAGES } from "./assets";
import { 
  Sprout, 
  Smartphone, 
  Users, 
  GraduationCap, 
  Heart, 
  ArrowRight, 
  Leaf, 
  Droplets, 
  Bug,
  BookOpen,
  Wheat,
  Signal,
  Gauge,
  ArrowUp,
  Wind,
  Package,
  Hammer,
  HandHeart,
  CheckCircle,
  BadgeCheck,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "./ui/dialog";
import { useState } from "react";

function FarmerTechSupportCards() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const allCards = [
    {
      image: UNSPLASH_IMAGES.SUSTAINABLE_SOIL,
      title: "Sustainable Soil & Crop Health Innovation",
      description: "The tool develops carbon-negative, nature-based, and biotech products for agriculture and allied industries. Its solutions are designed to improve soil health, enhance crop immunity, increase disease resistance, and provide sustainable pest protection. By focusing on regenerative practices, this tool helps farmers reduce chemical dependency while restoring long-term soil fertility and environmental balance."
    },
    {
      image: UNSPLASH_IMAGES.DIGITAL_AGRI,
      title: "Digital Agriculture & Predictive Intelligence",
      description: "The tool empowers stakeholders across the agri-ecosystem through digitization and predictive intelligence. It helps users make informed decisions to improve farming efficiency, scale productivity, manage risks, and adapt to environmental changes. By combining data analytics with sustainability insights, this tool supports resilient and future-ready agriculture."
    },
    {
      image: UNSPLASH_IMAGES.FARM_INPUTS,
      title: "End-to-End Farm Input & Advisory",
      description: "This is a one-stop solution for all essential farm inputs. Farmers can purchase genuine seeds, crop protection products, crop nutrition, farm implements, and agri-hardware directly at their doorstep. The platform also provides localized packages of practices, expert crop advisory, and real-time weather information. By combining trusted products with timely guidance, this tool helps farmers grow healthier crops and improve productivity."
    },
    {
      image: UNSPLASH_IMAGES.DRONE,
      title: "Precision Agriculture Drone Solution",
      description: "This tool features a DGCA type-certified agricultural drone built to revolutionize modern farming practices. The drone offers exceptional endurance, stability, and precision for spraying, crop monitoring, and field analysis. It enables farmers to save time, reduce input costs, and apply treatments accurately, resulting in better crop health and improved yields."
    },
    {
      image: UNSPLASH_IMAGES.IOT_SENSORS,
      title: "IoT-Based Crop Monitoring & Predictive Analytics",
      description: "The app uses IoT sensors and predictive analytics to help farmers make informed decisions throughout the crop cycle. The sensing system collects real-time data on weather, soil moisture, temperature, and other critical growth factors. These insights enable timely interventions, improved yield forecasting, and reduced risk from unpredictable conditions."
    },
    {
      image: UNSPLASH_IMAGES.AI_FARMING,
      title: "AI-Driven Smart Farming",
      description: "The platform is a data-driven farming platform that uses artificial intelligence and machine learning to optimize crop yields. It analyzes field data to recommend better irrigation practices and reduce water consumption. By improving resource efficiency, helps farmers increase profitability while conserving natural resources."
    },
    {
      image: UNSPLASH_IMAGES.ROBOT,
      title: "Autonomous Weeding Robotics Tool",
      description: "The tool develops advanced robotics and AI-powered autonomous weeding machines for agriculture. Using computer vision and machine learning, the machines accurately identify weeds and remove them without damaging crops. This solution reduces labor costs, minimizes chemical herbicide use, and supports cleaner, more sustainable farming practices."
    },
    {
      image: UNSPLASH_IMAGES.HARVEST,
      title: "Post-Harvest & Quality Management Solution",
      description: "The tool supports the farmers and agri-enterprises manage critical post-harvest activities efficiently. It offers tools for procurement assessment, inventory monitoring, automated quality auditing, and end-to-end food traceability. The platform reduces post-harvest losses, improves transparency, and ensures better price realization by maintaining consistent quality standards across the supply chain."
    },
    {
      image: UNSPLASH_IMAGES.AGRI_DATA,
      title: "Agri Strategy, Data & Financial Intelligence Platform",
      description: "The tool supports agribusinesses and institutions build data-driven strategies across farming, farmer engagement, procurement, processing, supply chain, and financial management. The platform enables better planning, performance tracking, and decision-making by converting complex agricultural data into actionable insights."
    },
    {
      image: UNSPLASH_IMAGES.URBAN_FARMING,
      title: "Modular In-Store & Urban Farming Solution",
      description: "The tool designs and operates modular farms inside grocery stores, restaurants, and distribution centers. These farms enable fresh food production close to consumers, reducing transportation and storage losses. The solution promotes hyper-local farming, freshness, and sustainability while transforming unused spaces into productive food systems."
    },
    {
      image: UNSPLASH_IMAGES.HYDROPONIC,
      title: "Container-Based Hydroponic Farming Solution",
      description: "The company manufactures and sells container farms—fully automated hydroponic systems built inside intermodal freight containers. These systems allow fresh food to be grown in any environment, regardless of climate or location. The company's mission is to create a more sustainable and connected food system by enabling reliable, year-round food production anywhere in the world."
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const renderCard = (item: typeof allCards[0], index: number) => (
    <div key={index} className="relative">
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl border border-[#1A3C34]/10 shadow-md hover:shadow-xl transition-all overflow-hidden"
      >
        <div className="h-32 w-full relative overflow-hidden">
          <ImageWithFallback 
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/30 to-transparent" />
        </div>
        <div className="p-4 space-y-3">
          <h3 className="text-base font-serif text-[#1A3C34] text-center min-h-[3rem] flex items-center justify-center">
            {item.title}
          </h3>
          <button
            onClick={() => toggleCard(index)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#F4D35E] hover:bg-[#1A3C34] text-[#1A3C34] hover:text-[#F4D35E] rounded-lg transition-colors duration-300"
          >
            <span className="text-sm">Learn More</span>
            {expandedCard === index ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </motion.div>
      
      {/* Dropdown description */}
      {expandedCard === index && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 right-0 top-full mt-2 z-50 bg-white border-2 border-[#F4D35E] rounded-xl shadow-2xl p-6"
        >
          <p className="text-[#4A5D58] leading-relaxed">
            {item.description}
          </p>
          <button
            onClick={() => setExpandedCard(null)}
            className="mt-4 text-[#1A3C34] hover:text-[#F4D35E] transition-colors flex items-center gap-2"
          >
            <span className="text-sm">Close</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto max-w-7xl">
      {/* Tech Support Cards - 4-4-3 Layout */}
      <div className="space-y-6">
        {/* Row 1: 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {allCards.slice(0, 4).map((item, i) => renderCard(item, i))}
        </div>

        {/* Row 2: 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {allCards.slice(4, 8).map((item, i) => renderCard(item, i + 4))}
        </div>

        {/* Row 3: 3 cards centered */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {allCards.slice(8, 11).map((item, i) => renderCard(item, i + 8))}
        </div>
      </div>
    </div>
  );
}

export function FarmersPage() {
  return (
    <div className="min-h-screen font-sans text-[#1A3C34] bg-[#F2F4F3]">
      
      {/* Section 1: Hero Banner */}
      <section className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-[#1A3C34]">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={UNSPLASH_IMAGES.FARMER_SILHOUETTE}
              alt="Farmer silhouette in warm countryside"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/90 via-[#1A3C34]/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto mt-[-100px]">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="space-y-10"
          >
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-wide leading-tight">
               FARMERS — <span className="text-3xl md:text-4xl lg:text-5xl text-[#F4D35E] whitespace-normal md:whitespace-nowrap ml-0 md:ml-[-12px]">Our Heartbeat, Our Heroes</span>
             </h1>
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-light italic opacity-90 text-[#FFFFFF]"
          >
            "Less Income to the Farmers, Inadequate knowledge in the latest Technology."
          </motion.p>
          
          {/* Two-column support section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            {/* Left side */}
            <div className="space-y-4 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-serif text-[#F4D35E] border-b-4 border-[#F4D35E] pb-2 inline-block">
                We Support Farmers
              </h3>
              <p className="text-lg bg-[#F4D35E] text-[#1A3C34] py-3 px-6 rounded-lg">
                To generate more Income
              </p>
            </div>
            
            {/* Right side */}
            <div className="space-y-4 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-serif text-[#FFFFFF] border-b-4 border-[#FFFFFF] pb-2 inline-block">
                We Provide Farmers
              </h3>
              <p className="text-lg text-[rgb(0,0,0)] bg-[#ffffff] py-3 px-6 rounded-lg">
                With Tech enabled App training & support
              </p>
            </div>
          </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Local Farmers First */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left: Visual */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden h-[600px] shadow-2xl border-4 border-[#F4D35E]/10"
            >
              <ImageWithFallback
                src={FIGMA_IMAGES.tractorImage}
                alt="Local farmers working together"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#1A3C34]/10 mix-blend-multiply" />
            </motion.div>

            {/* Right: Content */}
            <div className="space-y-10">
              <div className="inline-block bg-[#1A3C34]/10 px-4 py-2 rounded-full text-[#1A3C34] text-sm font-bold uppercase tracking-widest mb-2">
                Local Farmers First
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-[#F4D35E]/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#F4D35E] transition-colors duration-300">
                     <Leaf className="w-6 h-6 text-[#1A3C34] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#1A3C34] mb-2">Rooted in Soil</h3>
                    <p className="text-lg text-[#4A5D58] leading-relaxed">
                      We work only with local farmers — the ones who know the soil like family.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-[#F4D35E]/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#F4D35E] transition-colors duration-300">
                     <Smartphone className="w-6 h-6 text-[#1A3C34] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#1A3C34] mb-2">Empowered by Tech</h3>
                    <p className="text-lg text-[#4A5D58] leading-relaxed">
                      We bring science, tech, and upgraded systems to amplify their efforts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-[#F4D35E]/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#F4D35E] transition-colors duration-300">
                     <BookOpen className="w-6 h-6 text-[#1A3C34] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#1A3C34] mb-2">Ancient Wisdom</h3>
                    <p className="text-lg text-[#4A5D58] leading-relaxed">
                      They give us wisdom, authenticity, and centuries of experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Grow Fast. Grow New (Drone Tech) */}


      {/* Section 4: Smart Learning (Apps) */}
      <section className="py-24 px-6 md:px-12 bg-[#F2F4F3]">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[#1A3C34] rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl">
             {/* Decorative background texture */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F4D35E]/10 rounded-full blur-3xl -mr-32 -mt-32" />
             
             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                   <div className="space-y-4">
                      <h2 className="text-4xl md:text-6xl font-serif text-white">
                         Smart Learning, <br/> Made Simple
                      </h2>
                      <p className="text-xl text-white/80 font-light">
                         Easy, accessible, regional-language friendly modules designed for every farmer.
                      </p>
                   </div>
                   
                   <div className="flex flex-wrap gap-3">
                      {[
                        { icon: Wheat, label: "Modern Organic Techniques" },
                        { icon: Droplets, label: "Water-saving Methods" },
                        { icon: Sprout, label: "Crop Rotation" },
                        { icon: Leaf, label: "Soil Revival" },
                        { icon: Bug, label: "Pest Management" },
                        { icon: Smartphone, label: "Smart Farming Tools" }
                      ].map((item, index) => (
                        <span key={index} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full text-[#F4D35E] font-medium shadow-sm border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                           <item.icon className="w-4 h-4 text-[#F4D35E]" />
                           {item.label}
                        </span>
                      ))}
                   </div>
                </div>
                
                <div className="relative flex justify-center items-center">
                   <div className="relative w-[300px] md:w-[350px] aspect-[9/16] bg-[#2D2219] rounded-[3rem] border-[8px] border-[#F4D35E]/50 shadow-2xl overflow-hidden">
                      <ImageWithFallback
                        src={FIGMA_IMAGES.plantingImage}
                        alt="Farmer using app"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                         <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/10">
                            <div className="h-2 w-12 bg-[#F4D35E] rounded-full mb-2" />
                            <div className="h-2 w-24 bg-white/50 rounded-full" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 5: Community Training Programs */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFBF0]">
        <div className="container mx-auto max-w-7xl text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34] mb-4">
             Community Training Programs
           </h2>
           <p className="text-xl text-[#4A5D58] max-w-2xl mx-auto">
             "Building skills, confidence, and future leaders."
           </p>
        </div>

        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
           {/* Card 1: Farmer Camps */}
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-white p-8 rounded-[2rem] border border-[#1A3C34]/10 shadow-lg hover:shadow-xl transition-all group"
           >
              <div className="w-16 h-16 bg-[#1A3C34] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F4D35E] transition-colors duration-300">
                 <Users className="w-8 h-8 text-[#F4D35E] group-hover:text-[#1A3C34]" />
              </div>
              <h3 className="text-2xl font-serif text-[#1A3C34] mb-4">Farmer Camps</h3>
              <p className="text-[#4A5D58] leading-relaxed">
                Where learning meets hands-on practice. Collaborative workshops for shared growth.
              </p>
           </motion.div>

           {/* Card 2: Women-Focused Camps */}
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-white p-8 rounded-[2rem] border border-[#1A3C34]/10 shadow-lg hover:shadow-xl transition-all group"
           >
              <div className="w-16 h-16 bg-[#1A3C34] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F4D35E] transition-colors duration-300">
                 <Heart className="w-8 h-8 text-[#F4D35E] group-hover:text-[#1A3C34]" />
              </div>
              <h3 className="text-2xl font-serif text-[#1A3C34] mb-4">Women-Focused Camps</h3>
              <p className="text-[#4A5D58] leading-relaxed">
                Empowering rural women with skills, tools, and income opportunities.
              </p>
           </motion.div>

           {/* Card 3: Student Camps */}
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-white p-8 rounded-[2rem] border border-[#1A3C34]/10 shadow-lg hover:shadow-xl transition-all group"
           >
              <div className="w-16 h-16 bg-[#1A3C34] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F4D35E] transition-colors duration-300">
                 <GraduationCap className="w-8 h-8 text-[#F4D35E] group-hover:text-[#1A3C34]" />
              </div>
              <h3 className="text-2xl font-serif text-[#1A3C34] mb-4">Student Camps</h3>
              <p className="text-[#4A5D58] leading-relaxed">
                Nurturing the next wave of farmers, innovators, and climate warriors.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Section 6: Farmer Tech Support */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-7xl text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34] mb-4">
             Farmer Tech Support
           </h2>
        </div>

        <FarmerTechSupportCards />
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 text-center bg-[#1A3C34] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10" />
         
         <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                1) Join training apps. <br/>
                2) Get organic seeds + buyback. <br/>
                3) Harvest better profits.
            </h2>
            
            <div className="flex justify-center">

            </div>
         </div>
      </section>

    </div>
  );
}
