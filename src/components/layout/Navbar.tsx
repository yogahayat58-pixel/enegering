import React, { useState } from 'react';
import { Link, useRouter } from '../../lib/router';
import { Menu, X, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  companyName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ companyName = 'PT Industri Nusantara' }) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/tentang' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Proyek', href: '/proyek' },
    { label: 'Artikel', href: '/artikel' },
    { label: 'Kontak', href: '/kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-950 font-display hover:text-blue-900 transition-colors whitespace-nowrap"
        >
          {companyName}
        </Link>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((item) => {
            const isActive =
              router.pathname === item.href ||
              (item.href !== '/' && router.pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-slate-950 ${
                  isActive ? 'text-blue-700 font-semibold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-700 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors whitespace-nowrap"
            title="Kelola Konten & Konfigurasi"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/kontak"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-800 hover:bg-blue-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-[0.98]"
          >
            <span>Hubungi Kami</span>
            <ArrowUpRight className="w-4 h-4 text-blue-200" />
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive =
                router.pathname === item.href ||
                (item.href !== '/' && router.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-800 rounded-lg"
            >
              Minta Penawaran / Kontak
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              Dashboard Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
