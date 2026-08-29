import Link from 'next/link';
import { getAllBlogs } from '../lib/blogs';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function BlogIndexPage() {
  const blogs = getAllBlogs();

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <header className="index-header">
            <h1 className="index-title">Technical Guides &amp; Notes</h1>
            <p className="index-lead">
              Direct, step-by-step setup guides, tool integrations, and development documentation.
            </p>
          </header>

          <section className="post-card-list">
            {blogs.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="post-card"
              >
                <h2 className="post-card-title">{post.title}</h2>
                {post.subtitle && (
                  <p className="post-card-subtitle">{post.subtitle}</p>
                )}
                <p className="post-card-desc">{post.description}</p>

                <div className="post-card-meta">
                  <div className="post-card-info">
                    <span>{post.publishedAt}</span>
                    <span>&bull;</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
