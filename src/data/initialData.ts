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

export const initialCompanyProfile: CompanyProfile = {
  name: 'PT Industri Nusantara',
  tagline: 'Precision Manufacturing & Factory Automation Solutions',
  shortBio:
    'Mitra manufaktur presisi, fabrikasi logam, CNC machining, dan rekayasa otomasi industri terkemuka di Indonesia dengan sertifikasi ISO 9001:2015.',
  aboutStory:
    'Didirikan pada tahun 2004 di jantung kawasan industri Cikarang, PT Industri Nusantara bertransformasi dari bengkel permesinan presisi skala menengah menjadi fasilitas manufaktur terintegrasi seluas 15.000 m². Didukung lebih dari 120 tenaga ahli teknik bersertifikasi internasional dan armada mesin CNC 5-axis mutakhir, kami melayani sektor otomotif, energi migas, pembangkit listrik, elektronika, hingga industri farmasi dengan toleransi mikro-milimeter dan komitmen kepatuhan TKDN tertinggi.',
  vision:
    'Menjadi pionir manufaktur presisi dan rekayasa otomasi industri berdaya saing global yang menggerakkan kemandirian teknologi nasional.',
  mission: [
    'Menyediakan solusi manufaktur komponen presisi, fabrikasi logam, dan custom machine dengan standar toleransi kelas dunia.',
    'Menerapkan integrasi otomasi industri cerdas (Smart Factory & Industry 4.0) untuk meningkatkan efisiensi klien secara berkelanjutan.',
    'Membangun ekosistem tenaga kerja teknik Indonesia yang kompeten, berintegritas tinggi, dan mengutamakan keselamatan kerja (K3 Zero Accident).',
    'Menghadirkan layanan purnajual prima, ketepatan waktu pengiriman terjamin, dan kemitraan strategis jangka panjang.',
  ],
  coreValues: [
    {
      title: 'Precision (Presisi Mutlak)',
      desc: 'Kami tidak mengenal kompromi dalam toleransi ukuran, ketahanan material, dan konsistensi kualitas setiap mikrometer produk.',
    },
    {
      title: 'Innovation (Inovasi Berkelanjutan)',
      desc: 'Terus mengadopsi teknologi digital manufacturing, CNC multi-axis, fiber laser terkini, serta sistem kontrol cerdas.',
    },
    {
      title: 'Integrity (Integritas & Transparansi)',
      desc: 'Menjunjung keterbukaan spesifikasi material, sertifikasi uji lab, dan kepatuhan penuh terhadap kontrak kerjasama.',
    },
    {
      title: 'Safety First (Keselamatan Kerja)',
      desc: 'K3 bukan sekadar prosedur, melainkan budaya kerja harian dengan rekor Zero Lost-Time Injury (LTI).',
    },
    {
      title: 'Sustainability (Keberlanjutan)',
      desc: 'Efisiensi energi, daur ulang sisa scrap logam hingga 96%, serta kepatuhan standar lingkungan ISO 14001:2015.',
    },
  ],
  establishedYear: 2004,
  address: {
    street: 'Kawasan Industri Jababeka V, Blok C-18 No. 12',
    city: 'Cikarang, Bekasi',
    province: 'Jawa Barat',
    postalCode: '17530',
    country: 'Indonesia',
  },
  contact: {
    phone: '+62 (21) 8984-2200',
    whatsapp: '+62 811-9876-5432',
    email: 'info@industrinusantara.co.id',
    officeHours: 'Senin - Jumat: 08.00 - 17.00 WIB',
    factoryHours: 'Operasional Pabrik: 24 Jam (3 Shift Terjadwal)',
  },
  socials: {
    linkedin: 'https://linkedin.com/company/industri-nusantara',
    instagram: 'https://instagram.com/industrinusantara',
    youtube: 'https://youtube.com/@industrinusantara',
    facebook: 'https://facebook.com/ptindustrinusantara',
  },
  stats: {
    yearsExperience: 20,
    completedProjects: 520,
    employeesCount: 145,
    satisfactionRate: 98.6,
    factoryAreaM2: 15000,
    cncMachinesCount: 38,
  },
  certifications: [
    {
      code: 'ISO 9001:2015',
      name: 'Sistem Manajemen Mutu Manufaktur',
      issuer: 'TÜV Rheinland International',
      validUntil: '2028',
      description: 'Audit standar jaminan mutu produksi suku cadang presisi dan fabrikasi logam.',
    },
    {
      code: 'ISO 14001:2015',
      name: 'Sistem Manajemen Lingkungan',
      issuer: 'Lloyds Register Quality Assurance',
      validUntil: '2027',
      description: 'Pengelolaan limbah cair industri, emisi, dan konservasi energi pabrik.',
    },
    {
      code: 'ISO 45001:2018',
      name: 'Sistem Manajemen K3 (Keselamatan Kerja)',
      issuer: 'SGS Indonesia',
      validUntil: '2028',
      description: 'Sertifikasi protokol keselamatan kerja berstandar internasional tanpa kecelakaan fatal.',
    },
    {
      code: 'ASME Section IX',
      name: 'Welding & Pressure Vessel Compliance',
      issuer: 'American Society of Mechanical Engineers',
      validUntil: '2027',
      description: 'Kualifikasi prosedur pengelasan dan welder untuk bejana tekan dan pemipaan bertekanan tinggi.',
    },
  ],
  milestones: [
    {
      year: '2004',
      title: 'Pendirian Bengkel Bubut Presisi',
      description: 'Memulai operasi dengan 4 unit mesin bubut konvensional dan melayani perbaikan suku cadang lokal.',
    },
    {
      year: '2010',
      title: 'Ekspansi Mesin CNC & Sertifikasi ISO 9001',
      description: 'Menginvestasikan 8 unit mesin CNC milling 3-axis pertama dan meraih sertifikasi manajemen mutu.',
    },
    {
      year: '2015',
      title: 'Pembangunan Pabrik Utama Kawasan Jababeka',
      description: 'Merelokasi fasilitas ke pabrik modern seluas 8.000 m² dengan lini fiber laser cutting berdaya 12 kW.',
    },
    {
      year: '2020',
      title: 'Divisi Otomasi Industri & Robotika',
      description: 'Mendirikan divisi rekayasa sistem otomatisasi, integrasi PLC SCADA, dan custom automated assembly lines.',
    },
    {
      year: '2024',
      title: 'Pabrik Pintar Terintegrasi & CNC 5-Axis',
      description: 'Ekspansi total area menjadi 15.000 m² dengan adopsi Smart Factory Industry 4.0 dan 38 armada CNC 5-axis.',
    },
  ],
  team: [
    {
      id: 'team-1',
      name: 'Ir. Budi Santoso, M.Eng.',
      role: 'Direktur Utama & Founder',
      division: 'Eksekutif',
      experience: '28+ Tahun',
      bio: 'Alumnus Teknik Mesin ITB dan RWTH Aachen, berpengalaman memimpin proyek rekayasa industri berskala nasional.',
    },
    {
      id: 'team-2',
      name: 'Hendrik Wijaya, S.T., PMP',
      role: 'Direktur Operasional & Pabrik',
      division: 'Operasional',
      experience: '20+ Tahun',
      bio: 'Pakar lean manufacturing, six sigma black belt, mengawasi seluruh alur produksi harian dan keselamatan kerja.',
    },
    {
      id: 'team-3',
      name: 'Dr. Raditya Pratama, S.T., M.T.',
      role: 'Head of Engineering & R&D',
      division: 'Engineering',
      experience: '16+ Tahun',
      bio: 'Spesialis perancangan finite element analysis (FEA), simulasi termal, dan rekayasa custom automated machinery.',
    },
    {
      id: 'team-4',
      name: 'Siti Rahmawati, S.T., CQA',
      role: 'Quality Assurance & ISO Manager',
      division: 'Quality Control',
      experience: '14+ Tahun',
      bio: 'Memimpin laboratorium metrologi dengan instrumen CMM 3D presisi sub-mikron dan audit kepatuhan ISO.',
    },
    {
      id: 'team-5',
      name: 'Agus Setiawan, S.T.',
      role: 'Lead Automation & Robotics Engineer',
      division: 'Otomasi',
      experience: '12+ Tahun',
      bio: 'Berpengalaman dalam integrasi robotik arm 6-axis, PLC Siemens/Omron, dan integrasi IoT industrial gateway.',
    },
    {
      id: 'team-6',
      name: 'Dewi Anggraeni, S.E., M.M.',
      role: 'Head of Commercial & Supply Chain',
      division: 'Komersial',
      experience: '15+ Tahun',
      bio: 'Mengelola pengadaan material bersertifikat resmi, tender B2B BUMN/swasta, dan kepatuhan TKDN industri.',
    },
  ],
};

