import React, { useState } from 'react';

interface IndustrialImageProps {
  imageKey?: string;
  imageUrl?: string;
  alt: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | 'auto';
  priority?: boolean;
}

export const IndustrialImage: React.FC<IndustrialImageProps> = ({
  imageKey = 'industrial_plant',
  imageUrl,
  alt,
  className = '',
  aspectRatio = '16:9',
}) => {
  const [imgError, setImgError] = useState(false);

  // If a valid custom image URL is provided (e.g. from user upload or online link) and hasn't errored
  if (imageUrl && !imgError && (imageUrl.startsWith('http') || imageUrl.startsWith('data:') || imageUrl.startsWith('/'))) {
    return (
      <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
        <img
          src={imageUrl}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  const aspectClass =
    aspectRatio === '16:9'
      ? 'aspect-video'
      : aspectRatio === '4:3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1:1'
      ? 'aspect-square'
      : 'h-full w-full';

  // Return crisp, high-aesthetic vectorized industrial artwork tailored to the scene
  return (
    <div className={`relative overflow-hidden bg-slate-950 select-none group ${aspectClass} ${className}`}>
      {renderIndustrialArtwork(imageKey, alt)}
      {/* Subtle glass overlay & industrial hairline border */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
      {/* Light sheen on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
};

function renderIndustrialArtwork(key: string, alt: string) {
  switch (key) {
    case 'hero_plant':
    case 'industrial_plant':
      return (
        <svg viewBox="0 0 1200 675" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="60%" stopColor="#1C2541" />
              <stop offset="100%" stopColor="#0A1128" />
            </linearGradient>
            <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.3" />
            </linearGradient>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Background & Sky */}
          <rect width="1200" height="675" fill="url(#skyGrad)" />
          <rect width="1200" height="420" fill="url(#grid)" />

          {/* Factory Ceiling Trusses / Architecture */}
          <g stroke="#334155" strokeWidth="2" opacity="0.6">
            <line x1="0" y1="80" x2="1200" y2="80" />
            <line x1="0" y1="140" x2="1200" y2="140" />
            {Array.from({ length: 15 }).map((_, i) => (
              <React.Fragment key={i}>
                <line x1={i * 85} y1="80" x2={i * 85 + 42} y2="140" stroke="#475569" strokeWidth="1.5" />
                <line x1={i * 85 + 85} y1="80" x2={i * 85 + 42} y2="140" stroke="#475569" strokeWidth="1.5" />
                <line x1={i * 85} y1="80" x2={i * 85} y2="280" stroke="#1E293B" strokeWidth="3" />
              </React.Fragment>
            ))}
          </g>

          {/* Overhead Gantry Crane Rail */}
          <rect x="0" y="150" width="1200" height="24" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5" opacity="0.8" />
          <rect x="420" y="142" width="220" height="38" rx="4" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
          <text x="530" y="166" fill="#93C5FD" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            CRANE 25 TON TANDEM
          </text>
          <line x1="480" y1="180" x2="480" y2="340" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 3" />
          <line x1="580" y1="180" x2="580" y2="340" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 3" />

          {/* High-Bay Industrial Light Fixtures */}
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i} transform={`translate(${160 + i * 180}, 75)`}>
              <polygon points="0,5 25,5 35,25 -10,25" fill="#475569" />
              <polygon points="-8,25 33,25 70,220 -45,220" fill="url(#beamGrad)" opacity="0.25" />
              <circle cx="12" cy="27" r="4" fill="#E0F2FE" />
            </g>
          ))}

          {/* Factory Epoxy Floor with Reflections */}
          <polygon points="0,380 1200,380 1200,675 0,675" fill="url(#floorGrad)" />
          {/* Floor Guidelines */}
          <line x1="100" y1="675" x2="400" y2="380" stroke="#EAB308" strokeWidth="4" strokeDasharray="25 15" opacity="0.7" />
          <line x1="1100" y1="675" x2="800" y2="380" stroke="#EAB308" strokeWidth="4" strokeDasharray="25 15" opacity="0.7" />

          {/* CNC Machine Station 1 (Left) */}
          <g transform="translate(140, 290)">
            <rect x="0" y="0" width="220" height="180" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            <rect x="20" y="20" width="130" height="90" rx="4" fill="#020617" stroke="#38BDF8" strokeWidth="1.5" />
            {/* CNC Window View */}
            <circle cx="85" cy="65" r="28" fill="#0F172A" stroke="#60A5FA" strokeWidth="2" />
            <circle cx="85" cy="65" r="8" fill="#38BDF8" />
            <rect x="165" y="25" width="40" height="80" rx="3" fill="#0F172A" stroke="#334155" />
            <circle cx="185" cy="45" r="7" fill="#22C55E" />
            <circle cx="185" cy="65" r="7" fill="#EAB308" />
            <circle cx="185" cy="85" r="7" fill="#EF4444" />
            <text x="110" y="145" fill="#94A3B8" fontSize="11" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
              DMG MORI 5-AXIS #01
            </text>
          </g>

          {/* Heavy Steel Fabrication Workpiece (Center) */}
          <g transform="translate(450, 310)">
            <ellipse cx="150" cy="180" rx="140" ry="25" fill="#090D16" opacity="0.8" />
            <polygon points="50,60 250,60 270,170 30,170" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <ellipse cx="150" cy="60" rx="100" ry="24" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            <ellipse cx="150" cy="60" rx="60" ry="14" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
            {/* Welding sparks effect */}
            <circle cx="190" cy="115" r="16" fill="url(#orangeGlow)" filter="blur(4px)" />
            <line x1="190" y1="115" x2="225" y2="90" stroke="#FDE047" strokeWidth="2" />
            <line x1="190" y1="115" x2="230" y2="135" stroke="#FB923C" strokeWidth="1.5" />
            <line x1="190" y1="115" x2="160" y2="140" stroke="#F97316" strokeWidth="2" />
          </g>

          {/* Robotic Welding Arm (Right) */}
          <g transform="translate(860, 260)">
            {/* Robot Base */}
            <rect x="60" y="180" width="80" height="40" rx="6" fill="#0F172A" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="100" cy="180" r="22" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
            {/* Robot Lower Arm */}
            <line x1="100" y1="180" x2="40" y2="90" stroke="#2563EB" strokeWidth="14" strokeLinecap="round" />
            <circle cx="40" cy="90" r="16" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="2" />
            {/* Robot Upper Arm */}
            <line x1="40" y1="90" x2="110" y2="30" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round" />
            <circle cx="110" cy="30" r="12" fill="#1E40AF" />
            {/* End Effector Torch */}
            <line x1="110" y1="30" x2="140" y2="70" stroke="#94A3B8" strokeWidth="6" />
            <polygon points="135,70 145,70 148,85 132,85" fill="#EA580C" />
            <circle cx="140" cy="88" r="8" fill="#FACC15" />
          </g>

          {/* Atmospheric Technical Watermark & Specs */}
          <g transform="translate(40, 630)" fill="#64748B" fontSize="12" fontFamily="monospace">
            <text x="0" y="0">FACILITY AREA: 15,000 M² · ISO 9001:2015 REGISTERED · CIKARANG JABABEKA V</text>
            <text x="0" y="20" fill="#3B82F6">STATUS: OPERATIONAL · 38 CNC UNITS · 15 kW FIBER LASER ACTIVE</text>
          </g>
        </svg>
      );

    case 'service_cnc':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#0A0F1D" />
          {/* Blueprint concentric coordinate grid */}
          <g stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4">
            <circle cx="400" cy="300" r="120" />
            <circle cx="400" cy="300" r="220" />
            <line x1="400" y1="0" x2="400" y2="600" />
            <line x1="0" y1="300" x2="800" y2="300" />
          </g>
          {/* 5-Axis Spindle Head Assembly */}
          <g transform="translate(350, 40)">
            <rect x="0" y="0" width="100" height="140" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2.5" />
            <polygon points="20,140 80,140 65,220 35,220" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
            {/* Carbide End Mill Tool */}
            <rect x="42" y="220" width="16" height="70" fill="#E2E8F0" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Flutes */}
            <path d="M 42 235 Q 50 245 58 235 M 42 255 Q 50 265 58 255 M 42 275 Q 50 285 58 275" stroke="#0284C7" strokeWidth="2" fill="none" />
            {/* Coolant jets */}
            <line x1="15" y1="170" x2="45" y2="280" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.8" />
            <line x1="85" y1="170" x2="55" y2="280" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.8" />
          </g>
          {/* Workpiece: High Precision Impeller Blisk */}
          <g transform="translate(400, 420)">
            <ellipse cx="0" cy="30" rx="180" ry="50" fill="#0F172A" />
            <ellipse cx="0" cy="0" rx="160" ry="40" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <ellipse cx="0" cy="-20" rx="130" ry="32" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            {/* Impeller Curved Blades */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = Math.cos(angle) * 40;
              const y1 = Math.sin(angle) * 12;
              const x2 = Math.cos(angle + 0.5) * 120;
              const y2 = Math.sin(angle + 0.5) * 30;
              return (
                <path
                  key={i}
                  d={`M ${x1} ${y1} Q ${x1 * 1.5 + 20} ${y1 * 1.5 - 25} ${x2} ${y2}`}
                  stroke="#38BDF8"
                  strokeWidth="3.5"
                  fill="none"
                />
              );
            })}
            <circle cx="0" cy="-20" r="28" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="0" cy="-20" r="10" fill="#38BDF8" />
          </g>
          {/* Metadata Overlay */}
          <g transform="translate(40, 540)" fill="#94A3B8" fontFamily="monospace" fontSize="13">
            <text x="0" y="0" fill="#38BDF8" fontWeight="bold">TOLERANSI: ±0.005 mm · SPINDLE: 20.000 RPM</text>
            <text x="0" y="24">5-AXIS SIMULTANEOUS · TITANIUM & AERO ALLOY READY</text>
          </g>
        </svg>
      );

    case 'service_laser':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#030712" />
          {/* Industrial Honeycomb cutting slat bed */}
          <g stroke="#1E293B" strokeWidth="2" opacity="0.6">
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1="0" y1={250 + i * 25} x2="800" y2={250 + i * 25} />
            ))}
          </g>
          {/* Steel Plate Sheet */}
          <polygon points="80,300 720,300 750,520 50,520" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
          {/* Laser Cut Path */}
          <path
            d="M 180 440 L 320 440 L 400 370 L 540 370 L 600 450"
            stroke="#F97316"
            strokeWidth="3.5"
            fill="none"
            strokeDasharray="8 2"
          />
          {/* Cut Geometries in Plate */}
          <rect x="220" y="340" width="70" height="50" rx="4" fill="#030712" stroke="#F97316" strokeWidth="1.5" />
          <circle cx="480" cy="440" r="32" fill="#030712" stroke="#F97316" strokeWidth="1.5" />

          {/* Laser Cutting Head */}
          <g transform="translate(365, 80)">
            <rect x="0" y="0" width="70" height="150" rx="6" fill="#0F172A" stroke="#3B82F6" strokeWidth="2" />
            <polygon points="10,150 60,150 42,210 28,210" fill="#334155" stroke="#60A5FA" strokeWidth="1.5" />
            {/* Concentrated Fiber Laser Beam */}
            <line x1="35" y1="210" x2="35" y2="290" stroke="#FEF08A" strokeWidth="3" />
            <line x1="35" y1="210" x2="35" y2="290" stroke="#F97316" strokeWidth="1" />
          </g>

          {/* Searing Orange Spark Shower */}
          <g transform="translate(400, 370)">
            <circle cx="0" cy="0" r="14" fill="#FEF08A" />
            <circle cx="0" cy="0" r="32" fill="#F97316" opacity="0.4" filter="blur(8px)" />
            {Array.from({ length: 24 }).map((_, i) => {
              const rad = (i * 15 * Math.PI) / 180;
              const len = 30 + (i % 5) * 20;
              return (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={Math.cos(rad) * len}
                  y2={Math.abs(Math.sin(rad)) * len + 10}
                  stroke={i % 2 === 0 ? '#FACC15' : '#EA580C'}
                  strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
                />
              );
            })}
          </g>

          <g transform="translate(40, 540)" fill="#94A3B8" fontFamily="monospace" fontSize="13">
            <text x="0" y="0" fill="#F97316" fontWeight="bold">FIBER LASER: 15.000 WATT · DUAL SHUTTLE TABLE</text>
            <text x="0" y="24">MILD STEEL UP TO 35 MM · NITROGEN CLEAN CUT EDGE</text>
          </g>
        </svg>
      );

    case 'service_fabrication':
    case 'project_steel_structure':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#0B132B" />
          {/* Engineering grid */}
          <g stroke="#1E293B" strokeWidth="1">
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="600" opacity="0.3" />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={i} x1="0" y1={i * 50} x2="800" y2={i * 50} opacity="0.3" />
            ))}
          </g>
          {/* Heavy I-Beam Girder Structure */}
          <g transform="translate(100, 150)">
            {/* Top Flange */}
            <polygon points="0,0 550,0 600,40 50,40" fill="#334155" stroke="#64748B" strokeWidth="2" />
            {/* Web */}
            <polygon points="250,40 300,40 300,240 250,240" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            {/* Bottom Flange */}
            <polygon points="50,240 600,240 550,280 0,280" fill="#334155" stroke="#64748B" strokeWidth="2" />
            {/* Stiffener Gusset Plates */}
            <polygon points="120,40 160,40 160,240 120,240" fill="#475569" stroke="#94A3B8" strokeWidth="1.5" />
            <polygon points="400,40 440,40 440,240 400,240" fill="#475569" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Bolt Holes Pattern */}
            <circle cx="140" cy="80" r="5" fill="#0F172A" stroke="#38BDF8" />
            <circle cx="140" cy="140" r="5" fill="#0F172A" stroke="#38BDF8" />
            <circle cx="140" cy="200" r="5" fill="#0F172A" stroke="#38BDF8" />
            <circle cx="420" cy="80" r="5" fill="#0F172A" stroke="#38BDF8" />
            <circle cx="420" cy="140" r="5" fill="#0F172A" stroke="#38BDF8" />
            <circle cx="420" cy="200" r="5" fill="#0F172A" stroke="#38BDF8" />
          </g>
          {/* Dimension Guidelines & CAD Callouts */}
          <g stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3">
            <line x1="80" y1="150" x2="80" y2="430" />
            <line x1="70" y1="150" x2="90" y2="150" strokeDasharray="none" />
            <line x1="70" y1="430" x2="90" y2="430" strokeDasharray="none" />
          </g>
          <text x="65" y="295" fill="#38BDF8" fontSize="12" fontFamily="monospace" transform="rotate(-90 65 295)" textAnchor="middle">
            H-BEAM 600 x 300 mm
          </text>
          <g transform="translate(40, 540)" fill="#94A3B8" fontFamily="monospace" fontSize="13">
            <text x="0" y="0" fill="#38BDF8" fontWeight="bold">FABRIKASI STRUKTUR & BEJANA TEKAN</text>
            <text x="0" y="24">STANDAR AWS D1.1 / ASME SEC IX · BLASTING Sa 2.5</text>
          </g>
        </svg>
      );

    case 'service_automation':
    case 'project_robotics':
    case 'article_smart_factory':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#060D1F" />
          {/* Cybernetic Grid & Node Network */}
          <g stroke="#1E3A8A" strokeWidth="1.5" opacity="0.4">
            <line x1="100" y1="100" x2="300" y2="250" />
            <line x1="300" y1="250" x2="500" y2="180" />
            <line x1="500" y1="180" x2="700" y2="280" />
            <line x1="300" y1="250" x2="400" y2="420" />
            <line x1="400" y1="420" x2="650" y2="400" />
          </g>
          {/* Network Nodes */}
          {[[100, 100], [300, 250], [500, 180], [700, 280], [400, 420], [650, 400]].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="18" fill="#0B132B" stroke="#3B82F6" strokeWidth="2" />
              <circle cx={cx} cy={cy} r="6" fill="#60A5FA" />
            </g>
          ))}
          {/* SCADA Industrial Dashboard Panel Mock */}
          <g transform="translate(180, 120)">
            <rect x="0" y="0" width="440" height="260" rx="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <rect x="15" y="15" width="410" height="40" rx="4" fill="#1E293B" />
            <text x="30" y="40" fill="#38BDF8" fontFamily="monospace" fontSize="13" fontWeight="bold">
              SCADA CENTRAL · OEE: 94.8% · RUNNING
            </text>
            <circle cx="400" cy="35" r="7" fill="#22C55E" />
            {/* Live Chart Lines */}
            <path
              d="M 30 200 L 90 170 L 150 190 L 210 130 L 270 145 L 330 100 L 390 115"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="3"
            />
            {/* Bar Charts */}
            <rect x="50" y="215" width="25" height="25" fill="#3B82F6" />
            <rect x="90" y="195" width="25" height="45" fill="#3B82F6" />
            <rect x="130" y="175" width="25" height="65" fill="#22C55E" />
            <rect x="170" y="185" width="25" height="55" fill="#3B82F6" />
            <rect x="210" y="160" width="25" height="80" fill="#22C55E" />
            <rect x="250" y="200" width="25" height="40" fill="#EAB308" />
            <rect x="290" y="165" width="25" height="75" fill="#22C55E" />
          </g>
          <g transform="translate(40, 540)" fill="#94A3B8" fontFamily="monospace" fontSize="13">
            <text x="0" y="0" fill="#38BDF8" fontWeight="bold">OTOMASI INDUSTRI & PLC SCADA</text>
            <text x="0" y="24">SIEMENS S7-1500 · ROBOTIKA 6-AXIS · IIOT SENSOR</text>
          </g>
        </svg>
      );

    case 'project_pressure_vessel':
    case 'service_welding':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#07101E" />
          {/* Pressure Vessel Horizontal Tank */}
          <g transform="translate(120, 180)">
            {/* Saddle Supports */}
            <polygon points="120,240 180,240 160,300 140,300" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <polygon points="380,240 440,240 420,300 400,300" fill="#334155" stroke="#64748B" strokeWidth="2" />
            {/* Left Dished Head */}
            <path d="M 100 40 C 20 40 20 240 100 240 Z" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
            {/* Shell Body */}
            <rect x="100" y="40" width="360" height="200" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
            {/* Circumferential Weld Seams */}
            <line x1="100" y1="40" x2="100" y2="240" stroke="#F97316" strokeWidth="3" />
            <line x1="220" y1="40" x2="220" y2="240" stroke="#F97316" strokeWidth="3" />
            <line x1="340" y1="40" x2="340" y2="240" stroke="#F97316" strokeWidth="3" />
            <line x1="460" y1="40" x2="460" y2="240" stroke="#F97316" strokeWidth="3" />
            {/* Right Dished Head */}
            <path d="M 460 40 C 540 40 540 240 460 240 Z" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
            {/* Manhole & Top Nozzles */}
            <rect x="250" y="0" width="60" height="40" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <rect x="240" y="-10" width="80" height="15" rx="3" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            <rect x="150" y="10" width="30" height="30" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <rect x="390" y="10" width="30" height="30" fill="#334155" stroke="#64748B" strokeWidth="2" />
          </g>
          {/* ASME Stamp Badge */}
          <g transform="translate(620, 100)">
            <polygon points="40,0 80,24 80,70 40,94 0,70 0,24" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
            <text x="40" y="52" fill="#E0F2FE" fontSize="18" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
              ASME
            </text>
            <text x="40" y="68" fill="#93C5FD" fontSize="10" fontFamily="sans-serif" textAnchor="middle">
              SEC VIII
            </text>
          </g>
          <g transform="translate(40, 540)" fill="#94A3B8" fontFamily="monospace" fontSize="13">
            <text x="0" y="0" fill="#F97316" fontWeight="bold">PRESSURE VESSEL 45 BAR · SA 516 GR 70</text>
            <text x="0" y="24">100% RADIOGRAPHIC EXAMINATION (RT) · ASME COMPLIANT</text>
          </g>
        </svg>
      );

    default:
      // Generic high-grade technical isometric blueprint
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#0A1128" />
          <g stroke="#1E293B" strokeWidth="1" opacity="0.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={i} x1="0" y1={i * 40} x2="800" y2={i * 40} />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="600" />
            ))}
          </g>
          {/* Central Technical Icon Graphic */}
          <g transform="translate(400, 270)">
            <circle cx="0" cy="0" r="110" fill="#0F172A" stroke="#2563EB" strokeWidth="3" />
            <circle cx="0" cy="0" r="80" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="8 4" />
            {/* Gear Teeth */}
            {Array.from({ length: 8 }).map((_, i) => (
              <rect
                key={i}
                x="-15"
                y="-135"
                width="30"
                height="30"
                rx="4"
                fill="#2563EB"
                transform={`rotate(${i * 45})`}
              />
            ))}
            <polygon points="-30,-40 30,-40 40,40 -40,40" fill="#3B82F6" opacity="0.7" />
            <circle cx="0" cy="0" r="25" fill="#0F172A" stroke="#60A5FA" strokeWidth="2" />
          </g>
          <g transform="translate(40, 530)" fill="#94A3B8" fontFamily="monospace" fontSize="13">
            <text x="0" y="0" fill="#38BDF8" fontWeight="bold">
              {alt.toUpperCase()}
            </text>
            <text x="0" y="24" fill="#64748B">
              PT INDUSTRI NUSANTARA · QUALITY PRECISION ENGINEERING
            </text>
          </g>
        </svg>
      );
  }
}
