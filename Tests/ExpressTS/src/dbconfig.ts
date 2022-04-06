import { config } from "mssql";

const dbCfg: config = {
    user: "hehe",
    password: "102102",

    server: "127.0.0.1",
    port: 1433,

    database: "AcesSystem",

    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },

    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

export default dbCfg;