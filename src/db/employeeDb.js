
async function selectEmployee(){
    const conn = await connection();
    return await conn.query('SELECT * FROM employee;');
}

async function updateEmployee(){
    const conn = await connection();
    return await conn.query('UPDATE  employee WHERE;');
}

async function deleteEmployee(){
    const conn = await connection();
    return await conn.query('DELETE FROM employee WHERE;');
}

async function insertEmployee(){
    const conn = await connection();
    return await conn.query('SELECT * FROM employee;');
}