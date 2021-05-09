import Link from "next/link";
import { Code } from "../../../components/Code";
import { PackagePage } from "../../../components/PackagePage";

export default function AkitainuReporterGitHubPrReviewPage() {
  return (
    <PackagePage name="akitainu-reporter-github-pr-review">
      <p>
        <Link href="/docs/config#reporters">Reporter</Link> package for
        reporting lint errors as review comments on GitHub pull requests.
      </p>
      <p>
        It posts one review comment for one lint error. It does not repost a
        same lint error multiple times. Visit{" "}
        <a
          href="https://github.com/uhyo/akitainu-playground/pull/4"
          rel="external"
        >
          the playground repository
        </a>{" "}
        to learn how it works.
      </p>

      <h2>Example</h2>
      <Code language="ts" highlight={[11, 18]}>
        {`
{
  rules: {
    source: ["akitainu:source-static", {
      files: ["./src/**/*.ts"]
    }],
    checker: ["akitainu-checker-typescript", {
      tsconfig: "./tsconfig.json"
    }]
  },
  reporters: [
    ["akitainu-reporter-github-pr-review", {
      // This reporter requires a GitHub token.
      // If you are using GitHub Actions to trigger akitainu, token is provided by Github Actions.
      githubToken: process.env.GITHUB_TOKEN,
      // Below information is needed to determine which pull requests to post reviews.
      repository: process.env.GITHUB_REPOSITORY,
      prNumber: Number(process.env.PR_NUMBER)
    }]
  ]
}
        `.trim()}
      </Code>

      <h3>With GitHub Actions</h3>
      <p>
        The example above requires some environment variables. Here is an
        example of GitHub Actions definition to run akitainu against a pull
        request:
      </p>
      <Code language="yaml">
        {`
name: Lint with akitainu

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm ci
      - run: npx akitainu
        env:
          # Need to provide GITHUB_TOKEN and PR_NUMBER manually.
          # GITHUB_REPOSITORY is automatically provided by GitHub Actions.
          GITHUB_TOKEN: \${{ github.token }}
          PR_NUMBER: \${{ github.event.pull_request.number }}
`.trim()}
      </Code>

      <h2>Options</h2>
      <h3>githubToken</h3>
      <Code language="ts">githubToken: string;</Code>
      <p>GitHub token for the account that posts reviews.</p>

      <h3>repository</h3>
      <Code language="ts">repository: string; // Example: "uhyo/akitainu"</Code>
      <p>Repository to post review comments.</p>

      <h3>prNumber</h3>
      <Code language="ts">prNumber: number;</Code>
      <p>The number of the pull request to post review comments.</p>

      <h3>githubApiUrl</h3>
      <Code language="ts">githubApiUrl?: string;</Code>
      <p>
        GitHub API URL. Defaults to <code>"https://api.github.com"</code>. Needs
        to be properly set when using akitainu with GitHub Enterprise.
      </p>

      <h3>metadataTag</h3>
      <Code language="ts">metadataTag?: string;</Code>
      <p>
        By default, each review comment posted by this reporter has a metadata
        line of following form:
      </p>
      <Code language="ts">
        {`<!-- akitainu: {"some": "metadata", ...} -->`}
      </Code>
      <p>
        Passing a string to this option changes the <code>akitainu</code> part
        accordingly.
      </p>

      <h3>octokitOptions</h3>
      <Code language="ts">octokitOptions?: OctokitOptions;</Code>
      <p>
        This reporter internally uses{" "}
        <a href="https://github.com/octokit/octokit.js" rel="external">
          Octokit
        </a>{" "}
        to request to GitHub API. An object passed to this option is forwarded
        to{" "}
        <a
          href="https://github.com/octokit/octokit.js#constructor-options"
          rel="external"
        >
          the Octokit constructor
        </a>
        .
      </p>
    </PackagePage>
  );
}
