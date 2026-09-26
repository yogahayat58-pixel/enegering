import React from 'react';
import { Link } from '../../lib/router';
import { useData } from '../../hooks/useData';
import { IndustrialImage } from '../ui/IndustrialImage';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const { articles } = useData();

  return (
    <section className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
              Wawasan & Berita Manufaktur
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-display text-balance">
              Artikel Rekayasa, Teknologi Mesin & Regulasi Industri
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Analisis mendalam seputar tren smart factory, efisiensi pemesinan CNC, kepatuhan
              standar ASME, dan panduan Tingkat Komponen Dalam Negeri (TKDN).
            </p>
          </div>

          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>Semua Artikel & Publikasi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 6).map((article) => (
            <Link
              key={article.id}
              href={`/artikel/${article.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <IndustrialImage
                  imageKey={article.imageKey}
                  imageUrl={article.imageUrl}
                  alt={article.title}
                  aspectRatio="4:3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded">
                  {article.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.publishedAt}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] font-mono uppercase">
                      Penulis
                    </span>
                    <span className="font-medium text-slate-800 line-clamp-1">
                      {article.author.name}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-blue-700 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
