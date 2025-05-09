"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const port = 3006;
const user_1 = __importDefault(require("./routes/user"));
app.get('/', (req, res) => {
    res.json({ message: "Thanks God           1" });
});
app.use((0, cors_1.default)({
    'credentials': true,
    origin: "https://www.google.com/"
}));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*');
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ 'extended': false }));
app.use('/api/user', user_1.default);
app.listen(port, () => console.log(`app is alive at http://localhost:${port}`));
