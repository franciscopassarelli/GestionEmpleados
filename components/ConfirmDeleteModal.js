// components/ConfirmDeleteModal.js
import styles from './ConfirmDeleteModal.module.css';

export default function ConfirmDeleteModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Confirm Deletion</h2>
        <p className={styles.message}>Are you sure you want to delete this project?</p>
        <div className={styles.buttons}>
          <button className={styles.cancelButton} onClick={onCancel}>Cancel</button>
          <button className={styles.confirmButton} onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}
