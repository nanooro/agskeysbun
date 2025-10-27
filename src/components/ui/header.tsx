"use client";
import { Navbar, NavBody, NavItems, NavbarLogo } from "@/components/ui/resizable-navbar";
import { IconMenu2, IconX } from "@tabler/icons-react";
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Hide header when AI chat is in fullscreen mode
  if (isFullscreen) {
    return null;
  }

  return (
    <div className="fixed w-screen top-0 left-0 z-50 text-black dark:text-white">
      {/* Mobile safe area support */}
      <style>{`
        .mobile-safe-area {
          padding-top: env(safe-area-inset-top, 0px);
        }
      `}</style>

      {/* Floating call button for small screens */}
      <Link
        href="tel:+91801234567"
        className="lg:hidden absolute right-4 top-[calc(env(safe-area-inset-top,0px)+12px)] flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg transition-all duration-200 hover:bg-green-700"
        aria-label="Call us now"
      >
        <PhoneCallIcon className="w-5 h-5" />
        <span className="font-medium">Call Now</span>
      </Link>

      {/* Desktop / large screens navigation */}
      <div className="hidden lg:block">
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
        </Navbar>
      </div>
    </div>
  );
}

const DummyContent = () => <></>;
