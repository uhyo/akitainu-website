import { Fragment } from "react";
import { Code } from "../../components/Code";

export default function basicESLintTypeScriptRecipe() {
  return (
    <Fragment>
      <h1>Recipe: Basic ESLint and TypeScript Settings</h1>
      <p>
        This page describes how to set up Akitainu so that you can run ESLint
        and TypeScript type checking through Akitainu.
      </p>

      <h2>Install Packages</h2>
      <Code language="sh">
        npm install -D akitainu akitainu-checker-eslint
        akitainu-checker-typescript eslint typescript
      </Code>

      <h2>Set up .akitainurc.js</h2>
      <p>
        Define two rules in <code>.akitainurc.js</code> as follows.
      </p>
      <Code language="ts">
        {`module.exports = {
  rules: [
    {
      source: ["akitainu:source-static", {
        files: ["./src/**/*.ts", "./src/**/*.tsx"]
      }],
      checker: "akitainu-checker-eslint"
    },
    {
      source: ["akitainu:source-static", {
        files: ["./src/**/*.ts", "./src/**/*.tsx"]
      }],
      checker: ["akitainu-checker-typescript", {
        // relative to .akitainurc.js
        tsconfig: "./tsconfig.json"
      }]
    }
  ]
}`}
      </Code>

      <h3>Run Akitainu</h3>
      <p>
        Run Akitainu by any means you like. For example, you can register an npm
        script:
      </p>
      <Code language="ts">{`{
  "scripts": {
    "lint": "akitainu"
  }
}`}</Code>
      <p>
        Running <code>akitainu</code> will run both ESLint and TypeScript as
        specified.
      </p>
      <p>
        This command exists with a non-zero exit code when there is any lint
        error.
      </p>
      <p>
        Note: running TypeScript through <code>akitainu</code> does not emit
        transpiled result. If you need transpiled result (e.g. you are not using
        Webpack, Babel or such to handle TypeScript source), you need to run{" "}
        <code>tsc</code> separately.
      </p>
    </Fragment>
  );
}
