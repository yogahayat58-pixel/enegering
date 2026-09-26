import React from 'react';
import { Link } from '../../lib/router';
import { IndustrialImage } from '../ui/IndustrialImage';
import {
  ArrowUpRight,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle,
  Factory,
  ChevronRight,
} from 'lucide-react';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  badge?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline = 'Solusi Manufaktur Presisi & Rekayasa Industri Masa Depan',
  subheadline = 'Menghadirkan layanan fabrikasi logam berat, CNC machining 5-axis presisi mikro, fiber laser cutting otomatis, dan integrasi smart factory untuk industri nasional berkelas dunia.',
  badge = 'Fasilitas Terakreditasi ISO 9001:2015 & ASME Boiler Code · Kawasan Industri Jababeka',
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
      {/* Background blueprint subtle mesh */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-70 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top editorial kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/80 border border-blue-800/60 text-xs font-mono text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1] text-balance">
              {headline}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {subheadline}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <span>Minta Penawaran Proyek</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/layanan"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all whitespace-nowrap"
              >
                <span>Lihat 8 Layanan Unggulan</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Toleransi Presisi ±0.005 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Kepatuhan TKDN Hingga 78%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zero Accident K3 Record</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor + Floating Metric Cards (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Visual Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
              <IndustrialImage
                imageKey="hero_plant"
                alt="Fasilitas Manufaktur Modern PT Industri Nusantara"
                aspectRatio="16:9"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Card 1: 20+ Tahun Pengalaman (Top Right) */}
              <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/90 rounded-xl p-3.5 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold font-mono text-white tabular-nums">20+ Tahun</div>
                  <div className="text-[11px] text-slate-400">Pengalaman Industri</div>
                </div>
              </div>

              {/* Floating Card 2: 500+ Project & 98% Satisfaction (Bottom Left) */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-slate-900/95 backdrop-blur-md border border-slate-700/90 rounded-xl p-3.5 shadow-xl flex items-center justify-between sm:justify-start gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold font-mono text-white tabular-nums">520+ Proyek</div>
                    <div className="text-[10px] text-slate-400">Terselesaikan Sukses</div>
                  </div>
                </div>

                <div className="h-8 w-px bg-slate-700 hidden sm:block" />

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold font-mono text-white tabular-nums">98.6%</div>
                    <div className="text-[10px] text-slate-400">Kepuasan Klien</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
