"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repository_1 = __importDefault(require("./repository"));
const router = (0, express_1.default)();
router.get("/hello", (req, res) => {
    res.send("hello");
});
router.get("/players", (req, res) => {
    res.json(repository_1.default.GetPlayers());
});
router.post("/board", (req, res) => {
    res.json(repository_1.default.GetPlayers());
});
router.post("/newPlayer", (req, res) => {
    if (repository_1.default.NewPlayer(req.query.name))
        res.send("OK");
    else
        res.send("Already a Player");
});
router.post("/move", (req, res) => {
    if (repository_1.default.MovePlayer(req.query.name, req.query.dx, req.query.dy))
        res.send("OK");
    else
        res.send("No Player");
});
exports.default = router;
