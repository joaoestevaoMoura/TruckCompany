// Home.tsx
import "./Home.css";
import heroTruck from "../../Pages/Home/caminhao.png";

/* ====== ÍCONES (SVG inline, sem dependências externas) ====== */

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GaugeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="13" r="8" />
    <path d="M12 13l3-3" strokeLinecap="round" />
    <path d="M8 5.5L9 7M16 5.5L15 7M4 13H6M18 13H20" strokeLinecap="round" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 4.2c1.2.4 2 1.5 2 2.8s-.8 2.4-2 2.8" strokeLinecap="round" />
    <path d="M16 14c2.5.4 4 2 4 5" strokeLinecap="round" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M2 7h11v9H2z" strokeLinejoin="round" />
    <path d="M13 10h4l3 3v3h-7z" strokeLinejoin="round" />
    <circle cx="6" cy="18" r="1.6" />
    <circle cx="16.5" cy="18" r="1.6" />
  </svg>
);

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 7l9-4 9 4-9 4-9-4z" strokeLinejoin="round" />
    <path d="M3 7v10l9 4 9-4V7" strokeLinejoin="round" />
    <path d="M12 11v10" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ClipboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="4" width="14" height="17" rx="1.5" />
    <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
    <path d="M9 11l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ====== DADOS ====== */

const features = [
  {
    icon: ShieldIcon,
    title: "SEGURANÇA",
    text: "Cuidado e proteção em cada entrega.",
  },
  {
    icon: GaugeIcon,
    title: "AGILIDADE",
    text: "Processos eficientes para resultados reais.",
  },
  {
    icon: UsersIcon,
    title: "COMPROMISSO",
    text: "Parceria, transparência e excelência sempre.",
  },
];

const services = [
  {
    icon: TruckIcon,
    title: "TRANSPORTE RODOVIÁRIO",
    text: "Eficiência e pontualidade em todo o Brasil.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31ad?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: BoxIcon,
    title: "ARMAZENAGEM",
    text: "Estrutura completa para armazenar com segurança.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: PinIcon,
    title: "DISTRIBUIÇÃO",
    text: "Soluções sob medida para chegar mais longe.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=600&q=70",
  },
  {
    icon: ClipboardIcon,
    title: "GESTÃO LOGÍSTICA",
    text: "Planejamento inteligente para otimizar resultados.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=70",
  },
];

/* ====== COMPONENTE ====== */

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="line-white">INTELIGÊNCIA</span>
            <span className="line-accent">EM MOVIMENTO</span>
          </h1>

          <p className="hero-subtitle">
            Soluções logísticas completas para conectar destinos e
            impulsionar o seu negócio.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              NOSSOS SERVIÇOS <span className="arrow">→</span>
            </button>
            <button className="btn btn-outline">
              SAIBA MAIS <span className="arrow">→</span>
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroTruck} alt="Caminhão Truck Company" />
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="about">
        <div className="about-intro">
          <span className="eyebrow">QUEM SOMOS</span>
          <h2 className="about-title">
            MOVEMOS MAIS<br />
            QUE CARGAS,<br />
            <span className="text-accent">MOVEMOS</span><br />
            <span className="text-accent">POSSIBILIDADES.</span>
          </h2>
        </div>

        <p className="about-text">
          A Truck Company nasceu com o propósito de transformar a logística em
          uma experiência eficiente, segura e inteligente. Com tecnologia,
          planejamento e uma equipe comprometida, entregamos mais valor em
          cada quilômetro percorrido.
        </p>

        <div className="about-features">
          {features.map(({ icon: Icon, title, text }) => (
            <div className="feature" key={title}>
              <div className="feature-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOSSOS SERVIÇOS */}
      <section className="services">
        <div className="services-intro">
          <span className="eyebrow">NOSSOS SERVIÇOS</span>
          <h2 className="services-title">
            SOLUÇÕES LOGÍSTICAS<br />
            PARA CADA <span className="text-accent">DESAFIO.</span>
          </h2>
          <button className="btn btn-primary">
            VER TODOS SERVIÇOS <span className="arrow">→</span>
          </button>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, text, image }) => (
            <div
              className="service-card"
              key={title}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="service-card-overlay">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="underline" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;