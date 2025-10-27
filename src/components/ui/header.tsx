"use client";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { PhoneCallIcon } from "lucide-react";
import { useFullscreen } from "@/lib/fullscreen-context";

export default function Header() {
  const { isFullscreen } = useFullscreen();
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Loans", link: "#loans" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  if (isFullscreen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-screen text-black dark:text-white">
      <style>{`
        .mobile-safe-area {
          padding-top: env(safe-area-inset-top, 0px);
        }
      `}</style>

      <Navbar className="relative mobile-safe-area">
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems.map((item) => ({
              ...item,
              className:
                "text-black dark:text-white hover:text-black dark:hover:text-white",
              onClick: () => scrollToSection(item.link),
            }))}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <Link
            href="tel:+91801234567"
            className="hidden lg:flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Call us now"
          >
            <PhoneCallIcon className="w-5 h-5" />
            <span className="font-medium">Call Now</span>
          </Link>
        </NavBody>

        <MobileNav className="lg:hidden">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </MobileNavHeader>
        </MobileNav>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-white dark:bg-neutral-950 text-black dark:text-white bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm shadow-lg border border-white/10 rounded-xl mt-4"
        >
          {navItems.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={() => scrollToSection(item.link)}
              className="relative text-black dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors text-left w-full"
            >
              {item.name}
            </button>
          ))}
          <div className="flex w-full flex-col gap-4 mt-4">
            <Link
              href="tel:+91801234567"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Call us now"
            >
              <PhoneCallIcon className="w-5 h-5" />
              <span className="font-medium">Call Now</span>
            </Link>
          </div>
        </MobileNavMenu>
      </Navbar>
    </div>
  );
}

const DummyContent = () => <></>;
