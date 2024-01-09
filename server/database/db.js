import sql from 'mssql'
import config from '../config.js'

const dbsettings={
    //server:'172.30.251.85', 
    server:'WINDBPVNB0001',
    user:'msalirrosasv',
    password:'pv76204853',

    database:'BD_INFORMACION_B2B',
      options: {
         encrypt: true,
         trustServerCertificate: true,
         cryptoCredentialsDetails: {
           ciphers: 'DEFAULT@SECLEVEL=0',
         },
         requestTimeout: 150000
     }
}

/*
const dbsettings={
  //server:'172.30.251.85', 
  server:config.dbServer,
  user:config.dbUser,
  password:config.bdPassword,

  database:config.dbDatabase,
    options: {
       encrypt: true,
       trustServerCertificate: true,
       cryptoCredentialsDetails: {
         ciphers: 'DEFAULT@SECLEVEL=0',
       },
       requestTimeout: 150000
   }
  }
*/
export async function getConnection(){
  try {
    const pool= await sql.connect(dbsettings);
   // const result = await pool.request().query("SELECT 1");
   return pool;
  //console.log(result);  
  } catch (error) {
    console.error(error);
    
  }
   
}

//getConnection();

export {sql}