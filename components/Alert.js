import { useEffect, useState } from 'react';
import styles from './Alert.module.css';

export default function Alert({ message, type, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {  // Check if there is a message before showing the alert
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onClose(); // Close the alert after it disappears.
      }, 2000); // The alert hides after 2 seconds.
      return () => clearTimeout(timer);
    }
  }, [message, onClose]); // Dependencies: message and onClose

  return (
    <div className={`${styles.alert} ${styles[type]} ${show ? styles.show : styles.hide}`}>
      <span>{message}</span>
    </div>
  );
}
