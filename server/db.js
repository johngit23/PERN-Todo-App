const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'Yohannes@23',
    database: 'perntodo',
    host: 'localhost',
    port: 5432
})

module.exports = pool