const Skills = () => {
  const skillList = ["C++", "Java", "HTML"];

  return (
    <section className="skills-section">
      <h2>SKILLS</h2>
      <ul>
        {skillList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;