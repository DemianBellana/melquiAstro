import { useRef } from 'react';
import { Play } from 'lucide-react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/TU_USUARIO',
  tiktok:    'https://tiktok.com/@TU_USUARIO',
  facebook:  'https://facebook.com/TU_USUARIO',
};

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

const IconTikTok = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const socialButtons = [
  { key: 'instagram', Icon: IconInstagram, label: 'Instagram', color: '#E1306C' },
  { key: 'tiktok',    Icon: IconTikTok,    label: 'TikTok',    color: '#010101' },
  { key: 'facebook',  Icon: IconFacebook,  label: 'Facebook',  color: '#1877F2' },
];

const SocialButtons = () => (
  <div className="flex gap-3 mt-6 justify-center">
    {socialButtons.map(({ key, Icon, label, color }) => (
      <a
        key={key}
        href={SOCIAL_LINKS[key as keyof typeof SOCIAL_LINKS]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-9 h-9 rounded-full flex items-center justify-center bg-cream/80 transition-all duration-200 hover:scale-110"
        style={{
          color: color,
          border: `1px solid ${color}33`,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = color + '88';
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.15)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = color + '33';
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        }}
      >
        <Icon />
      </a>
    ))}
  </div>
);

const VideoCard = ({ cat, index }: { cat: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, perspective: 900, transformStyle: "preserve-3d" }}
      initial={{ borderRadius: "20px" }}
      whileHover={{
        scale: 1.03,
        borderRadius: "32px 14px 32px 14px",
        y: -6,
        transition: {
          scale:        { type: "spring", stiffness: 260, damping: 18 },
          borderRadius: { duration: 0.4, ease: "easeInOut" },
          y:            { type: "spring", stiffness: 220, damping: 16 },
        },
      }}
      className="video-card group relative overflow-hidden bg-cream p-6 md:p-10 border border-[rgba(160,140,120,0.15)] shadow-sm transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(20,17,14,0.15)]"
    >
      <span className="font-serif text-[2rem] italic font-light text-accent block mb-4" style={{ transform: "translateZ(20px)" }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="font-serif text-[1.8rem] font-normal text-dark mb-4" style={{ transform: "translateZ(40px)" }}>
        {cat.name}
      </h3>
      <p className="text-[0.88rem] font-light leading-[1.8] text-mid mb-8" style={{ transform: "translateZ(30px)" }}>
        {cat.desc}
      </p>

      <motion.div
        className="relative aspect-[9/16] bg-dark overflow-hidden shadow-inner"
        style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
        initial={{ borderRadius: "14px" }}
        whileHover={{ borderRadius: "22px 8px 22px 8px", transition: { duration: 0.4, ease: "easeInOut" } }}
      >
        <video controls className="w-full h-full object-cover">
          <source src={cat.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: "translateZ(40px)" }}>
          <motion.div
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.28 }}
            transition={{ type: "spring", stiffness: 320, damping: 14 }}
          >
            <Play size={30} className="text-white fill-white ml-1" />
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile: siempre visibles con color. Desktop: aparecen al hover */}
      <div
        className="md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300"
        style={{ transform: "translateZ(30px)" }}
      >
        <SocialButtons />
      </div>
    </motion.div>
  );
};

const VideoWorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: 'Social Media', desc: 'Contenido optimizado para redes sociales.',  video: '/assets/video/work/social_media_1.mp4' },
    { name: 'Talking Head', desc: 'Entrevistas y contenido directo a cámara.',   video: '/assets/video/work/talking_head_1.mp4' },
    { name: 'Drone',        desc: 'Tomas aéreas cinematográficas.',              video: '/assets/video/work/drone_1.mp4' },
    { name: 'Events',       desc: 'Cobertura y edición de eventos en vivo.',     video: '/assets/video/work/event_1.mov' },
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray('.video-card');
    
    cards.forEach((card: any, i: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        x: i % 2 === 0 ? -100 : 100, // Izquierda si es par, derecha si es impar
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="video-work" ref={sectionRef} className="px-6 py-16 md:px-16 md:py-28 bg-warm-white overflow-hidden">
      <div className="text-center mb-16">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          02. Video Work
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mt-4">
          Categorías y<br /><em className="italic">especialidades</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mx-auto">
        {categories.map((cat, index) => (
          <VideoCard key={index} cat={cat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default VideoWorkSection;