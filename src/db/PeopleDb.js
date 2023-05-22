

async function selectPeople() {
    const conn = await connection();
    return await conn.query('SELECT * FROM people;');
}



async function updatePeople() {
    const conn = await connection();
    return await conn.query('SELECT * FROM people;');
}



async function deletePeople() {
    const conn = await connection();
    return await conn.query('SELECT * FROM people;');
}



async function insertPeople() {
    const conn = await connection();
    return await conn.query('SELECT * FROM people;');
}
