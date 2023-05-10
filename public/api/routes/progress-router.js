"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import camelCase from 'lodash.camelCase'
const src_1 = require("../../src");
const router = express_1.default.Router();
const cache = {};
router.get('/', (req, res) => {
    let image = cache[req.path];
    if (!image) {
        const qs = req.query;
        const options = {};
        // Object.keys(qs).forEach((key) => {
        //   options[camelCase(key)] = qs[key]
        // })
        image = (0, src_1.generate)(options);
        cache[req.path] = image;
    }
    res.header('cache-control', 'max-age=43200');
    res.type('image/svg+xml');
    res.send(image);
});
exports.default = router;
//# sourceMappingURL=progress-router.js.map