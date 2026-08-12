"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-slate-950">
      <Image
        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc58?auto=format&fit=crop&w=1400&q=75"
        alt="Professional cinema camera gear"
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-transparent to-slate-950/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-red-500" />
            Premium Cinema & Event Rentals
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-6 text-white"
        >
          Elevate Your <br />
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-rose-400 bg-clip-text text-transparent drop-shadow-md">
            Production Vision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
        >
          Rent top-tier cinema cameras, 8K lenses, Aputure studio lights, P3.9 LED walls, and live streaming gear with verified doorstep setup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-red-600/30 shadow-lg" asChild>
            <Link href="/products">
              Explore Equipment Catalog
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" className="w-full sm:w-auto border-slate-700 text-white hover:border-red-500 hover:bg-red-950/20" asChild>
            <Link href="/contact">Book Custom Service</Link>
          </Button>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-800/80 text-left"
        >
          <div className="flex items-center gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">100% Insured</p>
              <p className="text-[10px] text-slate-400">Tested equipment</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <Zap className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Same Day Dispatch</p>
              <p className="text-[10px] text-slate-400">Instant verification</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <Sparkles className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Best Daily Rates</p>
              <p className="text-[10px] text-slate-400">No hidden fees</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">24/7 Crew Support</p>
              <p className="text-[10px] text-slate-400">Expert tech assistance</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-red-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
