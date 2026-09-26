import React, { useEffect, useState } from 'react';
import { useData } from '../../hooks/useData';

export const StatisticsSection: React.FC = () => {
  const { profile } = useData();
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    // Trigger animated appearance
    setCounted(true);
  }, []);

  const statsList = [
    {
      label: 'Tahun Pengalaman',
      target: profile.stats.yearsExperience,
      suffix: '+',
      subtext: 'Sejak didirikan pada 2004',
    },
    {
      label: 'Proyek Selesai',
      target: profile.stats.completedProjects,
      suffix: '+',
      subtext: 'Manufaktur, fabrikasi & otomasi',
    },
    {
      label: 'Tenaga Ahli & Insinyur',
      target: profile.stats.employeesCount,
      suffix: '+',
      subtext: 'Tersertifikasi ISO, AWS, ASME',
    },
    {
      label: 'Tingkat Kepuasan Klien',
      target: profile.stats.satisfactionRate,
      suffix: '%',
      subtext: 'Audit berkala & repeat order',
    },
  ];

  return (
    <section className="py-16 bg-blue-950 text-white border-b border-blue-900 relative overflow-hidden">
      {/* Background blueprint subtle mesh */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsList.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight tabular-nums">
                {stat.target}
                {stat.suffix}
              </span>
              <span className="text-sm sm:text-base font-semibold text-blue-200">
                {stat.label}
              </span>
              <span className="text-xs text-blue-300/80">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
