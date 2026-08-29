export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Monojit Goswami. All technical guides are published for educational and reference purposes.
        </p>
        <div className="footer-links">
          <a
            href="https://mgbuilds.in"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            mgbuilds.in
          </a>
          <span className="footer-separator">&bull;</span>
          <a
            href="https://github.com/monojitgoswami69"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
