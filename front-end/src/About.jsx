import InfoCard from "./InfoCard";

function About() {
  const cards = [
    {
      id: 1,
      title: "Focus",
      text: "Web development, networking, and problem solving.",
    },
    {
      id: 2,
      title: "Goal",
      text: "To improve my technical skills and prepare for industry certifications.",
    },
    {
      id: 3,
      title: "Strength",
      text: "Learning by building real examples and improving through practice.",
    },
  ];

  return (
    <section id="about" className="section-panel about-section">
      <div>
        <p className="eyebrow">About Me</p>
        <h2>Short Introduction</h2>
        <p>
          I am a third-year Computer Engineering student interested in software,
          networking, and emerging technologies. I enjoy learning through
          hands-on projects because practical coding helps me understand
          concepts faster.
        </p>
      </div>

      <div className="info-grid">
        {cards.map((card) => (
          <InfoCard key={card.id} title={card.title} text={card.text} />
        ))}
      </div>
    </section>
  );
}

export default About;
