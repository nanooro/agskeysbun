import Header from "@/components/ui/header";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import HeroSectionOne from "@/components/ui/hero";
import LoanOption from "@/components/ui/loan-option";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center font-sans bg-cover bg-center"
      style={{
        backgroundImage: "url('main-bg.jpg')",
      }}
    >
      <Header />
      <HeroSectionOne />
      {/* <LoanOption /> */}
    </div>
  );
}
