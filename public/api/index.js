"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const progress_router_1 = __importDefault(require("./routes/progress-router"));
const app = (0, express_1.default)();
// Use routing on the /api prefix
app.use('/', progress_router_1.default);
// Start listening on defined port
app.listen(3101, () => {
    console.log('How-Long listening at http://localhost:3101');
});
//# sourceMappingURL=index.js.map