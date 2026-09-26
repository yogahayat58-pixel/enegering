import React, { useState } from 'react';
import { useData } from '../hooks/useData';
import { Link } from '../lib/router';
import { IndustrialImage } from '../components/ui/IndustrialImage';
import { Search, MapPin, Calendar, ChevronRight } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { projects } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Semua',
    'Otomotif',
    'Energi & Migas',
    'Pembangkit',
    'Elektronik',
    'Infrastruktur',
    'Farmasi',
  ];

  const filteredProjects = projects.filter((prj) => {
    const matchesCat = selectedCategory === 'Semua' || prj.category === selectedCategory;
    const matchesQuery =
      prj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="bg-slate-50 text-slate-900 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950 border border-blue-800 text-xs font-mono text-blue-300">
            <span>STUDI KASUS & PORTOFOLIO PROYEK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Portofolio Proyek Rekayasa & Fabrikasi
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Jelajahi rekam jejak penyelesaian proyek berstandar internasional kami di sektor otomotif,
            minyak dan gas, pembangkit energi, telekomunikasi, dan infrastruktur strategis.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-10">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek, klien, teknologi..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">
              Tidak ditemukan proyek yang cocok dengan kata kunci "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              className="mt-3 text-xs font-semibold text-blue-700 hover:underline"
            >
              Reset filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/proyek/${project.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
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
                      <span className="truncate max-w-[150px]">{project.location}</span>
                    </span>
                    <span>Tahun {project.year}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono text-blue-700 font-medium block">
                      Klien: {project.client}
                    </span>

                    <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {project.resultMetrics && project.resultMetrics.length > 0 && (
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between text-xs">
                      <span className="text-slate-600 text-[11px]">Hasil Kunci:</span>
                      <span className="font-bold font-mono text-blue-800">
                        {project.resultMetrics[0].label}: {project.resultMetrics[0].value}
                      </span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                    <span>Lihat Studi Kasus Lengkap</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
