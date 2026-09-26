import React from 'react';
import { useData } from '../hooks/useData';
import { Link, useRouter } from '../lib/router';
import { IndustrialImage } from '../components/ui/IndustrialImage';
import {
  ChevronRight,
  MapPin,
  Calendar,
  Clock,
  Building2,
  CheckCircle2,
  Cpu,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const { projects } = useData();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Proyek Tidak Ditemukan</h2>
        <p className="text-sm text-slate-600 mb-6">
          Proyek yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link
          href="/proyek"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white rounded-lg text-xs font-semibold"
        >
          <span>Kembali ke Portofolio Proyek</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="bg-slate-50 text-slate-900 pb-24">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/proyek" className="hover:text-white transition-colors">
              Proyek
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-400 font-semibold truncate max-w-[200px]">
              {project.title}
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded bg-blue-950 border border-blue-800 text-[11px] font-mono text-blue-300">
            <span>SEKTOR: {project.category.toUpperCase()}</span>
            <span>· TAHUN {project.year}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-mono pt-2">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>{project.client}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{project.location}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Durasi: {project.duration}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Area (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Visual Banner */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-950">
              <IndustrialImage
                imageKey={project.imageKey}
                imageUrl={project.imageUrl}
                alt={project.title}
                aspectRatio="16:9"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Overview / Deskripsi */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-950 font-display">Ringkasan Proyek</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.shortDesc}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenge */}
              <div className="bg-white p-6 rounded-2xl border border-rose-200 shadow-sm space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded">
                  Tantangan Teknis
                </span>
                <h3 className="text-base font-bold text-slate-950">Kendala & Persyaratan Ekstrem</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-sm space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                  Solusi Rekayasa
                </span>
                <h3 className="text-base font-bold text-slate-950">Metodologi & Eksekusi Cerdas</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Quantified Result Metrics */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-700" />
                <h2 className="text-xl font-bold text-slate-950 font-display">
                  Hasil & Dampak Terukur
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.resultMetrics.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                    <span className="text-2xl font-bold font-mono text-blue-900 block tabular-nums">
                      {metric.value}
                    </span>
                    <span className="text-xs text-slate-600 font-medium block">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Machinery Used */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-950 font-display">
                Teknologi & Standar Mesin yang Diterapkan
              </h2>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-800"
                  >
                    <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Projects */}
            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-slate-950 font-display">
                Proyek Terkait Lainnya
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/proyek/${rp.slug}`}
                    className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-blue-700 block uppercase mb-1">
                        {rp.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 line-clamp-2">
                        {rp.title}
                      </h4>
                    </div>
                    <span className="text-[11px] text-blue-600 font-semibold mt-3 flex items-center gap-1">
                      <span>Detail</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Project Meta (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 sticky top-24">
              <h3 className="text-base font-bold text-slate-950 pb-3 border-b border-slate-100">
                Spesifikasi Kontrak Proyek
              </h3>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-400 block font-mono uppercase text-[10px]">
                    Nama Klien / Pemilik Fasilitas
                  </span>
                  <span className="font-semibold text-slate-800">{project.client}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono uppercase text-[10px]">
                    Lokasi Pekerjaan
                  </span>
                  <span className="font-semibold text-slate-800">{project.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono uppercase text-[10px]">
                    Tahun Pelaksanaan
                  </span>
                  <span className="font-semibold text-slate-800">{project.year}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono uppercase text-[10px]">
                    Durasi Pengerjaan
                  </span>
                  <span className="font-semibold text-slate-800">{project.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono uppercase text-[10px]">
                    Kategori Sektor
                  </span>
                  <span className="font-semibold text-blue-700">{project.category}</span>
                </div>
              </div>

              {/* CTA button */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <Link
                  href={`/kontak?proyek=${encodeURIComponent(project.title)}`}
                  className="w-full py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <span>Diskusikan Proyek Serupa</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dokumentasi dan as-built drawing tersedia lengkap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
