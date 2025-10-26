"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { PhoneCallIcon } from "lucide-react";

export default function Header() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Loans", link: "#loans" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="sticky w-screen top-0 left-0 z-50 text-black dark:text-white">
      {/* Frosted glass effect */}
      <Navbar className="relative">
          <NavBody>
            <NavbarLogo />
            <NavItems
              items={navItems.map((item) => ({
                ...item,
                className: "text-black dark:text-white hover:text-black dark:hover:text-white",
                onClick: () => scrollToSection(item.link),
              }))}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hidden lg:flex items-center justify-center p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <IconX className="w-6 h-6" />
                ) : (
                  <IconMenu2 className="w-6 h-6" />
                )}
              </button>
              <Link
                href="tel:+91801234567"
                className="hidden lg:flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Call us now"
              >
                <PhoneCallIcon className="w-5 h-5" />
                <span className="font-medium">Call Now</span>
              </Link>
            </div>
          </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
        </MobileNav>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-white dark:bg-neutral-950 text-black dark:text-white lg:bg-white/95 lg:dark:bg-neutral-950/95 lg:backdrop-blur-sm lg:shadow-lg lg:border lg:border-white/10 lg:rounded-xl lg:mt-4"
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
