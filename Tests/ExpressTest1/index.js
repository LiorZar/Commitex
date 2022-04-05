import Express from "express";

const app = Express();
const port = 3000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.json({ sx: "Hello Express" });
});

app.post("/add", (req, resp) => {
  resp.send(req.body);
});

app.listen(port, () => console.log("Listen on", port));
