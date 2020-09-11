const mysql = require("mysql");
 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Zaqbshcju9435!",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.err("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadID);
});

module.exports = connection;