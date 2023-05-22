
async function selectEmployeeAdministrator(){
    const conn = await connection();
    return await conn.query('SELECT * FROM employee_administrator;');
}


async function updateEmployeeAdministrator(){
    const conn = await connection();
    return await conn.query('UPDATE employee_administrator WHERE ;');
}

async function deleteEmployeeAdministrator(){
    const conn = await connection();
    return await conn.query('UPDATE employee_administrator WHERE ;');
}

async function insertEmployeeAdministrator(){
    const conn = await connection();
    return await conn.query('UPDATE employee_administrator WHERE ;');
}

