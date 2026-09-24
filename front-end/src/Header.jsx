function Header() {
  const links = [
    { id: 1, label: "Home", target: "#home" },
    { id: 2, label: "About Me", target: "#about" },
    { id: 3, label: "Contact Me", target: "#contact" },
  ];

  return (
    <header className="site-header">
      <nav className="navbar">
        {links.map((link) => (
          <a key={link.id} href={link.target} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
