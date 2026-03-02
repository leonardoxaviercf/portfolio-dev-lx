import { useState } from 'react';
import { FaPython, FaJava, FaJs, FaDocker, FaGitAlt, FaTerminal } from "react-icons/fa";
import { 
  SiDjango, SiSpringboot, SiReact, SiPostgresql, 
  SiMysql, SiGooglecloud, SiJira
} from "react-icons/si";

export default function Skills() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Linguagens');

  const stack = {
    Linguagens: [
      { nome: "Python", icon: <FaPython color="#3776ab" /> },
      { nome: "Django", icon: <SiDjango color="#092e20" /> },
      { nome: "Java", icon: <FaJava color="#007396" /> },
      { nome: "Spring Boot", icon: <SiSpringboot color="#6db33f" /> },
      { nome: "JavaScript", icon: <FaJs color="#f7df1e" /> },
      { nome: "React", icon: <SiReact color="#61dafb" /> },
      { nome: "C/C++", icon: <FaTerminal color="#64748b" /> },
    ],
    Bancos: [
      { nome: "MySQL", icon: <SiMysql color="#4479a1" /> },
      { nome: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    ],
    Ferramentas: [
      { nome: "Docker", icon: <FaDocker color="#2496ed" /> },
      { nome: "GCP", icon: <SiGooglecloud color="#4285f4" /> },
      { nome: "Git/GitHub", icon: <FaGitAlt color="#f05032" /> },
      { nome: "Jira", icon: <SiJira color="#0052cc" /> },
    ]
  };

  return (
    <section id="tecnologias" className="full-page bg-light">
      <div className="container">
        <h1 className="dark-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Tecnologias
        </h1>

        {/* Menu de Abas */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {Object.keys(stack).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`contact-btn ${categoriaAtiva === cat ? 'active-tab' : ''}`}
              style={{
                padding: '10px 25px',
                backgroundColor: categoriaAtiva === cat ? '#38bdf8' : 'transparent',
                color: categoriaAtiva === cat ? '#fff' : '#38bdf8',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Dinâmica de Badges */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '15px',
          minHeight: '150px' 
        }}>
          {stack[categoriaAtiva].map((tech, index) => (
            <div key={index} className="tech-badge" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              fontSize: '1.1rem'
            }}>
              <span style={{ fontSize: '1.5rem', display: 'flex' }}>{tech.icon}</span>
              {tech.nome}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}