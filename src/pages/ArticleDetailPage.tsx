import React, { useState } from 'react';
import { useData } from '../hooks/useData';
import { Link } from '../lib/router';
import { IndustrialImage } from '../components/ui/IndustrialImage';
import {
  ChevronRight,
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  Linkedin,
  MessageCircle,
  Twitter,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug }) => {
  const { articles } = useData();
  const article = articles.find((a) => a.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Artikel Tidak Ditemukan</h2>
        <p className="text-sm text-slate-600 mb-6">
          Artikel yang Anda tuju tidak tersedia atau telah diarsipkan.
        </p>
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white rounded-lg text-xs font-semibold"
        >
          <span>Kembali ke Daftar Artikel</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="bg-slate-50 text-slate-900 pb-24">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/artikel" className="hover:text-white transition-colors">
              Artikel
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-400 font-semibold truncate max-w-[200px]">
              {article.category}
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded bg-blue-950 border border-blue-800 text-[11px] font-mono text-blue-300">
            <span>{article.category.toUpperCase()}</span>
            <span>· {article.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-slate-800/80 font-mono">
            <span>Penulis: {article.author.name} ({article.author.role})</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>{article.publishedAt}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-950 mb-10">
          <IndustrialImage
            imageKey={article.imageKey}
            imageUrl={article.imageUrl}
            alt={article.title}
            aspectRatio="16:9"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content Body */}
        <article className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          {/* Excerpt Lead */}
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed pb-6 border-b border-slate-100 italic">
            "{article.excerpt}"
          </p>

          {/* Formatted Content */}
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-slate-950 font-display pt-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                return (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                    {paragraph}
                  </div>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">
              Topik:
            </span>
            {article.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>Bagikan Artikel Ini:</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin Tautan'}</span>
              </button>

              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `${article.title} - ${currentUrl}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                aria-label="Bagikan ke WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-colors"
                aria-label="Bagikan ke LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  article.title
                )}&url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-colors"
                aria-label="Bagikan ke Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>

        {/* Author Bio Box */}
        <div className="mt-8 bg-slate-100 p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-800 text-white font-bold flex items-center justify-center font-display text-lg shrink-0">
            {article.author.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">{article.author.name}</h4>
            <p className="text-xs text-blue-700 font-medium">{article.author.role}</p>
            <p className="text-xs text-slate-500 mt-1">
              Praktisi teknik dan peneliti di divisi R&D PT Industri Nusantara.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-slate-950 font-display">
            Artikel Terkait Lainnya
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/artikel/${rel.slug}`}
                className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-blue-700 uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <span className="text-xs text-blue-700 font-semibold mt-4 flex items-center gap-1">
                  <span>Baca</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
