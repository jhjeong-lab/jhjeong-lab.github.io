function Hero({ name, title, intro, githubUrl, badges, email, tagline, subtagline }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <div className="hero-layout">
          <div className="hero-main">
            <p className="hero-tagline">{tagline}</p>
            <h1>{name}</h1>
            <p className="hero-title">{title}</p>
            <p className="hero-intro">{intro}</p>
            <p className="hero-subtagline">{subtagline}</p>

            <div className="hero-actions">
              <a className="primary-link" href="#projects">
                프로젝트 보기
              </a>
              <a className="secondary-link" href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-profile">
              <p className="hero-profile__label">기본 정보</p>
              <dl className="hero-profile__list">
                <div>
                  <dt>직무</dt>
                  <dd>{title}</dd>
                </div>
                <div>
                  <dt>이메일</dt>
                  <dd>
                    <a href={`mailto:${email}`}>{email}</a>
                  </dd>
                </div>
                <div>
                  <dt>GitHub</dt>
                  <dd>
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                      {githubUrl.replace('https://', '')}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="hero-badges" aria-label="Focus areas">
              {badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
