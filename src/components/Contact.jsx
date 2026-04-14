function Contact({ title, description, email, links }) {
  return (
    <section className="section section-contact" id="contact">
      <div className="contact-band">
        <div className="section-copy">
          <p className="section-label">Contact</p>
          <h2>{title}</h2>
          <p className="section-description">{description}</p>
        </div>

        <div className="contact-panel">
          <a className="contact-email" href={`mailto:${email}`}>
            {email}
          </a>

          <div className="contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                className="secondary-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
