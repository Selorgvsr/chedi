import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";
import { Toaster } from "./ui/sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "./ui/dialog";
import { 
  Droplets, 
  Sprout, 
  Layers, 
  Map, 
  ArrowRight, 
  Users, 
  HeartHandshake, 
  CheckCircle2,
  UploadCloud,
  FileText
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FIGMA_IMAGES, UNSPLASH_IMAGES } from "./assets";

// Reusable Form Component for the Dialog
const LandSubmissionForm = ({ type }: { type: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    size: "",
    notes: ""
  });

  // Check if required fields are filled
  const isValid = formData.name.trim() !== "" && 
                  formData.phone.trim() !== "" && 
                  formData.location.trim() !== "" && 
                  formData.size.trim() !== "";

  return (
    <div className="grid gap-6 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name" 
          placeholder="Enter your full name" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone"  
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="location">Land Location</Label>
          <Input 
            id="location" 
            placeholder="District, State" 
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="size">Total Land Size (Acres)</Label>
        <Input 
          id="size" 
          placeholder="e.g. 5.5 Acres" 
          value={formData.size}
          onChange={(e) => setFormData({...formData, size: e.target.value})}
        />
      </div>
      <div className="grid gap-2">
        <Label>Upload Documents</Label>
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="bg-[#F4D35E]/20 p-3 rounded-full mb-3">
            <UploadCloud className="w-6 h-6 text-[#1A3C34]" />
          </div>
          <p className="text-sm font-medium text-[#1A3C34]">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-500 mt-1">Patta, Chitta, Adangal, or EC (PDF/Images)</p>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea 
          id="notes" 
          placeholder={`Tell us more about your ${type.toLowerCase()} request...`} 
          value={formData.notes}
          onChange={(e) => setFormData({...formData, notes: e.target.value})}
        />
      </div>
      <DialogClose asChild>
        <Button 
          disabled={!isValid}
          onClick={() => toast.success("Details submitted successfully!")} 
          className="w-full bg-[#1A3C34] text-white hover:bg-[#F4D35E] hover:text-[#1A3C34] rounded-full font-bold py-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Details
        </Button>
      </DialogClose>
    </div>
  );
};

