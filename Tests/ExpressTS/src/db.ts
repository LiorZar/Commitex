import sql from "mssql"
import DBConfig from "./dbconfig";

class DB {
    public Query(command: string, callback: (res: Array<any> | null) => void) {
        this.query(command).then(result => {
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
}

const db: DB = new DB();

export default db;