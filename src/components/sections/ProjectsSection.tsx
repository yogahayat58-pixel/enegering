import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { useData } from '../../hooks/useData';
import { IndustrialImage } from '../ui/IndustrialImage';
import { MapPin, ArrowRight, Calendar, ChevronRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Otomotif',
    'Energi & Migas',
    'Pembangkit',
    'Elektronik',
    'Infrastruktur',
    'Farmasi',
  ];

  const filteredProjects =
    selectedCategory === 'Semua'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
              Portofolio Proyek Rekayasa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-display text-balance">
              Studi Kasus & Implementasi Nyata di Berbagai Sektor
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Bukti kapabilitas eksekusi kami dalam menyelesaikan proyek manufaktur presisi, bejana
              tekan, struktur berat, dan otomatisasi dengan hasil terukur.
            </p>
          </div>

          <Link
            href="/proyek"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>Semua Proyek & Hasil</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: Minimal 8 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/proyek/${project.slug}`}
              className="group flex flex-col bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <IndustrialImage
                  imageKey={project.imageKey}
                  imageUrl={project.imageUrl}
                  alt={project.title}
                  aspectRatio="4:3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded">
                  {project.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span className="truncate max-w-[130px]">{project.location}</span>
                  </span>
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Outcome metric highlight */}
                {project.resultMetrics && project.resultMetrics.length > 0 && (
                  <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600 text-[11px] font-medium">Hasil Utama:</span>
                    <span className="font-bold font-mono text-blue-800">
                      {project.resultMetrics[0].value}
                    </span>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                  <span>Lihat Studi Kasus</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
