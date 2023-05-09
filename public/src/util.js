"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeekend = exports.getDaysInMonth = void 0;
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
exports.getDaysInMonth = getDaysInMonth;
function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0;
}
exports.isWeekend = isWeekend;
//# sourceMappingURL=util.js.map