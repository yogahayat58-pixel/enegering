import React from 'react';
import { Link } from '../../lib/router';
import { ArrowUpRight, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800/80 border border-blue-700 text-xs font-mono text-blue-200">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Konsultasi Teknis & Estimasi RAB Cepat 1x24 Jam</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display text-balance leading-tight">
            Siap Merealisasikan Komponen Presisi & Solusi Pabrik Anda?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 font-light leading-relaxed">
            Diskusikan spesifikasi gambar CAD/STP atau kebutuhan fabrikasi khusus bersama tim insinyur
            berpengalaman PT Industri Nusantara.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide text-blue-950 bg-white hover:bg-blue-50 rounded-xl shadow-lg transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <span>Kirim Spesifikasi Proyek</span>
            <ArrowUpRight className="w-4 h-4 text-blue-900" />
          </Link>

          <a
            href="https://wa.me/6281198765432"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-blue-800 hover:bg-blue-700 border border-blue-600/60 rounded-xl transition-all whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat WhatsApp Engineering (+62 811-9876-5432)</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          <span>Non-Disclosure Agreement (NDA) Dijamin</span>
          <span aria-hidden="true">·</span>
          <span>Inspeksi Gambar Gratis</span>
          <span aria-hidden="true">·</span>
          <span>Sertifikat Uji Lab Lengkap</span>
        </div>
      </div>
    </section>
  );
};
