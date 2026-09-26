import React from 'react';
import { useData } from '../../hooks/useData';

export const ClientsSection: React.FC = () => {
  const { clients } = useData();

  return (
    <section className="bg-slate-900 border-b border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
          Dipercaya oleh Pemimpin Industri Nasional & Korporasi Multinasional
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors text-center group"
            >
              <span className="text-xs font-bold font-mono tracking-wider text-slate-400 group-hover:text-blue-400 transition-colors">
                {client.logoText}
              </span>
              <span className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
