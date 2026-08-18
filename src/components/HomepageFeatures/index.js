import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const FeatureList = [
  {
    number: '01',
    title: 'Understanding APIs',
    description:
      'Build a foundation in APIs, HTTP, JSON, authentication, and common API concepts.',
    link: '/docs/understanding-apis',
  },
  {
    number: '02',
    title: 'Testing APIs',
    description:
      'Learn how to test endpoints and understand requests, responses, and errors.',
    link: '/docs/testing-apis',
  },
  {
    number: '03',
    title: 'API Documentation',
    description:
      'Learn how to document endpoints, parameters, authentication, examples, and errors.',
    link: '/docs/writing-api-documentation',
  },
  {
    number: '04',
    title: 'Git & Docs-as-Code',
    description:
      'Learn the Git concepts and workflow used to manage documentation as code.',
    link: '/docs/git-and-docs-as-code',
  },
  {
    number: '05',
    title: 'Docusaurus',
    description:
      'Build and organize a documentation website with Docusaurus.',
    link: '/docs/docusaurus',
  },
  {
    number: '06',
    title: 'Publishing',
    description:
      'Understand how documentation websites are built, hosted, and made available to readers.',
    link: '/docs/publishing',
  },
];

function Feature({number, title, description, link}) {
  return (
    <Link to={link} className={styles.featureCard}>
      <div className={styles.cardTop}>
        <span>{number}</span>
        <span className={styles.arrow}>↗</span>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.numberBadge}>{number}</div>

        <Heading as="h3">{title}</Heading>

        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <p>INSIDE THE GUIDE</p>
          <h2>Six parts. One practical learning path.</h2>
        </div>

        <div className={styles.featureGrid}>
          {FeatureList.map((props) => (
            <Feature key={props.number} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}