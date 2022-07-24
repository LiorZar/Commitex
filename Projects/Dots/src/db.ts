import sql from "mssql"

export class DB {
    public Query(command: string, callback?: (res: any) => void): void {
        this.query(command).then(result => {
            if (callback)
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
            return "error";
        }
    }
    public readonly config: sql.config = {
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        server: process.env.DB_SERVER!,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,

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