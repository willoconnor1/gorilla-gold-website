"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { NavItem } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-start overflow-hidden h-5 text-sm"
    >
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className="text-gray-300">{children}</span>
        <span className="text-white">{children}</span>
      </div>
    </Link>
  );
}

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="group relative inline-flex items-start gap-1 overflow-hidden h-5 text-sm"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
          <span className="flex items-center gap-1 text-gray-300">
            {item.label}
            <ChevronDown
              className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </span>
          <span className="flex items-center gap-1 text-white">
            {item.label}
            <ChevronDown
              className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-4"
          >
            <div className="min-w-[200px] rounded-xl border border-[#333] bg-[#1f1f1f] backdrop-blur-sm py-2 shadow-lg">
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-400 transition-all duration-200 bg-gradient-to-l from-transparent to-transparent hover:from-accent/15 hover:text-white"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-2 py-3 text-base font-medium text-gray-300 transition-colors hover:text-white"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="pb-1 pl-4">
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className="block px-2 py-2.5 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (mobileOpen) {
      setHeaderShapeClass("rounded-xl");
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full");
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50
        flex flex-col items-center
        pl-4 pr-4 py-3 backdrop-blur-sm
        ${headerShapeClass}
        border border-[#333] bg-[#1f1f1f57]
        w-[calc(100%-2rem)] lg:w-auto
        transition-[border-radius] duration-0 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 lg:gap-x-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/betterer-gg-logo.png"
            alt="Gorilla Gold - Grip Enhancer - The Feel For The Game"
            width={220}
            height={60}
            className="h-14 w-auto -my-2"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm">
          {mainNav.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <AnimatedNavLink key={item.href} href={item.href}>
                {item.label}
              </AnimatedNavLink>
            ),
          )}
        </nav>

        {/* Shop Button (Desktop) */}
        <div className="hidden lg:block">
          <div className="relative group">
            <div
              className="absolute inset-0 -m-2 rounded-full
                bg-accent/40 filter blur-lg pointer-events-none
                transition-all duration-300 ease-out
                group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"
            />
            <Link
              href="/shop"
              className="relative z-10 px-5 py-2 text-sm font-semibold text-black bg-gradient-to-br from-accent to-accent-hover rounded-full hover:from-accent-hover hover:to-accent transition-all duration-200 inline-block"
            >
              Shop
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
          ${mobileOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col w-full">
          {mainNav.map((item) =>
            item.children ? (
              <MobileDropdown
                key={item.label}
                item={item}
                onNavigate={() => setMobileOpen(false)}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-3 text-base text-gray-300 hover:text-white transition-colors w-full"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="mt-4 w-full">
          <Link
            href="/shop"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-3 text-sm font-semibold text-black bg-gradient-to-br from-accent to-accent-hover rounded-full hover:from-accent-hover hover:to-accent transition-all duration-200"
          >
            Shop
          </Link>
        </div>
      </div>
    </header>
  );
}
