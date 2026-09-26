import React, { useState, useEffect } from 'react';
import { useData } from '../hooks/useData';
import { useRouter } from '../lib/router';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { profile, submitContactMessage } = useData();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: 'Fabrikasi Logam',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // If query params has layanan or proyek, prefill into message or category
  useEffect(() => {
    if (router.query.layanan) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: router.query.layanan,
        message: `Halo PT Industri Nusantara, kami ingin mengajukan penawaran untuk layanan ${router.query.layanan}. Berikut spesifikasi kami:`,
      }));
    } else if (router.query.proyek) {
      setFormData((prev) => ({
        ...prev,
        message: `Halo PT Industri Nusantara, kami tertarik dengan studi kasus proyek "${router.query.proyek}". Kami memiliki kebutuhan serupa:`,
      }));
    }
  }, [router.query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      submitContactMessage(formData);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-slate-50 text-slate-900 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950 border border-blue-800 text-xs font-mono text-blue-300">
            <span>HUBUNGI KAMI & ESTIMASI HARGA</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Konsultasi Proyek & Kontak Pabrik
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Tim sales engineering kami siap memberikan penawaran RAB cepat dan review kelayakan gambar
            teknis CAD/STP dalam 1x24 jam kerja.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-950 font-display">
                  Formulir Permintaan Penawaran & Pertanyaan
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Seluruh data perusahaan Anda dilindungi oleh komitmen kerahasiaan NDA.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">
                    Pesan Berhasil Terkirim!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Terima kasih, Bapak/Ibu <strong>{formData.name}</strong> dari{' '}
                    <strong>{formData.company || 'Perusahaan Anda'}</strong>. Tim Engineering PT Industri
                    Nusantara akan segera menghubungi Anda melalui email atau WhatsApp dalam 1x24 jam.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        serviceCategory: 'Fabrikasi Logam',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors"
                  >
                    <span>Kirim Pesan Lainnya</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Ir. Budi Hartono"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Nama Perusahaan / Instansi <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Contoh: PT Manufaktur Jaya Abadi"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Email Resmi Perusahaan <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="budi@perusahaan.co.id"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0812-XXXX-XXXX"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Kebutuhan Layanan Utama
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                    >
                      <option value="Fabrikasi Logam Berat">Fabrikasi Logam Berat & Sheet Metal</option>
                      <option value="CNC Machining 5-Axis">CNC Machining Presisi 5-Axis</option>
                      <option value="Fiber Laser Cutting">Fiber Laser Cutting Otomatis 15 kW</option>
                      <option value="Pengelasan Pipa Industri">Robotika & Pengelasan Pipa ASME</option>
                      <option value="Mechanical Assembly">Assembly & Sub-Assembly Mekanikal</option>
                      <option value="Otomasi Industri PLC SCADA">Otomasi Industri & Sistem PLC SCADA</option>
                      <option value="Design Engineering FEA">Design Engineering & Simulasi FEA</option>
                      <option value="Industrial Maintenance">Maintenance, Overhaul & Rekondisi Mesin</option>
                      <option value="Lainnya">Kebutuhan Custom / Lainnya</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Detail Deskripsi Kebutuhan & Spesifikasi Proyek <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan Anda: material yang dibutuhkan, estimasi kuantitas, toleransi dimensi, atau tautan file gambar teknik Google Drive/Dropbox..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Mengirimkan Pesan...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Permintaan Penawaran</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Data pesan Anda tersimpan aman dan terhubung langsung ke dashboard sales engineering kami.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-950 font-display">
                Informasi Kantor & Pabrik
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Alamat Pabrik & Workshop</span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {profile.address.street}, {profile.address.city}, {profile.address.province}{' '}
                      {profile.address.postalCode}, {profile.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Telepon Kantor</span>
                    <p className="text-slate-600 mt-0.5">{profile.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">WhatsApp Engineering</span>
                    <p className="text-slate-600 mt-0.5">{profile.contact.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Email Resmi</span>
                    <p className="text-slate-600 mt-0.5">{profile.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Jam Operasional</span>
                    <p className="text-slate-600 mt-0.5">{profile.contact.officeHours}</p>
                    <p className="text-blue-700 font-medium mt-0.5 font-mono">{profile.contact.factoryHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Visual Representation */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between pb-3 px-2">
                <span className="text-xs font-semibold text-slate-900">
                  Peta Lokasi Kawasan Jababeka V
                </span>
                <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  KOORDINAT: -6.3129, 107.1645
                </span>
              </div>
              <div className="h-64 rounded-xl overflow-hidden relative bg-slate-900 border border-slate-200">
                <iframe
                  title="Peta Lokasi Kawasan Industri Jababeka"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63456.97486443144!2d107.1264871987515!3d-6.312895694770395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b828a2a0eb9%3A0xe54d6be2069b2b2b!2sKawasan%20Industri%20Jababeka%20V!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
