import { useEffect, useState } from 'react';
import styles from './Alert.module.css';

export default function Alert({ message, type, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {  
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onClose(); 
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <div className={`${styles.alert} ${styles[type]} ${show ? styles.show : styles.hide}`}>
      <span>{message}</span>
    </div>
  );
}
