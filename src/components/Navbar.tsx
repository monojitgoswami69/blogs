import Link from 'next/link';

interface NavbarProps {
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
}

export function Navbar({ breadcrumbs }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand-group">
          <Link href="/" className="brand-link">
            <span className="brand-title">blogs.mgbuilds.in</span>
          </Link>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="breadcrumbs">
              <span className="breadcrumb-separator">/</span>
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx} className="breadcrumb-item">
                  {crumb.href ? (
                    <Link href={crumb.href} className="breadcrumb-link">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="breadcrumb-current">{crumb.label}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <span className="breadcrumb-separator">/</span>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>
        <nav className="nav-links">
          <a
            href="https://mgbuilds.in"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            mgbuilds.in &rarr;
          </a>
        </nav>
      </div>
    </header>
  );
}
