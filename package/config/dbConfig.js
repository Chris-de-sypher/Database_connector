const mongoose = require('mongoose');


const server_string = process.env.SERVER_STRING;

const db = process.env.DATABASE_NAME;


class Database {
    constructor() {
        this._connect();
    }
    _connect() {
        try {
            mongoose.connect(`mongodb://${server_string}/${db}`)
                .then(() => console.log("Database connected successfully"))
                .catch((err) => console.log("Failed to connect to databse" + err));
        }
        catch (err) {
            console.log("Failed due to some errors" + err);
        }
    }
}

module.exports = new Database();