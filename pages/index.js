import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bienvenido a Nuestro Sistema de Gestión de Empleados</h1>
        <p className={styles.subtitle}>Gestiona y organiza tu equipo de manera eficiente y fácil.</p>
      </header>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Crear Empleados</h2>
          <p className={styles.featureDescription}>Añade nuevos empleados con sus detalles y empieza a gestionarlos de inmediato.</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Editar y Gestionar</h2>
          <p className={styles.featureDescription}>Actualiza la información de los empleados y modifica sus roles según sea necesario.</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Eliminar Empleados</h2>
          <p className={styles.featureDescription}>Elimina fácilmente a los empleados que ya no forman parte de tu equipo.</p>
        </div>
      </section>
      <section className={styles.cta}>
        <Link href="/MyEmployee" className={styles.button}>
          Lista de empleados
        </Link>
      </section>
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2025 gestion.empleados</p>
      </footer>
    </div>
  );
}
