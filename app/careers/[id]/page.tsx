'use client';

import React from 'react';
import {useParams, useRouter} from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import {ArrowLeft} from 'lucide-react';
import Layout from '@/app/components/UI/Layout/Layout';
import {Button} from '@/app/components/UI/Button/Button';
import styles from './careerDetails.module.scss';
import {useCareerById} from '@/app/services/careers/useCareers';

// Images from Figma
const bannerImage = "/images/channels/agent-icon.png";
const logoImage = "/images/logo-full.png";

export default function CareerDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const {data: job, isLoading, isError} = useCareerById(id);

    const handleApplyClick = (url: string | null) => {
        if (!url) {
            return;
        }

        // Handle mailto: links by setting window.location
        if (url.startsWith('mailto:')) {
            window.location.href = url;
        } else {
            // Open regular URLs in a new tab
            window.open(url, '_blank');
        }
    };

    if (isLoading) {
        return (
            <Layout>
                <main className={styles.page}>
                    <div className={styles.container}>
                        <p className={styles.statusMessage}>Loading job details…</p>
                    </div>
                </main>
            </Layout>
        );
    }

    if (isError || !job) {
        return (
            <Layout>
                <main className={styles.page}>
                    <div className={styles.container}>
                        <p className={styles.statusMessage}>
                            We couldn&apos;t load this position. Please try again later.
                        </p>
                    </div>
                </main>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className={styles.page}>
                <div className={styles.container}>
                    {/* Back Button - Mobile Only */}
                    <button
                        className={styles.backButton}
                        onClick={() => router.push('/careers')}
                        aria-label="Back to careers"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Careers</span>
                    </button>

                    {/* Banner Section */}
                    <div className={styles.banner}>
                        <div className={styles.bannerContent}>
                            <div className={styles.bannerImage}>
                                <img src={bannerImage} alt="" className={styles.bannerIcon}/>
                            </div>
                            <div className={styles.bannerText}>
                                <div className={styles.bannerHeading}>
                                    <h1 className={styles.bannerTitle}>
                                        Your Next Chapter
                                        <br/>
                                        Starts Here
                                    </h1>
                                    <p className={styles.bannerSubtitle}>
                                        We are developing tools that enable businesses to communicate more effectively,
                                        and we&apos;re seeking bright, curious individuals to join our team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job Title and Action Section */}
                    <div className={styles.titleSection}>
                        <div className={styles.titleContent}>
                            <div className={styles.titleInfo}>
                                <p className={styles.aboutRole}>About the role:</p>
                                <h2 className={styles.jobTitle}>{job.title}</h2>
                                <div className={styles.tags}>
                                    {job.tags.map((tag, index) => {
                                        const tagClass = index === 0 ? styles.tagOrange : styles.tagPurple;
                                        return (
                                            <div key={index} className={`${styles.tag} ${tagClass}`}>
                                                <span className={styles.tagText}>{tag}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className={styles.titleAction}>
                                <Button
                                    variant="primary"
                                    size="md"
                                    onClick={() => handleApplyClick(job.action_link)}
                                    disabled={!job.action_link}
                                >
                                    {job.action_text}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Job Description */}
                    <div className={`${styles.description} ${styles.descriptionText}`}>
                        <ReactMarkdown>
                            {job.description}
                        </ReactMarkdown>
                    </div>

                    {/* Footer CTA */}
                    <div className={styles.footerCta}>
                        <div className={styles.footerContent}>
                            <div className={styles.footerBrand}>
                                <span className={styles.joinText}>Join</span>
                                <img src={logoImage} alt="ChatAgent" className={styles.logo}/>
                            </div>
                            <div className={styles.footerActions}>
                                <Button
                                    variant="primary"
                                    size="md"
                                    onClick={() => handleApplyClick(job.action_link)}
                                    disabled={!job.action_link}
                                >
                                    {job.action_text}
                                </Button>
                                <p className={styles.email}>careers@instareply.io</p>
                            </div>
                        </div>
                        <div className={styles.footerDescription}>
                            <p className={styles.footerText}>
                                Join a global team to create the next generation of AI automation. Embrace a culture of
                                creativity, ownership, and continuous learning. Enjoy a hybrid workspace with on-site
                                collaboration at Amwaj Islands, along with competitive salary and growth opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