export const initialServices: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'fabrikasi-logam',
    title: 'Fabrikasi Logam Berat & Sheet Metal',
    category: 'Fabrikasi',
    shortDesc: 'Fabrikasi struktur baja, tangki tekanan, ducting industri, dan komponen lembaran logam presisi dengan standar ASME & AWS.',
    fullDesc:
      'Layanan fabrikasi logam PT Industri Nusantara mencakup pengerjaan konstruksi baja struktural berat, bejana tekan (pressure vessel), silo penyimpanan, skid industri, hingga lembaran plat metal tipis. Fasilitas kami dilengkapi overhead crane kapasitas 25 ton, mesin roll plat otomatis, dan line blasting-painting berstandar SSPC untuk ketahanan korosi optimal di lingkungan kimia dan offshore.',
    iconName: 'Hammer',
    badge: 'Kapasitas 1.500 Ton/Tahun',
    specs: [
      { name: 'Kapasitas Bending Press Brake', capacity: 'Tonnage hingga 400 Ton, panjang 4.000 mm', brandOrType: 'Amada / Bystronic' },
      { name: 'Kapasitas Rolling Plat', capacity: 'Ketebalan plat hingga 35 mm, lebar 3.000 mm', brandOrType: 'Davi 4-Roll Hydraulic' },
      { name: 'Overhead Gantry Crane', capacity: 'Dua unit tandem 25 Ton x 18 Meter Span', brandOrType: 'Konecranes' },
      { name: 'Standar Pengelasan', capacity: 'ASME Sec IX, AWS D1.1, WPS/PQR Terverifikasi', brandOrType: 'TÜV Rheinland' },
    ],
    benefits: [
      'Material bersertifikat uji laboratorium (Mill Certificate 3.1)',
      'Toleransi dimensi ketat sesuai ISO 2768-m',
      'Finishing surface treatment: Sandblasting Sa 2.5, Hot Dip Galvanize, Epoxy Marine Coating',
      'Tim welder bersertifikasi BNSP dan migas 6G/6GR',
    ],
    workflow: [
      { step: 1, title: 'Konsultasi & Review Gambar Teknik', description: 'Review gambar DWG/STP, analisis toleransi, dan pemilihan grade material (SS400, SUS304, Hardox, dll).' },
      { step: 2, title: 'Pemotongan & Pembentukan Plat', description: 'Pemotongan CNC Fiber Laser / Plasma diikuti proses bending press brake dan rolling presisi.' },
      { step: 3, title: 'Fit-Up & Pengelasan Terkualifikasi', description: 'Perakitan komponen menggunakan jig khusus dan pengelasan GTAW/GMAW/SAW berstandar ASME.' },
      { step: 4, title: 'Quality Inspection & NDT', description: 'Pemeriksaan visual, uji penetrant (PT), uji ultrasonik (UT), dan uji radiografi (RT).' },
      { step: 5, title: 'Surface Finishing & Delivery', description: 'Pengecatan protektif, pengemasan peti kayu ekspor, dan pengiriman aman ke lokasi proyek.' },
    ],
    faqs: [
      { question: 'Material apa saja yang dapat dikerjakan?', answer: 'Kami memproses mild steel (SS400, ASTM A36), stainless steel (SUS304, SUS316L), wear-resistant steel (Hardox, Raex), dan aluminium alloy.' },
      { question: 'Berapa ketebalan plat maksimal yang bisa ditekuk (bending)?', answer: 'Press brake hidrolik kami mampu menekuk plat mild steel hingga ketebalan 16 mm dengan panjang bending maksimal 4.000 mm.' },
      { question: 'Apakah pengelasan disertai laporan Non-Destructive Testing (NDT)?', answer: 'Ya, setiap proyek fabrikasi kritis dapat dilengkapi laporan NDT (Ultrasonic, Magnetic Particle, Dye Penetrant, atau X-Ray Radiography) dari inspektur NDT Level II tersertifikasi.' },
    ],
    imageKey: 'service_fabrication',
    featured: true,
  },
  {
    id: 'srv-2',
    slug: 'cnc-machining',
    title: 'CNC Machining Presisi 5-Axis',
    category: 'Machining',
    shortDesc: 'Pemesinan komponen mekanikal berkontur kompleks dengan toleransi ultra-presisi hingga ±0.005 mm menggunakan CNC Milling & Turning 5-Axis.',
    fullDesc:
      'Fasilitas CNC Machining kami menghadirkan 38 unit mesin CNC modern dari Jepang dan Jerman (Mazan, DMG Mori, Makino). Kami mengkhususkan diri pada pembuatan impeler turbin, housing transmisi otomotif, poros eksentrik, tooling dies, dan komponen aero-grade dengan permukaan cermin (Ra 0.4 µm) yang lolos verifikasi alat ukur Coordinate Measuring Machine (CMM).',
    iconName: 'Cpu',
    badge: 'Toleransi ±0.005 mm',
    specs: [
      { name: 'CNC 5-Axis Machining Center', capacity: 'Travel X: 1.050mm, Y: 900mm, Z: 600mm, Spindle 20.000 RPM', brandOrType: 'DMG Mori DMU 50' },
      { name: 'CNC Turn-Mill Multi-Tasking', capacity: 'Max turning dia 420mm, length 1.200mm dengan live tooling', brandOrType: 'Mazak Integrex i-200' },
      { name: 'Vertical CNC Milling 3/4-Axis', capacity: 'Table load 1.200 kg, travel X 1.300mm, Y 700mm', brandOrType: 'Makino PS105' },
      { name: 'Inspeksi Metrologi 3D', capacity: 'Akurasi 1.5 + L/350 µm, probe scanning otomatis', brandOrType: 'Zeiss Contura CMM' },
    ],
    benefits: [
      'Pengerjaan 1-setup untuk geometri rumit, meminimalkan error akumulatif',
      'Pemeriksaan 100% dimensi kritis dengan laporan inspeksi CMM lengkap',
      'Pilihan material logam ferro, non-ferro, titanium, hingga engineering plastics (PEEK, Delrin)',
      'Kapasitas produksi prototipe cepat (rapid prototype) hingga mass production',
    ],
    workflow: [
      { step: 1, title: 'CAD/CAM Modeling & Simulasi Toolpath', description: 'Konversi file CAD ke kode permesinan 5-axis menggunakan software CAM mutakhir dengan simulasi collision avoidance.' },
      { step: 2, title: 'Pencekaman & Setup Billet Material', description: 'Pemasangan bahan baku bersertifikat pada fixture presisi dengan kalibrasi touch probe Renishaw.' },
      { step: 3, title: 'Roughing & High-Speed Finishing', description: 'Pemesinan berkecepatan tinggi dengan pendingin tekanan tinggi (high-pressure coolant) untuk menjaga integritas mikrostruktur.' },
      { step: 4, title: 'Pembersihan Ultrasonik & Deburring', description: 'Penghilangan sisa gram halus secara manual di bawah mikroskop dan pencucian tangki ultrasonik.' },
      { step: 5, title: 'Verifikasi Metrologi Zeiss CMM', description: 'Pengukuran dimensi 3D di ruangan ber-AC 20°C terkalibrasi dan penerbitan Inspection Certificate.' },
    ],
    faqs: [
      { question: 'Berapa toleransi permesinan terkecil yang bisa dijamin?', answer: 'Kami dapat mencapai toleransi dimensi linier hingga ±0.005 mm (5 mikron) dan kebulatan runout di bawah 0.003 mm.' },
      { question: 'Apakah menerima order jumlah satuan (prototipe)?', answer: 'Tentu saja. Kami melayani pembuatan 1 unit prototipe riset hingga puluhan ribu komponen produksi massal terjadwal.' },
    ],
    imageKey: 'service_cnc',
    featured: true,
  },
  {
    id: 'srv-3',
    slug: 'laser-cutting',
    title: 'Laser Cutting Fiber Otomatis',
    category: 'Fabrikasi',
    shortDesc: 'Pemotongan plat logam ultra cepat dan presisi menggunakan mesin CNC Fiber Laser 15 kW dengan tepi potong bersih tanpa burr.',
    fullDesc:
      'Solusi pemotongan plat lembaran logam modern dengan teknologi Fiber Laser berdaya 15 kW. Mampu memotong mild steel hingga ketebalan 35 mm, stainless steel hingga 30 mm, dan aluminium hingga 25 mm dengan kecepatan tinggi, zona pengaruh panas (HAZ) minimal, serta akurasi nesting software pintar yang menghemat sisa bahan hingga 20%.',
    iconName: 'Zap',
    badge: 'Fiber Laser 15 kW',
    specs: [
      { name: 'Kapasitas Meja Potong', capacity: 'Ukuran plat 2.500 mm x 6.500 mm (Dual Shuttle Table)', brandOrType: 'Bodor / Bystronic' },
      { name: 'Kekuatan Sumber Laser', capacity: '15.000 Watt High-Power Fiber Laser Source', brandOrType: 'IPG Photonics' },
      { name: 'Akurasi Reposisi', capacity: '±0.02 mm dengan linear motor drive', brandOrType: 'Swiss Precitec Cutting Head' },
      { name: 'Gas Bantu Pemotongan', capacity: 'Oksigen (O2), Nitrogen (N2) 99.999% High Purity, dan Compressed Air', brandOrType: 'Integrated Gas Skid' },
    ],
    benefits: [
      'Tepi potongan bebas terak (dross-free) siap lanjut ke proses las/cat tanpa gerinda ulang',
      'Kecepatan potong 4x lebih cepat dibandingkan CO2 laser dan plasma konvensional',
      'Pemotongan profil lubang baut kecil dengan rasio diameter:tebal plat 1:1',
      'Sistem nesting cerdas otomatis memaksimalkan efisiensi pemanfaatan lembaran plat',
    ],
    workflow: [
      { step: 1, title: 'Optimasi File 2D CAD (DXF/DWG)', description: 'Pembersihan vektor garis kontur dan penyesuaian lead-in lead-out potong.' },
      { step: 2, title: 'Smart Auto-Nesting', description: 'Penyusunan ratusan part pada lembar plat secara otomatis untuk menghemat bahan baku.' },
      { step: 3, title: 'Loading Plat Otomatis', description: 'Pemuatan plat menggunakan vacuum lifter gantry ke meja shuttle laser.' },
      { step: 4, title: 'High-Speed Laser Slicing', description: 'Pemotongan presisi tinggi menggunakan sensor ketinggian kapasitif otomatis.' },
      { step: 5, title: 'Sortir Part & Quality Check', description: 'Pemeriksaan dimensi sampel dengan kaliper digital dan pengepakan rapi.' },
    ],
    faqs: [
      { question: 'Apakah laser bisa memotong plat kuningan atau tembaga?', answer: 'Ya, teknologi fiber laser kami dilengkapi proteksi pantulan anti-reflektif sehingga aman memotong plat tembaga dan kuningan hingga tebal 10 mm.' },
      { question: 'Berapa lama estimasi pengerjaan jasa potong plat?', answer: 'Untuk material standar yang tersedia di gudang kami, pengerjaan dapat diselesaikan dalam 1-3 hari kerja tergantung volume part.' },
    ],
    imageKey: 'service_laser',
    featured: true,
  },
  {
    id: 'srv-4',
    slug: 'welding-pipa-industri',
    title: 'Robotika & Pengelasan Pipa Industri',
    category: 'Fabrikasi',
    shortDesc: 'Sistem pengelasan otomatis robotik dan manual pipa bertekanan tinggi untuk jaringan utilitas industri, uap (steam), dan oil & gas.',
    fullDesc:
      'Kami menyediakan layanan fabrikasi pipa industri (piping spool fabrication), header manifold, dan sistem pipa hidrolik bertekanan tinggi. Didukung cell robot las otomatis (robotic welding cell) untuk konsistensi sambungan las pada produksi massal, serta juru las manual bersertifikat ASME IX dan Kemenaker untuk pengelasan pipa stainless, duplex, dan alloy steel.',
    iconName: 'Flame',
    badge: 'Sertifikasi ASME Sec IX',
    specs: [
      { name: 'Robotic Welding Arm', capacity: '6-Axis articulated robot dengan welding positioner ganda', brandOrType: 'Yaskawa Motoman / Fanuc' },
      { name: 'Pipe Spool Positioner', capacity: 'Memutar pipa diameter 1 inch hingga 48 inch, beban 5 Ton', brandOrType: 'Gullco Heavy Duty' },
      { name: 'Mesin Las Multi-Proses', capacity: 'GTAW (TIG), GMAW (MIG/MAG), FCAW, dan SAW 600A', brandOrType: 'Miller / Lincoln Electric' },
      { name: 'Purging Equipment', capacity: 'Oxygen analyzer digital untuk perlindungan root pass pipa stainless', brandOrType: 'Huntingdon Fusion' },
    ],
    benefits: [
      'Pemberian nomor ID sambungan las (Weld Map Tracking) terperinci untuk setiap spool',
      'Tingkat penetrasi las 100% lolos uji NDT radiografi (RT)',
      'Pengelasan seragam tanpa spatter berkat kendali robotik cerdas',
      'Penyediaan sertifikasi material trace dan WPS/PQR lengkap',
    ],
    workflow: [
      { step: 1, title: 'Pembuatan Isometrik & Spooling', description: 'Pengelompokan gambar isometrik menjadi spool pipa siap rakit di workshop.' },
      { step: 2, title: 'Pemotongan & Bevel Pipa', description: 'Beveling mekanis presisi (Cold Cutting) untuk menyiapkan sudut V-groove sempurna.' },
      { step: 3, title: 'Fit-Up & Tacking', description: 'Penyambungan flens dan elbow dengan jig perataan sudut dan gap seragam.' },
      { step: 4, title: 'Pengelasan Root hingga Cap', description: 'Pengelasan root pass TIG dengan gas argon murni dilanjutkan hot pass dan capping.' },
      { step: 5, title: 'Hydrotest & Pickling Passivation', description: 'Uji tekan air (Hydrostatic Test) hingga 1.5x tekanan kerja dan pembersihan kimia asam stainless.' },
    ],
    faqs: [
      { question: 'Apakah pengelasan pipa dilakukan di workshop atau di lapangan (on-site)?', answer: 'Kami memprioritaskan pre-fabrikasi 80-90% spool di dalam workshop berstandar ISO agar mutu terkontrol, lalu tim lapangan kami melakukan instalasi dan tie-in akhir di lokasi pabrik Anda.' },
    ],
    imageKey: 'service_welding',
    featured: true,
  },
  {
    id: 'srv-5',
    slug: 'assembly-mekanikal',
    title: 'Assembly & Sub-Assembly Mekanikal',
    category: 'Engineering',
    shortDesc: 'Perakitan komponen mekanikal, pneumatic, hidrolik, dan kelistrikan menjadi unit siap pakai (sub-assembly) dengan pengujian fungsional ketat.',
    fullDesc:
      'Solusi perakitan kontraktual (contract assembly) untuk produsen mesin industri dan tier-1 manufaktur. Kami menggabungkan suku cadang hasil permesinan dengan bantalan (bearing), seal karet, silinder pneumatik, solenoid valve, gearbox, dan sensor kelistrikan menjadi modul siap pasang di lini perakitan utama klien.',
    iconName: 'Wrench',
    badge: 'Clean Assembly Line',
    specs: [
      { name: 'Ruang Perakitan Terkontrol', capacity: 'Area 1.200 m² berlantai epoxy anti-statis (ESD-safe)', brandOrType: 'Clean Assembly Zone' },
      { name: 'Torque Tightening Tools', capacity: 'Kunci torsi digital dengan pencatatan data otomatis (torque audit)', brandOrType: 'Atlas Copco Smart Tools' },
      { name: 'Hydraulic Test Bench', capacity: 'Tekanan pengujian hidrolik hingga 350 Bar dengan sensor flow digital', brandOrType: 'Custom Engineered' },
    ],
    benefits: [
      'Pemeriksaan functional testing 100% sebelum pengiriman',
      'Pemberian serial number dan pelacakan QR code untuk setiap modul sub-assembly',
      'Mengurangi beban ruang dan waktu perakitan di pabrik utama klien',
      'Kemitraan Just-In-Time (JIT) dan Kanban delivery terjadwal',
    ],
    workflow: [
      { step: 1, title: 'Penerimaan & Kitting Komponen', description: 'Pemeriksaan Bill of Materials (BOM) dan penyiapan rak kitting perakitan.' },
      { step: 2, title: 'Perakitan Mekanikal Sesuai SOP', description: 'Perakitan bertahap dengan panduan torsi baut terkalibrasi dan pelumasan presisi.' },
      { step: 3, title: 'Instalasi Piping & Wiring', description: 'Pemasangan jalur pneumatik, selang hidrolik, dan kabel sensor berpelindung.' },
      { step: 4, title: 'Pengujian Tekanan & Kelistrikan', description: 'Uji fungsionalitas gerak, deteksi kebocoran seal, dan verifikasi hambatan isolasi.' },
      { step: 5, title: 'Packaging Protektif & Sertifikasi', description: 'Pemberian label identitas, packing anti korosi VCI, dan pengiriman.' },
    ],
    faqs: [
      { question: 'Bisakah klien menyediakan sebagian komponen (kitting supply)?', answer: 'Bisa, kami menerima sistem consignable materials di mana klien menyediakan komponen utama dan kami melengkapi suku cadang lokal serta jasa perakitan.' },
    ],
    imageKey: 'service_assembly',
    featured: false,
  },
  {
    id: 'srv-6',
    slug: 'industrial-automation',
    title: 'Otomasi Industri & Sistem PLC / SCADA',
    category: 'Otomasi',
    shortDesc: 'Integrasi sistem kendali otomatis, panel PLC, antarmuka HMI, SCADA, sensor IIoT, dan robot industri untuk meningkatkan OEE pabrik.',
    fullDesc:
      'Divisi otomasi PT Industri Nusantara merancang arsitektur sistem kendali cerdas untuk lini manufaktur modern. Kami menangani perancangan lemari panel kontrol (control panel builder), pemrograman PLC (Siemens S7-1500, Allen-Bradley, Omron), antarmuka SCADA multi-stasiun, penggerak servo motor berkecepatan tinggi, dan integrasi robot kolaboratif (cobot).',
    iconName: 'Settings',
    badge: 'Industry 4.0 Ready',
    specs: [
      { name: 'Software Arsitektur PLC', capacity: 'Siemens TIA Portal V18, Studio 5000, Sysmac Studio', brandOrType: 'Siemens / Rockwell / Omron' },
      { name: 'Sistem SCADA & HMI', capacity: 'Wonderware, Ignition SCADA, WinCC Unified, Pro-face HMI', brandOrType: 'Inductive Automation / Siemens' },
      { name: 'Industrial Communication', capacity: 'Profinet, Ethernet/IP, Modbus TCP, OPC-UA, MQTT Gateway', brandOrType: 'Moxa / Cisco Industrial' },
      { name: 'Standar Panel Listrik', capacity: 'Kepatuhan PUIL 2020 dan IEC 61439 Form 4b', brandOrType: 'Schneider Electric / Rittal' },
    ],
    benefits: [
      'Peningkatan Overall Equipment Effectiveness (OEE) pabrik hingga rata-rata 35%',
      'Pemantauan performa produksi real-time via dashboard web dan notifikasi alarm mobile',
      'Pencegahan human error dengan sistem interlocking pengaman berstandar SIL 3',
      'Dukungan remote maintenance 24/7 melalui koneksi VPN terenkripsi industri',
    ],
    workflow: [
      { step: 1, title: 'Audit Alur Proses & Functional Design Spec (FDS)', description: 'Pemetaan logika proses produksi dan penyusunan dokumen spesifikasi kendali.' },
      { step: 2, title: 'Desain Wiring & Perakitan Panel', description: 'Perancangan diagram skematik EPLAN dan fabrikasi panel kontrol bersertifikasi.' },
      { step: 3, title: 'Pengembangan Logic PLC & UI HMI', description: 'Penulisan ladder logic, struktur data, dan desain antarmuka grafis yang ergonomis.' },
      { step: 4, title: 'Factory Acceptance Test (FAT)', description: 'Uji simulasi sinyal I/O dan logika darurat di workshop sebelum dikirim ke pabrik klien.' },
      { step: 5, title: 'Site Commissioning & Training Operator', description: 'Instalasi lapangan, uji beban nyata (SAT), dan pelatihan komprehensif bagi teknisi klien.' },
    ],
    faqs: [
      { question: 'Apakah sistem bisa diintegrasikan dengan ERP existing pabrik kami (SAP/Oracle)?', answer: 'Ya, kami menggunakan protokol komunikasi OPC-UA dan REST API industri untuk mengirimkan data hasil produksi dan status mesin langsung ke database ERP Anda.' },
    ],
    imageKey: 'service_automation',
    featured: true,
  },
  {
    id: 'srv-7',
    slug: 'design-engineering',
    title: 'Design Engineering & CAD/CAM Simulation',
    category: 'Engineering',
    shortDesc: 'Layanan rekayasa balik (reverse engineering), perancangan 3D CAD detail, simulasi kekuatan struktur (FEA), dan Computational Fluid Dynamics (CFD).',
    fullDesc:
      'Solusi rekayasa mekanikal terpadu dari konsep sketsa hingga gambar kerja produksi (shop drawing). Kami dilengkapi scanner 3D optik portabel untuk reverse engineering komponen aus tanpa gambar teknis asli, serta stasiun kerja software simulasi CAE untuk menguji ketahanan beban dinamis, getaran, aliran fluida, dan perpindahan panas sebelum prototipe dibuat.',
    iconName: 'Compass',
    badge: 'Simulasi FEA & CFD',
    specs: [
      { name: 'Software CAD & Solid Modeling', capacity: 'SolidWorks Professional, Autodesk Inventor, Siemens NX', brandOrType: 'Dassault / Autodesk' },
      { name: 'Software Analisis Struktur & Fluida', capacity: 'ANSYS Mechanical FEA, ANSYS Fluent CFD, SolidWorks Simulation', brandOrType: 'ANSYS Inc.' },
      { name: 'Instrumen 3D Laser Scanner', capacity: 'Akurasi 0.025 mm, resolusi 0.050 mm dengan software mesh scan', brandOrType: 'Creaform HandySCAN Black' },
    ],
    benefits: [
      'Meminimalkan risiko kegagalan prototipe dan mempercepat Time-to-Market',
      'Mampu mereproduksi komponen mesin impor langka tanpa gambar pabrikan (reverse engineering)',
      'Optimalisasi bobot struktur (topological optimization) untuk menghemat biaya material',
      'Pemberian laporan analisis teknik resmi bertandatangan insinyur berlisensi (IPM/BAPETEN)',
    ],
    workflow: [
      { step: 1, title: 'Pengukuran 3D Scanning Lapangan', description: 'Pemindaian geometri fisik komponen di lokasi pabrik klien menggunakan laser scanner portabel.' },
      { step: 2, title: 'Pemodelan Parametrik 3D CAD', description: 'Rekonstruksi model solid parametrik bebas cacat dari awan titik (point cloud).' },
      { step: 3, title: 'Simulasi Tegangan & Beban (FEA)', description: 'Pengujian kekuatan material terhadap tegangan von Mises, deformasi elastis, dan faktor keamanan (safety factor).' },
      { step: 4, title: 'Pembuatan Shop Drawing 2D Lengkap', description: 'Penerbitan gambar manufaktur dengan toleransi geometrik (GD&T) standar ISO 1101.' },
    ],
    faqs: [
      { question: 'Apakah kami bisa mereplikasi suku cadang mesin lama dari luar negeri yang sudah diskontinu?', answer: 'Tentu. Tim kami sering membantu pabrik semen, baja, dan makanan mereproduksi roda gigi, poros, dan impeller impor yang sudah tidak diproduksi lagi oleh pabrikan asalnya.' },
    ],
    imageKey: 'service_design',
    featured: false,
  },
  {
    id: 'srv-8',
    slug: 'maintenance-overhaul',
    title: 'Industrial Maintenance, Overhaul & Rekondisi',
    category: 'Maintenance',
    shortDesc: 'Perawatan preventif, rekondisi total mesin industri (overhaul), dynamic balancing, dan perbaikan darurat 24/7 untuk meminimalkan downtime pabrik.',
    fullDesc:
      'Layanan perawatan dan perbaikan menyeluruh untuk mesin-mesin kritis pabrik. Kami melayani rekondisi mesin press hidrolik, overhaul gearbox transmisi berat, re-machining meja mesin, dynamic balancing poros kipas blower & turbin berputar tinggi, serta kontrak pemeliharaan berkala (Periodic Maintenance Agreement) dengan respon cepat penanganan darurat.',
    iconName: 'ShieldCheck',
    badge: 'Respon Cepat 24/7',
    specs: [
      { name: 'Dynamic Balancing Machine', capacity: 'Beban rotor hingga 5 Ton, diameter 2.000 mm, standar ISO 1940 G2.5', brandOrType: 'Schenck Germany' },
      { name: 'Laser Shaft Alignment', capacity: 'Penyelarasan kopling poros motor-pompa presisi resolusi 0.001 mm', brandOrType: 'Prüftechnik ROTALIGN' },
      { name: 'Vibration Analyzer Portabel', capacity: 'Analisis spektrum getaran FFT dan deteksi dini kerusakan bearing', brandOrType: 'SKF Microlog Analyzer' },
      { name: 'Mobile Line Boring Machine', capacity: 'Pengerjaan bubut lubang pin & bearing langsung di lokasi mesin', brandOrType: 'Climax Portable Machining' },
    ],
    benefits: [
      'Mencegah kerusakan fatal mesin yang menimbulkan kerugian miliaran rupiah',
      'Penyelarasan poros dan balancing presisi memperpanjang umur bearing hingga 3x lipat',
      'Layanan darurat siaga 24 jam dengan suku cadang pengganti cepat',
      'Garansi pengerjaan purnajual hingga 6 bulan operasional',
    ],
    workflow: [
      { step: 1, title: 'Inspeksi & Pengukuran Awal', description: 'Pemeriksaan getaran, suhu termal, celah clearance bearing, dan alignment poros.' },
      { step: 2, title: 'Dismantling & Pembersihan Komponen', description: 'Pembongkaran hati-hati dengan penandaan komponen dan pencucian kimiawi.' },
      { step: 3, title: 'Rekondisi & Machining Komponen Aus', description: 'Metal spraying, hard chrome plating, bubut ulang poros, dan pergantian komponen aus.' },
      { step: 4, title: 'Perakitan Kembali & Dynamic Balancing', description: 'Pemasangan bearing baru dengan induksi pemanas dan penyeimbangan getaran rotor.' },
      { step: 5, title: 'Uji Coba Beban (Commissioning Test Run)', description: 'Pengujian operasional continuous monitoring selama 4-8 jam sebelum serah terima.' },
    ],
    faqs: [
      { question: 'Apakah overhaul bisa dilakukan di lokasi pabrik klien?', answer: 'Untuk mesin berukuran sangat besar yang tidak memungkinkan dipindahkan (seperti press hidrolik 1.000 ton), tim mekanik kami membawa peralatan portable line boring dan laser alignment langsung ke lokasi Anda.' },
    ],
    imageKey: 'service_maintenance',
    featured: false,
  },
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'prj-1',
    slug: 'konveyor-otomatis-otomotif',
    title: 'Sistem Konveyor Otomatis Pabrik Otomotif Karawang',
    category: 'Otomotif',
    client: 'PT Astra Motor Component Indonesia',
    location: 'Kawasan Industri KIIC, Karawang',
    year: '2024',
    duration: '5 Bulan',
    shortDesc: 'Pembangunan lini konveyor palet otomatis sepanjang 320 meter dengan integrasi sensor barcode RFID dan PLC Siemens S7-1500.',
    challenge:
      'Klien membutuhkan peningkatan laju aliran produksi komponen suspensi sebesar 40% tanpa mengganggu jadwal operasional pabrik yang berjalan 2 shift, serta integrasi ruang pabrik yang memiliki keterbatasan elevasi struktural.',
    solution:
      'Kami merancang sistem konveyor overhead modular dengan sistem lift transfer vertikal cerdas. Seluruh struktur difabrikasi di workshop Cikarang dan dirakit dalam 3 sesi shutdown mingguan. Sistem kendali dilengkapi tracking RFID di setiap palet untuk pemantauan posisi real-time.',
    resultMetrics: [
      { label: 'Peningkatan Output Produksi', value: '+42%' },
      { label: 'Pengurangan Bottleneck Alur', value: '-65%' },
      { label: 'Waktu Siklus (Cycle Time)', value: '45 Detik' },
      { label: 'Uptime Sistem', value: '99.8%' },
    ],
    technologies: ['PLC Siemens S7-1500', 'SCADA WinCC', 'Laser Cutting SS400', 'RFID Tracking', 'SEW-Eurodrive Geared Motors'],
    imageKey: 'project_conveyor',
    gallery: ['project_conveyor_1', 'project_conveyor_2', 'project_conveyor_3'],
    featured: true,
  },
  {
    id: 'prj-2',
    slug: 'tangki-tekanan-refinery',
    title: 'Fabrikasi Bejana Tekan ASME & Piping Refinery',
    category: 'Energi & Migas',
    client: 'Konsorsium Rekayasa Energi Migas Balongan',
    location: 'Indramayu, Jawa Barat',
    year: '2023',
    duration: '8 Bulan',
    shortDesc: 'Fabrikasi 4 unit horizontal pressure vessel 45 Bar berbahan plat SA 516 Gr 70 lengkap dengan internal baffles dan piping spool.',
    challenge:
      'Persyaratan mutu ekstrem dengan pengujian radiografi (RT) 100% pada semua sambungan las, perlakuan panas pasca-las (PWHT), dan toleransi kelurusan bejana di bawah 3 mm pada panjang total 16 meter.',
    solution:
      'Menggunakan teknologi pengelasan otomatis Submerged Arc Welding (SAW) berkecepatan konstan dan ruang pemanas PWHT terkalibrasi. Dilengkapi pengujian hydrostatic hingga 67.5 Bar di hadapan inspektur independen ASME.',
    resultMetrics: [
      { label: 'Tingkat Kelolosan Uji Radiografi', value: '100% First Pass' },
      { label: 'Tekanan Uji Hydrostatic', value: '67.5 Bar' },
      { label: 'Kandungan Material Lokal (TKDN)', value: '78.4%' },
      { label: 'Insiden K3', value: '0 Accident' },
    ],
    technologies: ['SAW Automatic Welding', 'ASME Boiler Code Sec VIII', 'Plate Rolling Davi 4-Roll', 'PWHT Heating', 'NDT X-Ray'],
    imageKey: 'project_pressure_vessel',
    gallery: ['project_pressure_vessel_1', 'project_pressure_vessel_2'],
    featured: true,
  },
  {
    id: 'prj-3',
    slug: 'flens-turbin-pembangkit',
    title: 'Komponen Presisi Flens Turbin Pembangkit Listrik 660 MW',
    category: 'Pembangkit',
    client: 'PT Pembangkit Nusantara Jawa-Bali',
    location: 'Cirebon, Jawa Barat',
    year: '2024',
    duration: '3 Bulan',
    shortDesc: 'Pemesinan CNC 5-axis komponen cincin flens turbin uap diameter 2.400 mm dari forged alloy steel 42CrMo4 dengan toleransi konsentris 0.01 mm.',
    challenge:
      'Material forged steel berdaya tahan tinggi dengan kekerasan 320 HB yang rawan mengalami distorsi tegangan sisa selama pemesinan ukuran diameter besar.',
    solution:
      'Penerapan proses permesinan bertahap (multi-pass roughing) disertai proses stress relief termal di antara tahapan finish. Pengukuran dimensi akhir menggunakan laser tracker Leica berpresisi sub-milimeter.',
    resultMetrics: [
      { label: 'Toleransi Konsentrisitas', value: '0.008 mm' },
      { label: 'Kekasaran Permukaan (Roughness)', value: 'Ra 0.4 µm' },
      { label: 'Efisiensi Waktu Pasang On-Site', value: '3x Lebih Cepat' },
      { label: 'Penghematan Impor Suku Cadang', value: 'US$ 145.000' },
    ],
    technologies: ['Vertical Lathe CNC 3.000mm', 'Leica Laser Tracker', 'Alloy Forged Steel 42CrMo4', 'Kennametal Tooling'],
    imageKey: 'project_flange',
    gallery: ['project_flange_1', 'project_flange_2'],
    featured: true,
  },
  {
    id: 'prj-4',
    slug: 'lini-robotik-elektronik',
    title: 'Lini Perakitan Robotik Pabrik Elektronik Cikarang',
    category: 'Elektronik',
    client: 'PT Global Precision Electronics',
    location: 'Cikarang Techno Park, Bekasi',
    year: '2024',
    duration: '4 Bulan',
    shortDesc: 'Integrasi 6 unit robot arm berkecepatan tinggi dengan kamera vision AI untuk perakitan housing baterai lithium presisi.',
    challenge:
      'Komponen sangat sensitif terhadap goresan dan membutuhkan ketepatan penempatan sekrup mikro dengan akurasi 0.05 mm pada kecepatan 1 unit setiap 8 detik.',
    solution:
      'Mengintegrasikan robot SCARA dengan gripper vacuum khusus anti-statik, dipandu kamera vision kognitif resolusi tinggi dan obeng servo torsi presisi otomatis.',
    resultMetrics: [
      { label: 'Penurunan Cacat Produk (Defect Rate)', value: 'Dari 2.1% ke 0.03%' },
      { label: 'Waktu Siklus Perakitan', value: '7.2 Detik' },
      { label: 'Tingkat Ketersediaan Mesin', value: '99.5%' },
      { label: 'Pengurangan Biaya Tenaga Kerja Manual', value: '45%' },
    ],
    technologies: ['Fanuc SCARA Robots', 'Cognex Vision AI', 'ESD-Safe Gripper', 'Industrial IoT Gateway', 'Allen-Bradley GuardLogix'],
    imageKey: 'project_robotics',
    gallery: ['project_robotics_1', 'project_robotics_2'],
    featured: true,
  },
  {
    id: 'prj-5',
    slug: 'struktur-baja-marunda',
    title: 'Struktur Rangka Baja Heavy-Duty Gudang Logistik Marunda',
    category: 'Infrastruktur',
    client: 'PT Samudera Logistik Maritim Nusantara',
    location: 'Kawasan Berikat Marunda, Jakarta Utara',
    year: '2023',
    duration: '6 Bulan',
    shortDesc: 'Fabrikasi dan ereksi 1.800 ton struktur baja WF heavy girder untuk gudang logistik otomatis bersusun 6 tingkat di area pesisir.',
    challenge:
      'Paparan udara pantai dengan salinitas tinggi yang membutuhkan proteksi karat standar korosi C5-M, serta tanah pesisir dengan penurunan fondasi.',
    solution:
      'Seluruh baja melalui proses blast-cleaning Sa 3.0 dan pelapisan sistem 3-layer coating (Zinc Rich Epoxy, Epoxy Micaceous Iron Oxide, Polyurethane Topcoat). Desain sambungan baut high-strength friction grip (HSFG).',
    resultMetrics: [
      { label: 'Total Tonase Terpasang', value: '1.850 Ton' },
      { label: 'Ketahanan Korosi Garansi', value: '15 Tahun' },
      { label: 'Kecepatan Ereksi Struktur', value: 'Tepat Waktu (0 Delay)' },
      { label: 'Uji Non-Destructive Testing', value: '100% Lulus' },
    ],
    technologies: ['Bystronic Laser Cutting', 'Submerged Arc Column Welder', 'Shotblasting Sa 3.0', 'Jotun C5-M Paint System'],
    imageKey: 'project_steel_structure',
    gallery: ['project_steel_structure_1', 'project_steel_structure_2'],
    featured: false,
  },
  {
    id: 'prj-6',
    slug: 'mesin-packaging-farmasi',
    title: 'Custom Machine Packaging Sachet Farmasi Berkecepatan Tinggi',
    category: 'Farmasi',
    client: 'PT Pharmanusa Sehat Medika',
    location: 'Kawasan Industri Sentul, Bogor',
    year: '2023',
    duration: '5 Bulan',
    shortDesc: 'Perancangan dan manufaktur mesin pengemas sachet serbuk obat 6-lane otomatis bersertifikasi cGMP dengan material full stainless SUS316L.',
    challenge:
      'Kepatuhan ketat standar kebersihan industri farmasi (cGMP/BPOM), toleransi berat penimbangan serbuk mikro ±0.1 gram, dan sistem sealing kedap udara tanpa kebocoran.',
    solution:
      'Konstruksi kontak produk menggunakan material electropolished SUS316L (Ra 0.2 µm). Pengisian didukung auger doser presisi dengan timbangan checkweigher feedback servo otomatis.',
    resultMetrics: [
      { label: 'Kapasitas Pengemasan', value: '360 Sachet / Menit' },
      { label: 'Akurasi Penimbangan', value: '±0.08 Gram' },
      { label: 'Kepatuhan Regulasi', value: 'BPOM & cGMP Validated' },
      { label: 'Tingkat Kebocoran Seal', value: '0.001%' },
    ],
    technologies: ['Stainless Steel SUS316L', 'Electropolishing', 'Siemens Motion Control', 'Servo Auger Filling', 'Omron PLC'],
    imageKey: 'project_pharma_machine',
    gallery: ['project_pharma_machine_1', 'project_pharma_machine_2'],
    featured: false,
  },
  {
    id: 'prj-7',
    slug: 'mold-dies-stamping',
    title: 'Machining Mold & Progressive Dies Stamping Otomotif',
    category: 'Otomotif',
    client: 'PT Metal Stamping Presisi Prima',
    location: 'Cikarang Industrial Estate, Bekasi',
    year: '2024',
    duration: '3.5 Bulan',
    shortDesc: 'Pembuatan tooling progressive dies 12 tahapan untuk pembuatan bracket sasis kendaraan penumpang dari material tool steel SKD11 keras.',
    challenge:
      'Profil punch and die dengan sudut potong tajam mikro dan tingkat kekerasan material 60-62 HRC setelah perlakuan panas vakum (vacuum hardening).',
    solution:
      'Mengombinasikan CNC Milling kecepatan tinggi dengan Wire-Cut EDM presisi sub-mikron. Permukaan akhir diinspeksi menggunakan pemindai 3D optik Zeiss CMM.',
    resultMetrics: [
      { label: 'Kekerasan Material Dies', value: '61 HRC' },
      { label: 'Daya Tahan Pukulan (Die Life)', value: '1.200.000 Stroke' },
      { label: 'Toleransi Gap Clearance', value: '0.006 mm' },
      { label: 'Kecepatan Stamping Maksimal', value: '180 SPM' },
    ],
    technologies: ['Makino Wire-Cut EDM', 'DMG Mori 5-Axis', 'Vacuum Heat Treatment', 'SKD11 & DC53 Tool Steel'],
    imageKey: 'project_mold_dies',
    gallery: ['project_mold_dies_1', 'project_mold_dies_2'],
    featured: false,
  },
  {
    id: 'prj-8',
    slug: 'retrofit-otomasi-cnc',
    title: 'Retrofit & Modernisasi Mesin CNC Lathe Industri Baja Cilegon',
    category: 'Infrastruktur',
    client: 'PT Krakatau Steel Heavy Machining Division',
    location: 'Kawasan Industri Krakatau, Cilegon',
    year: '2023',
    duration: '2.5 Bulan',
    shortDesc: 'Rekondisi mekanikal total dan pembaruan sistem kontrol CNC controller Siemens Sinumerik One pada mesin bubut heavy duty rol pabrik baja.',
    challenge:
      'Mesin bubut besar tahun 1998 dengan kontrol analog usang yang sering mengalami drifting ukuran dan suku cadang elektronik yang tidak lagi tersedia di pasar.',
    solution:
      'Penggantian guideway Turcite-B dengan linear roller guideway presisi, pembaruan ballscrew ganda, motor spindle 75 kW baru, dan instalasi sistem CNC controller digital modern Sinumerik One.',
    resultMetrics: [
      { label: 'Penghematan Biaya vs Mesin Baru', value: 'Hemat 72%' },
      { label: 'Pemulihan Akurasi Bubut', value: '0.015 mm per 1.000 mm' },
      { label: 'Pengurangan Downtime Mesin', value: '-88%' },
      { label: 'Peningkatan Kecepatan Potong', value: '+50%' },
    ],
    technologies: ['Siemens Sinumerik One', 'THK Linear Guideway', 'Heidenhain Linear Scale', 'Re-scraping Meja Mesin'],
    imageKey: 'project_retrofit',
    gallery: ['project_retrofit_1', 'project_retrofit_2'],
    featured: false,
  },
];

