module.exports = {
  rules: [
    {
      source: ["akitainu:source-static", {
        files: ["./src/**/*.tsx"]
      }],
      checker: "akitainu-checker-eslint"
    },
    {
      source: ["akitainu:source-static", {
        files: ["./src/**/*.tsx"]
      }],
      checker: ["akitainu-checker-typescript", {
        tsconfig: "./tsconfig.json"
      }]
    }
  ]
}