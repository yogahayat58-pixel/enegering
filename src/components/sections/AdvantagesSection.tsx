import React from 'react';
import {
  Cpu,
  Users,
  ShieldCheck,
  Clock,
  Coins,
  Award,
} from 'lucide-react';

export const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: 'Teknologi Modern',
      desc: 'Investasi berkelanjutan pada 38 armada CNC 5-axis DMG Mori & Mazak, fiber laser 15 kW, serta sistem robotik Industry 4.0.',
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Tim Berpengalaman',
      desc: 'Didukung 145+ insinyur manufaktur dan juru las tersertifikasi ASME Sec IX, AWS D1.1, dan BNSP dengan pengalaman puluhan tahun.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Kualitas Terjamin',
      desc: 'Laboratorium metrologi suhu 20°C terkalibrasi dengan mesin ukur 3D Zeiss CMM untuk menjamin toleransi hingga sub-mikron.',
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: 'Tepat Waktu',
      desc: 'Tingkat On-Time Delivery (OTD) 98.4% berkat sistem penjadwalan produksi ERP terintegrasi dan kapasitas pabrik 3 shift harian.',
    },
    {
      icon: <Coins className="w-6 h-6 text-amber-500" />,
      title: 'Harga Kompetitif & TKDN',
      desc: 'Efisiensi rantai pasok material langsung dari pabrikan utama dan nilai TKDN hingga 78% untuk efisiensi investasi pengadaan Anda.',
    },
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      title: 'Garansi Pekerjaan',
      desc: 'Jaminan kepatuhan terhadap drawing teknis 100%, garansi pergantian cepat bila ada deviasi spesifikasi, dan dukungan purnajual.',
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-display text-balance">
            Standar Keunggulan Rekayasa Tanpa Kompromi
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Kombinasi teknologi mutakhir, kedisiplinan jaminan mutu internasional, dan dedikasi
            kecepatan respon menjadikan kami mitra manufaktur terpercaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
