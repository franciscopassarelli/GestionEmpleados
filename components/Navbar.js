import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.title}>Project Management System</h1>
      </Link>
    </nav>
  );
}
