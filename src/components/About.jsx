function About({ title, description, highlights, education }) {
  return (
    <section className="section about-section" id="about">
      <div className="about-intro">
        <div className="about-heading">
          <p className="section-label">자기소개</p>
          <p className="section-description about-title">{title}</p>
        </div>

        <p className="about-description">{description}</p>
      </div>

      <div className="about-details">
        <div className="info-grid">
          {highlights.map((item) => (
            <article className="info-card" key={item.label}>
              <p className="info-label">{item.label}</p>
              <p className="info-value">{item.value}</p>
            </article>
          ))}
        </div>

        <div className="education-section">
          <p className="section-label">학력</p>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={`${item.school}-${item.degree}`}>
                <p className="info-label">{item.degree}</p>
                <h3>{item.school}</h3>
                <p className="education-meta">{item.major}</p>
                <p className="education-meta">{item.period}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
