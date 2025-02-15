import mysql from 'mysql2';

export default function() {

    return mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '1234',
        database : 'luiz_barros'
    });
}