import { ESLintUtils } from "@typescript-eslint/utils";
import path from "path";

import rule from "../banFalsyEnumValues";

const rootDir = path.resolve(__dirname, "./fixtures/");

const ruleTester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: rootDir,
    project: "./tsconfig.json",
  },
});

ruleTester.run("ban-falsy-enum-values", rule, {
  valid: [
    "enum Foo { val = 1 }",
    "enum Foo { val = 0.00000000001 }",
    "enum Foo { val = 'false' }",
    "enum Foo { val = 'foo' }",
  ],

  invalid: [
    {
      code: "enum Foo { foo }",
      errors: [
        {
          messageId: "enumValueMustBeInitialized",
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "enum Foo { val = 0 }",
      errors: [
        {
          messageId: "noFalsyEnumValues",
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "enum Foo { val = '' }",
      errors: [
        {
          messageId: "noFalsyEnumValues",
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "enum Foo { val = false }",
      errors: [
        {
          messageId: "noFalsyEnumValues",
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "enum Foo { val = null }",
      errors: [
        {
          messageId: "noFalsyEnumValues",
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "enum Foo { val = undefined }",
      errors: [
        {
          messageId: "noFalsyEnumValues",
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "enum Foo { foo = 1, moo = 0, }",
      errors: [
        {
          messageId: "noFalsyEnumValues",
          column: 1,
          line: 1,
        },
      ],
    },
  ],
});
