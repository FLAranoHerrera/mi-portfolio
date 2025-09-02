const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python'],
  backend: ['Node.js', 'Express', 'NestJS', 'REST API', 'Swagger'],
  frontend: ['React', 'HTML5', 'CSS3', 'TailwindCSS', 'Vite'],
  database: ['PostgreSQL', 'MongoDB'],
  OS: ['Windows', 'macOS'],
  tools: ['VS Code', 'Insomnia', 'Xcode', 'Bash', 'Docker', 'GitHub Actions', 'Render']
};

function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12 text-neon-purple">Stack / Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="card hover-neon">
            <h3 className="text-xl font-semibold mb-4 text-neon-pink">{category.replace(/([A-Z])/g, ' $1')}</h3>
            <ul className="list-disc list-inside text-gray-300">
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Skills;
