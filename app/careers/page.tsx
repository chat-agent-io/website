'use client';

import React from 'react';

import Layout from '../components/UI/Layout/Layout';
import {Button} from '../components/UI/Button/Button';
import styles from './careers.module.scss';
import {useCareers} from '../services/careers/useCareers';

export default function CareersPage() {
    const {data, isLoading, isError} = useCareers();

    const careers = data?.list ?? [];

    const handleApplyClick = (url: string | null) => {
        if (!url) {
            return;
        }

        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Layout>
            <main className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <div className={styles.heroSection}>
                            <div className={styles.titleContainer}>
                                <h1 className={styles.title}>Shape the Future of Human + AI Collaboration</h1>
                            </div>
                            <div className={styles.subtitleContainer}>
                                <p className={styles.subtitle}>
                                    Join a team where ideas turn into real innovation — and where your work helps
                                    businesses connect with customers around the world
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.jobsContainer}>
                        {isLoading && (
                            <p className={styles.statusMessage}>Loading open positions…</p>
                        )}

                        {isError && !isLoading && (
                            <p className={styles.statusMessage}>
                                We couldn&apos;t load open roles right now. Please try again later.
                            </p>
                        )}

                        {!isLoading && !isError && careers.length === 0 && (
                            <p className={styles.statusMessage}>No open positions at the moment.</p>
                        )}

                        {careers.map((job) => (
                            <div key={job.Id} className={styles.jobItem}>
                                <div className={styles.jobContent}>
                                    <div className={styles.jobTitle}>
                                        <h3 className={styles.jobName}>{job.Title}</h3>
                                    </div>
                                    <div className={styles.jobDetails}>
                                        <div className={styles.jobInfo}>
                                            <div className={styles.jobType}>
                                                <span className={styles.jobTypeText}>{job.Time}</span>
                                            </div>
                                            <div className={styles.jobLocation}>
                                                <span className={styles.jobLocationText}>{job.Location}</span>
                                            </div>
                                        </div>
                                        <Button
                                            variant="black"
                                            size="sm"
                                            onClick={() => handleApplyClick(job.Apply)}
                                            disabled={!job.Apply}
                                        >
                                            Apply
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
}
