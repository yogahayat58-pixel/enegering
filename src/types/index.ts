export interface MachineSpec {
  name: string;
  capacity: string;
  brandOrType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Fabrikasi' | 'Machining' | 'Otomasi' | 'Engineering' | 'Maintenance';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  specs: MachineSpec[];
  benefits: string[];
  workflow: { step: number; title: string; description: string }[];
  faqs: FAQItem[];
  imageKey: string;
  imageUrl?: string;
  featured: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Otomotif' | 'Energi & Migas' | 'Pembangkit' | 'Elektronik' | 'Infrastruktur' | 'Farmasi';
  client: string;
  location: string;
  year: string;
  duration: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  resultMetrics: { label: string; value: string }[];
  technologies: string[];
  imageKey: string;
  imageUrl?: string;
  gallery: string[];
  featured: boolean;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Teknologi' | 'Fabrikasi' | 'Otomasi' | 'Manajemen Mutu' | 'Regulasi';
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  imageKey: string;
  imageUrl?: string;
  featured: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  projectRef?: string;
  avatarUrl?: string;
}

export interface ClientItem {
  id: string;
  name: string;
  industry: string;
  logoText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: string;
  experience: string;
  bio: string;
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
}

export interface CertificationItem {
  code: string;
  name: string;
  issuer: string;
  validUntil: string;
  description: string;
}

export interface CompanyProfile {
  name: string;
  tagline: string;
  shortBio: string;
  aboutStory: string;
  vision: string;
  mission: string[];
  coreValues: { title: string; desc: string }[];
  establishedYear: number;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    officeHours: string;
    factoryHours: string;
  };
  socials: {
    linkedin: string;
    instagram: string;
    youtube: string;
    facebook: string;
  };
  stats: {
    yearsExperience: number;
    completedProjects: number;
    employeesCount: number;
    satisfactionRate: number;
    factoryAreaM2: number;
    cncMachinesCount: number;
  };
  certifications: CertificationItem[];
  milestones: CompanyMilestone[];
  team: TeamMember[];
}

export interface SEOSettings {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  twitterCard: string;
  siteName: string;
  robots: string;
  author: string;
}

export interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  logoText: string;
  tagline: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
}

export interface ContactMessage {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceCategory: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
}
