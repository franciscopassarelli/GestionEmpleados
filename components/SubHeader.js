import styles from './Subheader.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Subheader() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.subheader}>
      <button className={styles.backButton} onClick={handleBackClick}>
        <span className={styles.arrow}>←</span>
        <span className={styles.backText}>Volver</span>
      </button>
      <Link href="/AddEmployee" className={styles.editButton}>
        Agregar empleado
      </Link>
    </div>
  );
}
