import Link from "next/link";
import { Code } from "../../../components/Code";
import { PackagePage } from "../../../components/PackagePage";

export default function AkitainuStaticSourcePackage() {
  return (
    <PackagePage name="akitainu:source-static" internal>
      <p>
        Internal <Link href="/docs/config#source">source</Link> package for
        statically defining what files to lint.
      </p>
      <h2>Example</h2>
      <p>
        To lint all <code>.ts</code> files in the <code>src</code> directory:
      </p>
      <Code language="ts" highlight={[3, 5]}>
        {`
{
  rules: {
    source: ["akitainu:source-static", {
      files: ["./src/**/*.ts"]
    }],
    checker: /* ... */
  }
}
        `.trim()}
      </Code>

      <h2>Options</h2>
      <h3>files</h3>
      <Code language="ts">files: string[];</Code>
      <p>
        Array of file names to lint. Relative paths are relative to{" "}
        <Link href="/docs/config#baseDirectory">baseDirectory</Link>. Glob
        patterns are supported.
      </p>
    </PackagePage>
  );
}
