import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/MyEmployee.module.css';
import Alert from '../components/Alert'; // Asegúrate de que la ruta es correcta
import ConfirmDeleteModal from '../components/ConfirmDeleteModal'; // Importa el modal

export default function MisEmpleados() {
  const [empleados, setEmpleados] = useState([]);
  const [menuAbierto, setMenuAbierto] = useState(null);
  const [alerta, setAlerta] = useState(null);
  const [empleadoAEliminarId, setEmpleadoAEliminarId] = useState(null);

  useEffect(() => {
  
    const obtenerEmpleados = async () => {
      try {
        const response = await fetch('/api/empleados');
        if (response.ok) {
          const data = await response.json();
          setEmpleados(data); 
        } else {
          console.error('Error al obtener los empleados');
        }
      } catch (error) {
        console.error('Error en la solicitud a la API:', error);
      }
    };

    obtenerEmpleados();
  }, []);
  
  const manejarClickEliminar = (id) => {
    setEmpleadoAEliminarId(id);
  };

  const manejarConfirmarEliminar = async () => {

    try {
      const response = await fetch(`/api/empleados/${empleadoAEliminarId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
      
        setEmpleados(empleados.filter(empleado => empleado.id !== empleadoAEliminarId));
        setEmpleadoAEliminarId(null);

        // Mostrar la alerta
        setAlerta({ message: 'Empleado eliminado correctamente', type: 'success' });
      } else {
        console.error('Error al eliminar el empleado');
        setAlerta({ message: 'Error al eliminar el empleado', type: 'error' });
      }
    } catch (error) {
      console.error('Error en la solicitud a la API:', error);
      setAlerta({ message: 'Error en el servidor', type: 'error' });
    }
  };

  const manejarCancelarEliminar = () => {
    setEmpleadoAEliminarId(null); 
  };

  
  const manejarCerrarAlerta = () => {
    setAlerta(null);
  };

  const toggleMenu = (id) => {
    setMenuAbierto(menuAbierto === id ? null : id);
  };

  const formatearFecha = (fecha) => {
    return fecha.split('T')[0]; // Extrae solo la parte de la fecha (yyyy-mm-dd)
  };

  return (
    <div className={styles.myEmployeeContainer}>
      <h1 className={styles.myEmployeeTitle}>Mis Empleados</h1>
      {empleados.length === 0 ? (
        <p className={styles.noEmployeesMessage}>No tienes empleados añadidos.</p>
      ) : (
        <table className={styles.employeeTable}>
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Documento</th>
              <th>Fecha de Nacimiento</th>
              <th>Desarrollador</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado) => (
              <tr key={empleado.id}>
                <td data-label="Nombre Completo">{empleado.fullName}</td>
                <td data-label="Documento">{empleado.idNumber}</td>
                <td data-label="Fecha de Nacimiento">{formatearFecha(empleado.birthDate)}</td>
                <td data-label="Desarrollador">{empleado.isDeveloper ? 'Sí' : 'No'}</td>
                <td data-label="Descripción">{empleado.description}</td>
                <td data-label="Acciones" className={styles.actionCell}>
                  <button 
                    className={styles.actionButton} 
                    onClick={() => toggleMenu(empleado.id)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="5" r="2" fill="#333"/>
                      <circle cx="12" cy="12" r="2" fill="#333"/>
                      <circle cx="12" cy="19" r="2" fill="#333"/>
                    </svg>
                  </button>
                  {menuAbierto === empleado.id && (
                    <div className={styles.dropdownMenu}>
                      <Link href={`/edit-employee/${empleado.id}`} className={styles.editButton}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.293 3.293a1 1 0 0 1 1.414 0l6.707 6.707a1 1 0 0 1 0 1.414L10.414 19.707a1 1 0 0 1-1.414 0l-6.707-6.707a1 1 0 0 1 0-1.414l6.707-6.707z" fill="#333"/>
                        </svg>
                        Editar
                      </Link>
                      <button className={styles.deleteButton} onClick={() => manejarClickEliminar(empleado.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 19c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V7H6v12zM17 3h-2V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v1H7c-1.104 0-2 .896-2 2v1h14V5c0-1.104-.896-2-2-2z" fill="#d9534f"/>
                        </svg>
                        Eliminar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {alerta && <Alert message={alerta.message} type={alerta.type} onClose={manejarCerrarAlerta} />}
      {empleadoAEliminarId && (
        <ConfirmDeleteModal
          onConfirm={manejarConfirmarEliminar}
          onCancel={manejarCancelarEliminar}
        />
      )}
    </div>
  );
}
