import React from 'react';
import Link from 'next/link';
import Layout from './components/UI/Layout/Layout';
import { Button } from './components/UI/Button/Button';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.heading}>
                <h1 className={styles.errorCode}>404</h1>
              </div>
              <div className={styles.heading}>
                <h2 className={styles.title}>Page Not Found</h2>
              </div>
              <div className={styles.heading}>
                <p className={styles.description}>
                  This page isn&apos;t ready yet. We&apos;re working on it! In the meantime, you can go back to the homepage.
                </p>
              </div>
            </div>
            <Link href="/" className={styles.buttonLink}>
              <Button variant="gradient" size="sm">
                &lt; Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
