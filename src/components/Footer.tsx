import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CallToAction } from "./CallToAction";
import { FIGMA_IMAGES } from "./assets";

export function Footer() {
  return (
    <footer className="relative bg-[#1A3C34] text-white pt-0">
      <CallToAction />
      {/* Top Illustration */}
      <div className="w-full bg-white">
        <div className="relative">
          <ImageWithFallback 
            src={FIGMA_IMAGES.footerImage} 
            alt="Landscape" 
            className="w-full h-auto object-cover block"
          />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1A3C34]" />
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="bg-[rgb(26,60,52)] pt-12 pb-12 px-6 md:px-12 -mt-1">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
              
              {/* Company */}
              <div>
                 <h4 className="font-serif text-2xl text-[#F4D35E] mb-6">Company</h4>
                 <ul className="space-y-4 text-white/80">
                    <li><a href="#/about" className="hover:text-[#F4D35E] transition-colors">About Us</a></li>
                    <li><a href="#/integrated-farming" className="hover:text-[#F4D35E] transition-colors">Ecosystem</a></li>
                    <li><a href="#/revenue-streams" className="hover:text-[#F4D35E] transition-colors">Revenue</a></li>
                 </ul>
              </div>

              {/* Contact */}
              <div>
                 <h4 className="font-serif text-2xl text-[#F4D35E] mb-6">Contact</h4>
                 <ul className="space-y-4 text-white/80 flex flex-col items-center md:items-start">
                    <li className="flex items-center gap-3">
                       <Mail className="w-5 h-5 text-[#F4D35E]" />
                       <span>support@chedi.in</span>
                    </li>
                    <li className="flex items-center gap-3">
                       <Phone className="w-5 h-5 text-[#F4D35E]" />
                       <span>+91 9444 126 240</span>
                    </li>
                 </ul>
              </div>

              {/* Socials */}
              <div className="flex flex-col items-center md:items-end">
                 <h4 className="font-serif text-2xl text-[#F4D35E] mb-[24px] mt-[0px] mr-[110px] ml-[0px]">Follow Us</h4>
                 <div className="flex gap-6">
                    <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-[#F4D35E] hover:text-[#1A3C34] hover:border-[#F4D35E] transition-all group">
                       <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-[#F4D35E] hover:text-[#1A3C34] hover:border-[#F4D35E] transition-all group">
                       <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-[#F4D35E] hover:text-[#1A3C34] hover:border-[#F4D35E] transition-all group">
                       <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-[#F4D35E] hover:text-[#1A3C34] hover:border-[#F4D35E] transition-all group">
                       <Linkedin className="w-5 h-5" />
                    </a>
                 </div>
              </div>
           </div>
         </div>
      </div>

      {/* Bottom Signature - Full Width */}
      <div className="w-full bg-white py-6">
        <div className="flex flex-col items-center">
           <div className="flex items-center gap-2 mb-4">
             <img src={FIGMA_IMAGES.navbarExampleImage} alt="Chedi" className="h-48 w-auto object-contain" />
           </div>
           <p className="text-black/60 text-sm px-4 text-center">
              © 2026 Chedi. All rights reserved. Growing the future together.
            </p>
         </div>
       </div>
    </footer>
  );
}
