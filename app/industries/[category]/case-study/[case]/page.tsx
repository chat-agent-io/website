'use client';

import React from 'react';
import {useParams} from 'next/navigation';

//Components
import Layout from '@/app/components/UI/Layout/Layout';
import {useStudyBySlug} from '@/app/services/studies';
import {SectionRenderer} from '@/app/components/CaseStudy/SectionRenderer';

//Sty;es
import styles from './case.module.scss';

export default function CaseStudyPage() {
    const params = useParams();
    const caseSlug = params.case as string;

    const {data, isLoading, error} = useStudyBySlug(caseSlug);
    const study = data?.data;

    if (isLoading) {
        return (
            <Layout>
                <main className={styles.page}>
                    <div className={styles.mainContainer}>
                        <div className={styles.loadingContainer}>
                            <p className={styles.loadingText}>Loading case study...</p>
                        </div>
                    </div>
                </main>
            </Layout>
        );
    }

    if (error || !study) {
        return (
            <Layout>
                <main className={styles.page}>
                    <div className={styles.mainContainer}>
                        <div className={styles.errorContainer}>
                            <h1>Case Study Not Found</h1>
                            <p className={styles.errorMessage}>The case study you're looking for doesn't
                                exist.</p>
                        </div>
                    </div>
                </main>
            </Layout>
        );
    }


    return (
        <Layout>
            <main className={styles.page}>
                <div className={styles.mainContainer}>
                    {/* Render all sections dynamically */}
                    {study.sections.map((section) => (
                        <SectionRenderer key={section.id} section={section}/>
                    ))}
                </div>
            </main>
        </Layout>
    );
}
