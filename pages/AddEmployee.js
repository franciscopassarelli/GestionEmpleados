import { useState } from 'react';
import { useRouter } from 'next/router';
import Alert from '../components/Alert';
import styles from '../styles/AddEmployee.module.css';

export default function AgregarEmpleado() {
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    fullName: '',
    idNumber: '',
    birthDate: '',
    isDeveloper: false,
    description: ''
  });
  const [alertas, setAlertas] = useState([]);
  const router = useRouter();

  const agregarEmpleado = async () => {

    if (nuevoEmpleado.fullName && nuevoEmpleado.idNumber && nuevoEmpleado.birthDate && nuevoEmpleado.description) {
      try {
        const response = await fetch('/api/empleados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nuevoEmpleado),
        });

        if (response.ok) {
        
          setAlertas((prevAlertas) => [...prevAlertas, { mensaje: '¡Empleado agregado con éxito!', tipo: 'exito' }]);

    
          setTimeout(() => {
            router.push('/MyEmployee'); 
          }, 2000);
        } else {
    
          setAlertas((prevAlertas) => [...prevAlertas, { mensaje: 'Error al agregar el empleado', tipo: 'error' }]);
        }
      } catch (error) {
    
        setAlertas((prevAlertas) => [...prevAlertas, { mensaje: 'Error en el servidor', tipo: 'error' }]);
      }
    } else {
    
      setAlertas((prevAlertas) => [...prevAlertas, { mensaje: 'Por favor, complete todos los campos.', tipo: 'error' }]);
    }
  };

  const manejarCerrarAlerta = (index) => {
    setAlertas((prevAlertas) => prevAlertas.filter((_, i) => i !== index)); 
  };

  const manejarCambioFecha = (e) => {
 
    const fecha = e.target.value;
    setNuevoEmpleado({ ...nuevoEmpleado, birthDate: fecha });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Agregar Empleado</h1>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Nombre Completo</label>
        <input
          className={styles.input}
          type="text"
          value={nuevoEmpleado.fullName}
          onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, fullName: e.target.value })}
          required
        />
        <label className={styles.label}>Documento</label>
        <input
          className={styles.input}
          type="number"
          value={nuevoEmpleado.idNumber}
          onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, idNumber: e.target.value })}
          required
        />
        <label className={styles.label}>Fecha de Nacimiento</label>
        <input
          className={styles.input}
          type="date"
          value={nuevoEmpleado.birthDate}
          onChange={manejarCambioFecha}
          required
        />
        <label className={styles.label}>¿Es Desarrollador?</label>
        <input
          type="checkbox"
          checked={nuevoEmpleado.isDeveloper}
          onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, isDeveloper: e.target.checked })}
        />
        <label className={styles.label}>Descripción</label>
        <textarea
          className={styles.input}
          value={nuevoEmpleado.description}
          onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, description: e.target.value })}
          required
        />
        <button className={styles.button} onClick={agregarEmpleado}>Agregar Empleado</button>
      </div>

      {/* Mostrar las alertas */}
      {alertas.map((alerta, index) => (
        <Alert
          key={index}
          mensaje={alerta.mensaje}
          tipo={alerta.tipo}
          onClose={() => manejarCerrarAlerta(index)} 
        />
      ))}
    </div>
  );
}
