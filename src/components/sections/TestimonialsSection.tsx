import React, { useState } from 'react';
import { useData } from '../../hooks/useData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (!testimonials.length) return null;

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            Suara Klien Industri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display text-balance">
            Dipercaya oleh Direktur Pabrik & Insinyur Terkemuka
          </h2>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative bg-slate-950/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
            <Quote className="w-6 h-6" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < current.rating
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed italic mb-8 font-light">
            "{current.content}"
          </p>

          {/* Author Details & Associated Project */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-800 gap-4">
            <div>
              <div className="text-base font-bold text-white">
                {current.clientName}
              </div>
              <div className="text-xs text-blue-400">
                {current.role} · <span className="text-slate-300 font-medium">{current.company}</span>
              </div>
            </div>

            {current.projectRef && (
              <div className="text-right sm:text-right">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">
                  Proyek Terkait
                </span>
                <span className="text-xs font-medium text-slate-300">
                  {current.projectRef}
                </span>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-8 bg-blue-500'
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
