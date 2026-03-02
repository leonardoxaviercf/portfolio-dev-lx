export default function Projects() {
  const meusProjetos = [
    {
      title: "Django Barbearia",
      img: "/img/projeto-barbearia.png",
      repo: "https://github.com/leonardoxaviercf/projeto-barbearia-django",
      demo: null,
    },
    { 
      title: "Django Agenda", 
      img: "/img/project-agenda.png", 
      repo: "https://github.com/leonardoxaviercf/projeto-agenda-django",
      demo: "http://136.119.163.248/"
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
        <h1 className="dark-title">Projetos em Destaque</h1>
        <div className="grid-projetos">
          {meusProjetos.map((proj, index) => (
            <div className="card" key={index}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}