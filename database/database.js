const mysql = require('mysql2');

// create a new MySQL connection



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Niti@9899',
    database: 'mca22'
});


// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});
  
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
   
module.exports={connection,query};


  

