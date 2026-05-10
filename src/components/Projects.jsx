import RevealOnScroll from './RevealOnScroll';

export default function Projects() {
  const meusProjetos = [
    {
      title: "Django Barbearia",
      img: "/img/projeto-barbearia.png",
      repo: "https://github.com/leonardoxaviercf/projeto-barbearia-django",
      demo: "http://163.176.62.49/barbearia/",
    },
    {
      title: "Django Agenda",
      img: "/img/project-agenda.png",
      repo: "https://github.com/leonardoxaviercf/projeto-agenda-django",
      demo: "http://163.176.62.49/agenda/"
    },
    {
      title: "CineReact",
      img: "/img/projeto-cinema.png",
      repo: "https://github.com/leonardoxaviercf/projeto-cinema",
      demo: "https://projeto-cinema-coral.vercel.app/"
    },
    {
      title: "Landing Page",
      img: "/img/landing-page.png",
      repo: "https://github.com/leonardoxaviercf/Landing-Page",
      demo: "https://landingpagesimplelx.netlify.app/"
    },
    {
      title: "Gerador de Código de Barras",
      img: "/img/codigo-barras.png",
      repo: "https://github.com/leonardoxaviercf/Projeto-EAN8-ITP",
      demo: null,
    },
  ];

  return (
    <section id="projetos" className="full-page bg-light">
      <div className="container">
        <RevealOnScroll className="section-heading align-left">
          <h1 className="dark-title">Projetos em Destaque</h1>
        </RevealOnScroll>

        <div className="grid-projetos">
          {meusProjetos.map((proj, index) => (
            <RevealOnScroll className="card" key={proj.title} delay={index * 90}>
              <div className="projeto-thumb">
                <img src={proj.img} alt={proj.title} />
              </div>
              <div className="card-body">
                <h3>{proj.title}</h3>
                <div className="links">
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="btn">Ver Projeto</a>
                  )}
                  <a href={proj.repo} target="_blank" rel="noreferrer" className="btn secondary">
                    Código
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