export function LandPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-[#1A3C34]">
      <Toaster />
      {/* Section 1: Hero Banner */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-[#1A3C34]">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={UNSPLASH_IMAGES.RICH_SOIL}
              alt="Rich soil texture"
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>
          {/* Overlay with Earthy Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A3C34]/30 via-[#1A3C34]/50 to-[#1A3C34]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" /> 
        </div>

        <div className="relative z-10 text-center text-white px-6 md:px-12 max-w-4xl mt-10 md:mt-[-80px] mb-10 mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-8xl font-serif mb-6 tracking-tight"
          >
            LAND — <br /> 
            <span className="text-2xl md:text-5xl whitespace-normal md:whitespace-nowrap">The Foundation of Everything</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-light italic opacity-90"
          >
            "Soil infertility, chemical poisons, adulterated seeds, low Income to farmers - steal the future."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 space-y-6"
          >
            {/* "We support" heading */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-serif text-[#F4D35E] mb-3 inline-block border-b-4 border-[#F4D35E] pb-2">
                We Support
              </h3>
            </div>
            
            {/* List of support items */}
            <div className="flex flex-col items-center space-y-3">
              <p className="text-lg bg-[#F4D35E] text-[#1A3C34] py-2 px-4 rounded-lg inline-block">
                Unutilized land for cultivation
              </p>
              <p className="text-lg bg-[#F4D35E] text-[#1A3C34] py-2 px-4 rounded-lg inline-block">
                Make the land fertile
              </p>
              <p className="text-lg bg-[#F4D35E] text-[#1A3C34] py-2 px-4 rounded-lg inline-block">
                Collect and Distribute native seeds
              </p>
              <p className="text-lg bg-[#F4D35E] text-[#1A3C34] py-2 px-4 rounded-lg inline-block">
                Create more income to Farmers
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Land Purchasing */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Image */}
            <div className="relative rounded-[2rem] overflow-hidden h-[600px] shadow-2xl group">
              <ImageWithFallback
                src={UNSPLASH_IMAGES.AERIAL_FARMLAND}
                alt="Aerial farmland"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/50 to-transparent" />
            </div>

            {/* Right: Content */}
            <div className="md:pl-12 space-y-10 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-serif text-[#1A3C34]">
                Land Purchasing
              </h2>
              
              <div className="space-y-8">
                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center shrink-0">
                    <Droplets className="w-6 h-6 text-[#1A3C34]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1A3C34]">Strategic Acquisition</h3>
                    <p className="text-[#5A4631] leading-relaxed">
                      We acquire farmlands across regions with rich soil and strong water access.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-[#1A3C34]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1A3C34]">Sustainability First</h3>
                    <p className="text-[#5A4631] leading-relaxed">
                      Soil is selected for long-term sustainability, rather than quick wins.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center shrink-0">
                    <Sprout className="w-6 h-6 text-[#1A3C34]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1A3C34]">Ecological Restoration</h3>
                    <p className="text-[#5A4631] leading-relaxed">
                      We restore, revive, and rebuild degraded land into living ecosystems.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                   <Dialog>
                      <DialogTrigger asChild>
                         <Button className="rounded-full bg-[#1A3C34] text-white hover:bg-[#F4D35E] hover:text-[#1A3C34] font-bold uppercase px-8 py-6 shadow-lg transition-all hover:scale-105">
                            Offer Your Land for Purchase <ArrowRight className="ml-2 w-4 h-4" />
                         </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] rounded-[2rem]">
                         <DialogHeader>
                            <DialogTitle className="text-2xl font-serif text-[#1A3C34]">Sell Your Land</DialogTitle>
                            <DialogDescription>
                               Submit your land details below. We evaluate sustainability potential before acquisition.
                            </DialogDescription>
                         </DialogHeader>
                         <LandSubmissionForm type="Sale" />
                      </DialogContent>
                   </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Land Leasing */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F9F9]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Content Left */}
            <div className="order-2 md:order-1 space-y-8 text-center md:text-left">
              <div className="inline-block bg-white border border-[#1A3C34]/10 px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
                Land Leasing, Done Together
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34] mb-6">
                Shared land. Shared effort. Shared income.
              </h2>
              
              <div className="space-y-6 text-lg text-[#5A4631]">
                <div className="flex flex-col items-center md:flex-row md:items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F4D35E] shrink-0 mt-1" />
                  <p>
                    We don’t just lease land — we partner with you.
                    You bring the land. We bring the farming, systems, and scale.
                  </p>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F4D35E] shrink-0 mt-1" />
                  <p>
                    Income flows both ways.
                    You earn steady, predictable returns.
                    Farmers earn fair income from real work.
                    No middlemen drama. Just clean value.
                  </p>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F4D35E] shrink-0 mt-1" />
                  <p>
                    We manage the grind end-to-end —
                    cultivation, operations, maintenance, and yield optimization —
                    making land productive, predictable, and profitable.
                  </p>
                </div>
                <p className="font-semibold text-[#1A3C34] pl-0 md:pl-9">
                  This isn’t rent. This is a win-win ecosystem.
                  When the land grows, everyone gets value.
                </p>
              </div>

              <div className="pt-4">
                   <Dialog>
                      <DialogTrigger asChild>
                         <Button className="rounded-full bg-[#F4D35E] text-[#1A3C34] hover:bg-[#e0c040] font-bold uppercase px-8 py-6 shadow-lg transition-all hover:scale-105">
                            Start Leasing Program <ArrowRight className="ml-2 w-4 h-4" />
                         </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] rounded-[2rem]">
                         <DialogHeader>
                            <DialogTitle className="text-2xl font-serif text-[#1A3C34]">Lease Your Land</DialogTitle>
                            <DialogDescription>
                               Connect your land with our structured farming zones for predictable returns.
                            </DialogDescription>
                         </DialogHeader>
                         <LandSubmissionForm type="Lease" />
                      </DialogContent>
                   </Dialog>
              </div>
            </div>

            {/* Right: Abstract Map Visual */}
            <div className="order-1 md:order-2 relative h-[500px] bg-white rounded-[3rem] overflow-hidden shadow-xl border border-[#1A3C34]/5 p-4">
               <div className="absolute inset-0 bg-[#F2F4F3]" />
               <ImageWithFallback
                  src={UNSPLASH_IMAGES.ABSTRACT_FARM_GRID}
                  alt="Abstract farm grid"
                  className="w-full h-full object-cover rounded-[2.5rem] opacity-80 grayscale-[20%]"
               />
               {/* Overlay Graphic */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#1A3C34]/10">
                  <div className="flex items-center gap-4 mb-2">
                    <Map className="w-5 h-5 text-[#1A3C34]" />
                    <span className="font-bold text-[#1A3C34]">Zone A - Active Cultivation</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#1A3C34] w-[75%] h-full" />
                  </div>
                  <div className="flex justify-between text-xs mt-2 text-[#5A4631]">
                    <span>Yield: High</span>
                    <span>Status: Healthy</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Farmer Land Partnerships */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFBF0]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F4D35E] rounded-full mb-6 text-[#1A3C34] shadow-lg">
               <HeartHandshake className="w-8 h-8" />
             </div>
             <h2 className="text-4xl md:text-6xl font-serif text-[#1A3C34] mb-4">
               Farmer Land Partnerships
             </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative h-[500px] rounded-[2rem] overflow-hidden order-2 md:order-1">
                <ImageWithFallback
                   src={UNSPLASH_IMAGES.FARMER_SILHOUETTE_2}
                   alt="Farmer silhouette"
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1A3C34]/20 mix-blend-overlay" />
             </div>
             
             <div className="space-y-10 order-1 md:order-2 text-center md:text-left">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#F4D35E]/20">
                   <div className="flex flex-col items-center md:flex-row gap-4 mb-4">
                      <Users className="w-8 h-8 text-[#1A3C34]" />
                      <h3 className="text-2xl font-bold text-[#1A3C34]">Inclusive Growth</h3>
                   </div>
                   <p className="text-lg text-[#5A4631] leading-relaxed">
                     Farmers can bring their own land into our ecosystem. We don't displace; we collaborate.
                   </p>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#F4D35E]/20">
                   <div className="flex flex-col items-center md:flex-row gap-4 mb-4">
                      <Sprout className="w-8 h-8 text-[#1A3C34]" />
                      <h3 className="text-2xl font-bold text-[#1A3C34]">Land Elevation</h3>
                   </div>
                   <div className="text-lg text-[#5A4631] leading-relaxed space-y-4">
                     <p>
                       We farm the right way — organic methods, well-prepared soil, and native seeds that belong to the land.
                       We layer in TECH-enabled farming solutions to optimize every stage, and elevate the produce from raw harvest to higher-value outcomes.
                     </p>
                     <p className="font-bold text-[#1A3C34]">
                       Better soil. Smarter farming. Higher returns.
                     </p>
                   </div>
                </div>

                <div className="pt-2">
                   <Dialog>
                      <DialogTrigger asChild>
                         <Button className="w-full md:w-auto rounded-full bg-[#1A3C34] text-white hover:bg-[#F4D35E] hover:text-[#1A3C34] font-bold uppercase px-8 py-6 shadow-lg transition-all hover:scale-105">
                            Partner With Us <ArrowRight className="ml-2 w-4 h-4" />
                         </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] rounded-[2rem]">
                         <DialogHeader>
                            <DialogTitle className="text-2xl font-serif text-[#1A3C34]">Farmer Partnership</DialogTitle>
                            <DialogDescription>
                               Join our community-centric ecosystem. We upgrade soil, provide training, and ensure growth.
                            </DialogDescription>
                         </DialogHeader>
                         <LandSubmissionForm type="Partnership" />
                      </DialogContent>
                   </Dialog>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 text-center bg-[#1A3C34] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Join with <img src={FIGMA_IMAGES.newChediGroupLogo} alt="Chedi Group" className="h-8 md:h-12 inline-block mx-2 object-contain align-middle -translate-y-1" /> Group <br/> 
            <span className="text-2xl md:text-4xl block mt-4 font-sans font-light">
              The same land started giving more Income <br />
              - Finance Peace & Happiness -
            </span>
          </h2>
          
          <div className="flex justify-center">

          </div>
        </div>
      </section>
    </div>
  );
}
