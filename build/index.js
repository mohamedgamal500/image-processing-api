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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const resizing_1 = require("./resizing");
const PORT = 3000;
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const imageName = String(req.query.imageName);
    const source = `images/${imageName}.jpg`;
    const output = `thumbnails/${imageName}_thumbnail_${width}X${height}.jpg`;
    try {
        yield (0, resizing_1.resizeImage)(width, height, source, output);
        res.json({
            message: 'Done'
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            message: 'Failed'
        });
    }
}));
app.listen(PORT, () => {
    console.log(` Image Server is runing at port:${PORT}`);
});
exports.default = app;
