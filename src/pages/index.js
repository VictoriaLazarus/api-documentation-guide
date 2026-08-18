import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const guideSections = [
  {
    number: '01',
    title: 'Understanding APIs',
    description:
      'Build a foundation in APIs, HTTP, JSON, authentication, and common API concepts.',
  },
  {
    number: '02',
    title: 'Testing APIs',
    description:
      'Learn how to test endpoints and understand requests, responses, and errors.',
  },
  {
    number: '03',
    title: 'API Documentation',
    description:
      'Learn how to document endpoints, parameters, examples, authentication, and errors.',
  },
  {
    number: '04',
    title: 'Git & Docs-as-Code',
    description:
      'Learn the Git concepts and workflow used to manage documentation as code.',
  },
  {
    number: '05',
    title: 'Docusaurus',
    description:
      'Learn how to build and organize a documentation website with Docusaurus.',
  },
  {
    number: '06',
    title: 'Publishing',
    description:
      'Understand how documentation websites are built, hosted, and published.',
  },
];

function HomepageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} />

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>
            <span>✦</span> THE BEGINNER&apos;S GUIDE
          </p>

          <Heading as="h1" className={styles.heroTitle}>
            <span>API</span>
            <span>Documentation</span>
          </Heading>

          <p className={styles.heroSubtitle}>
            Learn to write clear, accurate, and user-focused API documentation.
          </p>

          <Link
            className={styles.startButton}
            to="/docs/intro">
            Start the guide <span>→</span>
          </Link>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.codeWindow}>
            <div className={styles.windowDots}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.endpoint}>
              <strong>GET</strong>
              <code>/movies/&#123;movie_id&#125;</code>
            </div>

            <div className={styles.tabs}>
              <span>Params</span>
              <span>Headers</span>
              <span className={styles.activeTab}>Response</span>
            </div>

            <div className={styles.response}>
              <span>&#123;</span>
              <span>&nbsp;&nbsp;"id": 550,</span>
              <span>&nbsp;&nbsp;"title": "Fight Club",</span>
              <span>&nbsp;&nbsp;"status": "released"</span>
              <span>&#125;</span>
            </div>
          </div>

          <div className={styles.codeBadge}>
            <span>&lt;/&gt;</span>
          </div>

          <div className={styles.docsCard}>
            <div className={styles.docsIcon}>&#123; &#125;</div>

            <h3>API Docs</h3>

            <div className={styles.docsLinks}>
              <span>Overview</span>
              <span>Authentication</span>
              <span className={styles.selected}>Endpoints</span>
              <span>Examples</span>
              <span>Errors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuideSections() {
  return (
    <section className={styles.guideSection}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>INSIDE THE GUIDE</p>

          <Heading as="h2">
            Everything you need to get started.
          </Heading>
        </div>

        <div className={styles.guideGrid}>
          {guideSections.map((section) => (
            <div className={styles.guideCard} key={section.number}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{section.number}</span>
                <span className={styles.cardArrow}>↗</span>
              </div>

              <div className={styles.cardContent}>
                <Heading as="h3">{section.title}</Heading>
                <p>{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.finalCtaInner}>
        <p className={styles.sectionEyebrow}>READY TO BEGIN?</p>

        <Heading as="h2">
          Start building your API documentation skills.
        </Heading>

        <p>
          Work through the guide at your own pace and put what you learn
          into practice.
        </p>

        <Link
          className={styles.startButton}
          to="/docs/intro">
          Start the guide <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="API Documentation Guide"
      description="A beginner's guide to writing clear, accurate, and user-focused API documentation.">
      <main>
        <HomepageHero />
        <GuideSections />
        <FinalCta />
      </main>
    </Layout>
  );
}