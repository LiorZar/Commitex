import sql from "mssql"

class DB {
    public Query(command: string, callback: (res: any) => void) {
        this.query(command).then(result => {
            callback(result);
        });
    }

    private async query(command: string): Promise<any> {
        try {
            let pool: sql.ConnectionPool = await sql.connect(this.config);
            let res = await pool.request().query(command);
            //pool.close();
            return res.recordset;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
    private readonly config: sql.config = {
        user: "6DL",
        password: "osh07est",
        server: "2DLogic.com",
        port: 9618,
        database: "Robo",

        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },

        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }

}

const db: DB = new DB();

export default db;