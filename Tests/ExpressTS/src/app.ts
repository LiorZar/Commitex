import Express, { Application, Request, Response, NextFunction } from "express";
import sql from "mssql"
import { dbCfg } from "./dbconfig";

const app: Application = Express();

app.get("/", (req: Request, res: Response) => {
    res.send("Helslo");
})

async function GetErrors() {
    try {
        let pool: sql.ConnectionPool = await sql.connect(dbCfg);
        let res = await pool.request().query("select * from ERRORS_TABLE");
        return res.recordset;

    } catch (error) {
        console.log(error);
    }
}
app.get("/error/:id", (req: Request, res: Response) => {
    GetErrors().then(result => {
        res.json(result?.[+req.params.id]);
    });
})



app.listen(3000, () => console.log("Running"));