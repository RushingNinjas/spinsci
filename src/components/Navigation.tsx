"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "Solutions", 
      href: "#",
      children: [
        { name: "Patient Access Care", href: "/solutions/patient-access" },
        { name: "Clinical Communication", href: "/solutions/clinical-communication" },
        { name: "Financial Services", href: "/solutions/financial-services" },
        { name: "AI Analytics", href: "/solutions/ai-analytics" }
      ]
    },
    { name: "Resources", href: "/resources" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/graphics/thumbnail_image001.png"
                alt="SpinSci"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div className="relative group">
                      <button
                        className="text-gray-700 hover:text-[#2A9DF4] px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                        onMouseEnter={() => setSolutionsOpen(true)}
                        onMouseLeave={() => setSolutionsOpen(false)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      
                      {/* Dropdown */}
                      <div
                        className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                          solutionsOpen ? &apos;opacity-100 visible&apos; : &apos;opacity-0 invisible&apos;
                        }`}
                        onMouseEnter={() => setSolutionsOpen(true)}
                        onMouseLeave={() => setSolutionsOpen(false)}
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#2A9DF4]/10 hover:text-[#2A9DF4] transition-colors duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-[#2A9DF4] px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#2A9DF4] hover:bg-[#2191e8] text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#2A9DF4] p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <div className="text-gray-700 px-3 py-2 text-sm font-medium">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#2A9DF4]"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-[#2A9DF4] block px-3 py-2 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-[#2A9DF4] hover:bg-[#2191e8] text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
