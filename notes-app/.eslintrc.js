module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "extends": "standard",
    "rules": {
      "semi": [2, "always"],
      "no-extra-semi": 2,
      "no-useless-return": "error",
      "prefer-const": "error",
      "camelcase": [2, { "properties": "never" }]
    }
}
