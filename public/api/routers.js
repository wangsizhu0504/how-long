"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const progress_router_1 = __importDefault(require("./routes/progress-router"));
const router = express_1.default.Router();
// Profile widget
router.use('/status', progress_router_1.default);
exports.default = router;
//# sourceMappingURL=routers.js.map