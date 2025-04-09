import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'turntable.proxy.rlwy.net',
  user: 'root',
  password: 'QcpTzArhmGLfaWPcViVaEpUTQWIlvUjY',
  database: 'railway',
  port: 23898,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Error de conexión a la base de datos:', err);
    return;
  }
  console.log('✅ ¡Conexión a la base de datos exitosa!');
  connection.release();
});

export default pool; // 👈 ESTA es la línea clave
