'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from "next/image";
import { Card } from "@/components/ui/card";
import LoanOption from "@/components/ui/loan-option";

// Dynamically import the Header component with SSR disabled
const Header = dynamic(() => import('@/components/ui/header'), { ssr: false });

// Lazy load the HeroSectionOne component
const LazyHero = dynamic(() => import('@/components/ui/hero'), { 
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
});

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col min-h-screen items-center justify-center font-sans"
    >
      <div className="fixed inset-0 -z-10">
        <img
          src="/main-bg.jpg"
          alt="Background"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            imageRendering: 'high-quality',
            WebkitOptimizeContrast: true,
            msInterpolationMode: 'nearest-neighbor',
          }}
          loading="eager"
        />
      </div>
      
      <Header />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <LazyHero />
      </Suspense>
      {/* <LoanOption /> */}
    </motion.div>
  );
}
