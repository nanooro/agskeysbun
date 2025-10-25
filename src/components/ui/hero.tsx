"use client";

import { Card } from "@/components/ui/card";

import { motion } from "framer-motion";

import { PhoneCall } from "lucide-react";

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      {/* <Navbar /> */}
      {/* gradient circling outling blue thingy */}
      {/* <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div> */}
      {/* gradient circling outling blue thingy */}
      <div className="px-4 py-10 md:py-20">
        <Card className="bg-white/20 backdrop-blur-[5px] border-none">
          {" "}
          <h1 className=" relative z-10  mx-auto max-w-4xl text-center text-3xl font-bold text-black md:text-4xl lg:text-7xl ">
            {"Get your loan approved in days, not months"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className=" relative z-10 p-2 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            <span className="text-black p-2">
              With AGS, you can get your loan in time. Contact our best in
              class, team to get your loan approved effortlessly.
            </span>
          </motion.p>
        </Card>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="tel:+1234567890"
            className="w-60 flex justify-center items-center transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            aria-label="Call us now"
          >
            <div className="flex justify-center items-center gap-2 text-xl">
              Call Now <PhoneCall className="ml-auto" />
            </div>
          </a>
          {/* <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button> */}
        </motion.div>
        
      </div>
    </div>
  );
}


