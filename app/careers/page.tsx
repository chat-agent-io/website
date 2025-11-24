'use client';

import React from 'react';
import Link from 'next/link';

import Layout from '../components/UI/Layout/Layout';
import {Button} from '../components/UI/Button/Button';
import styles from './careers.module.scss';
import {useCareers} from '../services/careers/useCareers';

export default function CareersPage() {
    const {data, isLoading, isError} = useCareers();

    const careers = data ?? [];

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
                            <div key={job.id} className={styles.jobItem}>
                                <div className={styles.jobHeader}>
                                    <div className={styles.jobTitle}>
                                        <h3 className={styles.jobName}>{job.title}</h3>
                                    </div>
                                    <div className={styles.jobDetails}>
                                        <div className={styles.jobInfo}>
                                            {job.tags.map((tag, index) => (
                                                <div key={index} className={styles.jobTag}>
                                                    <span className={styles.jobTagText}>{tag}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href={`/careers/${job.id}`}>
                                            <Button
                                                variant="black"
                                                size="sm"
                                            >
                                                Details
                                            </Button>
                                        </Link>
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
