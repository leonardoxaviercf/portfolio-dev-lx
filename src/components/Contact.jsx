import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const contatos = [
    { nome: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/leonardoxaviercf/", color: "#0077b5" },
    { nome: "GitHub", icon: <FaGithub />, link: "https://github.com/leonardoxaviercf", color: "#333" },
    { nome: "E-mail", icon: <FaEnvelope />, link: "mailto:leonardocruzfilho8@gmail.com", color: "#ea4335" },
    { nome: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/5584994494895", color: "#25d366" }
  ];

  return (
    <section id="contato" className="full-page bg-dark">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Vamos construir algo juntos?</h1>
        <p style={{ marginBottom: '2rem' }}>Estou disponível para novos desafios em Backend e parcerias em projetos Open Source.</p>
        
        <div className="social-links" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {contatos.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              className="contact-card"
              style={{ '--brand-color': item.color }}
            >
              <span className="icon">{item.icon}</span>
              {item.nome}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}