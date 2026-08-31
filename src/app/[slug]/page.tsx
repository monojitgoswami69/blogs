import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogs, getBlogBySlug } from '../../lib/blogs';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Notice } from '../../components/Notice';
import { CodeBlock } from '../../components/CodeBlock';
import { PlatformTabs } from '../../components/PlatformTabs';
import { ClientTabs } from '../../components/ClientTabs';
import { Collapsible } from '../../components/Collapsible';
import { renderFormattedText } from '../../lib/format';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      siteName: 'blogs by MG',
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://blogs.mgbuilds.in/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${post.title} | blogs.mgbuilds.in`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/og-image.png'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar
        breadcrumbs={[
          { label: post.slug },
        ]}
      />
      <main className="main-content">
        <article className="container">
          <header className="blog-header">
            <h1 className="blog-title">{post.title}</h1>
            {post.subtitle && (
              <p className="blog-subtitle">
                {post.subtitle}
              </p>
            )}

            <div className="blog-meta-bar">
              <span className="meta-item">
                <span className="meta-label">Published:</span> {post.publishedAt}
              </span>
              {post.updatedAt && (
                <>
                  <span className="meta-sep">&bull;</span>
                  <span className="meta-item">
                    <span className="meta-label">Updated:</span> {post.updatedAt}
                  </span>
                </>
              )}
              <span className="meta-sep">&bull;</span>
              <span className="meta-item">{post.readingTime}</span>
              <span className="meta-sep">&bull;</span>
              <span className="meta-item">By {post.author.name}</span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {post.notice && (
            <Notice type={post.notice.type} title={post.notice.title}>
              <p style={{ margin: 0 }}>{renderFormattedText(post.notice.content)}</p>
            </Notice>
          )}

          {post.sections.map((section) => {
            const sectionId = section.id || section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            return (
              <section key={sectionId} id={sectionId} className="blog-section">
                <h2 className="section-heading">
                  {section.title}
                </h2>

                {section.lead && (
                  <p className="section-lead">
                    {renderFormattedText(section.lead)}
                  </p>
                )}

                {section.content &&
                  section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="section-paragraph">
                      {renderFormattedText(paragraph)}
                    </p>
                  ))}

                {section.orderedList && (
                  <ol className="step-ordered-list">
                    {section.orderedList.map((item, oIdx) => (
                      <li key={oIdx} className="step-list-item">
                        {renderFormattedText(item)}
                      </li>
                    ))}
                  </ol>
                )}

                {section.unorderedList && (
                  <ul className="step-unordered-list">
                    {section.unorderedList.map((item, uIdx) => (
                      <li key={uIdx} className="step-list-item">
                        {renderFormattedText(item)}
                      </li>
                    ))}
                  </ul>
                )}

                {section.actionButton && (
                  <div className="action-btn-container">
                    <a
                      href={section.actionButton.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button"
                    >
                      {section.actionButton.text}
                    </a>
                  </div>
                )}

                {section.notice && (
                  <Notice type={section.notice.type} title={section.notice.title}>
                    <p style={{ margin: 0 }}>{renderFormattedText(section.notice.content)}</p>
                  </Notice>
                )}

                {section.codeBlock && (
                  <CodeBlock
                    code={section.codeBlock.content}
                    filename={section.codeBlock.filename}
                    language={section.codeBlock.language}
                  />
                )}

                {section.collapsible && (
                  <Collapsible
                    title={section.collapsible.title}
                    content={section.collapsible.content}
                    code={section.collapsible.code}
                    list={section.collapsible.list}
                    orderedList={section.collapsible.orderedList}
                  />
                )}

                {section.platformTabs && (
                  <PlatformTabs tabs={section.platformTabs} />
                )}

                {section.clientGuides && (
                  <ClientTabs guides={section.clientGuides} />
                )}

                {section.subsections &&
                  section.subsections.map((sub) => (
                    <div key={sub.id} id={sub.id} className="subsection-block">
                      <h3 className="subsection-heading">{sub.title}</h3>
                      {sub.description && (
                        <p className="subsection-description">
                          {renderFormattedText(sub.description)}
                        </p>
                      )}

                      {sub.notice && (
                        <Notice type={sub.notice.type}>
                          <p style={{ margin: 0 }}>{renderFormattedText(sub.notice.content)}</p>
                        </Notice>
                      )}

                      {sub.command && <CodeBlock code={sub.command} />}

                      {sub.codeBlock && (
                        <CodeBlock
                          code={sub.codeBlock.content}
                          filename={sub.codeBlock.filename}
                          language={sub.codeBlock.language}
                        />
                      )}

                      {sub.collapsible && (
                        <Collapsible
                          title={sub.collapsible.title}
                          content={sub.collapsible.content}
                          code={sub.collapsible.code}
                          list={sub.collapsible.list}
                          orderedList={sub.collapsible.orderedList}
                        />
                      )}

                      {sub.platformTabs && (
                        <PlatformTabs tabs={sub.platformTabs} />
                      )}
                    </div>
                  ))}
              </section>
            );
          })}
        </article>
      </main>
      <Footer />
    </>
  );
}
