import sql from "mssql"
import mysql from "mysql"
import { resolve } from "path";
import DBConfig from "./dbconfig";

class DB {
    public Query(command: string, callback: (res: any) => void) {
        this.query2(command).then(result => {
            callback(result);
        });
    }
    private async query(command: string): Promise<Array<any> | null> {
        try {
            let pool: sql.ConnectionPool = await sql.connect(DBConfig);
            let res = await pool.request().query(command);
            return res.recordset;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
    private async query2(command: string): Promise<any> {
        try {

            const con: mysql.Connection = await mysql.createConnection({
                host: "109.203.107.234",
                user: "extgames_hehe",
                password: "Gr#3nGobl1n"
            });

            return new Promise((resolve, reject) => {
                try {
                    con.connect((err: mysql.MysqlError | null) => {
                        if (err) return reject(err);
                        con.query(command, function (err: mysql.MysqlError | null, results?: any) {
                            if (err) return reject(err);
                            return resolve(results);
                        });
                    });

                } catch (error) {
                    console.log(error);
                    return reject(error);
                }
            });
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

const db: DB = new DB();

export default db;