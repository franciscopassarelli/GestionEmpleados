// components/ConfirmDeleteModal.js
import styles from './ConfirmDeleteModal.module.css';

export default function ConfirmDeleteModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Confirmar eliminación</h2>
        <p className={styles.message}>¿Estás seguro de que deseas eliminar este empleado?</p>
        <div className={styles.buttons}>
      
          <button className={styles.confirmButton} onClick={onConfirm}>Eliminar</button>
          <button className={styles.cancelButton} onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