export const initialArticles: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'penerapan-smart-factory-iot',
    title: 'Penerapan Smart Factory dan IoT dalam Industri Manufaktur Indonesia 2026',
    excerpt: 'Bagaimana digitalisasi lantai pabrik dan integrasi sensor IIoT membantu menaikkan efisiensi OEE dan mencegah downtime tak terduga.',
    content: `
Industri manufaktur Indonesia berada pada titik transformasi krusial menuju era Industry 4.0. Bukan lagi sekadar wacana digitalisasi di atas kertas, pabrik-pabrik modern di koridor industri Cikarang, Karawang, dan Cilegon kini secara aktif mengadopsi konsep **Smart Factory**.

### Apa Itu Smart Factory dalam Praktik Nyata?
Smart factory adalah ekosistem manufaktur di mana mesin-mesin permesinan (seperti CNC milling, laser cutting, dan press brake) saling terhubung dengan sistem cloud dan analitik data melalui protokol komunikasi industri seperti OPC-UA dan MQTT. Setiap getaran bearing, konsumsi daya spindle, hingga laju penyelesaian part dicatat secara presisi per detik.

### Tiga Pilar Implementasi Sukses
1. **Sensitisasi Mesin Warisan (Legacy Equipment Retrofit)**: Banyak pabrik mengira bahwa untuk menjadi smart factory harus membeli mesin baru berharga puluhan miliar. Pada kenyataannya, mesin konvensional dapat dipasangi modul gateway IoT dengan sensor vibrasi piezoelektrik dan current transformer eksternal.
2. **Predictive Maintenance (Pemeliharaan Prediktif)**: Alih-alih menunggu mesin rusak (breakdown) atau sekadar mengganti oli secara berkala, algoritma analitik getaran mampu mendeteksi kerusakan mikro pada inner ring bearing hingga 4 minggu sebelum kegagalan fatal terjadi.
3. **Visibilitas OEE Real-Time**: Mandor dan plant manager tidak lagi menunggu laporan shift kertas di akhir hari. Dashboard web menyajikan skor Overall Equipment Effectiveness (Availability, Performance, Quality) secara langsung di layar tablet pengawas.

PT Industri Nusantara telah menerapkan sistem ini di 38 armada CNC kami, menghasilkan peningkatan ketersediaan mesin sebesar 18.4% dan penghematan biaya listrik pabrik hingga 12% per tahun.
    `,
    category: 'Teknologi',
    author: {
      name: 'Dr. Raditya Pratama, S.T., M.T.',
      role: 'Head of Engineering & R&D',
    },
    publishedAt: '18 Maret 2026',
    readTime: '6 Menit Baca',
    tags: ['Smart Factory', 'IoT Industri', 'Industry 4.0', 'OEE', 'Predictive Maintenance'],
    imageKey: 'article_smart_factory',
    featured: true,
  },
  {
    id: 'art-2',
    slug: 'fiber-laser-vs-plasma-cutting',
    title: 'Perbedaan Fiber Laser Cutting vs Plasma Cutting: Mana yang Lebih Efisien untuk Fabrikasi?',
    excerpt: 'Panduan teknis mendalam memilih mesin potong plat logam yang paling ekonomis berdasarkan ketebalan, toleransi, dan volume produksi.',
    content: `
Dalam dunia fabrikasi lembaran logam (sheet metal fabrication), pemilihan metode pemotongan plat merupakan keputusan investasi yang menentukan keuntungan jangka panjang bengkel dan pabrik. Dua teknologi yang paling dominan saat ini adalah **High-Power Fiber Laser Cutting** dan **High-Definition Plasma Cutting**.

### 1. Prinsip Kerja & Kualitas Pemotongan
- **Fiber Laser**: Menggunakan sinar laser serat optik terfokus dengan panjang gelombang 1.064 µm. Kerf width (lebar celah potong) sangat kecil (0.1–0.3 mm), menghasilkan tepi potongan halus bebas terak (dross-free) dan zona pengaruh panas (HAZ) yang sangat sempit.
- **HD Plasma**: Memanfaatkan gas yang terionisasi pada suhu lebih dari 20.000°C untuk melelehkan logam. Kerf width lebih lebar (1.5–3.0 mm) dengan sedikit sudut kemiringan (bevel 1–3 derajat) pada ketebalan tinggi.

### 2. Rentang Ketebalan Optimal
- **Plat Tipis hingga Sedang (0.8 mm – 20 mm)**: Fiber laser 12 kW–15 kW unggul mutlak dalam hal kecepatan (hingga 5x lebih cepat dari plasma) dan ketelitian lubang-lubang kecil.
- **Plat Sangat Tebal (di atas 35 mm hingga 100 mm)**: Plasma cutting dan oxy-fuel tetap menjadi opsi yang lebih efisien dari sisi biaya modal per kW daya.

### 3. Analisis Biaya Operasional (TCO)
Meskipun harga mesin fiber laser lebih tinggi di awal, ketiadaan elektroda yang cepat habis (seperti consumable nozzle plasma) dan efisiensi konsumsi listrik fotonik hingga 40% membuat cost per part laser jauh lebih murah untuk pemotongan plat stainless steel dan mild steel di bawah 25 mm.
    `,
    category: 'Fabrikasi',
    author: {
      name: 'Hendrik Wijaya, S.T.',
      role: 'Direktur Operasional',
    },
    publishedAt: '04 Maret 2026',
    readTime: '5 Menit Baca',
    tags: ['Laser Cutting', 'Plasma Cutting', 'Fabrikasi Logam', 'Toleransi', 'Sheet Metal'],
    imageKey: 'article_laser_cutting',
    featured: true,
  },
  {
    id: 'art-3',
    slug: 'standar-toleransi-iso-cnc',
    title: 'Standar Toleransi Presisi ISO 2768 pada CNC Machining Komponen Kritis',
    excerpt: 'Memahami kelas toleransi umum ISO 2768-mK dan Geometric Dimensioning and Tolerancing (GD&T) untuk menjamin perakitan mulus tanpa kendala.',
    content: `
Salah satu penyebab utama pembengkakan biaya pemesinan CNC dan penolakan (rejection) barang saat quality control adalah ketidakjelasan spesifikasi toleransi pada gambar teknik. Standar internasional **ISO 2768** hadir sebagai acuan universal untuk menyederhanakan gambar tanpa mengorbankan fungsi mekanikal.

### Pembagian Kelas Toleransi ISO 2768
Standar ini terbagi menjadi dua bagian:
1. **ISO 2768-1**: Toleransi untuk dimensi linier dan sudut (panjang, diameter, radius). Terdiri dari 4 kelas:
   - *f (fine)*: Presisi tinggi untuk komponen perakitan rapat.
   - *m (medium)*: Standar umum untuk sebagian besar pengerjaan CNC machining presisi.
   - *c (coarse)*: Pengerjaan kasar/roughing.
   - *v (very coarse)*: Pengerjaan pengecoran atau fabrikasi berat.
2. **ISO 2768-2**: Toleransi geometrik (kelurusan, kerataan, kebulatan, dan runout). Dilambangkan dengan kelas H, K, atau L.

### Mengapa Tidak Boleh "Over-Specifying"?
Menetapkan toleransi ±0.005 mm pada dimensi yang sebenarnya hanya berfungsi sebagai penutup luar (cover plate) adalah pemborosan biaya. Setiap kenaikan tingkat presisi dari kelas medium ke fine membutuhkan kecepatan potong lebih lambat, alat ukur CMM khusus, dan penyesuaian suhu ruangan. Insinyur yang bijak merancang toleransi fungsional: sepresisi yang dibutuhkan, sehemat yang dimungkinkan.
    `,
    category: 'Manajemen Mutu',
    author: {
      name: 'Siti Rahmawati, S.T., CQA',
      role: 'Quality Assurance Manager',
    },
    publishedAt: '22 Februari 2026',
    readTime: '7 Menit Baca',
    tags: ['ISO 2768', 'CNC Machining', 'Metrologi', 'Quality Control', 'GD&T'],
    imageKey: 'article_metrology',
    featured: false,
  },
  {
    id: 'art-4',
    slug: 'strategi-preventive-maintenance',
    title: 'Strategi Pemeliharaan Preventif Mesin Industri untuk Mencegah Downtime',
    excerpt: 'Langkah praktis menerapkan Total Productive Maintenance (TPM) dan manajemen pelumasan untuk memperpanjang usia pakai aset pabrik.',
    content: `
Kepanikan terbesar seorang manajer pabrik adalah bunyi sirene tanda lini perakitan terhenti karena kerusakan mendadak mesin utama. Biaya downtime bukan hanya biaya pembelian spare part baru, melainkan penalti keterlambatan pengiriman ke klien dan hilangnya jam kerja puluhan operator.

### 4 Tingkatan Strategi Pemeliharaan
1. **Reactive (Run to Failure)**: Mesin dibiarkan beroperasi sampai rusak. Ini adalah strategi paling mahal dan berisiko tinggi.
2. **Preventive (Time-Based)**: Penggantian oli, filter, dan seal secara berkala berdasarkan jam kerja operasional (misal tiap 1.000 jam).
3. **Condition-Based Monitoring (CBM)**: Pemantauan parameter fisik (analisis oli lab, termografi inframerah, dan spektrum getaran).
4. **Predictive AI**: Penggabungan riwayat data operasi dengan model machine learning untuk memprediksi sisa masa pakai komponen (Remaining Useful Life).

### Peran Kunci Pelumasan yang Tepat
Lebih dari 60% kegagalan bearing disebabkan oleh kontaminasi pelumas atau pemilihan viskositas gemuk yang salah. Pastikan pelumasan menggunakan grease dispenser otomatis pada titik-titik krusial yang sulit dijangkau teknisi harian.
    `,
    category: 'Teknologi',
    author: {
      name: 'Hendrik Wijaya, S.T.',
      role: 'Direktur Operasional',
    },
    publishedAt: '12 Februari 2026',
    readTime: '5 Menit Baca',
    tags: ['Preventive Maintenance', 'TPM', 'Downtime', 'Pelumasan', 'Pabrik'],
    imageKey: 'article_maintenance',
    featured: false,
  },
  {
    id: 'art-5',
    slug: 'memahami-regulasi-tkdn-manufaktur',
    title: 'Memahami Regulasi TKDN dalam Pengadaan Mesin dan Fabrikasi Nasional',
    excerpt: 'Peluang dan kepatuhan sertifikasi Tingkat Komponen Dalam Negeri (TKDN) bagi perusahaan manufaktur rekanan BUMN dan pemerintah.',
    content: `
Pemerintah Republik Indonesia terus memperketat implementasi sertifikasi **Tingkat Komponen Dalam Negeri (TKDN)** dalam setiap proyek belanja modal negara, BUMN, dan industri hulu migas (SKK Migas). Bagi industri manufaktur dan fabrikasi lokal, regulasi ini bukan sekadar beban administratif, melainkan pendorong utama kemandirian teknologi nasional.

### Bagaimana Nilai TKDN Dihitung?
Penilaian TKDN untuk produk permesinan dan barang fabrikasi dinilai berdasarkan:
- **Material Langsung**: Penggunaan plat baja dan billet logam produksi smelter dalam negeri (seperti Krakatau Steel).
- **Tenaga Kerja Langsung**: Keterlibatan insinyur dan teknisi lokal bersertifikat BNSP.
- **Biaya Overhead Pabrik**: Penyusutan mesin, sewa fasilitas, dan riset pengembangan yang dilakukan di dalam yurisdiksi Indonesia.

PT Industri Nusantara secara konsisten mempertahankan skor verifikasi TKDN di atas 40% hingga 78% untuk proyek fabrikasi bejana tekan, skid konveyor, dan panel otomasi industri kami.
    `,
    category: 'Regulasi',
    author: {
      name: 'Dewi Anggraeni, S.E., M.M.',
      role: 'Head of Commercial & Supply Chain',
    },
    publishedAt: '28 Januari 2026',
    readTime: '6 Menit Baca',
    tags: ['TKDN', 'Regulasi', 'Kemenperin', 'BUMN', 'Manufaktur Lokal'],
    imageKey: 'article_tkdn',
    featured: false,
  },
  {
    id: 'art-6',
    slug: 'tren-otomasi-robotik-otomotif',
    title: 'Tren Otomasi Robotik dalam Jalur Produksi Massal Otomotif',
    excerpt: 'Bagaimana robot kolaboratif (Cobot) dan Automated Guided Vehicles (AGV) mengubah lanskap lini perakitan kendaraan modern.',
    content: `
Industri otomotif selalu menjadi lokomotif utama yang mendorong percepatan otomatisasi pabrik. Namun, era robot industri generasi terbaru bukan lagi robot besar yang terkurung dalam sangkar besi terpisah dari manusia. Era ini adalah era **Cobot (Collaborative Robot)** dan **Autonomous Mobile Robot (AMR)**.

### Keunggulan Cobot di Lini Perakitan
- **Aman Bersebelahan dengan Operator**: Dilengkapi sensor torsi pada setiap sendi dan pemindai area laser, robot kolaboratif langsung berhenti jika menyentuh tubuh manusia secara lembut.
- **Mudah Diprogram Ulang**: Fleksibel untuk pergantian varian produk (high-mix low-volume) tanpa perlu penulisan kode rumit berhari-hari.
- **Presisi Berulang Tinggi**: Mampu mengaplikasikan sealant perekat kaca mobil atau pengencangan baut torsi dengan deviasi nol.

Di PT Industri Nusantara, integrasi sistem robotik kami telah membantu sejumlah pabrik tier-1 komponen otomotif meningkatkan efisiensi ruang kerja hingga 30% dan mengeliminasi resiko cedera tulang belakang pada pekerja manual.
    `,
    category: 'Otomasi',
    author: {
      name: 'Agus Setiawan, S.T.',
      role: 'Lead Automation Engineer',
    },
    publishedAt: '15 Januari 2026',
    readTime: '5 Menit Baca',
    tags: ['Robotik', 'Cobot', 'Otomotif', 'AMR', 'Automasi Pabrik'],
    imageKey: 'article_robotics_trend',
    featured: false,
  },
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: 'testi-1',
    clientName: 'Bambang Trihatmojo',
    role: 'Vice President of Manufacturing',
    company: 'PT Astra Motor Component Indonesia',
    content:
      'PT Industri Nusantara menyelesaikan lini konveyor otomatis kami lebih cepat 2 minggu dari jadwal target tanpa mengorbankan kualitas toleransi sedikit pun. Tim engineering mereka sangat komunikatif dan memahami standar keselamatan industri otomotif kelas dunia.',
    rating: 5,
    projectRef: 'Sistem Konveyor Otomatis Pabrik Otomotif Karawang',
  },
  {
    id: 'testi-2',
    clientName: 'Ir. Rudi Hartono',
    role: 'Project Director EPC',
    company: 'Konsorsium Rekayasa Migas Balongan',
    content:
      'Kualitas pengelasan bejana tekan ASME mereka luar biasa bersih. Hasil uji radiografi 100% lulus pada inspeksi pertama. Dokumentasi data book dan sertifikat material disajikan sangat rapi sesuai regulasi migas yang ketat.',
    rating: 5,
    projectRef: 'Fabrikasi Bejana Tekan ASME & Piping Refinery',
  },
  {
    id: 'testi-3',
    clientName: 'Hitoshi Takahashi',
    role: 'Senior Plant Technical Advisor',
    company: 'PT Global Precision Electronics',
    content:
      'Kami memesan komponen CNC permesinan 5-axis dengan toleransi 5 mikron dan cell robotik assembly. Akurasi produk yang dikirimkan selalu konsisten dengan laporan inspeksi Zeiss CMM. Sangat merekomendasikan PT Industri Nusantara untuk kebutuhan presisi tinggi.',
    rating: 5,
    projectRef: 'Lini Perakitan Robotik Pabrik Elektronik Cikarang',
  },
  {
    id: 'testi-4',
    clientName: 'Dra. Endang Lestari, Apt.',
    role: 'Head of Production & Engineering',
    company: 'PT Pharmanusa Sehat Medika',
    content:
      'Mesin pengemas sachet custom pesanan kami memiliki tingkat kebersihan material SUS316L yang sempurna dan lolos audit verifikasi cGMP BPOM tanpa catatan minor. Layanan purnajual dan garansi mereka patut diacungi jempol.',
    rating: 5,
    projectRef: 'Custom Machine Packaging Sachet Farmasi',
  },
  {
    id: 'testi-5',
    clientName: 'Suryadi Kusuma',
    role: 'Maintenance Division Head',
    company: 'PT Krakatau Steel Heavy Machining',
    content:
      'Pengerjaan retrofit CNC bubut heavy duty kami menghemat anggaran pengadaan hingga ratusan juta rupiah dibanding beli mesin baru. Performa mesin yang direkondisi berjalan stabil 24 jam non-stop.',
    rating: 5,
    projectRef: 'Retrofit & Modernisasi Mesin CNC Lathe',
  },
];

