import Router, { Request, Response } from "express";
import repository from "./repository";
const router = Router();

router.get("/hello", (req: Request, res: Response) => {
    res.send("good bye");
});


router.get("/players", (req: Request, res: Response) => {
    res.json(repository.GetPlayers());
});

router.post("/board", (req: any, res: Response) => {
    res.json(repository.GetPlayers());
});

router.post("/newPlayer", (req: any, res: Response) => {
    if (repository.NewPlayer(req.query.name))
        res.send("OK");
    else
        res.send("Already a Player");
});

router.post("/move", (req: any, res: Response) => {
    if (repository.MovePlayer(req.query.name, req.query.dx, req.query.dy))
        res.send("OK");
    else
        res.send("No Player");
});

export default router;