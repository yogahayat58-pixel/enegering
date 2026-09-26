import React, { useState } from 'react';
import { useData } from '../hooks/useData';
import { Link } from '../lib/router';
import {
  LayoutDashboard,
  Building,
  Sparkles,
  Info,
  Wrench,
  FolderGit2,
  FileText,
  MessageSquare,
  Users,
  Image,
  Globe,
  Palette,
  Settings,
  Phone,
  Share2,
  Moon,
  Sun,
  Plus,
  Trash2,
  Edit,
  Save,
  RotateCcw,
  Download,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Search,
} from 'lucide-react';
import { ServiceItem, ProjectItem, ArticleItem, TestimonialItem, ClientItem } from '../types';

type AdminTab =
  | 'overview'
  | 'profile'
  | 'hero'
  | 'about'
  | 'services'
  | 'projects'
  | 'articles'
  | 'testimonials'
  | 'clients'
  | 'media'
  | 'seo'
  | 'theme'
  | 'contact'
  | 'messages';

export const AdminDashboardPage: React.FC = () => {
  const {
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
    markMessageAsRead,
    deleteMessage,
    mediaList,
    updateMediaList,
    isDarkMode,
    toggleDarkMode,
    resetAllData,
  } = useData();

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Editing state for Service
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isNewService, setIsNewService] = useState(false);

  // Editing state for Project
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);

  // Editing state for Article
  const [editingArticle, setEditingArticle] = useState<ArticleItem | null>(null);
  const [isNewArticle, setIsNewArticle] = useState(false);

  // Profile Form state
  const [profileForm, setProfileForm] = useState(profile);
  // Hero Form state
  const [themeForm, setThemeForm] = useState(theme);
  // SEO Form state
  const [seoForm, setSeoForm] = useState(seo);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const navMenuItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'messages', label: 'Pesan Masuk (Leads)', icon: <MessageSquare className="w-4 h-4" />, badge: messages.filter(m => m.status === 'unread').length },
    { id: 'profile', label: 'Kelola Profil Perusahaan', icon: <Building className="w-4 h-4" /> },
    { id: 'hero', label: 'Kelola Hero & Headline', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'about', label: 'Kelola Tentang & Visi', icon: <Info className="w-4 h-4" /> },
    { id: 'services', label: 'Kelola Layanan (CRUD)', icon: <Wrench className="w-4 h-4" />, count: services.length },
    { id: 'projects', label: 'Kelola Proyek (CRUD)', icon: <FolderGit2 className="w-4 h-4" />, count: projects.length },
    { id: 'articles', label: 'Kelola Artikel (CRUD)', icon: <FileText className="w-4 h-4" />, count: articles.length },
    { id: 'testimonials', label: 'Kelola Testimoni', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'clients', label: 'Kelola Client & Mitra', icon: <Users className="w-4 h-4" /> },
    { id: 'media', label: 'Media Manager', icon: <Image className="w-4 h-4" /> },
    { id: 'seo', label: 'SEO & Meta Tags', icon: <Globe className="w-4 h-4" /> },
    { id: 'theme', label: 'Pengaturan Warna & Logo', icon: <Palette className="w-4 h-4" /> },
    { id: 'contact', label: 'Pengaturan Kontak & Jam', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      } flex flex-col transition-colors duration-200`}
    >
      {/* Admin Top Header */}
      <header
        className={`h-16 border-b px-6 flex items-center justify-between sticky top-0 z-30 ${
          isDarkMode
            ? 'bg-slate-900/90 border-slate-800 backdrop-blur-md'
            : 'bg-white/90 border-slate-200 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-500"
          >
            <span>← Kembali ke Website Utama</span>
          </Link>
          <span className="text-slate-400">|</span>
          <span className="text-sm font-bold font-display">
            CMS Admin · {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Dark mode button */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
              isDarkMode
                ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            title="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="hidden sm:inline">{isDarkMode ? 'Mode Terang' : 'Mode Gelap'}</span>
          </button>

          {/* Reset button */}
          <button
            onClick={() => {
              if (window.confirm('Reset seluruh data ke pengaturan awal (default)?')) {
                resetAllData();
                showToast('Data berhasil di-reset ke nilai default!');
              }
            }}
            className="px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-200 flex items-center gap-1"
            title="Reset data"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Reset Default</span>
          </button>
        </div>
      </header>

      {/* Main Admin Body: Sidebar + Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside
          className={`w-full md:w-64 border-r p-4 shrink-0 flex flex-col justify-between ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <nav className="space-y-1">
            <span className="px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Menu Navigasi CMS
            </span>
            {navMenuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as AdminTab)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : isDarkMode
                      ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="bg-rose-500 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.count !== undefined && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-blue-800 text-blue-200'
                          : isDarkMode
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div
            className={`mt-6 pt-4 border-t text-[11px] font-mono ${
              isDarkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'
            }`}
          >
            <p>PT Industri Nusantara CMS v2.4</p>
            <p>Production Ready · Auto Persist</p>
          </div>
        </aside>

        {/* Content Pane */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {/* Toast Notification */}
          {toastMsg && (
            <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
              <CheckCircle className="w-4 h-4 text-emerald-200" />
              <span>{toastMsg}</span>
            </div>
          )}

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl font-bold font-display">Ringkasan Sistem & Performa</h1>
                <p className="text-xs text-slate-500 mt-1">
                  Pantau statistik website, pesan masuk klien, dan status seluruh konten manufaktur.
                </p>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div
                  className={`p-5 rounded-2xl border ${
                    isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <span className="text-xs font-mono text-blue-500 block">PESAN MASUK (LEADS)</span>
                  <div className="text-3xl font-bold font-mono mt-1 tabular-nums">
                    {messages.length}
                  </div>
                  <span className="text-xs text-slate-400">
                    {messages.filter((m) => m.status === 'unread').length} pesan belum dibaca
                  </span>
                </div>

                <div
                  className={`p-5 rounded-2xl border ${
                    isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <span className="text-xs font-mono text-emerald-500 block">LAYANAN AKTIF</span>
                  <div className="text-3xl font-bold font-mono mt-1 tabular-nums">
                    {services.length}
                  </div>
                  <span className="text-xs text-slate-400">CNC, Fabrikasi, Otomasi, dll</span>
                </div>

                <div
                  className={`p-5 rounded-2xl border ${
                    isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <span className="text-xs font-mono text-purple-500 block">PROYEK TERBIT</span>
                  <div className="text-3xl font-bold font-mono mt-1 tabular-nums">
                    {projects.length}
                  </div>
                  <span className="text-xs text-slate-400">Studi kasus otomotif & migas</span>
                </div>

                <div
                  className={`p-5 rounded-2xl border ${
                    isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <span className="text-xs font-mono text-amber-500 block">ARTIKEL TEKNIK</span>
                  <div className="text-3xl font-bold font-mono mt-1 tabular-nums">
                    {articles.length}
                  </div>
                  <span className="text-xs text-slate-400">Publikasi wawasan manufaktur</span>
                </div>
              </div>

              {/* Recent Leads / Messages Table */}
              <div
                className={`p-6 rounded-2xl border ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                } space-y-4`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold">Pesan Masuk Klien Terbaru</h3>
                  <button
                    onClick={() => setActiveTab('messages')}
                    className="text-xs text-blue-600 hover:underline font-semibold"
                  >
                    Lihat Semua ({messages.length}) →
                  </button>
                </div>

                {messages.length === 0 ? (
                  <p className="text-xs text-slate-400 py-4">Belum ada pesan kontak masuk.</p>
                ) : (
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {messages.slice(0, 3).map((msg) => (
                      <div key={msg.id} className="py-3 flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs">{msg.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              ({msg.company})
                            </span>
                            {msg.status === 'unread' && (
                              <span className="text-[9px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-mono font-bold">
                                BARU
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                            {msg.message}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0">
                          {msg.serviceCategory}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: MESSAGES (LEADS) */}
          {activeTab === 'messages' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Pesan Masuk & Permintaan Penawaran</h2>
                  <p className="text-xs text-slate-500">
                    Daftar klien yang menghubungi melalui form kontak website.
                  </p>
                </div>
              </div>

              {messages.length === 0 ? (
                <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                  Belum ada pesan yang masuk.
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-6 rounded-2xl border transition-all ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-800'
                          : 'bg-white border-slate-200'
                      } ${msg.status === 'unread' ? 'ring-2 ring-blue-500/20' : ''}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">{msg.name}</span>
                            <span className="text-xs text-blue-600 font-medium">
                              · {msg.company}
                            </span>
                            {msg.status === 'unread' && (
                              <span className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded-full font-mono">
                                Unread
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 font-mono">
                            Email: {msg.email} | Telp/WA: {msg.phone}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {msg.status === 'unread' && (
                            <button
                              onClick={() => {
                                markMessageAsRead(msg.id);
                                showToast('Status pesan diperbarui ke dibaca.');
                              }}
                              className="px-2.5 py-1 text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded text-slate-700 dark:text-slate-300"
                            >
                              Tandai Dibaca
                            </button>
                          )}
                          <button
                            onClick={() => {
                              if (window.confirm('Hapus pesan ini?')) {
                                deleteMessage(msg.id);
                                showToast('Pesan berhasil dihapus.');
                              }
                            }}
                            className="p-1 text-rose-500 hover:bg-rose-50 rounded"
                            title="Hapus Pesan"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="pt-3">
                        <span className="text-[11px] font-mono text-slate-400 block mb-1">
                          Layanan: <strong className="text-blue-600">{msg.serviceCategory}</strong>
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB: KELOLA LAYANAN (CRUD) */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Kelola Layanan Manufaktur</h2>
                  <p className="text-xs text-slate-500">
                    Tambah, edit, dan hapus katalog layanan dan kapasitas mesin.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setEditingService({
                      id: `srv-${Date.now()}`,
                      slug: 'layanan-baru',
                      title: 'Layanan Baru',
                      category: 'Fabrikasi',
                      shortDesc: 'Deskripsi singkat layanan.',
                      fullDesc: 'Deskripsi lengkap kapabilitas dan kapasitas permesinan.',
                      iconName: 'Settings',
                      badge: 'Standar ISO',
                      specs: [{ name: 'Mesin Utama', capacity: 'Kapasitas 100 Ton', brandOrType: 'Merk' }],
                      benefits: ['Toleransi presisi terjamin', 'Material bersertifikat'],
                      workflow: [{ step: 1, title: 'Konsultasi Teknis', description: 'Review drawing CAD.' }],
                      faqs: [{ question: 'Berapa toleransi?', answer: 'Hingga ±0.01 mm.' }],
                      imageKey: 'service_fabrication',
                      featured: false,
                    });
                    setIsNewService(true);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Layanan Baru</span>
                </button>
              </div>

              {/* Service Edit Modal / Inline Drawer */}
              {editingService && (
                <div
                  className={`p-6 rounded-2xl border space-y-4 ${
                    isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-blue-200'
                  }`}
                >
                  <h3 className="text-base font-bold text-blue-600">
                    {isNewService ? 'Tambah Layanan Baru' : `Edit: ${editingService.title}`}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <label className="font-semibold">Judul Layanan</label>
                      <input
                        type="text"
                        value={editingService.title}
                        onChange={(e) =>
                          setEditingService({
                            ...editingService,
                            title: e.target.value,
                            slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                          })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Slug URL</label>
                      <input
                        type="text"
                        value={editingService.slug}
                        onChange={(e) =>
                          setEditingService({ ...editingService, slug: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Kategori</label>
                      <select
                        value={editingService.category}
                        onChange={(e) =>
                          setEditingService({
                            ...editingService,
                            category: e.target.value as any,
                          })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      >
                        <option value="Fabrikasi">Fabrikasi</option>
                        <option value="Machining">Machining</option>
                        <option value="Otomasi">Otomasi</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Badge Kicker</label>
                      <input
                        type="text"
                        value={editingService.badge || ''}
                        onChange={(e) =>
                          setEditingService({ ...editingService, badge: e.target.value })
                        }
                        placeholder="Contoh: Toleransi ±0.005 mm"
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="font-semibold">Ringkasan Singkat</label>
                      <textarea
                        rows={2}
                        value={editingService.shortDesc}
                        onChange={(e) =>
                          setEditingService({ ...editingService, shortDesc: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="font-semibold">Deskripsi Lengkap</label>
                      <textarea
                        rows={4}
                        value={editingService.fullDesc}
                        onChange={(e) =>
                          setEditingService({ ...editingService, fullDesc: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        if (isNewService) {
                          updateServices([...services, editingService]);
                          showToast('Layanan baru berhasil ditambahkan.');
                        } else {
                          updateServices(
                            services.map((s) => (s.id === editingService.id ? editingService : s))
                          );
                          showToast('Perubahan layanan berhasil disimpan.');
                        }
                        setEditingService(null);
                        setIsNewService(false);
                      }}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
                    >
                      Simpan Layanan
                    </button>
                    <button
                      onClick={() => {
                        setEditingService(null);
                        setIsNewService(false);
                      }}
                      className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              )}

              {/* Service List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    className={`p-5 rounded-2xl border flex flex-col justify-between ${
                      isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-blue-600 font-semibold">{srv.category}</span>
                        <span className="text-[11px] text-slate-400 font-mono">/{srv.slug}</span>
                      </div>
                      <h4 className="font-bold text-sm">{srv.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{srv.shortDesc}</p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <Link
                        href={`/layanan/${srv.slug}`}
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <span>Preview Layanan</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingService(srv);
                            setIsNewService(false);
                          }}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Hapus layanan "${srv.title}"?`)) {
                              updateServices(services.filter((s) => s.id !== srv.id));
                              showToast('Layanan berhasil dihapus.');
                            }
                          }}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: KELOLA PROYEK (CRUD) */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Kelola Portofolio Proyek</h2>
                  <p className="text-xs text-slate-500">
                    Tambah, perbarui studi kasus, klien, dan metrik hasil proyek.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setEditingProject({
                      id: `prj-${Date.now()}`,
                      slug: 'proyek-baru',
                      title: 'Nama Proyek Baru',
                      category: 'Otomotif',
                      client: 'PT Rekanan Industri',
                      location: 'Cikarang, Bekasi',
                      year: '2026',
                      duration: '4 Bulan',
                      shortDesc: 'Ringkasan pengerjaan proyek.',
                      challenge: 'Tantangan teknis toleransi ketat.',
                      solution: 'Solusi menggunakan mesin CNC 5-axis.',
                      resultMetrics: [{ label: 'Uptime', value: '99.5%' }],
                      technologies: ['CNC 5-Axis', 'Metrologi CMM'],
                      imageKey: 'project_conveyor',
                      gallery: [],
                      featured: false,
                    });
                    setIsNewProject(true);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Proyek Baru</span>
                </button>
              </div>

              {/* Editing Project */}
              {editingProject && (
                <div
                  className={`p-6 rounded-2xl border space-y-4 ${
                    isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-blue-200'
                  }`}
                >
                  <h3 className="text-base font-bold text-blue-600">
                    {isNewProject ? 'Tambah Proyek Baru' : `Edit: ${editingProject.title}`}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <label className="font-semibold">Judul Proyek</label>
                      <input
                        type="text"
                        value={editingProject.title}
                        onChange={(e) =>
                          setEditingProject({
                            ...editingProject,
                            title: e.target.value,
                            slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                          })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Klien</label>
                      <input
                        type="text"
                        value={editingProject.client}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, client: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Lokasi</label>
                      <input
                        type="text"
                        value={editingProject.location}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, location: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Kategori</label>
                      <select
                        value={editingProject.category}
                        onChange={(e) =>
                          setEditingProject({
                            ...editingProject,
                            category: e.target.value as any,
                          })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      >
                        <option value="Otomotif">Otomotif</option>
                        <option value="Energi & Migas">Energi & Migas</option>
                        <option value="Pembangkit">Pembangkit</option>
                        <option value="Elektronik">Elektronik</option>
                        <option value="Infrastruktur">Infrastruktur</option>
                        <option value="Farmasi">Farmasi</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="font-semibold">Ringkasan</label>
                      <textarea
                        rows={2}
                        value={editingProject.shortDesc}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, shortDesc: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Tantangan (Challenge)</label>
                      <textarea
                        rows={3}
                        value={editingProject.challenge}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, challenge: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Solusi Rekayasa</label>
                      <textarea
                        rows={3}
                        value={editingProject.solution}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, solution: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        if (isNewProject) {
                          updateProjects([...projects, editingProject]);
                          showToast('Proyek baru berhasil ditambahkan.');
                        } else {
                          updateProjects(
                            projects.map((p) => (p.id === editingProject.id ? editingProject : p))
                          );
                          showToast('Perubahan proyek berhasil disimpan.');
                        }
                        setEditingProject(null);
                        setIsNewProject(false);
                      }}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
                    >
                      Simpan Proyek
                    </button>
                    <button
                      onClick={() => {
                        setEditingProject(null);
                        setIsNewProject(false);
                      }}
                      className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              )}

              {/* Projects List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((prj) => (
                  <div
                    key={prj.id}
                    className={`p-5 rounded-2xl border flex flex-col justify-between ${
                      isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-blue-600 font-semibold">{prj.category}</span>
                        <span className="text-[11px] text-slate-400 font-mono">{prj.year}</span>
                      </div>
                      <h4 className="font-bold text-sm">{prj.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">Klien: {prj.client} · {prj.location}</p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <Link
                        href={`/proyek/${prj.slug}`}
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <span>Lihat Studi Kasus</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingProject(prj);
                            setIsNewProject(false);
                          }}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Hapus proyek "${prj.title}"?`)) {
                              updateProjects(projects.filter((p) => p.id !== prj.id));
                              showToast('Proyek berhasil dihapus.');
                            }
                          }}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: KELOLA ARTIKEL (CRUD) */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Kelola Artikel & Berita Teknik</h2>
                  <p className="text-xs text-slate-500">
                    Tulis dan publikasikan wawasan manufaktur untuk edukasi klien & SEO.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setEditingArticle({
                      id: `art-${Date.now()}`,
                      slug: 'artikel-baru',
                      title: 'Judul Artikel Baru',
                      excerpt: 'Ringkasan artikel teknik.',
                      content: 'Isi lengkap artikel manufaktur.',
                      category: 'Teknologi',
                      author: { name: 'Ir. Budi Santoso', role: 'Direktur Utama' },
                      publishedAt: '25 Maret 2026',
                      readTime: '5 Menit Baca',
                      tags: ['Manufaktur', 'Teknologi'],
                      imageKey: 'article_smart_factory',
                      featured: false,
                    });
                    setIsNewArticle(true);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tulis Artikel Baru</span>
                </button>
              </div>

              {editingArticle && (
                <div
                  className={`p-6 rounded-2xl border space-y-4 ${
                    isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-blue-200'
                  }`}
                >
                  <h3 className="text-base font-bold text-blue-600">
                    {isNewArticle ? 'Tulis Artikel Baru' : `Edit: ${editingArticle.title}`}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="sm:col-span-2 space-y-1">
                      <label className="font-semibold">Judul Artikel</label>
                      <input
                        type="text"
                        value={editingArticle.title}
                        onChange={(e) =>
                          setEditingArticle({
                            ...editingArticle,
                            title: e.target.value,
                            slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                          })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Slug</label>
                      <input
                        type="text"
                        value={editingArticle.slug}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, slug: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold">Kategori</label>
                      <select
                        value={editingArticle.category}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, category: e.target.value as any })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      >
                        <option value="Teknologi">Teknologi</option>
                        <option value="Fabrikasi">Fabrikasi</option>
                        <option value="Otomasi">Otomasi</option>
                        <option value="Manajemen Mutu">Manajemen Mutu</option>
                        <option value="Regulasi">Regulasi</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="font-semibold">Ringkasan (Excerpt)</label>
                      <textarea
                        rows={2}
                        value={editingArticle.excerpt}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, excerpt: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="font-semibold">Isi Lengkap</label>
                      <textarea
                        rows={6}
                        value={editingArticle.content}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, content: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        if (isNewArticle) {
                          updateArticles([editingArticle, ...articles]);
                          showToast('Artikel baru berhasil diterbitkan.');
                        } else {
                          updateArticles(
                            articles.map((a) => (a.id === editingArticle.id ? editingArticle : a))
                          );
                          showToast('Perubahan artikel berhasil disimpan.');
                        }
                        setEditingArticle(null);
                        setIsNewArticle(false);
                      }}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
                    >
                      Terbitkan Artikel
                    </button>
                    <button
                      onClick={() => {
                        setEditingArticle(null);
                        setIsNewArticle(false);
                      }}
                      className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {articles.map((art) => (
                  <div
                    key={art.id}
                    className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
                      isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono text-blue-600 font-semibold">{art.category}</span>
                        <span className="text-slate-400">· {art.publishedAt}</span>
                      </div>
                      <h4 className="font-bold text-sm mt-0.5">{art.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{art.excerpt}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={`/artikel/${art.slug}`}
                        className="p-1.5 text-slate-500 hover:text-blue-600"
                        title="Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => {
                          setEditingArticle(art);
                          setIsNewArticle(false);
                        }}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Hapus artikel "${art.title}"?`)) {
                            updateArticles(articles.filter((a) => a.id !== art.id));
                            showToast('Artikel berhasil dihapus.');
                          }
                        }}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: KELOLA PROFIL PERUSAHAAN */}
          {activeTab === 'profile' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-xl font-bold">Identitas & Legalitas Perusahaan</h2>
                <p className="text-xs text-slate-500">
                  Perbarui nama, tagline, bio, dan alamat pabrik.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border space-y-4 ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-1">
                  <label className="text-xs font-semibold">Nama Perusahaan</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Tagline</label>
                  <input
                    type="text"
                    value={profileForm.tagline}
                    onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Bio Singkat</label>
                  <textarea
                    rows={3}
                    value={profileForm.shortBio}
                    onChange={(e) => setProfileForm({ ...profileForm, shortBio: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Tahun Didirikan</label>
                    <input
                      type="number"
                      value={profileForm.establishedYear}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, establishedYear: Number(e.target.value) })
                      }
                      className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Luas Pabrik (m²)</label>
                    <input
                      type="number"
                      value={profileForm.stats.factoryAreaM2}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          stats: { ...profileForm.stats, factoryAreaM2: Number(e.target.value) },
                        })
                      }
                      className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    updateProfile(profileForm);
                    showToast('Profil perusahaan berhasil diperbarui!');
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Profil</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB: KELOLA HERO & HEADLINE */}
          {activeTab === 'hero' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-xl font-bold">Kelola Hero Section Beranda</h2>
                <p className="text-xs text-slate-500">
                  Ubah judul besar, subjudul, dan badge pada bagian paling atas website.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border space-y-4 ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-1">
                  <label className="text-xs font-semibold">Kicker / Badge Teks</label>
                  <input
                    type="text"
                    value={themeForm.heroBadge}
                    onChange={(e) => setThemeForm({ ...themeForm, heroBadge: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Headline Utama</label>
                  <input
                    type="text"
                    value={themeForm.heroHeadline}
                    onChange={(e) => setThemeForm({ ...themeForm, heroHeadline: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Sub-Headline</label>
                  <textarea
                    rows={3}
                    value={themeForm.heroSubheadline}
                    onChange={(e) =>
                      setThemeForm({ ...themeForm, heroSubheadline: e.target.value })
                    }
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <button
                  onClick={() => {
                    updateTheme(themeForm);
                    showToast('Konten Hero berhasil diperbarui!');
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Hero</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB: KELOLA TENTANG & VISI */}
          {activeTab === 'about' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-xl font-bold">Kelola Cerita Tentang Kami & Visi Misi</h2>
                <p className="text-xs text-slate-500">
                  Ubah visi, narasi sejarah, dan poin misi perusahaan.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border space-y-4 ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-1">
                  <label className="text-xs font-semibold">Visi Perusahaan</label>
                  <textarea
                    rows={2}
                    value={profileForm.vision}
                    onChange={(e) => setProfileForm({ ...profileForm, vision: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Cerita Perjalanan & Fasilitas</label>
                  <textarea
                    rows={5}
                    value={profileForm.aboutStory}
                    onChange={(e) => setProfileForm({ ...profileForm, aboutStory: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs leading-relaxed"
                  />
                </div>

                <button
                  onClick={() => {
                    updateProfile(profileForm);
                    showToast('Visi dan Narasi berhasil diperbarui!');
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Visi & Narasi</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB: SEO & META TAGS */}
          {activeTab === 'seo' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-xl font-bold">Pengaturan SEO, Meta Tags & OpenGraph</h2>
                <p className="text-xs text-slate-500">
                  Optimalisasi mesin pencari Google, kartu preview Facebook/WhatsApp, dan Schema.org.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border space-y-4 ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-1">
                  <label className="text-xs font-semibold">Meta Title (Panjang Ideal 50-60 Karakter)</label>
                  <input
                    type="text"
                    value={seoForm.metaTitle}
                    onChange={(e) => setSeoForm({ ...seoForm, metaTitle: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Meta Description (120-160 Karakter)</label>
                  <textarea
                    rows={3}
                    value={seoForm.metaDescription}
                    onChange={(e) => setSeoForm({ ...seoForm, metaDescription: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Kata Kunci (Keywords)</label>
                  <input
                    type="text"
                    value={seoForm.keywords}
                    onChange={(e) => setSeoForm({ ...seoForm, keywords: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Canonical URL</label>
                  <input
                    type="text"
                    value={seoForm.canonicalUrl}
                    onChange={(e) => setSeoForm({ ...seoForm, canonicalUrl: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <button
                  onClick={() => {
                    updateSEO(seoForm);
                    showToast('Pengaturan SEO berhasil disimpan!');
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Konfigurasi SEO</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB: MEDIA MANAGER */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Media Manager (Pustaka Gambar & Aset)</h2>
                  <p className="text-xs text-slate-500">
                    Aset gambar internal yang tersimpan di dalam project dan siap dipasang ke layanan atau proyek.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const url = window.prompt('Masukkan URL atau Key Gambar:');
                    if (url) {
                      const newMedia = {
                        id: `m-${Date.now()}`,
                        name: `custom_image_${Date.now()}.png`,
                        url,
                        size: '1.5 MB',
                        type: 'image/png',
                        date: '2026-03-25',
                      };
                      updateMediaList([newMedia, ...mediaList]);
                      showToast('Media baru berhasil ditambahkan.');
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Aset Media</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaList.map((m) => (
                  <div
                    key={m.id}
                    className={`rounded-2xl border overflow-hidden ${
                      isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="h-40 bg-slate-950 flex items-center justify-center p-2">
                      <span className="text-xs font-mono text-blue-400 font-bold">
                        KEY: {m.url}
                      </span>
                    </div>
                    <div className="p-4 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold">{m.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {m.size} · {m.date}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          updateMediaList(mediaList.filter((item) => item.id !== m.id));
                          showToast('Aset media dihapus.');
                        }}
                        className="p-1 text-rose-500 hover:bg-rose-50 rounded"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PENGATURAN WARNA & LOGO */}
          {activeTab === 'theme' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-xl font-bold">Pengaturan Warna, Logo & Tampilan</h2>
                <p className="text-xs text-slate-500">
                  Konfigurasi identitas visual website: warna primer biru, aksen oranye, dan teks logo.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border space-y-4 ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-1">
                  <label className="text-xs font-semibold">Teks Logo Utama</label>
                  <input
                    type="text"
                    value={themeForm.logoText}
                    onChange={(e) => setThemeForm({ ...themeForm, logoText: e.target.value })}
                    className="w-full p-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs font-display font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Primary Color (Hex)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={themeForm.primaryColor}
                        onChange={(e) =>
                          setThemeForm({ ...themeForm, primaryColor: e.target.value })
                        }
                        className="w-10 h-10 rounded cursor-pointer border-0"
                      />
                      <input
                        type="text"
                        value={themeForm.primaryColor}
                        onChange={(e) =>
                          setThemeForm({ ...themeForm, primaryColor: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Secondary Accent Color (Hex)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={themeForm.secondaryColor}
                        onChange={(e) =>
                          setThemeForm({ ...themeForm, secondaryColor: e.target.value })
                        }
                        className="w-10 h-10 rounded cursor-pointer border-0"
                      />
                      <input
                        type="text"
                        value={themeForm.secondaryColor}
                        onChange={(e) =>
                          setThemeForm({ ...themeForm, secondaryColor: e.target.value })
                        }
                        className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    updateTheme(themeForm);
                    showToast('Pengaturan visual berhasil disimpan!');
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Visual</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB: PENGATURAN KONTAK */}
          {activeTab === 'contact' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-xl font-bold">Pengaturan Kontak & Jam Operasional</h2>
                <p className="text-xs text-slate-500">
                  Sesuaikan nomor telepon, WhatsApp, email, dan jam kerja pabrik.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border space-y-4 ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Nomor Telepon Kantor</label>
                    <input
                      type="text"
                      value={profileForm.contact.phone}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          contact: { ...profileForm.contact, phone: e.target.value },
                        })
                      }
                      className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold">WhatsApp Engineering</label>
                    <input
                      type="text"
                      value={profileForm.contact.whatsapp}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          contact: { ...profileForm.contact, whatsapp: e.target.value },
                        })
                      }
                      className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Email Perusahaan</label>
                    <input
                      type="email"
                      value={profileForm.contact.email}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          contact: { ...profileForm.contact, email: e.target.value },
                        })
                      }
                      className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Jam Kantor</label>
                    <input
                      type="text"
                      value={profileForm.contact.officeHours}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          contact: { ...profileForm.contact, officeHours: e.target.value },
                        })
                      }
                      className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Jam Operasional Pabrik</label>
                  <input
                    type="text"
                    value={profileForm.contact.factoryHours}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        contact: { ...profileForm.contact, factoryHours: e.target.value },
                      })
                    }
                    className="w-full p-2 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-xs"
                  />
                </div>

                <button
                  onClick={() => {
                    updateProfile(profileForm);
                    showToast('Kontak berhasil disimpan!');
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Pengaturan Kontak</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB: KELOLA TESTIMONI */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Kelola Testimoni Klien</h2>
                  <p className="text-xs text-slate-500">
                    Kutipan ulasan dari plant manager dan klien industri.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className={`p-5 rounded-2xl border ${
                      isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm">{t.clientName}</span>
                      <span className="text-xs text-blue-600 font-mono">{t.company}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 italic mb-2">
                      "{t.content}"
                    </p>
                    <span className="text-[11px] text-slate-400 block font-mono">
                      Proyek: {t.projectRef}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: KELOLA CLIENT */}
          {activeTab === 'clients' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Kelola Mitra & Klien Industri</h2>
                  <p className="text-xs text-slate-500">
                    Logo dan daftar perusahaan rekanan di section client.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {clients.map((c) => (
                  <div
                    key={c.id}
                    className={`p-4 rounded-xl border text-center ${
                      isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <span className="font-mono font-bold text-xs block text-blue-600">
                      {c.logoText}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">{c.industry}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
