import React from 'react';
import { Link } from '../../lib/router';
import { useData } from '../../hooks/useData';
import { IndustrialImage } from '../ui/IndustrialImage';
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export const AboutPreviewSection: React.FC = () => {
  const { profile } = useData();

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Factory Photography + Specs (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
              <IndustrialImage
                imageKey="service_cnc"
                alt="Fasilitas Pusat Permesinan CNC 5-Axis PT Industri Nusantara"
                aspectRatio="4:3"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl text-white">
                <div className="flex items-center justify-between text-xs font-mono text-blue-400 mb-1">
                  <span>METROLOGI & QUALITY ASSURANCE</span>
                  <span>ZEISS CONTURA CMM</span>
                </div>
                <p className="text-xs text-slate-300">
                  Laboratorium metrologi suhu 20°C terkalibrasi dengan verifikasi toleransi hingga 1.5 mikron.
                </p>
              </div>
            </div>

            {/* Accent decorative badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 bg-blue-700 text-white p-4 rounded-xl shadow-lg flex-col items-center justify-center font-mono">
              <span className="text-2xl font-bold">2004</span>
              <span className="text-[10px] uppercase tracking-wider text-blue-200">Didirikan</span>
            </div>
          </div>

          {/* Right Column: Narrative, Vision, Mission (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
                Tentang PT Industri Nusantara
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-display text-balance">
                Dedikasi Dua Dekade dalam Presisi Logam & Rekayasa Mesin
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {profile.aboutStory}
            </p>

            {/* Vision & Mission Summary */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 mb-1">
                  Visi Perusahaan
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 italic">
                  "{profile.vision}"
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900">
                  Fokus Misi Utama
                </h4>
                {profile.mission.slice(0, 3).map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                <span>Profil & Tim Lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/proyek"
                className="text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors inline-flex items-center gap-1"
              >
                <span>Lihat Portofolio Proyek</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
