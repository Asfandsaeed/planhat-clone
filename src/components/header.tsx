"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "@/components/icons";

const navItems = [
  {
    label: "Solutions",
    href: "#",
    children: [
      "Sales CRM Software",
      "Customer Success Platform",
      "Professional Services Software",
      "Customer Success RFP Template",
      "AI Deployment",
      "Cisco 360",
      "Processes",
    ],
  },
  {
    label: "Platform",
    href: "#",
    children: ["Data", "Intelligence", "Collaboration", "Action", "Governance", "Integrations", "Features"],
  },
  {
    label: "Customers",
    href: "#",
    children: [
      "Our Impact",
      "Planhat for Enterprise",
      "Planhat for Scale Ups",
      "Planhat for Start Ups",
      "Planhat for SaaS",
      "Planhat for IT",
      "Planhat for Security",
    ],
  },
  {
    label: "Explore",
    href: "#",
    children: [
      "Pricing",
      "Editorial",
      "Events",
      "Partners",
      "Help Center",
      "Developers",
      "About",
      "Careers",
      "Press",
      "MCP Server",
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#121211] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          planhat
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
              <ChevronDown className="h-3 w-3" />
            </button>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="#" className="text-sm text-white/80 transition-colors hover:text-white">
            Log In
          </Link>
          <Link
            href="#"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#121211] transition-opacity hover:opacity-90"
          >
            Request a Demo
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#121211] px-6 pb-6 pt-4 text-white md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between text-sm text-white/80"
              >
                {item.label}
                <ChevronDown className="h-4 w-4" />
              </Link>
            ))}
            <hr className="border-white/10" />
            <Link href="#" className="text-sm text-white/80">
              Log In
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#121211]"
            >
              Request a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
