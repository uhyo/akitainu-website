import Link from "next/link";
import { Code } from "../../../components/Code";
import { PackagePage } from "../../../components/PackagePage";

export default function AkitainuByCodeFilterPage() {
  return (
    <PackagePage name="akitainu:filter-by-code" internal>
      <p>
        Internal <Link href="/docs/config#filter">filter</Link> package for
        filtering out errors that have or does not have certain error code.
      </p>
      <p>
        Concrete values of error codes depend on{" "}
        <Link href="/docs/config#checker">checker</Link> used.
      </p>
      <h2>Example</h2>
      <p>
        To filter out errors that have code{" "}
        <code>@typescript-eslint/no-explicit-any</code>:
      </p>
      <Code language="ts" highlight={[7, 9]}>
        {`
{
  rules: {
    source: ["akitainu:source-static", {
      files: ["./src/**/*.ts]
    }],
    checker: "akitainu-eslint-checker",
    filter: ["akitainu:filter-by-code", {
      exclude: ["@typescript-eslint/no-explicit-any"]
    }]
  }
}
        `.trim()}
      </Code>

      <h2>Options</h2>
      <h3>include</h3>
      <Code language="ts">include: string[];</Code>
      <p>
        List of error codes to include. All errors with code that are not
        specified in this array are filtered out.
      </p>
      <p>
        Only one of <code>include</code> and <code>exclude</code> must be
        specified.
      </p>

      <h3>exclude</h3>
      <Code language="ts">exclude: string[];</Code>
      <p>
        List of error codes to exclude. All errors with these codes are filtered
        out.
      </p>
      <p>
        Only one of <code>include</code> and <code>exclude</code> must be
        specified.
      </p>
    </PackagePage>
  );
}
