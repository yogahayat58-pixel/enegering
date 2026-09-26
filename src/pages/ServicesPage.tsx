import React, { useState } from 'react';
import { useData } from '../hooks/useData';
import { Link } from '../lib/router';
import { IndustrialImage } from '../components/ui/IndustrialImage';
import { Search, ChevronRight, Filter, Settings, Cpu, Zap, Flame, Hammer, Compass, Wrench, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Hammer: <Hammer className="w-5 h-5 text-blue-600" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-600" />,
  Zap: <Zap className="w-5 h-5 text-amber-500" />,
  Flame: <Flame className="w-5 h-5 text-orange-500" />,
  Wrench: <Wrench className="w-5 h-5 text-blue-600" />,
  Settings: <Settings className="w-5 h-5 text-blue-600" />,
  Compass: <Compass className="w-5 h-5 text-blue-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
};

export const ServicesPage: React.FC = () => {
  const { services } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'Fabrikasi', 'Machining', 'Otomasi', 'Engineering', 'Maintenance'];

  const filteredServices = services.filter((srv) => {
    const matchesCat = selectedCategory === 'Semua' || srv.category === selectedCategory;
    const matchesQuery =
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="bg-slate-50 text-slate-900 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950 border border-blue-800 text-xs font-mono text-blue-300">
            <span>KAPABILITAS MANUFAKTUR & PERMESINAN</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Layanan Rekayasa & Fabrikasi Presisi
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Eksplorasi seluruh solusi manufaktur kami yang didukung permesinan mutakhir berstandar
            toleransi internasional untuk kebutuhan industri otomotif, migas, energi, dan farmasi.
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
              placeholder="Cari layanan, CNC, laser, las..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">
              Tidak ditemukan layanan yang sesuai dengan pencarian "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              className="mt-3 text-xs font-semibold text-blue-700 hover:underline"
            >
              Reset filter pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Link
                key={service.id}
                href={`/layanan/${service.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <IndustrialImage
                    imageKey={service.imageKey}
                    imageUrl={service.imageUrl}
                    alt={service.title}
                    aspectRatio="4:3"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded">
                    {service.category}
                  </div>

                  {service.badge && (
                    <div className="absolute bottom-3 left-3 bg-blue-950/90 border border-blue-500/40 text-blue-300 text-[11px] font-mono px-2 py-0.5 rounded">
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      {iconMap[service.iconName] || <Settings className="w-5 h-5 text-blue-600" />}
                      <span className="text-xs font-mono text-slate-500">
                        {service.specs.length} Spesifikasi Mesin
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-700 transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                    <span>Lihat Spesifikasi & FAQ</span>
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
