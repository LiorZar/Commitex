"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class DB {
    Query(command, callback) {
        this.query(command).then(result => {
            callback(result);
        });
    }
    query(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const con = yield mysql_1.default.createConnection({
                    host: "extgames.com",
                    user: "extgames_hehe",
                    password: "Gr#3nGobl1n",
                    database: "extgames_Robo"
                });
                return new Promise((resolve, reject) => {
                    try {
                        con.connect();
                        con.query(command, function (err, results) {
                            if (err)
                                return reject(err);
                            return resolve(results);
                        });
                        con.end();
                    }
                    catch (error) {
                        console.log(error);
                        return reject(error);
                    }
                });
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
const db = new DB();
exports.default = db;
