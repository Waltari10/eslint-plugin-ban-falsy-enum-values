## How to install

Rule that reports using falsy values in enums. Currently 

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

This package only has "@waltari/ban-falsy-enum-values/ban-falsy-enum-values" rule.

Feel free to post any issues or improvement ideas in Github issues <3
