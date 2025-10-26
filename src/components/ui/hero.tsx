"use client";

import { motion, useAnimation } from "framer-motion";
import { PhoneCall, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ScrollIndicator = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({ y: 10, opacity: 0.5 });
        await controls.start({ y: 0, opacity: 1 });
      }
    };
    sequence();
  }, [controls]);

  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <span className="text-sm text-neutral-300">Scroll to explore</span>
      <motion.div
        animate={controls}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="h-6 w-6 text-white" />
      </motion.div>
    </motion.div>
  );
};

export default function HeroSectionOne() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-20 pt-32" style={{ backgroundImage: "url('/grid.svg')" }}>
      <div className="absolute inset-0 bg-black/60 md:hidden"></div>
      <div className="container relative px-4 flex-1 flex items-center">
        <motion.div 
          className="mx-auto max-w-4xl w-full rounded-2xl bg-black/30 p-8 backdrop-blur-sm border border-white/10 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="mb-6 text-center text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get your loan approved in days, not months
          </motion.h1>
          
          <motion.p 
            className="mx-auto mb-8 max-w-2xl text-center text-lg text-neutral-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            With AGS, you can get your loan in time. Contact our best in class team to get your loan approved.
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild size="lg" className="gap-2 text-lg bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <a href="tel:+91801234567" className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="w-full relative pb-12">
        <ScrollIndicator />
      </div>
    </div>
  );
}


// type tyesting is a very improtatn fetruare of typescript