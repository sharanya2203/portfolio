export default function Skills() {
  const skills = [
    "Python",
    "Java",
    "C++",
    "React",
    "C",
    "Tableau",
    "Flask",
    "SQL",
    "Machine Learning",
    "Git",
    "GitHub",
    "DBMS",
  ];

  return (
    <section id="skills" className="min-h-screen px-8 py-24">
      <h2 className="text-5xl font-bold text-center mb-16">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-cyan-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}