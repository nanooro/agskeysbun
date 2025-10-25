import Header from "@/components/ui/header";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import HeroSectionOne from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans  bg-black">
      <Header />
      <HeroSectionOne />
      <Card className="p-12 flex flex-col justify-center items-center">
        rest of the marketing <span className="scale-[3]">↓</span>
        {"(testimonials)"}
      </Card>
    </div>
  );
}
