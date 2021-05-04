import Link from "next/link";
import { Code } from "../../../components/Code";
import { PackagePage } from "../../../components/PackagePage";

export default function AkitainuGitDiffSourcePage() {
  return (
    <PackagePage name="akitainu:git-diff-source" internal>
      <p>
        Internal <Link href="/docs/config#source">source</Link> package for
        linting files that have diff between certain git commits.
      </p>
      <p>
        Files deleted in <code>after</code> commit are not included.
      </p>
      <h2>Example</h2>
      <p>To lint all changed files between master and HEAD:</p>
      <Code language="ts" highlight={[3, 6]}>
        {`
{
  rules: {
    source: ["akitainu:git-diff-source", {
      before: "master",
      after: "HEAD"
    }],
    checker: /* ... */
  }
}
        `.trim()}
      </Code>

      <h2>Example2</h2>
      <p>
        On pull request-based workflows, this source can be used to only check
        files changed in that PR.
      </p>
      <p>
        For example, GitHub Actions provides an environment variable{" "}
        <code>GITHUB_BASE_REF</code> for this purpose.
      </p>

      <Code language="ts" highlight={[3, 6]}>
        {`
{
  rules: {
    source: ["akitainu:git-diff-source", {
      before: "origin/" + process.env.GITHUB_BASE_REF
      after: "HEAD"
    }],
    checker: /* ... */
  }
}
        `.trim()}
      </Code>

      <h2>Options</h2>
      <h3>before, after</h3>
      <Code language="ts">{`before: string;
after: string;`}</Code>
      <p>
        Commits to take diff between. Anything understood by{" "}
        <code>git diff</code> can be specified.
      </p>
    </PackagePage>
  );
}
