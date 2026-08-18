import Heading from '@theme/Heading';

import styles from './styles.module.css';

const FeatureList = [
  {
    number: '01',
    icon: '</>',
    title: 'Understand APIs',
    description:
      'Learn how APIs work, including HTTP methods, REST, JSON, authentication, requests, and responses.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Write better documentation',
    description:
      'Document endpoints, parameters, examples, errors, and common API workflows clearly and effectively.',
  },
  {
    number: '03',
    icon: '◆',
    title: 'Work with docs-as-code',
    description:
      'Use Markdown, Git, GitHub, and Docusaurus to create and manage documentation like a modern documentation team.',
  },
];

function Feature({number, icon, title, description}) {
  return (
    <article className={styles.featureCard}>
      <div className={styles.featureIllustration}>
        <span>{icon}</span>
      </div>

      <div className={styles.featureNumber}>{number}</div>

      <Heading as="h3">{title}</Heading>

      <p>{description}</p>

      <span className={styles.cardArrow}>→</span>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>WHAT YOU'LL LEARN</p>

          <Heading as="h2">
            Build the skills to create documentation developers can{' '}
            <span>trust</span>
          </Heading>

          <p>
            Learn the concepts, tools, and workflows you need to create useful
            API documentation.
          </p>
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