import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ftr-root">
      <div className="ftr-top">
        <div>
          <div className="ftr-brand">
            <div className="drone-wrap">
              <svg
                className="drone-anim"
                width="72"
                height="72"
                viewBox="0 0 80 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="prop-fl">
                  <ellipse cx="28" cy="22" rx="13" ry="3.5" fill="none" stroke="rgba(232,226,216,0.55)" strokeWidth="1.2" />
                </g>
                <g className="prop-fr">
                  <ellipse cx="52" cy="22" rx="13" ry="3.5" fill="none" stroke="rgba(232,226,216,0.55)" strokeWidth="1.2" />
                </g>
                <g className="prop-bl">
                  <ellipse cx="28" cy="48" rx="13" ry="3.5" fill="none" stroke="rgba(232,226,216,0.55)" strokeWidth="1.2" />
                </g>
                <g className="prop-br">
                  <ellipse cx="52" cy="48" rx="13" ry="3.5" fill="none" stroke="rgba(232,226,216,0.55)" strokeWidth="1.2" />
                </g>
                <line x1="28" y1="22" x2="36" y2="33" stroke="rgba(232,226,216,0.6)" strokeWidth="1.4" />
                <line x1="52" y1="22" x2="44" y2="33" stroke="rgba(232,226,216,0.6)" strokeWidth="1.4" />
                <line x1="28" y1="48" x2="36" y2="37" stroke="rgba(232,226,216,0.6)" strokeWidth="1.4" />
                <line x1="52" y1="48" x2="44" y2="37" stroke="rgba(232,226,216,0.6)" strokeWidth="1.4" />
                <rect x="33" y="31" width="14" height="8" rx="2" fill="rgba(232,226,216,0.18)" stroke="rgba(232,226,216,0.55)" strokeWidth="1" />
                <rect x="35" y="29" width="10" height="4" rx="1.5" fill="rgba(232,226,216,0.12)" stroke="rgba(232,226,216,0.4)" strokeWidth="0.8" />
                <rect x="37" y="38" width="6" height="5" rx="1" fill="rgba(200,168,130,0.35)" stroke="rgba(200,168,130,0.6)" strokeWidth="0.8" />
                <circle cx="40" cy="40.5" r="1.2" fill="#C8A882" opacity="0.8" />
                <line x1="35" y1="39" x2="33" y2="44" stroke="rgba(232,226,216,0.4)" strokeWidth="0.8" />
                <line x1="45" y1="39" x2="47" y2="44" stroke="rgba(232,226,216,0.4)" strokeWidth="0.8" />
                <line x1="28" y1="22" x2="28" y2="25.5" stroke="rgba(232,226,216,0.5)" strokeWidth="1.4" />
                <circle cx="28" cy="22" r="2" fill="rgba(232,226,216,0.7)" />
                <line x1="52" y1="22" x2="52" y2="25.5" stroke="rgba(232,226,216,0.5)" strokeWidth="1.4" />
                <circle cx="52" cy="22" r="2" fill="rgba(232,226,216,0.7)" />
                <line x1="28" y1="48" x2="28" y2="44.5" stroke="rgba(232,226,216,0.5)" strokeWidth="1.4" />
                <circle cx="28" cy="48" r="2" fill="rgba(232,226,216,0.7)" />
                <line x1="52" y1="48" x2="52" y2="44.5" stroke="rgba(232,226,216,0.5)" strokeWidth="1.4" />
                <circle cx="52" cy="48" r="2" fill="rgba(232,226,216,0.7)" />
                <ellipse cx="40" cy="62" rx="14" ry="3" fill="rgba(0,0,0,0.12)" />
              </svg>
            </div>
            <div style={{ paddingTop: "6px" }}>
              <p className="ftr-brand-name">Melisa Quiroga</p>
            </div>
          </div>
          <p className="ftr-brand-sub">Video Editor & Content Creator</p>
          <p className="ftr-tagline">
            Historias que impactan.
            <br />
            Argentinas & Worldwide.
            <br />
            Disponible para proyectos freelance.
          </p>
          <div className="ftr-socials">
            <a href="https://www.instagram.com/melquigrafias/" target="_blank" rel="noopener noreferrer" className="ftr-social-link">Instagram</a>
            <a href="https://www.tiktok.com/@meelqui" target="_blank" rel="noopener noreferrer" className="ftr-social-link">TikTok</a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="ftr-social-link">Vimeo</a>
          </div>
        </div>

        <div>
          <p className="ftr-col-label">Navegación</p>
          <ul className="ftr-nav-list">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#reels">Reels</a></li>
            <li><a href="#video-work">Video Work</a></li>
            <li><a href="#photography">Fotografía</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div>
          <p className="ftr-col-label">Especialidades</p>
          <ul className="ftr-nav-list">
            <li><a href="#reels">Edición de Reels</a></li>
            <li><a href="#reels">Storytelling</a></li>
            <li><a href="#video-work">Drone Work</a></li>
            <li><a href="#photography">Photography</a></li>
          </ul>
        </div>

        <div>
          <p className="ftr-col-label">Contacto</p>
          <ul className="ftr-nav-list">
            <li>
              <a href="mailto:hola@melisaquiroga.com">
                hola@melisaquiroga.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/5491166898081" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>

      <div className="ftr-bottom">
        <p className="ftr-copy">
          © 2025 Melisa Quiroga · Video Editor & Content Creator · All rights reserved
        </p>
        <p className="ftr-made">
          Designed & Developed by <a href="https://codenofrontier.com" target="_blank" rel="noopener noreferrer">Code No Frontier</a>
        </p>
      </div>
    </footer>
  );
}
