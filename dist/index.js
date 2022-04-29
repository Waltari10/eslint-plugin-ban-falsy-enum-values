"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banFalsyEnumValues_1 = __importDefault(require("./rules/banFalsyEnumValues"));
module.exports = {
    rules: {
        "ban-falsy-enum-values": banFalsyEnumValues_1.default,
    },
};
//# sourceMappingURL=index.js.map