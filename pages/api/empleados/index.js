import pool from '@/lib/dbPool';

export default function handler(req, res) {
  if (req.method === 'GET') {
    
    const query = 'SELECT * FROM empleados';

    pool.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener los empleados:', err);
        return res.status(500).json({ message: 'Error al obtener los empleados' });
      }

      res.status(200).json(results);
    });
  } else if (req.method === 'POST') {
  
    const { fullName, idNumber, birthDate, isDeveloper, description } = req.body;

    
    if (!fullName || !idNumber || !birthDate) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const query = `
      INSERT INTO empleados (fullName, idNumber, birthDate, isDeveloper, description)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [fullName, idNumber, birthDate, isDeveloper, description];

    pool.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al agregar el empleado:', err);
        return res.status(500).json({ message: 'Error al agregar el empleado' });
      }

      res.status(201).json({ message: 'Empleado creado con éxito', id: results.insertId });
    });
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
