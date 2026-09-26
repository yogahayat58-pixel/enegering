import React from 'react';
import { Link } from '../../lib/router';
import { useData } from '../../hooks/useData';
import { IndustrialImage } from '../ui/IndustrialImage';
import {
  ArrowRight,
  Hammer,
  Cpu,
  Zap,
  Flame,
  Wrench,
  Settings,
  Compass,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

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

export const ServicesSection: React.FC = () => {
  const { services } = useData();

  return (
    <section className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
              Layanan Manufaktur & Rekayasa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-display text-balance">
              8 Kapabilitas Inti dengan Standar Rekayasa Presisi Tinggi
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Didukung infrastruktur mesin CNC multi-axis, fiber laser 15 kW, dan tenaga ahli
              bersertifikat ASME & ISO untuk memenuhi toleransi geometrik paling menantang.
            </p>
          </div>

          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>Semua Layanan & Spesifikasi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            return (
              <Link
                key={service.id}
                href={`/layanan/${service.slug}`}
                className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                  <IndustrialImage
                    imageKey={service.imageKey}
                    imageUrl={service.imageUrl}
                    alt={service.title}
                    aspectRatio="4:3"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded">
                    {service.category}
                  </div>

                  {/* Editorial Index Number */}
                  <div className="absolute bottom-3 right-3 text-white/80 font-mono text-xs font-bold">
                    0{index + 1}.
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-500">
                      {iconMap[service.iconName] || <Settings className="w-5 h-5 text-blue-600" />}
                      {service.badge && (
                        <span className="text-[11px] font-mono text-blue-700 font-medium">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Footer link trigger */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                    <span>Lihat Detail & Kapasitas</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
