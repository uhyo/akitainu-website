import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { Code } from "../../components/Code";

export default function tighteningESLintSettingsPage() {
  return (
    <Fragment>
      <Head>
        <title>Recipe: Tightening ESLint Settings</title>
      </Head>
      <h1>Recipe: Tightening ESLint Settings</h1>
      <p>
        This page describes how to set up Akitainu for gradually applying
        tighter ESLint settings so that you do not need to fix all existing code
        at once to comply the new setting.
      </p>
      <p>
        This recipe is a CI-based method. This recipe uses <b>GitHub Actions</b>{" "}
        as an example.
      </p>

      <h2>Prepare .eslintrc's</h2>
      <p>
        Rename old (looser) ESLint connfig to <code>.eslitnt.old.yml</code> (if
        you are using YAML for ESLint config, for example). Then, let
        <code>.eslintrc.yml</code> be one with tighter settings.
      </p>
      <p>
        The looser config is to be used for checking whole project, and the
        tighter one is for checking files changed in a pull request.
      </p>

      <h2>Set up .akitainurc.pr.js</h2>
      <p>Let's define an Akitainu config for checking pull requests.</p>
      <p>
        The following setting takes a git diff with{" "}
        <Link href="/docs/packages/akitainu:source-git-diff">
          akitainu:source-git-diff
        </Link>{" "}
        and applies ESLint to files that appear in the diff. Also, it utilizes{" "}
        <Link href="/docs/packages/akitainu-reporter-github-pr-review">
          akitainu-reporter-github-pr-review
        </Link>{" "}
        to report lint results as review comments as well as console output.
      </p>
      <Code language="ts">
        {`module.exports = {
  rules: [
    {
      source: ["akitainu:source-git-diff", {
        before: "origin/" + process.env.GITHUB_BASE_REF,
        after: "HEAD"
      }],
      checker: "akitainu-checker-eslint"
    },
  reporters: [
    "akitainu:reporter-pretty-console",
    [
      "akitainu-reporter-github-pr-review",
      {
        "githubToken": process.env.GITHUB_TOKEN,
        "repository": process.env.GITHUB_REPOSITORY,
        "prNumber": Number(process.env.PR_NUMBER)
      }
    ]
  ]
}`}
      </Code>
      <p>
        Note that <code>GITHUB_TOKEN</code> and <code>PR_NUMBER</code> needs to
        be manunally provided through GitHub Actions settings (see below).
      </p>

      <h2>Set up GitHub Actions</h2>
      <p>The following is an example setup of GitHub Actions.</p>
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
      - name: Fetch base branch
        run: git fetch --depth 1 origin \${GITHUB_BASE_REF}
      - run: npm ci
      - name: Run akitainu
        run: npx akitainu ./akitainurc.pr.js
        env:
          GITHUB_TOKEN: \${{ github.token }}
          PR_NUMBER: \${{ github.event.pull_request.number }}
`.trim()}
      </Code>
      <p>
        Check how it runs akitainu with the config prepared above and provides
        environment variables used in the akitainu config.
      </p>
      <p>
        Also note that we have to <code>git fetch</code> the base branch so that{" "}
        <code>git diff</code> can be run.
      </p>

      <h2>Add Check with Old Config</h2>
      <p>
        For more safety, you can still lint whole source code with the old
        config. This may be prepared as <code>.akitainurc.js</code>. Read more
        details at{" "}
        <Link href="/recipes.basic-eslnt-ts">
          Recipe: Basic ESLint and TypeScript Settings
        </Link>
        .
      </p>
      <Code language="ts">
        {`module.exports = {
  rules: [
    {
      source: ["akitainu:source-static", {
        files: ["./src/**/*.ts"]
      }],
      checker: ["akitainu-checker-eslint", {
        eslintOptions: {
          overrideConfigFile: "./eslintrc.old.yml"
        }
      }]
    },
}`}
      </Code>
    </Fragment>
  );
}
