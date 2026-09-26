import React from 'react';
import { useData } from '../hooks/useData';
import { IndustrialImage } from '../components/ui/IndustrialImage';
import { Link } from '../lib/router';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Award,
  Factory,
  Users,
  Compass,
  ArrowRight,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { profile } = useData();

  return (
    <div className="bg-white text-slate-900 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950 border border-blue-800 text-xs font-mono text-blue-300">
            <span>PROFIL PERUSAHAAN · DIDIRIKAN 2004</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Membangun Fondasi Kemandirian Manufaktur Presisi Indonesia
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Dua dekade berkiprah melayani industri strategis nasional dengan keahlian permesinan
            presisi, fabrikasi logam berat, dan otomatisasi berbasis standar ISO 9001:2015.
          </p>
        </div>
      </section>

      {/* Main Story & Facility Overview */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
                Sejarah & Komitmen Mutu
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Dari Bengkel Konvensional Menuju Pabrik Pintar Terintegrasi
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {profile.aboutStory}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold font-mono text-blue-800">15.000 m²</div>
                  <div className="text-xs text-slate-500">Luas Fasilitas Pabrik</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold font-mono text-blue-800">38 Unit</div>
                  <div className="text-xs text-slate-500">Mesin CNC Multi-Axis</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-bold font-mono text-blue-800">145+ Orang</div>
                  <div className="text-xs text-slate-500">Insinyur & Teknisi</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
                <IndustrialImage
                  imageKey="industrial_plant"
                  alt="Fasilitas Pabrik PT Industri Nusantara Cikarang"
                  aspectRatio="16:9"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi, Misi & Nilai Perusahaan */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
                Visi Jangka Panjang
              </span>
              <h3 className="text-xl font-bold text-slate-950">
                Pionir Manufaktur Presisi Berdaya Saing Global
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                "{profile.vision}"
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
                Misi Strategis
              </span>
              <h3 className="text-xl font-bold text-slate-950">
                Langkah Nyata Mewujudkan Keunggulan
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {profile.mission.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nilai Perusahaan */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
                Budaya Kerja
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                5 Nilai Inti Perusahaan
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profile.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-colors shadow-sm"
                >
                  <div className="text-xs font-mono font-bold text-blue-700 mb-2">
                    NILAI 0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Perjalanan */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
              Milestone Pertumbuhan
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
              Timeline Perjalanan PT Industri Nusantara
            </h3>
          </div>

          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {profile.milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Year Badge on left */}
                <div className="absolute -left-[35px] md:-left-[152px] top-0 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-700 border-4 border-white shadow" />
                  <span className="hidden md:inline-block font-mono font-bold text-sm text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {m.year}
                  </span>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
                  <span className="md:hidden inline-block font-mono font-bold text-xs text-blue-900 bg-blue-100 px-2 py-0.5 rounded mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-base font-bold text-slate-950 mb-1">{m.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legalitas & Sertifikasi */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
              Sertifikasi & Kepatuhan Internasional
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Jaminan Legalitas & Standar Mutu Industri
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.certifications.map((cert) => (
              <div
                key={cert.code}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                    Berlaku s/d {cert.validUntil}
                  </span>
                </div>
                <div>
                  <div className="text-base font-bold font-mono text-white">{cert.code}</div>
                  <div className="text-xs text-blue-300 font-medium">{cert.name}</div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                  Lembaga Audit: {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Manajemen & Rekayasa */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
              Dewan Direksi & Kepala Divisi
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
              Kepemimpinan Berbasis Keahlian Teknis Mendalam
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.team.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {member.division}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{member.experience}</span>
                </div>
                <h4 className="text-base font-bold text-slate-950 mb-1">{member.name}</h4>
                <div className="text-xs font-semibold text-blue-800 mb-3">{member.role}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