export const initialClients: ClientItem[] = [
  { id: 'cli-1', name: 'Astra Group Components', industry: 'Otomotif & Transportasi', logoText: 'ASTRA COMPONENT' },
  { id: 'cli-2', name: 'Pertamina Refinery EPC', industry: 'Minyak & Gas Bumi', logoText: 'ENERGY REFINERY' },
  { id: 'cli-3', name: 'Krakatau Steel Division', industry: 'Baja & Infrastruktur', logoText: 'KRAKATAU STEEL' },
  { id: 'cli-4', name: 'PLN Nusantara Power', industry: 'Pembangkit Tenaga Listrik', logoText: 'NUSANTARA POWER' },
  { id: 'cli-5', name: 'Komatsu Forging Indonesia', industry: 'Alat Berat & Konstruksi', logoText: 'KOMATSU ALLIANCE' },
  { id: 'cli-6', name: 'Pharmanusa Medika', industry: 'Farmasi & Kesehatan', logoText: 'PHARMANUSA' },
  { id: 'cli-7', name: 'Panasonic Industrial Devices', industry: 'Elektronika Presisi', logoText: 'PRECISION DEVICES' },
  { id: 'cli-8', name: 'Samudera Logistik Nusantara', industry: 'Maritim & Pelabuhan', logoText: 'SAMUDERA MARITIME' },
];

