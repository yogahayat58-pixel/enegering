import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ClientsSection } from '../components/sections/ClientsSection';
import { AboutPreviewSection } from '../components/sections/AboutPreviewSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { AdvantagesSection } from '../components/sections/AdvantagesSection';
import { StatisticsSection } from '../components/sections/StatisticsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ArticlesSection } from '../components/sections/ArticlesSection';
import { CTASection } from '../components/sections/CTASection';
import { useData } from '../hooks/useData';

export const HomePage: React.FC = () => {
  const { theme } = useData();

  return (
    <div className="flex flex-col">
      <HeroSection
        headline={theme.heroHeadline}
        subheadline={theme.heroSubheadline}
        badge={theme.heroBadge}
      />
      <ClientsSection />
      <AboutPreviewSection />
      <ServicesSection />
      <AdvantagesSection />
      <StatisticsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <CTASection />
    </div>
  );
};
