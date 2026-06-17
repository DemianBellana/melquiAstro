import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Reels', href: '#reels' },
    { name: 'Video Work', href: '#video-work' },
    { name: 'Fotografía', href: '#photography' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-16 py-6 bg-[rgba(250,248,244,0.92)] backdrop-blur-md border-b border-[rgba(160,140,120,0.12)] transition-all duration-300 ${
        isScrolled ? 'shadow-[0_2px_30px_rgba(20,17,14,0.08)]' : 'shadow-none'
      }`}
    >
      <a href="#" className="font-serif text-[1.15rem] font-normal tracking-[0.12em] text-dark uppercase no-underline">
        Melisa Quiroga
      </a>
      <ul className="hidden md:flex gap-10 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="text-[0.72rem] font-light tracking-[0.18em] uppercase text-mid no-underline transition-colors duration-200 hover:text-dark"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
