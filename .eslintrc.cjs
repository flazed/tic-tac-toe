module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "airbnb",
    "airbnb-typescript/base",
    "plugin:perfectionist/recommended-natural"
  ],
  "parserOptions": {
    "project": ["./tsconfig.json"]
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'tailwind.config.js', 'postcss.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'perfectionist'],
  rules: {
    "react/react-in-jsx-scope": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "import/prefer-default-export": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-param-reassign": 0,
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-restricted-syntax": 0,
    "object-curly-newline": ["error", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    "perfectionist/sort-imports": [
      "error",
      {
        "type": "natural",
        "order": "asc",
        "groups": [
          "react",
          ["builtin", "external"],
          "type",
          "internal-type",
          "components",
          "store",
          "internal",
          "icons",
          "types",
          "styles",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "side-effect",
          "style",
          "object",
          "unknown"
        ],
        "custom-groups": {
          "value": {
            "react": ["react", "react-*"],
            "styles": "**/*styles*",
            "types": "**/*types*",
            "components": "@components/**",
            "store": "@store/**",
            "icons": "@icons/**",
          },
          "type": {
            "react": "react",
            "styles": "**/*styles*",
            "types": "**/*types*",
            "components": "@components/**",
            "store": "@store/**",
            "icons": "@icons/**",
          }
        },
        "newlines-between": "always",
      }
    ],
    "perfectionist/sort-jsx-props": [
      "error",
      {
        "groups": ["multiline", "unknown", "shorthand"],
        "custom-groups" : {

        }
      }
    ]
  },
}
