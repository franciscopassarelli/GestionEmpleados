import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Our Project Management System</h1>
        <p className={styles.subtitle}>Organize, manage, and control all your projects efficiently.</p>
      </header>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Create Projects</h2>
          <p className={styles.featureDescription}>Add new projects with complete details and start managing them from the get-go.</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Edit and Manage</h2>
          <p className={styles.featureDescription}>Modify the details of your projects and adjust their status as needed.</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Delete Projects</h2>
          <p className={styles.featureDescription}>Easily remove obsolete projects and keep your list updated.</p>
        </div>
      </section>
      <section className={styles.cta}>
        <Link href="/my-project" className={styles.button}>
          Go to My Projects
        </Link>
      </section>
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2024 Esto Es. All rights reserved.</p>
      </footer>
    </div>
  );
}
