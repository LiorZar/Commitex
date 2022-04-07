import Express, { Application, Request, Response } from "express";
import db from "./db";
import router from "./route";

const app: Application = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("public"));

let CC: number = 0;
function intervalFunc() {
    console.log('Cant stop me now!', CC);
    CC++
}
//setInterval(intervalFunc, 1000);

app.use("/router", router);
app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello" + CC);
})

app.get("/error/:id", (req: Request, res: Response) => {
    db.Query("select * from Players", (result) => {
        res.json(result);
    });
})

app.listen(3000, () => console.log("Running"));