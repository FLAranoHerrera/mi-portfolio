import { SKILL_GROUPS } from "@/config/skills";
export default function Skills() {
  return (
    <section className="section wrap" id="skills" aria-labelledby="stack-title">
      <div className="section-heading">
        <p className="eyebrow">03 / HERRAMIENTAS</p>
        <h2 id="stack-title">El stack detrás del trabajo.</h2>
      </div>
      <div className="stack-grid">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <p className="muted">{group.description}</p>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
