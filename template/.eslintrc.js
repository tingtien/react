module.exports = {
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
      },
      sourceType: "module"
    },
    extends: [
      "standard",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "plugin:import/recommended"
    ],
    plugins: ["react", "prettier"],
    rules: {
      "prettier/prettier": 2,
      "react/prop-types": 0,
      eqeqeq: 0,
      camelcase: 0,
      "standard/no-callback-literal": 0,
      "import/no-named-as-default-member": 0
    },
    globals: {
      MI: "readonly",
      router: "readonly"
    },
    settings: {
      "react": {
        "version": "detect"
      },
      "import/resolver": {
        webpack: {
          config: {
            resolve: {
              alias: {
                "@common": require("path").join(__dirname, "app/web/common")
              }
            }
          }
        }
      }
    }
  };