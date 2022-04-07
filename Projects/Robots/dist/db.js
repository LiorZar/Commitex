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
const mssql_1 = __importDefault(require("mssql"));
class DB {
    constructor() {
        this.config = {
            user: "6DL",
            password: "osh07est",
            server: "2DLogic.com",
            port: 9618,
            database: "Robo",
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            },
            options: {
                encrypt: false,
                trustServerCertificate: true
            }
        };
    }
    Query(command, callback) {
        this.query(command).then(result => {
            callback(result);
        });
    }
    query(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let pool = yield mssql_1.default.connect(this.config);
                let res = yield pool.request().query(command);
                //pool.close();
                return res.recordset;
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
