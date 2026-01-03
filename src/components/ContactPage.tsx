import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FIGMA_IMAGES } from "./assets";

export function ContactPage() {
  const reachOutTopics = [
    "Land purchase & leasing",
    "Contract farming",
    "Integrated farm setups",
    "Subscription land",
    "Partnerships",
    "Community programs"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#1A3C34]/5 text-[#1A3C34] text-xs font-bold tracking-[0.2em] uppercase mb-6">
             Partner With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A3C34] mb-8 leading-tight">
             Let’s Build Something <br/>
             <span className="text-[#B45309] italic">Grounded and Meaningful</span>
          </h1>
          <p className="text-xl md:text-3xl text-#F4D35E font-light max-w-3xl mx-auto leading-relaxed">
            Struggling with dead soil or chemical crops? Partner with <img src={FIGMA_IMAGES.chediTextLogo} alt="Chedi" className="h-10 md:h-14 inline-block mx-1 object-contain align-middle" /> now</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Info & Topics */}
            <motion.div 
              className="lg:col-span-5 space-y-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-[#1A3C34]/5">
                   <h3 className="text-2xl font-serif text-[#1A3C34] mb-8">Reach Out For</h3>
                   <ul className="space-y-4">
                      {reachOutTopics.map((item, i) => (
                        <li key={i} className="flex items-center text-[#5A4631] text-lg">
                           <div className="w-8 h-8 rounded-full bg-[#E9C46A]/20 flex items-center justify-center mr-4 text-[#1A3C34]">
                              <CheckCircle2 className="w-5 h-5" />
                           </div>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>

                {/* Contact Info Card */}
                <div className="bg-[#1A3C34] text-white p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">
                   <div className="relative z-10 space-y-6">
                      <div className="flex items-start gap-4">
                         <Mail className="w-6 h-6 text-[#E9C46A] mt-1" />
                         <div>
                            <p className="text-[#E9C46A] text-sm font-mono uppercase mb-1">Email</p>
                            <p className="text-xl">support@chedi.in</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <Phone className="w-6 h-6 text-[#E9C46A] mt-1" />
                         <div>
                            <p className="text-[#E9C46A] text-sm font-mono uppercase mb-1">Phone</p>
                            <p className="text-xl">+91 9444 126 240</p>
                         </div>
                      </div>
                   </div>
                   
                   {/* Decor */}
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E9C46A] rounded-full opacity-10 blur-3xl"></div>
                </div>
            </motion.div>
            
            {/* Right Column: Form */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-[#1A3C34]/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1A3C34] to-[#E9C46A]"></div>
                    
                    <form className="space-y-8 relative z-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-bold tracking-wider uppercase text-[#1A3C34]">First Name</label>
                                <Input className="bg-[#F9FAFB] border-0 h-14 rounded-xl focus-visible:ring-1 focus-visible:ring-[#1A3C34] text-lg px-5"/>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold tracking-wider uppercase text-[#1A3C34]">Last Name</label>
                                <Input className="bg-[#F9FAFB] border-0 h-14 rounded-xl focus-visible:ring-1 focus-visible:ring-[#1A3C34] text-lg px-5"/>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-bold tracking-wider uppercase text-[#1A3C34]">Email Address</label>
                            <Input className="bg-[#F9FAFB] border-0 h-14 rounded-xl focus-visible:ring-1 focus-visible:ring-[#1A3C34] text-lg px-5"/>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-bold tracking-wider uppercase text-[#1A3C34]">I'm interested in</label>
                            <Select>
                              <SelectTrigger className="bg-[#F9FAFB] border-0 h-14 rounded-xl focus:ring-1 focus:ring-[#1A3C34] text-lg px-5 text-[#5A4631]">
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                              <SelectContent>
                                {reachOutTopics.map((topic) => (
                                  <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                                ))}
                                <SelectItem value="other">Other Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-bold tracking-wider uppercase text-[#1A3C34]">Message</label>
                            <Textarea className="bg-[#F9FAFB] border-0 min-h-[180px] rounded-xl p-5 focus-visible:ring-1 focus-visible:ring-[#1A3C34] text-lg resize-none" placeholder="Tell us about your vision..." />
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                            <Button className="w-full md:w-auto bg-[#1A3C34] hover:bg-[#142f29] text-white rounded-full h-14 px-10 text-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-[#1A3C34]/20">
                                Send Message <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            
                            <div className="flex items-center gap-3 text-[#5A4631] bg-[#F3F4F6] px-4 py-2 rounded-full">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm font-medium">We respond within 24 hours.</span>
                            </div>
                        </div>
                        
                        <p className="text-center md:text-right text-xs text-[#1A3C34]/40 uppercase tracking-widest">
                           Always direct, always transparent.
                        </p>
                    </form>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
