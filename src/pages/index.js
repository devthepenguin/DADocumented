import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'About',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
       DataAnnotated is a platform which offers various data annotation task with easy collaboration with peers.
       The platform creates a seamless integration between data in annotation and data used in development. 
       This way the developer can keep track of the annotated data while in development with no need for manually checking the annotated data every once in a while.
      </>
    ),
  },
  {
    title: 'What it does',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        A complimentary python package is developed connecting their user profile during development. 
        In this way, they could annotate their data and download it from the package during development.
      </>
    ),
  },
  {
    title: 'Getting Started',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        DataAnnotated is a platform which offers various data annotation task with easy collaboration with peers. The platform creates a seamless integration between data in annotation and data used in development. 
        This way the developer can keep track of the annotated data while in development with no need for manually checking the annotated data every once in a while.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
