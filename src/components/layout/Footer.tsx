import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { useData } from '../../hooks/useData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Shield,
  CheckCircle2,
  Linkedin,
  Instagram,
  Youtube,
  Send,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile, services } = useData();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Col 1: Brand & Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                {profile.name}
              </span>
              <p className="mt-2 text-xs text-blue-400 font-mono uppercase tracking-wider">
                {profile.tagline}
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {profile.shortBio}
            </p>

            {/* Certifications badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              {profile.certifications.map((cert) => (
                <div
                  key={cert.code}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                >
                  <Shield className="w-3 h-3 text-blue-400" />
                  <span>{cert.code}</span>
                </div>
              ))}
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100 font-mono">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors">
                  Layanan Manufaktur
                </Link>
              </li>
              <li>
                <Link href="/proyek" className="hover:text-white transition-colors">
                  Studi Kasus Proyek
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-white transition-colors">
                  Artikel & Berita
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Hubungi Pabrik
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Dashboard Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Unggulan (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100 font-mono">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              {services.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/layanan/${srv.slug}`}
                    className="hover:text-white transition-colors line-clamp-1 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontak & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100 font-mono">
              Fasilitas Pabrik
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {profile.address.street}, {profile.address.city}, {profile.address.province}{' '}
                  {profile.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{profile.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{profile.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{profile.contact.officeHours}</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs font-medium text-slate-300 mb-2">
                Buletin Teknologi Manufaktur
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email perusahaan Anda"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Kirim Langganan Newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="mt-1.5 text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Terima kasih telah berlangganan buletin!</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {profile.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-6">
            <span>Standar Kualitas ISO 9001:2015</span>
            <span aria-hidden="true">·</span>
            <span>Zero Accident K3</span>
            <span aria-hidden="true">·</span>
            <span>Kepatuhan Regulasi TKDN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
