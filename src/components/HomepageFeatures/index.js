import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Define a theme',
    img: require('@site/static/images/index-theme.png').default,
    description: (
      <>
        A theme is a central configuration object that links all types of resources.
      </>
    ),
  },
  {
    title: 'Create a dataset',
    img: require('@site/static/images/index-dataset.png').default,
    description: (
      <>
        A data set contains one or more files and associated metadata, and can be published via different types of services.
      </>
    ),
  },
  {
    title: 'Manage users and organisations',
    img: require('@site/static/images/index-usersOrgs.png').default,
    description: (
      <>
        All users are associated with an organisation and have a role inside it.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4 popular-article')}>
      <a href="#">
        <div className='wrapper'>
          <div className="text--center">
            <img src={img} className={styles.img} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
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
        <h1>Popular Articles</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
