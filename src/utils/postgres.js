const { Pool } = require('pg')

const pool = new Pool({
    connectionString: 'postgres://bqilpiho:PZLJhNyR1-dC4GopeQ0ysrIzge8URDDZ@arjuna.db.elephantsql.com/bqilpiho'
})

const fetch = async(SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows: [ row ] } = await client.query(SQL, params.length ? params : null)
        return row
    } finally {
        client.release();
    }
}

const fetchAll = async(SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params.length ? params : null)
        return rows
    } finally {
        client.release();
    }
}

module.exports = {
    fetch,
    fetchAll
}