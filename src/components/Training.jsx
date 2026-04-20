function Training({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="section" id="training">
      <div className="section-layout">
        <div className="section-copy">
          <p className="section-label">트레이닝</p>
          <h2>교육 이력</h2>
          <p className="section-description">
            실무 과제 중심으로 참여한 공식 AI/ML 교육 과정입니다.
          </p>
        </div>

        <div className="training-list">
          {items.map((item) => (
            <article className="training-item" key={item.name}>
              <p className="project-kicker">{item.name}</p>
              <h3>{item.title}</h3>
              <p className="project-meta">{item.period}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Training;
