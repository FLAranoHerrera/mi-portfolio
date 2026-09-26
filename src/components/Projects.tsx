import { PROJECTS_DATA } from "@/config/projects";
export default function Projects() {
  return (
    <section
      className="section wrap"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <p className="eyebrow">02 / PROYECTOS SELECCIONADOS</p>
        <h2 id="projects-title">Del problema al producto.</h2>
        <p className="muted">
          Una selección de mi trabajo en backend y aplicaciones web.
        </p>
      </div>
      <div className="project-grid">
        {PROJECTS_DATA.featured.map((project) => (
          <article className="project-card" key={project.id}>
            <a
              className="project-image"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir demo de ${project.title}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
                alt={`Captura de ${project.title}`}
                width="1280"
                height="720"
                loading="lazy"
              />
            </a>
            <div className="project-body">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="contribution">
                <strong>Mi aportación</strong>
                {project.contribution}
              </p>
              {project.demoNote && <p className="muted small">{project.demoNote}</p>}
              <ul className="tags" aria-label="Tecnologías">
                {project.technologies.slice(0, 4).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  Ver demo ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver código de ${project.title}`}
                >
                  {project.frontendGithub ? "Backend ↗" : "Código ↗"}
                </a>
                {project.frontendGithub && (
                  <a href={project.frontendGithub} target="_blank" rel="noreferrer">Frontend ↗</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <details className="other-projects">
        <summary>
          Explorar otros proyectos{" "}
          <span className="muted">({PROJECTS_DATA.other.length})</span>
        </summary>
        <ul>
          {PROJECTS_DATA.other.map((project) => (
            <li key={project.id}>
              <a href={project.github} target="_blank" rel="noreferrer">
                {project.title} ↗
              </a>
              <span className="muted small">{project.category}</span>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
