import mysql from "mysql"

class DB {
    public Query(command: string, callback: (res: any) => void) {
        this.query(command).then(result => {
            callback(result);
        });
    }

    private async query(command: string): Promise<any> {
        try {
            const con: mysql.Connection = await mysql.createConnection({
                host: "extgames.com",
                user: "extgames_hehe",
                password: "Gr#3nGobl1n",
                database: "extgames_Robo"
            });

            return new Promise((resolve, reject) => {
                try {
                    con.connect();
                    con.query(command, function (err: mysql.MysqlError | null, results?: any) {
                        if (err) return reject(err);
                        return resolve(results);
                    });
                    con.end();

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