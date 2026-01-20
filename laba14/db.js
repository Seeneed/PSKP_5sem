const sql = require('mssql'); 

const config = {
    user: 'user1',                 
    password: '1515', 
    server: 'DESKTOP-39LPDNK',         
    database: 'MDA',          
    options: {
        encrypt: false, 
        trustServerCertificate: true 
    }
};

let pool;

async function initPools() {
    try {
        pool = await sql.connect(config);
        console.log('Connected to MSSQL via Login/Password');
    } catch (err) {
        console.error('Connection failed:', err);
    }
}

function getPool() {
    return pool;
}

module.exports = {
    initPools,
    getPool,
    sql 
};
