const navItems = [
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Header({ name, githubUrl }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#top">
          {name}
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-link" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
