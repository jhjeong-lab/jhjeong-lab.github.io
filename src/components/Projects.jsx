function Projects({ items }) {
  return (
    <section className="section" id="projects">
      <div className="section-layout">
        <div className="section-copy">
          <p className="section-label">프로젝트</p>
          <h2>주요 프로젝트</h2>
          <p className="section-description">
            문제 구조를 다시 정의하고, 시스템 설계와 실험 검증으로 풀어낸 작업을 정리했습니다.
          </p>
        </div>

        <div className="project-list">
          {items.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-content">
                <div className="project-header">
                  <div>
                    <p className="project-kicker">{project.name}</p>
                    <h3>{project.title}</h3>
                  </div>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      Visit
                    </a>
                  ) : null}
                </div>

                <p className="project-meta">
                  {project.period} | {project.team}
                </p>
                <p>{project.summary}</p>

                {project.myRole ? (
                  <div className="project-role">
                    <p className="project-role__label">내 역할</p>
                    <p className="project-role__value">{project.myRole}</p>
                  </div>
                ) : null}

                <div className="project-sections">
                  <div className="project-section">
                    <h4>배경</h4>
                    <ul>
                      {project.background.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-section">
                    <h4>문제정의</h4>
                    <ul>
                      {project.problems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-section">
                    <h4>솔루션</h4>
                    <ul>
                      {project.solutions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-section">
                    <h4>결과</h4>
                    <ul>
                      {project.results.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul className="tag-list" aria-label={`${project.title} stack`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
