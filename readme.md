## How to install

Rule that reports using falsy values in enums. Currently checks for 0, "", undefined, null, NaN values. Also requires enum values to initialize to a value since otherwise the default value is 0.

Installation:

```bash
$ yarn add -D @waltari/eslint-plugin-ban-falsy-enum-values
$ npm i --save-dev @waltari/eslint-plugin-ban-falsy-enum-values
```

### Usage

Add `@waltari/ban-falsy-enum-values` to the plugins in `.eslintrc` configuration file, then add the `ban-falsy-enum-values` rule to rules section.

```json
{
  "plugins": ["@waltari/ban-falsy-enum-values"],
  "rules": {
    "@waltari/ban-falsy-enum-values/ban-falsy-enum-values": "error"
  }
}
```

### Why?

Using enums hides the actual value of the variable. Code might check that some enum variable is falsy with the assumption that it's undefined. However since it's common to use integers for enum values then just checking if the enum value resolves to falsy doesn't work since 0 is considered falsy but still

Confusing code if allowing falsy enum values:

```ts
export enum Color {
  yellow = 0,
  green = 1,
}

const color: Color | undefined = Color.yellow;

if (!color) {
  console.log("Assuming color variable is undefined, but could also be yellow");
} else {
  console.log("Color is actually only green here");
}
```


This package only has "@waltari/ban-falsy-enum-values/ban-falsy-enum-values" rule.

Feel free to post any issues or improvement ideas in Github issues <3
