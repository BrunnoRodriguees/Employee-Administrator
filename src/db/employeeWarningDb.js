async function selectEmployeeWarning(){
    const conn = await connection();
    return await conn.query('SELECT * FROM employee_warning;');
}

async function updateEmployeeWarning(){
    const conn = await connection();
    return await conn.query('SELECT * FROM employee_warning;');
}

async function deleteEmployeeWarning(){
    const conn = await connection();
    return await conn.query('SELECT * FROM employee_warning;');
}

async function insertEmployeeWarning(){
    const conn = await connection();
    return await conn.query('SELECT * FROM employee_warning;');
}
