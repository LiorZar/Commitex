import Express, { Application, Request, Response } from "express";
import router from "./router";
import cors from "cors";


const app: Application = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("public"));
app.use("/", router);

const server = app.listen(8080, () => console.log("Running"));
