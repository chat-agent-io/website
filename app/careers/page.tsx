import React from 'react';
import Layout from '../components/UI/Layout/Layout';
import { Button } from '../components/UI/Button/Button';
import styles from './careers.module.scss';

interface Job {
  title: string;
  type: string;
  location: string;
}

const jobs: Job[] = [
  { title: 'Junior Data Analyst', type: 'Part Time', location: 'On-site' },
  { title: 'Product Manager', type: 'Full Time', location: 'Remote' },
  { title: 'UX Designer', type: 'Full Time', location: 'Hybrid' },
  { title: 'Software Engineer', type: 'Contract', location: 'Remote' },
  { title: 'Marketing Specialist', type: 'Part Time', location: 'On-site' },
  { title: 'Systems Analyst', type: 'Full Time', location: 'Remote' },
  { title: 'Web Developer', type: 'Full Time', location: 'Hybrid' },
  { title: 'Data Scientist', type: 'Full Time', location: 'Remote' },
  { title: 'Graphic Designer', type: 'Contract', location: 'On-site' },
  { title: 'HR Coordinator', type: 'Part Time', location: 'Hybrid' },
];

export default function CareersPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.heroSection}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Join Us</h1>
              </div>
              <div className={styles.subtitleContainer}>
                <p className={styles.subtitle}>
                  Be a part of our mission to connect businesses and customers through innovative technology
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.jobsContainer}>
            {jobs.map((job, index) => (
              <div key={index} className={styles.jobItem}>
                <div className={styles.jobContent}>
                  <div className={styles.jobTitle}>
                    <h3 className={styles.jobName}>{job.title}</h3>
                  </div>
                  <div className={styles.jobDetails}>
                    <div className={styles.jobInfo}>
                      <div className={styles.jobType}>
                        <span className={styles.jobTypeText}>{job.type}</span>
                      </div>
                      <div className={styles.jobLocation}>
                        <span className={styles.jobLocationText}>{job.location}</span>
                      </div>
                    </div>
                    <Button variant="black" size="sm">
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
