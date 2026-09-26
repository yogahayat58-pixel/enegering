import { useState, useEffect } from 'react';
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
import { StorageService } from '../lib/storage';

export function useData() {
  const [profile, setProfileState] = useState<CompanyProfile>(StorageService.getProfile);
  const [services, setServicesState] = useState<ServiceItem[]>(StorageService.getServices);
  const [projects, setProjectsState] = useState<ProjectItem[]>(StorageService.getProjects);
  const [articles, setArticlesState] = useState<ArticleItem[]>(StorageService.getArticles);
  const [testimonials, setTestimonialsState] = useState<TestimonialItem[]>(StorageService.getTestimonials);
  const [clients, setClientsState] = useState<ClientItem[]>(StorageService.getClients);
  const [seo, setSEOState] = useState<SEOSettings>(StorageService.getSEO);
  const [theme, setThemeState] = useState<ThemeSettings>(StorageService.getTheme);
  const [messages, setMessagesState] = useState<ContactMessage[]>(StorageService.getMessages);
  const [mediaList, setMediaListState] = useState(StorageService.getMediaLibrary);
  const [isDarkMode, setIsDarkModeState] = useState<boolean>(StorageService.getDarkMode);

  // Sync state whenever changed
  const updateProfile = (data: CompanyProfile) => {
    StorageService.setProfile(data);
    setProfileState(data);
  };

  const updateServices = (data: ServiceItem[]) => {
    StorageService.setServices(data);
    setServicesState(data);
  };

  const updateProjects = (data: ProjectItem[]) => {
    StorageService.setProjects(data);
    setProjectsState(data);
  };

  const updateArticles = (data: ArticleItem[]) => {
    StorageService.setArticles(data);
    setArticlesState(data);
  };

  const updateTestimonials = (data: TestimonialItem[]) => {
    StorageService.setTestimonials(data);
    setTestimonialsState(data);
  };

  const updateClients = (data: ClientItem[]) => {
    StorageService.setClients(data);
    setClientsState(data);
  };

  const updateSEO = (data: SEOSettings) => {
    StorageService.setSEO(data);
    setSEOState(data);
  };

  const updateTheme = (data: ThemeSettings) => {
    StorageService.setTheme(data);
    setThemeState(data);
  };

  const updateMediaList = (data: any[]) => {
    StorageService.setMediaLibrary(data);
    setMediaListState(data);
  };

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    StorageService.setDarkMode(next);
    setIsDarkModeState(next);
  };

  const submitContactMessage = (msg: {
    name: string;
    email: string;
    phone: string;
    company: string;
    serviceCategory: string;
    message: string;
  }) => {
    const created = StorageService.addMessage(msg);
    setMessagesState(StorageService.getMessages());
    return created;
  };

  const markMessageAsRead = (id: string) => {
    const updated = messages.map((m) => (m.id === id ? { ...m, status: 'read' as const } : m));
    StorageService.setMessages(updated);
    setMessagesState(updated);
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    StorageService.setMessages(updated);
    setMessagesState(updated);
  };

  const resetAllData = () => {
    StorageService.resetToDefault();
    setProfileState(StorageService.getProfile());
    setServicesState(StorageService.getServices());
    setProjectsState(StorageService.getProjects());
    setArticlesState(StorageService.getArticles());
    setTestimonialsState(StorageService.getTestimonials());
    setClientsState(StorageService.getClients());
    setSEOState(StorageService.getSEO());
    setThemeState(StorageService.getTheme());
    setMessagesState(StorageService.getMessages());
    setMediaListState(StorageService.getMediaLibrary());
  };

  return {
    profile,
    updateProfile,
    services,
    updateServices,
    projects,
    updateProjects,
    articles,
    updateArticles,
    testimonials,
    updateTestimonials,
    clients,
    updateClients,
    seo,
    updateSEO,
    theme,
    updateTheme,
    messages,
    submitContactMessage,
    markMessageAsRead,
    deleteMessage,
    mediaList,
    updateMediaList,
    isDarkMode,
    toggleDarkMode,
    resetAllData,
  };
}