export const initialSEOSettings: SEOSettings = {
  metaTitle: 'PT Industri Nusantara – Precision Manufacturing & Industrial Solutions',
  metaDescription:
    'Website resmi PT Industri Nusantara. Solusi manufaktur modern, fabrikasi logam presisi, CNC machining 5-axis, otomasi industri, dan custom machine berstandar ISO 9001:2015.',
  keywords:
    'manufaktur indonesia, fabrikasi logam, cnc machining 5 axis, laser cutting fiber, otomasi industri, precision engineering, bejana tekan asme, custom machine, pt industri nusantara, cikarang jababeka',
  canonicalUrl: 'https://industrinusantara.co.id',
  ogTitle: 'PT Industri Nusantara – Solusi Manufaktur & Rekayasa Presisi',
  ogDescription:
    'Solusi terpercaya fabrikasi logam berat, CNC permesinan mikro-presisi, dan otomasi industri modern dengan sertifikasi ISO dan ASME.',
  twitterCard: 'summary_large_image',
  siteName: 'PT Industri Nusantara',
  robots: 'index, follow',
  author: 'PT Industri Nusantara',
};

export const initialThemeSettings: ThemeSettings = {
  primaryColor: '#1e3a8a',
  secondaryColor: '#f97316',
  logoText: 'PT Industri Nusantara',
  tagline: 'Precision Manufacturing & Engineering',
  heroBadge: 'Pabrik Manufaktur Presisi & Otomasi Berstandar ISO 9001:2015',
  heroHeadline: 'Solusi Manufaktur Presisi & Rekayasa Industri Masa Depan',
  heroSubheadline:
    'Menghadirkan layanan fabrikasi logam berat, CNC machining 5-axis berskala mikro, fiber laser cutting otomatis, dan integrasi smart factory untuk industri nasional berkelas dunia.',
};

export const initialContactMessages: ContactMessage[] = [
  {
    id: 'msg-1',
    createdAt: '2026-03-24T14:30:00Z',
    name: 'Budi Darmawan',
    email: 'budi.darmawan@toyotakita.co.id',
    phone: '081234567890',
    company: 'PT Toyota Parts Sub-Assembly',
    serviceCategory: 'CNC Machining',
    message: 'Halo tim PT Industri Nusantara, kami membutuhkan penawaran harga pembuatan 500 unit housing transmisi aluminium dengan toleransi ±0.01 mm. Gambar teknis STP siap kami kirimkan.',
    status: 'unread',
  },
  {
    id: 'msg-2',
    createdAt: '2026-03-22T09:15:00Z',
    name: 'Citra Kirana',
    email: 'citra.kirana@chemtech.id',
    phone: '081987654321',
    company: 'PT Chemtech Multi Kimia',
    serviceCategory: 'Fabrikasi Logam',
    message: 'Selamat pagi, mohon informasi jadwal visit ke pabrik kami di Cilegon untuk estimasi fabrikasi bejana tekan tangki stainless steel kapasitas 20.000 liter.',
    status: 'read',
  },
];
