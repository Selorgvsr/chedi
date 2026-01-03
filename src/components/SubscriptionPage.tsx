import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ContactDialog } from "./ContactDialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FIGMA_IMAGES, UNSPLASH_IMAGES } from "./assets";
import { 
  Sprout, 
  HandHeart, 
  Package, 
  Sun, 
  Leaf, 
  Check
} from "lucide-react";

export function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] font-sans text-[#1A3C34]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-2 px-4 rounded-full bg-[#E8F5E9] text-[#1A3C34] text-xs font-bold tracking-widest uppercase mb-6 border border-[#1A3C34]/10">
                The Future of Farming
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-[#1A3C34] mb-8 leading-tight">
                Subscription Land — <br/>
                <span className="italic font-light opacity-80">
                  Your Personal Farm, Without the Hassle
                </span>
              </h1>
              <p className="text-xl text-[#5A4631] font-light leading-relaxed max-w-2xl mx-auto">
                <img src={FIGMA_IMAGES.chediTextLogo} alt="Chedi" className="h-10 md:h-14 inline-block mx-1 object-contain align-middle" />{" "}
                empowers you—we've revived multiple acre of land with proven organic expertise
              </p>
            </motion.div>
          </div>

          {/* Visual Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[450px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50"
          >
            <ImageWithFallback
              src={UNSPLASH_IMAGES.FAMILY_FARM}
              alt="Family enjoying farm life"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/80 via-transparent to-transparent" />

            <div className="absolute inset-0 flex flex-col px-4 text-center">
              {/* Center Title in available space */}
              <div className="flex-grow flex items-center justify-center">
                <h1
                  className="w-full font-serif text-white font-bold leading-tight
                             text-[28px] sm:text-[36px] md:text-[60px]
                             md:whitespace-nowrap drop-shadow-lg"
                >
                  <span className="text-[#F4D35E]">C</span>ommunity <span className="text-[#F4D35E]">S</span>upported <span className="text-[#F4D35E]">A</span>griculture
                </h1>
              </div>

              {/* Tagline at bottom */}
              <div className="pb-10 w-full">
                <p
                  className="font-serif italic text-white leading-snug
                             text-[18px] sm:text-[22px] md:text-[36px] drop-shadow-md"
                >
                  "Fertilizer Free - Pesticide Free"
                  <br />
                  <span
                    className="block mt-2 italic
                               text-[13px] sm:text-[15px] md:text-[20px]
                               whitespace-normal md:whitespace-nowrap"
                  >
                    Farm produced Organic healthy Products to save the{" "}
                    <span className="text-[#F4D35E]">NEXT GENERATION</span>
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leaf Divider */}
        <div className="flex justify-center gap-4 mt-16 opacity-20">
          <Leaf className="w-6 h-6 text-[#1A3C34] rotate-45" />
          <Leaf className="w-6 h-6 text-[#1A3C34] -rotate-45" />
          <Leaf className="w-6 h-6 text-[#1A3C34] rotate-12" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A3C34] mb-6">
              The Subscription Model
            </h2>
            <p className="text-[#5A4631] text-lg leading-relaxed">
              Designed for large farmland clusters, our model offers flexibility.
              Whether you want to lease land or join a subscription, we make farming accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cards */}
            {[
              { icon: Sprout, title: "Choose Your Plan", text: "Select the farming plan that suits your needs. You decide what grows on your soil." },
              { icon: Sun, title: "We Handle It All", text: "Full farming operations, from soil prep to crop care, are handled by our expert team." },
              { icon: HandHeart, title: "Optional Participation", text: "Join in for sowing and harvesting if you wish. It’s fully experiential and optional." },
              { icon: Package, title: "Delivered to You", text: "Fresh, seasonal produce from your land is delivered directly to your doorstep." }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#1A3C34]/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#F4D35E]/20 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#1A3C34]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A3C34] mb-3">{item.title}</h3>
                <p className="text-[#5A4631] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white rounded-t-[4rem]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#1A3C34] mb-4">Select Your Soil</h2>
            <p className="text-[#5A4631]">Start your journey with a plan that fits your lifestyle.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "₹1000", features: ["600 sq.ft plot", "5 Varieties", "Bi-weekly delivery"] },
              { name: "Family", price: "₹5000", features: ["1200 sq.ft plot", "12 Varieties", "Weekly delivery", "Live Cam"], highlight: true },
              { name: "Community", price: "₹10000", features: ["2500 sq.ft plot", "Unlimited Varieties", "Custom Schedule", "Farm Stays"] }
            ].map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[2rem] flex flex-col border ${
                  plan.highlight
                    ? "bg-[#1A3C34] text-white border-[#1A3C34]"
                    : "bg-[#F9FAFB] text-[#1A3C34] border-gray-100 shadow-lg"
                }`}
              >
                <h3 className="text-2xl font-serif mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-sm font-normal"> /mo</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check className="w-5 h-5 text-[#F4D35E]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <ContactDialog>
                  <Button className={`w-full h-14 rounded-xl font-bold uppercase tracking-wide text-sm transition-all ${plan.highlight ? 'bg-[#F4D35E] text-[#1A3C34] hover:bg-[#E0C040]' : 'bg-[#1A3C34] text-white hover:bg-[#0D211C]'}`}>
                    Choose {plan.name}
                  </Button>
                </ContactDialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
