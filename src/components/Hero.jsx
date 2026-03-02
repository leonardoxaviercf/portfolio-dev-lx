export default function Hero() {
  return (
    <section id="sobre" className="full-page bg-dark">
      <div className="container grid-sobre">
        <div className="texto-sobre">
          <h1>Sobre Mim</h1>
          <p>
            Sou <strong>Leonardo Xavier</strong>, um desenvolvedor focado na construção de sistemas robustos e escaláveis. Atualmente, curso o Bacharelado em Tecnologia da Informação na <strong>UFRN (IMD)</strong>, onde aprofundo meus conhecimentos em arquitetura de software e algoritmos, mantendo a base técnica sólida adquirida no <strong>IFRN</strong>.
          </p>
          
          <p>
            Atualmente atuo como <strong>Estagiário de Suporte em TI na IDUS</strong>, onde busco desenvolver uma visão analítica apurada para identificar falhas e otimizar processos, competências que transponho diretamente para o desenvolvimento de software. Tenho forte domínio no ecossistema <strong>Python & Django (DRF)</strong>, com experiência prática na criação de sistemas de gestão e automações.
          </p>

          <p>
            Atualmente, estou expandindo meu stack para soluções corporativas com <strong>Java & Spring Boot</strong>, além de explorar tecnologias de infraestrutura como <strong>Docker e Google Cloud Platform (GCP)</strong>. Meu objetivo é unir a agilidade do desenvolvimento web moderno com a segurança de arquiteturas backend consolidadas.
          </p>
        </div>
        <div className="foto-perfil">
          <img src="/img/me.jpeg" alt="Leonardo Xavier" />
        </div>
      </div>
    </section>
  );
}