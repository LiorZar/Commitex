import mysql from "mysql"

class DB {
    private con: mysql.Connection | null = null;
    constructor() {
        try {
            this.con = mysql.createConnection({
                host: "extgames.com",
                user: "extgames_hehe",
                password: "Gr#3nGobl1n",
                database: "extgames_Robo"
            });
        } catch (error) {
            console.log(error);
        }
    }
    public Query(command: string, callback: (res: any) => void) {
        this.query(command).then(result => {
            callback(result);
        });
    }

    private async query(command: string): Promise<any> {
        const con = this.con;
        return new Promise((resolve, reject) => {
            try {
                con?.connect((err: mysql.MysqlError | null) => {
                    if (err) return reject(err);
                    con?.query(command, function (err: mysql.MysqlError | null, results?: any) {
                        if (err) return reject(err);
                        return resolve(results);
                    });
                });

            } catch (error) {
                console.log(error);
                return reject(error);
            }
        });

    }
}

const db: DB = new DB();

export default db;