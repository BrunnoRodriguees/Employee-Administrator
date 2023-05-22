
async function connection(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysqly2/promisse");
    const connection = await mysql.createConnection("mysql://root:9771@localhost:3306/employeeAdministrator")
    console.log("Conectou ao MySQL!");
    global.connection = connection;
    return connection;
}
