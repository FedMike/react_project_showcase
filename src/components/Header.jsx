function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://fedmike.github.io/react_project_showcase/"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
