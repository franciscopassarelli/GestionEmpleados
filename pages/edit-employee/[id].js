import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import "../../styles/Home.module.css";
import Alert from '@/components/Alert'; // Importa el componente Alert

export default function EditarEmpleado() {
  const router = useRouter();
  const { id } = router.query;
  const [empleado, setEmpleado] = useState({
    fullName: '',
    idNumber: '',
    birthDate: '',
    isDeveloper: false,
    description: ''
  });
  const [alerta, setAlerta] = useState(null); 
  const [cargando, setCargando] = useState(false); 

  useEffect(() => {
    if (id) {
    
      const obtenerEmpleado = async () => {
        try {
          const response = await fetch(`/api/empleados/${id}`);
          if (response.ok) {
            const data = await response.json();
            setEmpleado(data);
          } else {
            console.error('Error al obtener el empleado');
          }
        } catch (error) {
          console.error('Error al obtener el empleado:', error);
        }
      };

      obtenerEmpleado();
    }
  }, [id]);

  const manejarCambio = (e) => {
    if (e.target.name === 'isDeveloper') {
      setEmpleado({ ...empleado, isDeveloper: e.target.checked });
    } else {
      setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    }
  };

  const guardarEmpleado = async (e) => {
    e.preventDefault();
    setCargando(true); 

    try {
      const response = await fetch(`/api/empleados/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empleado),
      });

      if (response.ok) {
    
        setAlerta({ message: 'Empleado actualizado correctamente', type: 'success' });

        setTimeout(() => {
          router.push('/MyEmployee');
        }, 2000);
      } else {
        console.error('Error al actualizar el empleado');
        setAlerta({ message: 'Hubo un error al actualizar el empleado', type: 'error' });
      }
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
      setAlerta({ message: 'Error al conectar con el servidor', type: 'error' });
    } finally {
      setCargando(false); 
    }
  };

  return (
    <div className="container">
      <form onSubmit={guardarEmpleado}>
        <h1>Editar Empleado</h1>
        <div className="input-group">
          <label>Nombre Completo</label>
          <input
            type="text"
            name="fullName"
            value={empleado.fullName}
            onChange={manejarCambio}
            required
          />
          <label>Documento</label>
          <input
            type="text"
            name="idNumber"
            value={empleado.idNumber}
            onChange={manejarCambio}
            required
          />
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            name="birthDate"
            value={empleado.birthDate}
            onChange={manejarCambio}
            required
          />
          <label>¿Es Desarrollador?</label>
          <input
            type="checkbox"
            name="isDeveloper"
            checked={empleado.isDeveloper}
            onChange={manejarCambio}
          />
          <label>Descripción</label>
          <textarea
            name="description"
            value={empleado.description}
            onChange={manejarCambio}
            required
          />
          <button type="submit" disabled={cargando}>Guardar</button> 
        </div>
      </form>

      
      {alerta && (
        <Alert 
          message={alerta.message} 
          type={alerta.type} 
          onClose={() => setAlerta(null)} 
        />
      )}
    </div>
  );
}
