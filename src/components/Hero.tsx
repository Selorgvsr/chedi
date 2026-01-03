import { useState } from "react";
import {
  FIGMA_IMAGES,
  UNSPLASH_IMAGES
} from "./assets";
import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "./ui/button";

/* ---------------- VIMEO PREVIEW ---------------- */

function VimeoPreview({ thumbnail, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative w-40 h-24 rounded-xl overflow-hidden shadow-lg group cursor-pointer border-2 border-[#004733]/10"
    >
      <img
        src={thumbnail}
        alt="Video preview"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-[1]"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all group-hover:bg-black/40 z-10">
        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 text-[#004733] fill-[#004733] ml-0.5" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- VIMEO MODAL ---------------- */

function VimeoModal({ src, onClose }) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center">
      <div className="relative w-full max-w-5xl mx-4 aspect-video">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-3xl mt-[50px] mr-[20px] mb-[0px] ml-[0px]"
        >
          ✕
        </button>

        <iframe
          src={`${src}&autoplay=1&title=0&byline=0&portrait=0&sidedock=0&pip=0&dnt=1&outro=nothing&color=1A3C34`}
          className="w-full h-full rounded-xl bg-black"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */

export function Hero() {
  const [activeVimeo, setActiveVimeo] = useState(null);

  return (
    <div className="flex flex-col w-full -mt-20">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-[#004733] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={UNSPLASH_IMAGES.HERO_MAIN}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent">
            <img
              src={FIGMA_IMAGES.heroOverlay}
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
            />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-0 md:pt-20">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center -mt-4 md:-mt-12">
            <motion.span className="mb-4 md:mb-6 py-2 px-6 rounded-full border border-[#F4D35E] text-[#F4D35E] text-xs bg-black/30">
              Producing Natural Products
            </motion.span>

            <h1 className="text-4xl md:text-7xl font-serif text-white font-bold mb-6 md:mb-8">
              Empowering Local Farmers. Strengthening Local Economies.
            </h1>

            <p className="text-lg text-white/90 mb-8 md:mb-12 max-w-2xl">
             Tech-enabled natural farming that increases income and brings financial peace to farmers.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 pb-10 md:pb-20">
              <Button className="h-14 px-8 rounded-full bg-[#F4D35E] hover:bg-[#D4B64C] text-[#1A3C34] text-lg font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto">
                Join Training Camp
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-full text-[rgb(0,0,0)] bg-[rgb(255,255,255)] text-[15px] hover:-translate-y-1 font-normal font-bold w-full md:w-auto">
                Enroll for Contract Farming
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM STRIP ================= */}
      <div className="w-full bg-[#F4D35E] py-8 relative z-20 border-t border-[#004733]/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: 'radial-gradient(#004733 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

            {/* LEFT: SOCIAL PROOF (UNCHANGED) */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex -space-x-4">
                {[
                  FIGMA_IMAGES.heroSocial2,
                  FIGMA_IMAGES.heroSocial3,
                  FIGMA_IMAGES.heroSocial1
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-[#F4D35E] overflow-hidden bg-white shadow-sm"
                  >
                    <img src={src} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-[#004733] font-medium leading-tight text-center md:text-left">
                <span className="block text-lg font-bold">100K+ land</span>
                <span className="text-sm opacity-90">With happy farmers</span>
              </div>
            </div>

            {/* VIDEO 1 (LEFT GAP) */}
            <div className="flex flex-col items-center gap-2">
              <VimeoPreview
                thumbnail={FIGMA_IMAGES.coverImageLeft}
                onClick={() =>
                  setActiveVimeo("https://player.vimeo.com/video/1150353500?badge=0&autopause=0")
                }
              />
              <span className="text-sm font-medium text-[#004733] font-bold">தமிழ்</span>
            </div>

            {/* CENTER: SPINNING BADGE (UNCHANGED SPEED) */}
            <div className="relative flex-shrink-0 hidden md:flex items-center justify-center">
              <div className="w-28 h-28 relative flex items-center justify-center">
                <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="textPath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="transparent"
                    />
                    <text fill="#004733" fontSize="10" fontWeight="bold" letterSpacing="2">
                      <textPath href="#textPath">
                        • ORGANIC • FARMING • VEGGIES
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#F4D35E] shadow-xl z-10 border-2 border-[#F4D35E]">
                  <img src={FIGMA_IMAGES.leafImage} alt="Leaf" className="w-8 h-8 object-contain" />
                </div>
              </div>
            </div>

            {/* VIDEO 2 (RIGHT GAP) */}
            <div className="flex flex-col items-center gap-2">
              <VimeoPreview
                thumbnail={FIGMA_IMAGES.farmerImage2}
                onClick={() =>
                  setActiveVimeo("https://player.vimeo.com/video/1150355952?badge=0&autopause=0")
                }
              />
              <span className="text-sm font-medium text-[#004733] font-bold">English</span>
            </div>

            {/* RIGHT: CONTENT (UNCHANGED) */}
            <div className="flex items-center gap-4">
              <div className="text-[#004733] font-medium leading-tight text-right hidden lg:block">
                <span className="block text-lg font-bold">Healthy Life</span>
                <span className="text-sm opacity-90">With Fresh Products</span>
              </div>
              <div className="relative w-40 h-24 rounded-xl overflow-hidden shadow-lg border-2 border-[#004733]/10">
                <img
                  src={FIGMA_IMAGES.healthyLifeImage}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeVimeo && (
        <VimeoModal
          src={activeVimeo}
          onClose={() => setActiveVimeo(null)}
        />
      )}
    </div>
  );
}
