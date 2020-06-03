import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>Flowcharts</>,
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                Get a high-level overview of the solution at hand. Flowcharts also have a nice color palette.
                For all you visual learners.
            </>
        ),
    },
    {
        title: <>Multiple Languages</>,
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                We speak many <code>languages</code>. Get solutions in yours. We currently have Python, JavaScript,
                Java, and C++ support.
            </>
        ),
    },
    {
        title: <>Space-Time Complexity</>,
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                Understand the runtime speed and memory usage of a specific solution. This is important for
                real world optimizations and non-real world tech interviews.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
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

export default Home;
