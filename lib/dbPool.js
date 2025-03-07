import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin', 
  database: 'gestion_empleados',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test de conexión
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa!');
  connection.release();
});

export default pool;
