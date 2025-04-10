import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port:  Number(process.env.DB_PORT),  // ¡No olvides el puerto!
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
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
