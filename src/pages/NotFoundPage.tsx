import React from 'react';
import { Link } from '../lib/router';
import { ArrowLeft, Home, FileQuestion } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-24 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mx-auto">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
            Error 404
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 font-display">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Halaman atau tautan yang Anda cari mungkin telah dipindahkan, diubah jalurnya, atau tidak
            lagi tersedia.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold transition-colors"
          >
            <span>Lihat Layanan</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
