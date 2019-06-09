module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends:  [
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: { "browser": true, "node": true },
  settings: { "react": { "version": "detect" } },
  rules: {
    "semi": ["error", "never"],
    "@typescript-eslint/explicit-function-return-type": "off",
  }
}
