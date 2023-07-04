"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = (0, utils_1.createRule)({
    name: "ban-falsy-enum-values",
    meta: {
        type: "suggestion",
        docs: {
            description: "Bans falsy enum values from being used",
            recommended: "error",
        },
        messages: {
            noFalsyEnumValues: `Don't use falsy enum values like 0, "", false, null, undefined, NaN, etc.`,
            enumValueMustBeInitialized: `Enum value must be initialized, because otherwise it defaults to falsy value 0.`,
        },
        schema: [{}],
    },
    defaultOptions: [{}],
    create(context) {
        return {
            TSEnumDeclaration(node) {
                node.members.forEach(member => {
                    var _a;
                    if ("initializer" in member === false) {
                        context.report({
                            node,
                            messageId: "enumValueMustBeInitialized",
                        });
                        return;
                    }
                    // @ts-ignore
                    const value = (_a = member === null || member === void 0 ? void 0 : member.initializer) === null || _a === void 0 ? void 0 : _a.value;
                    if (value === 0 ||
                        value === "" ||
                        value === false ||
                        value === null ||
                        value === undefined ||
                        (typeof value === "number" && isNaN(value))) {
                        context.report({
                            node,
                            messageId: "noFalsyEnumValues",
                        });
                    }
                });
            }
        };
    },
});
//# sourceMappingURL=banFalsyEnumValues.js.map