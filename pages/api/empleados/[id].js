import pool from '@/lib/dbPool';

export default function handler(req, res) {
  const { id } = req.query;

  

  if (req.method === 'PUT') {
    const { fullName, idNumber, birthDate, isDeveloper, description } = req.body;

    const query = `
      UPDATE empleados
      SET fullName = ?, idNumber = ?, birthDate = ?, isDeveloper = ?, description = ?
      WHERE id = ?
    `;
    const values = [fullName, idNumber, birthDate, isDeveloper, description, id];

    pool.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al actualizar el empleado:', err);
        return res.status(500).json({ message: 'Error al actualizar el empleado' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Empleado no encontrado' });
      }

      res.status(200).json({ message: 'Empleado actualizado con éxito' });
    });


  } else if (req.method === 'DELETE') {
  
    const query = `DELETE FROM empleados WHERE id = ?`;
    const values = [id];

    pool.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar el empleado:', err);
        return res.status(500).json({ message: 'Error al eliminar el empleado' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Empleado no encontrado' });
      }

      res.status(200).json({ message: 'Empleado eliminado con éxito' });
    });
  } else {
  
    res.status(405).json({ message: 'Método no permitido' });
  }
}

