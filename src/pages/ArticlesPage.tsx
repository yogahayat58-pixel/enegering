import React, { useState } from 'react';
import { useData } from '../hooks/useData';
import { Link } from '../lib/router';
import { IndustrialImage } from '../components/ui/IndustrialImage';
import { Search, Calendar, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

export const ArticlesPage: React.FC = () => {
  const { articles } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const categories = ['Semua', 'Teknologi', 'Fabrikasi', 'Otomasi', 'Manajemen Mutu', 'Regulasi'];

  const filteredArticles = articles.filter((art) => {
    const matchesCat = selectedCategory === 'Semua' || art.category === selectedCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1;
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-slate-50 text-slate-900 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950 border border-blue-800 text-xs font-mono text-blue-300">
            <span>PUBLIKASI & INSIGHT TEKNIK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Wawasan Manufaktur & Teknologi Industri
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Artikel teknis, panduan pemilihan mesin, analisis regulasi TKDN, dan studi implementasi
            Smart Factory yang ditulis langsung oleh praktisi teknik kami.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-10">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
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

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari topik, toleransi, laser, TKDN..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">
              Tidak ada artikel yang cocok dengan pencarian "{searchQuery}".
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
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/artikel/${article.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300"
                >
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

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
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

                      <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </button>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pNum = i + 1;
                  return (
                    <button
                      key={pNum}
                      onClick={() => setCurrentPage(pNum)}
                      className={`w-9 h-9 rounded-lg text-xs font-semibold font-mono ${
                        currentPage === pNum
                          ? 'bg-blue-700 text-white shadow'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {pNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none flex items-center gap-1"
                >
                  <span>Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
