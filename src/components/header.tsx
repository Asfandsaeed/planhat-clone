"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo, ChevronDown, Menu, X } from "@/components/icons";

const navItems = [
  {
    label: "Solutions",
    href: "#",
  },
  {
    label: "Platform",
    href: "#",
  },
  {
    label: "Customers",
    href: "#",
  },
  {
    label: "Explore",
    href: "#",
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-muted-text transition-colors hover:text-foreground"
            >
              {item.label}
              <ChevronDown className="h-3.5 w-3.5" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-muted-text transition-colors hover:text-foreground"
          >
            Log In
          </a>
          <a
            href="#"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Request a Demo
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/40 bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between text-sm font-medium text-muted-text transition-colors hover:text-foreground"
              >
                {item.label}
                <ChevronDown className="h-4 w-4" />
              </a>
            ))}
            <hr className="border-border/40" />
            <a
              href="#"
              className="text-sm font-medium text-muted-text transition-colors hover:text-foreground"
            >
              Log In
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              Request a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
