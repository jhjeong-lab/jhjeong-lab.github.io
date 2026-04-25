function Skills({ items }) {
  return (
    <section className="section" id="skills">
      <div className="section-layout">
        <div className="section-copy">
          <p className="section-label">기술 스택</p>
          <p className="section-description">
            프로젝트와 연구에서 반복적으로 사용한 도구와 방법론을 중심으로 정리했습니다.
          </p>
        </div>

        <div className="skill-list">
          {items.map((skill) => (
            <article className="skill-chip" key={skill}>
              <span>{skill}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
