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
    title: `${post.title} - ${post.subtitle || 'Guide'}`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
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

export function renderFormattedText(text: string): React.ReactNode {
  // Regex to match markdown links: [label](url), inline code: `code`, bold: **text**, raw URLs: https://...
  const pattern = /(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*|https?:\/\/[^\s)"]+)/g;
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    if (!part) return null;

    // Markdown link: [label](url)
    const mdLinkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdLinkMatch) {
      return (
        <a
          key={index}
          href={mdLinkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {mdLinkMatch[1]}
        </a>
      );
    }

    // Bold text: **text**
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    // Inline code: `code`
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    // Raw URL: https://...
    if (part.startsWith('http://') || part.startsWith('https://')) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </a>
      );
    }

    return part;
  });
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
            <h1>{post.title}</h1>
            {post.subtitle && (
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                {post.subtitle}
              </p>
            )}

            <div className="blog-meta-bar">
              <span>Published: {post.publishedAt}</span>
              {post.updatedAt && <span>&bull; Updated: {post.updatedAt}</span>}
              <span>&bull;</span>
              <span>{post.readingTime}</span>
              <span>&bull;</span>
              <span>By {post.author.name}</span>
            </div>
          </header>

          {post.notice && (
            <Notice type={post.notice.type} title={post.notice.title}>
              <p style={{ margin: 0 }}>{renderFormattedText(post.notice.content)}</p>
            </Notice>
          )}

          {post.sections.map((section) => (
            <section key={section.id || section.title} id={section.id}>
              <h2>{section.title}</h2>

              {section.lead && (
                <p style={{ fontSize: '1.02rem', marginBottom: '16px' }}>
                  {renderFormattedText(section.lead)}
                </p>
              )}

              {section.content &&
                section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{renderFormattedText(paragraph)}</p>
                ))}

              {section.orderedList && (
                <ol>
                  {section.orderedList.map((item, oIdx) => (
                    <li key={oIdx}>{renderFormattedText(item)}</li>
                  ))}
                </ol>
              )}

              {section.unorderedList && (
                <ul style={{ paddingLeft: '20px' }}>
                  {section.unorderedList.map((item, uIdx) => (
                    <li key={uIdx}>{renderFormattedText(item)}</li>
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
                  <div key={sub.id} id={sub.id} style={{ marginTop: '24px' }}>
                    <h3>{sub.title}</h3>
                    {sub.description && <p>{renderFormattedText(sub.description)}</p>}

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
                      />
                    )}

                    {sub.platformTabs && (
                      <PlatformTabs tabs={sub.platformTabs} />
                    )}
                  </div>
                ))}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
