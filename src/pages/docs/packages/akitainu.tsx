import { Code } from "../../../components/Code";
import { PackagePage } from "../../../components/PackagePage";

export default function AkitainuPackage() {
  return (
    <PackagePage name="akitainu">
      <p>
        Main package of the akitainu toolchain. Also serves the akitainu CLI.
      </p>
      <Code language="sh">npm install -D akitainu</Code>

      <h2>CLI Usage</h2>
      {/* TODO: link */}
      <p>Prepare an akitainu config file, then run:</p>
      <Code language="sh">npx akitainu</Code>
      <p>
        (or, when running from npm scripts, just <code>akitainnu</code> is
        enough.
      </p>

      <h2>Programmatic Use</h2>
      <p>
        This package exports a <code>run</code> function along with a bunch of
        type definitons for akitainu plugin creators. The <code>run</code>{" "}
        function behaves the same as the CLI, except that it does not
        automatically exit the process but returns a{" "}
        <code>Promise&lt;boolean&gt;</code> whose boolean value is{" "}
        <code>true</code> if there is no error, and <code>false</code>{" "}
        otherwise.
      </p>
      <Code language="ts">
        {`
import { run } from "akitainu";

const result = await run();
if (result) {
  console.log("Lint succeeded!");
} else {
  console.log("There is an error! :(");
}
        `.trim()}
      </Code>
    </PackagePage>
  );
}
