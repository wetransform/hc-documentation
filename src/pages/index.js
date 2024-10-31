import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="./docs/getting-started/2018-04-28-quick-start">
            <Translate id="hero.gotoDocs">
              Go to the hale»connect documentation
            </Translate>
          </Link>
        </div>
        <div style={{ marginTop: '64px', display: 'flex', alignContent: 'center', flexDirection: 'column' }} >
          <p style={{ width: '40%', marginBottom: 0, alignSelf: 'center' }}>
            <Translate id="hero.hcDescription">
              hale»connect is the world's leading platform for agile, data-driven design and seamless implementation of over 5,000 open standards, including INSPIRE,
              ALKIS, XPlanGML, SOSI, eCH, WFD, FFH, Natura2000, CDDA, and END. It simplifies the complex process of publishing spatial data as services—complete with
              metadata—into one streamlined, user-friendly, automated workflow.
            </Translate>
          </p>
          <Link
            className="button button--link"
            to="https://wetransform.to/haleconnect/">
            <Translate id="hero.learnMore">
              Learn more
            </Translate>
          </Link>
          <div style={{ marginTop: '32px' }}>
            <Link
              className="button button--secondary button--lg"
              style={{marginRight: '16px'}}
              to="https://wetransform.to/haleconnect-pricing/">
              <Translate id="hero.estimatePricing">
                Estimate your hale»connect costs
              </Translate>
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://haleconnect.com/">
              <Translate id="hero.signUp">
                Sign up for a free 14-day trial
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation - ${siteConfig.title}`}
      description="hale»connect is the world’s best Software-as-a-Service tool for the agile, data-
      driven design and implementation of more than 5.000 Open Standards such as 
      INSPIRE, ALKIS, XPlanGML, SOSI, eCH, WFD, FFH, Natura2000, CDDA, and END.
      It cuts down the complex task of publishing datasets as services, coupled with 
      metadata, into a single user-friendly automated workflow.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
