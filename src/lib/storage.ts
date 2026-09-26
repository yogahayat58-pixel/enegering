import {
  CompanyProfile,
  ServiceItem,
  ProjectItem,
  ArticleItem,
  TestimonialItem,
  ClientItem,
  SEOSettings,
  ThemeSettings,
  ContactMessage,
} from '../types';
import {
  initialCompanyProfile,
  initialServices,
  initialProjects,
  initialArticles,
  initialTestimonials,
  initialClients,
  initialSEOSettings,
  initialThemeSettings,
  initialContactMessages,
} from '../data/initialData';

const KEYS = {
  PROFILE: 'industri_nusantara_profile',
  SERVICES: 'industri_nusantara_services',
  PROJECTS: 'industri_nusantara_projects',
  ARTICLES: 'industri_nusantara_articles',
  TESTIMONIALS: 'industri_nusantara_testimonials',
  CLIENTS: 'industri_nusantara_clients',
  SEO: 'industri_nusantara_seo',
  THEME: 'industri_nusantara_theme',
  MESSAGES: 'industri_nusantara_messages',
  MEDIA: 'industri_nusantara_media',
  DARK_MODE: 'industri_nusantara_admin_dark',
};

function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    return JSON.parse(item) as T;
  } catch (err) {
    console.warn(`Error reading key ${key} from storage:`, err);
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error saving key ${key} to storage:`, err);
  }
}

export const StorageService = {
  getProfile: (): CompanyProfile => safeGet(KEYS.PROFILE, initialCompanyProfile),
  setProfile: (data: CompanyProfile) => safeSet(KEYS.PROFILE, data),

  getServices: (): ServiceItem[] => safeGet(KEYS.SERVICES, initialServices),
  setServices: (data: ServiceItem[]) => safeSet(KEYS.SERVICES, data),

  getProjects: (): ProjectItem[] => safeGet(KEYS.PROJECTS, initialProjects),
  setProjects: (data: ProjectItem[]) => safeSet(KEYS.PROJECTS, data),

  getArticles: (): ArticleItem[] => safeGet(KEYS.ARTICLES, initialArticles),
  setArticles: (data: ArticleItem[]) => safeSet(KEYS.ARTICLES, data),

  getTestimonials: (): TestimonialItem[] => safeGet(KEYS.TESTIMONIALS, initialTestimonials),
  setTestimonials: (data: TestimonialItem[]) => safeSet(KEYS.TESTIMONIALS, data),

  getClients: (): ClientItem[] => safeGet(KEYS.CLIENTS, initialClients),
  setClients: (data: ClientItem[]) => safeSet(KEYS.CLIENTS, data),

  getSEO: (): SEOSettings => safeGet(KEYS.SEO, initialSEOSettings),
  setSEO: (data: SEOSettings) => safeSet(KEYS.SEO, data),

  getTheme: (): ThemeSettings => safeGet(KEYS.THEME, initialThemeSettings),
  setTheme: (data: ThemeSettings) => safeSet(KEYS.THEME, data),

  getMessages: (): ContactMessage[] => safeGet(KEYS.MESSAGES, initialContactMessages),
  setMessages: (data: ContactMessage[]) => safeSet(KEYS.MESSAGES, data),
  addMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const list = StorageService.getMessages();
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'unread',
    };
    StorageService.setMessages([newMsg, ...list]);
    return newMsg;
  },

  getMediaLibrary: (): { id: string; name: string; url: string; size: string; type: string; date: string }[] => {
    const defaultMedia = [
      { id: 'm-1', name: 'pabrik_cikarang_eksterior.jpg', url: 'industrial_plant', size: '2.4 MB', type: 'image/jpeg', date: '2026-03-20' },
      { id: 'm-2', name: 'cnc_5_axis_dmg_mori.jpg', url: 'service_cnc', size: '3.1 MB', type: 'image/jpeg', date: '2026-03-18' },
      { id: 'm-3', name: 'fiber_laser_cutting_15kw.jpg', url: 'service_laser', size: '1.9 MB', type: 'image/jpeg', date: '2026-03-15' },
      { id: 'm-4', name: 'pressure_vessel_asme.jpg', url: 'project_pressure_vessel', size: '4.2 MB', type: 'image/jpeg', date: '2026-03-10' },
      { id: 'm-5', name: 'robotics_assembly_cell.jpg', url: 'service_automation', size: '2.8 MB', type: 'image/jpeg', date: '2026-03-05' },
    ];
    return safeGet(KEYS.MEDIA, defaultMedia);
  },
  setMediaLibrary: (media: any[]) => safeSet(KEYS.MEDIA, media),

  getDarkMode: (): boolean => safeGet(KEYS.DARK_MODE, false),
  setDarkMode: (val: boolean) => safeSet(KEYS.DARK_MODE, val),

  resetToDefault: () => {
    if (typeof window === 'undefined') return;
    Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
  },

  exportAllData: () => {
    return {
      profile: StorageService.getProfile(),
      services: StorageService.getServices(),
      projects: StorageService.getProjects(),
      articles: StorageService.getArticles(),
      testimonials: StorageService.getTestimonials(),
      clients: StorageService.getClients(),
      seo: StorageService.getSEO(),
      theme: StorageService.getTheme(),
      messages: StorageService.getMessages(),
      exportedAt: new Date().toISOString(),
    };
  },
};
