import React, { useState } from 'react';
import { useData } from '../hooks/useData';
import { Link, useRouter } from '../lib/router';
import { IndustrialImage } from '../components/ui/IndustrialImage';
import {
  ChevronRight,
  CheckCircle2,
  Cpu,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  PhoneCall,
  Layers,
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { services } = useData();
  const router = useRouter();
  const service = services.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Layanan Tidak Ditemukan</h2>
        <p className="text-sm text-slate-600 mb-6">
          Maaf, layanan yang Anda tuju tidak tersedia atau telah diperbarui.
        </p>
        <Link
          href="/layanan"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white rounded-lg text-xs font-semibold"
        >
          <span>Kembali ke Daftar Layanan</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-slate-50 text-slate-900 pb-24">
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/layanan" className="hover:text-white transition-colors">
              Layanan
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-400 font-semibold">{service.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded bg-blue-950 border border-blue-800 text-[11px] font-mono text-blue-300">
            <span>KATEGORI: {service.category.toUpperCase()}</span>
            {service.badge && <span>· {service.badge}</span>}
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display text-balance">
            {service.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Visual Hero Showcase */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-950">
              <IndustrialImage
                imageKey={service.imageKey}
                imageUrl={service.imageUrl}
                alt={service.title}
                aspectRatio="16:9"
                className="w-full h-[380px] object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-950 font-display">
                Deskripsi Lengkap Layanan
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Keunggulan & Benefit */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-950 font-display">
                Keunggulan & Standar Kualitas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spesifikasi Mesin & Kapasitas Kerja */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-950 font-display">
                  Spesifikasi Mesin & Kapasitas Produksi
                </h2>
                <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2 py-1 rounded">
                  ARMADA BERSERTIFIKASI
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-mono uppercase text-[11px]">
                    <tr>
                      <th className="p-3 rounded-l-lg">Unit Mesin / Instrumen</th>
                      <th className="p-3">Kapasitas Kerja</th>
                      <th className="p-3 rounded-r-lg">Merek / Standar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {service.specs.map((sp, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-semibold text-slate-900">{sp.name}</td>
                        <td className="p-3 font-mono text-slate-700">{sp.capacity}</td>
                        <td className="p-3 text-blue-800 font-medium">{sp.brandOrType}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Alur Pengerjaan (Workflow) */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-950 font-display">
                Alur Tahapan Pengerjaan Proyek
              </h2>
              <div className="space-y-4">
                {service.workflow.map((w) => (
                  <div key={w.step} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-blue-700 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm">
                      {w.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 mb-1">{w.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{w.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-700" />
                <h2 className="text-xl font-bold text-slate-950 font-display">
                  Pertanyaan Sering Diajukan (FAQ)
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar CTA & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Action Box */}
            <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-xl space-y-5 sticky top-24">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300">
                  Konsultasi Spesifikasi
                </span>
                <h3 className="text-lg font-bold">
                  Butuh Penawaran untuk {service.title}?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Kirimkan detail gambar teknik (CAD/DWG/STP) atau jadwalkan survei teknis ke pabrik
                  Anda bersama insinyur kami.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href={`/kontak?layanan=${encodeURIComponent(service.title)}`}
                  className="w-full py-3 bg-white hover:bg-blue-50 text-blue-950 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <span>Minta Penawaran Harga</span>
                  <ArrowRight className="w-4 h-4 text-blue-950" />
                </Link>

                <a
                  href={`https://wa.me/6281198765432?text=${encodeURIComponent(
                    `Halo PT Industri Nusantara, saya tertarik dengan layanan ${service.title}. Mohon informasi penawaran dan spesifikasi.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 border border-blue-600 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Engineering</span>
                </a>
              </div>

              <div className="pt-4 border-t border-blue-800/80 space-y-2 text-[11px] text-blue-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Kerahasiaan NDA Terjamin</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sertifikat Uji Dimensi CMM</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Kepatuhan Standar ISO & ASME</span>
                </div>
              </div>

              {/* Other Services Link */}
              <div className="pt-4 border-t border-blue-800/80">
                <span className="text-[11px] font-mono text-blue-300 block mb-3">
                  Layanan Lainnya:
                </span>
                <div className="space-y-1.5 text-xs">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 4)
                    .map((s) => (
                      <Link
                        key={s.id}
                        href={`/layanan/${s.slug}`}
                        className="block text-blue-200 hover:text-white truncate transition-colors"
                      >
                        → {s.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
