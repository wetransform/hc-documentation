import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: (
      <>
        <Translate>
          Define a theme
        </Translate>
      </>
    ),
    img: require('@site/static/images/index-theme.png').default,
    description: (
      <>
        <Translate>
          A theme is a central configuration object that links all types of reserves.
        </Translate>
      </>
    ),
    link: './docs/setup-hc/create-a-theme/2015-02-10-theme-create'
  },
  {
    title: (
      <>
        <Translate>
          Create a dataset
        </Translate>
      </>
    ),
    img: require('@site/static/images/index-dataset.png').default,
    description: (
      <>
        <Translate>
          A data set contains one or more files and associated metadata, and can be published via different types of services.
        </Translate>
      </>
    ),
    link: './docs/create-manage-datasets/create-dataset/2015-01-10-dataset-create'
  },
  {
    title: (
      <>
        <Translate>
          Manage users and organisations
        </Translate>
      </>
    ),
    img: require('@site/static/images/index-usersOrgs.png').default,
    description: (
      <>
        <Translate>
          All users are associated with an organisation and have a role inside it.
        </Translate>
      </>
    ),
    link: './docs/users-roles-orgs/intro-to-users/2015-03-11-users-organisations-general'
  },
];

function Feature({ link, img, title, description }) {
  return (
    <div className={clsx('col col--4 popular-article')}>
      <a href={link}>
        <div className='wrapper'>
          <div className="text--center">
            <img src={img} className={styles.img} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <h3>
              {title}
            </h3>
            <p>
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container popular-articles">
        <h1>
          <Translate id="hero.popularArticles">
            Popular Articles
          </Translate>
        </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
