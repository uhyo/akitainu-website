import Link from "next/link";
import { Code } from "../../../components/Code";
import { PackagePage } from "../../../components/PackagePage";

export default function AkitainuCheckerTypeScriptPage() {
  return (
    <PackagePage name="akitainu-checker-typescript">
      <p>
        <Link href="/docs/config#checker">Checker</Link> package for performing
        type checking with{" "}
        <a href="https://www.typescriptlang.org/" rel="external">
          TypeScript
        </a>
        .
      </p>
      <p>
        <b>Error code</b> is TypeScript's error code preceded by <code>TS</code>{" "}
        (e.g. <code>TS2033</code>, <code>TS8001</code>).
      </p>

      <h2>Example</h2>
      <Code language="ts" highlight={[6, 6]}>
        {`
{
  rules: {
    source: ["akitainu:source-static", {
      files: ["./src/**/*.ts"]
    }],
    checker: ["akitainu-checker-typescript", {
      tsconfig: "./tsconfig.json"
    }]
  }
}
        `.trim()}
      </Code>

      <h2>Options</h2>
      <h3>tsconfig</h3>
      <Code language="ts">tsconfig?: string;</Code>
      <p>
        Path to <code>tsconfig.json</code> file to use. If not specified, no{" "}
        <code>tsconfig.json</code> file is loaded.
      </p>

      <h3>compilerOptions</h3>
      <Code language="ts">compilerOptions?: ts.CompilerOptions;</Code>
      <p>
        Compiler options object. If specified along with the{" "}
        <code>tsconfig</code> option, options from this object are prioritized.
      </p>

      <h4>Example</h4>
      <Code language="ts" highlight={[8, 10]}>
        {`
{
  rules: {
    source: ["akitainu:source-static", {
      files: ["./src/**/*.ts"]
    }],
    checker: ["akitainu-checker-typescript", {
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        noImplicitAny: true
      }
    }]
  }
}
        `.trim()}
      </Code>
    </PackagePage>
  );
}
