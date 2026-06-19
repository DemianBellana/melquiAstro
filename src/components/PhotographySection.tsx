import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/TU_USUARIO',
  tiktok:    'https://tiktok.com/@TU_USUARIO',
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

const socialButtons = [
  { key: 'instagram', Icon: IconInstagram, label: 'Instagram', color: '#E1306C' },
  { key: 'tiktok',    Icon: IconTikTok,    label: 'TikTok',    color: '#010101' },
];

const CategoryCarousel = ({ photos, title, onImageClick, globalOffset }: { 
  photos: string[], 
  title: string, 
  onImageClick: (idx: number) => void,
  globalOffset: number 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<any>(null);
  
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isMobile) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, 5000);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isMobile, photos.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    resetTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart) return;
    const swipeThreshold = 50;
    if (dragOffset < -swipeThreshold) {
      handleNext();
    } else if (dragOffset > swipeThreshold) {
      handlePrev();
    } else {
      resetTimer();
    }
    setTouchStart(null);
    setDragOffset(0);
  };

  if (!isMobile) {
    return (
      <div className="photo-grid columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo, idx) => {
          const ratios = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[2/3]'];
          const ratio = ratios[idx % ratios.length];
          const offsets = ['', 'md:mt-12', 'md:-mt-8', 'md:mt-6'];
          const offset = offsets[idx % offsets.length];

          return (
            <div 
              key={idx} 
              className={`photo-card relative ${ratio} ${offset} break-inside-avoid mb-4 overflow-hidden group bg-dark/5 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500`}
              onClick={() => onImageClick(globalOffset + idx)}
            >
              <img 
                src={photo} 
                alt={`${title} ${idx + 1}`} 
                className="w-full h-full object-cover block transition-transform duration-700 ease-in-out brightness-[0.98] group-hover:scale-[1.1]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white/80 text-xs tracking-[0.2em] uppercase font-light border-b border-white/30 pb-1">
                  Ver detalle
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div 
      className="relative overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {photos.map((photo, idx) => (
          <div 
            key={idx} 
            className="min-w-full aspect-[3/4] px-1"
          >
            <div className="w-full h-full overflow-hidden rounded-sm">
              <img 
                src={photo} 
                alt={`${title} ${idx + 1}`} 
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-1.5 mt-4">
        {photos.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-4 bg-accent' : 'w-1 bg-dark/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const categories = [
  {
    title: 'Sports',
    photos: [
      '/assets/photo/sports/IMG_7085.AVIF',
      '/assets/photo/sports/IMG_7086.AVIF',
      '/assets/photo/sports/IMG_7087.AVIF',
      '/assets/photo/sports/IMG_7089.AVIF',
    ]
  },
  {
    title: 'Travel',
    photos: [
      '/assets/photo/travel/IMG_7126.AVIF',
      '/assets/photo/travel/IMG_7127.AVIF',
      '/assets/photo/travel/IMG_7128.AVIF',
      '/assets/photo/travel/IMG_7129.AVIF',
      '/assets/photo/travel/IMG_7130.AVIF',
      '/assets/photo/travel/IMG_7131.AVIF',
      '/assets/photo/travel/IMG_7132.AVIF',
      '/assets/photo/travel/IMG_7133.AVIF',
      '/assets/photo/travel/IMG_7134.AVIF',
      '/assets/photo/travel/IMG_7135.AVIF',
      '/assets/photo/travel/IMG_7136.AVIF',
      '/assets/photo/travel/IMG_7137.AVIF',
    ]
  },
  {
    title: 'Portraits',
    photos: [
      '/assets/photo/portraits/IMG_7150.AVIF',
      '/assets/photo/portraits/IMG_7152.AVIF',
      '/assets/photo/portraits/IMG_7153.AVIF',
      '/assets/photo/portraits/IMG_7154.AVIF',
      '/assets/photo/portraits/IMG_7155.AVIF',
      '/assets/photo/portraits/IMG_7156.AVIF',
    ]
  },
  {
    title: 'Events',
    photos: [
      '/assets/photo/events/IMG_7103.AVIF',
      '/assets/photo/events/IMG_7104.AVIF',
      '/assets/photo/events/IMG_7105.AVIF',
      '/assets/photo/events/IMG_7106.AVIF',
      '/assets/photo/events/IMG_7107.AVIF',
      '/assets/photo/events/IMG_7108.AVIF',
      '/assets/photo/events/IMG_7109.AVIF',
      '/assets/photo/events/IMG_7110.AVIF',
      '/assets/photo/events/IMG_7111.AVIF',
    ]
  }
];

const PhotographySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'Featured' | 'All' | string>('Featured');
  const [isMobileParent, setIsMobileParent] = useState(false);
  const [featuredPhotos, setFeaturedPhotos] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobileParent(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Select one random photo from each category
    const selected = categories.map(cat => {
      const randomIndex = Math.floor(Math.random() * cat.photos.length);
      return cat.photos[randomIndex];
    });
    setFeaturedPhotos(selected);
  }, []);

  useGSAP(() => {
    const categoryBlocks = gsap.utils.toArray('.category-block');
    
    categoryBlocks.forEach((block: any) => {
      const title = block.querySelector('.category-title');
      const content = block.querySelector('.photo-grid') || block.querySelector('.relative.overflow-hidden');

      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 92%',
          toggleActions: 'play none none reverse'
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      if (content) {
        gsap.from(content, {
          scrollTrigger: {
            trigger: content,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        });
      }
    });

    gsap.from('.section-header', {
      scrollTrigger: {
        trigger: '.section-header',
        start: 'top 90%',
      },
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  const allPhotos = categories.flatMap(cat => cat.photos);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) setSelectedImage((selectedImage + 1) % allPhotos.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) setSelectedImage((selectedImage - 1 + allPhotos.length) % allPhotos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  let currentGlobalOffset = 0;
  const categoriesWithOffsets = categories.map(cat => {
    const offset = currentGlobalOffset;
    currentGlobalOffset += cat.photos.length;
    return { ...cat, offset };
  });

  const filteredCategories = (isMobileParent && activeCategory !== 'All' && activeCategory !== 'Featured')
    ? categoriesWithOffsets.filter(cat => cat.title === activeCategory)
    : categoriesWithOffsets;

  const isFeatured = isMobileParent && activeCategory === 'Featured';

  return (
    <section id="photography" ref={sectionRef} className="px-6 py-16 md:px-16 md:py-28 bg-cream overflow-hidden">
      <div className="section-header text-center mb-16">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          03. Photography
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mt-4">
          Capturando la esencia<br /><em className="italic">en cada disparo</em>
        </h2>
      </div>

      {/* Selector de Categorías en Mobile */}
      <div className="flex md:hidden flex-wrap justify-center gap-2 mb-10 pb-4 max-w-[1400px] mx-auto border-b border-accent/10 px-4">
        {['All', ...categories.map(c => c.title), 'Featured'].map((tab) => {
          const isActive = activeCategory === tab;
          let label = tab;
          if (tab === 'Featured') label = 'Destacadas';
          else if (tab === 'All') label = 'Todas';
          return (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-full text-[11px] font-serif tracking-wider transition-all duration-300 ${
                isActive 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-dark/5 text-dark/60 hover:bg-dark/10'
              }`}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="space-y-16 md:space-y-24 max-w-[1400px] mx-auto">
        {isFeatured ? (
          <div className="category-block">
            <h3 className="category-title font-serif text-2xl mb-8 border-l-2 border-accent pl-4 text-dark/80">
              Destacadas
            </h3>
            <CategoryCarousel 
              photos={featuredPhotos} 
              title="Destacadas" 
              onImageClick={() => {}}
              globalOffset={0}
            />
          </div>
        ) : (
          filteredCategories.map((cat) => {
            return (
              <div key={cat.title} className="category-block">
                <h3 className="category-title font-serif text-2xl mb-8 border-l-2 border-accent pl-4 text-dark/80">
                  {cat.title}
                </h3>
                <CategoryCarousel 
                  photos={cat.photos} 
                  title={cat.title} 
                  onImageClick={setSelectedImage}
                  globalOffset={cat.offset}
                />
              </div>
            );
          })
        )}
      </div>

      {/* Redes sociales — al pie de la sección */}
      <div className="flex items-center justify-center gap-5 mt-20 pt-10 border-t border-accent/20 max-w-[1400px] mx-auto">
        <span className="font-serif italic text-sm text-accent">Seguime</span>
        {socialButtons.map(({ key, Icon, label, color }) => (
          <a
            key={key}
            href={SOCIAL_LINKS[key as keyof typeof SOCIAL_LINKS]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200"
            style={{ color, border: `1px solid ${color}33` }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = color + '88';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.15) translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = color + '33';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1) translateY(0)';
            }}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] bg-black/20 p-2 rounded-full hidden md:block"
              onClick={handlePrev}
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] bg-black/20 p-2 rounded-full hidden md:block"
              onClick={handleNext}
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>

            <motion.div 
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={allPhotos[selectedImage]} 
                alt="Selected"
                className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain shadow-2xl"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mt-6 text-white/90"
              >
                {(() => {
                  let currentCount = 0;
                  for (const cat of categories) {
                    if (selectedImage < currentCount + cat.photos.length) {
                      return (
                        <>
                          <span className="font-serif italic text-xl block mb-1">{cat.title}</span>
                          <span className="text-[0.7rem] uppercase tracking-widest text-white/50">
                            {selectedImage - currentCount + 1} / {cat.photos.length}
                          </span>
                        </>
                      );
                    }
                    currentCount += cat.photos.length;
                  }
                  return null;
                })()}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotographySection;