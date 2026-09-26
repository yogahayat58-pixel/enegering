/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './lib/router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useData } from './hooks/useData';

const AppContent: React.FC = () => {
  const router = useRouter();
  const { profile, services, projects, articles, seo } = useData();

  // Dynamic Title & Meta updater
  useEffect(() => {
    let pageTitle = seo.metaTitle;

    if (router.pathname === '/') {
      pageTitle = seo.metaTitle;
    } else if (router.pathname === '/tentang') {
      pageTitle = `Tentang Kami & Profil – ${profile.name}`;
    } else if (router.pathname === '/layanan') {
      if (router.slug) {
        const found = services.find((s) => s.slug === router.slug);
        pageTitle = found ? `${found.title} – ${profile.name}` : `Layanan – ${profile.name}`;
      } else {
        pageTitle = `Layanan Manufaktur & Presisi – ${profile.name}`;
      }
    } else if (router.pathname === '/proyek') {
      if (router.slug) {
        const found = projects.find((p) => p.slug === router.slug);
        pageTitle = found ? `${found.title} – ${profile.name}` : `Studi Kasus Proyek – ${profile.name}`;
      } else {
        pageTitle = `Portofolio Proyek & Studi Kasus – ${profile.name}`;
      }
    } else if (router.pathname === '/artikel') {
      if (router.slug) {
        const found = articles.find((a) => a.slug === router.slug);
        pageTitle = found ? `${found.title} – ${profile.name}` : `Artikel & Berita – ${profile.name}`;
      } else {
        pageTitle = `Wawasan Manufaktur & Berita Teknik – ${profile.name}`;
      }
    } else if (router.pathname === '/kontak') {
      pageTitle = `Hubungi Kami & Minta Penawaran – ${profile.name}`;
    } else if (router.pathname === '/admin') {
      pageTitle = `CMS Admin Dashboard – ${profile.name}`;
    }

    document.title = pageTitle;
  }, [router.pathname, router.slug, profile.name, seo.metaTitle, services, projects, articles]);

  // Route: Admin Dashboard
  if (router.pathname === '/admin') {
    return <AdminDashboardPage />;
  }

  // Determine current page component
  const renderCurrentPage = () => {
    switch (router.pathname) {
      case '/':
        return <HomePage />;
      case '/tentang':
        return <AboutPage />;
      case '/layanan':
        return router.slug ? (
          <ServiceDetailPage slug={router.slug} />
        ) : (
          <ServicesPage />
        );
      case '/proyek':
        return router.slug ? (
          <ProjectDetailPage slug={router.slug} />
        ) : (
          <ProjectsPage />
        );
      case '/artikel':
        return router.slug ? (
          <ArticleDetailPage slug={router.slug} />
        ) : (
          <ArticlesPage />
        );
      case '/kontak':
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar companyName={profile.name} />
      <main className="flex-1">{renderCurrentPage()}</main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
