import Link from "next/link";
import { Code } from "../../../components/Code";
import { PackagePage } from "../../../components/PackagePage";

export default function AkitainuCheckerEslintPage() {
  return (
    <PackagePage name="akitainu-checker-eslint">
      <p>
        <Link href="/docs/config#checker">Checker</Link> package for linting
        files with{" "}
        <a href="https://eslint.org/" rel="external">
          ESLint
        </a>
        . Warnings are not reported through akitainu.
      </p>
      <p>
        <b>Error code</b> of an ESLint error is the name of the rule that
        triggered the error (e.g. <code>eqeqeq</code>,{" "}
        <code>@typescript-eslint/no-explicit-any</code>).
      </p>

      <h2>Example</h2>
      <Code language="ts" highlight={[6, 6]}>
        {`
{
  rules: {
    source: ["akitainu:source-static", {
      files: ["./src/**/*.ts"]
    }],
    checker: "akitainu-checker-eslint",
  }
}
        `.trim()}
      </Code>

      <h2>Options</h2>
      <h3>eslintOptions</h3>
      <Code language="ts">eslintOptions?: ESLint.Options;</Code>
      <p>
        This object is passed to{" "}
        <a
          href="https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions"
          rel="external"
        >
          the ESLint constructor
        </a>
        .
      </p>
    </PackagePage>
  );
}
