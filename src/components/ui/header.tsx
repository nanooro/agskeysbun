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
import { PhoneCallIcon } from "lucide-react";

export default function Header() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-screen top-0 left-0 z-50 text-black">
      {/* Frosted glass effect */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/20 backdrop-blur-lg transition-all duration-300" />
      <Navbar className="relative">
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems.map((item) => ({
              ...item,
              className: "text-black hover:text-black",
            }))}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <a
            href="tel:+1234567890"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            aria-label="Call us now"
          >
            <PhoneCallIcon className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <div className="flex items-center justify-center gap-4">
            {/* <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="bg-black text-white hover:bg-black800 flex items-center gap-2"
            >
              <span>Call us!</span>
              <PhoneCallIcon className="shrink-0" />
            </NavbarButton> */}
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

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-white text-black"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-black hover:text-black"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-black text-white hover:bg-black"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

const DummyContent = () => <></>;
