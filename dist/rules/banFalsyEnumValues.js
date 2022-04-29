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
        },
        schema: [{}],
    },
    defaultOptions: [{}],
    create(context) {
        return {
            TSEnumDeclaration(node) {
                node.members.forEach(member => {
                    // @ts-ignore
                    const value = member.initializer.value;
                    console.log({ value });
                    if (value === 0 ||
                        value === "" ||
                        value === false ||
                        value === null ||
                        value === undefined ||
                        (typeof value === "number" && isNaN(value))) {
                        console.log("reporting", value);
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