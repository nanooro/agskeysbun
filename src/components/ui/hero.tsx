"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSectionOne() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: "url('/grid.svg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative px-4">
        <motion.div 
          className="mx-auto max-w-4xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm border border-white/10 md:p-12"
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
            <Button size="lg" className="gap-2 text-lg bg-green-600 hover:bg-green-700 text-white">
              <PhoneCall className="h-5 w-5" />
              Call Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


