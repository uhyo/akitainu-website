import Head from "next/head";
import { Fragment } from "react";
import { Code } from "../../../components/Code";

export default function ConfigPage() {
  return (
    <Fragment>
      <Head>
        <title>Akitainu Configuration</title>
      </Head>
      <h1>Akitainu Configuration</h1>
      <p>
        Akitainu supports JSON format (<code>.akitaiunrc.json</code>), YAML
        format (<code>.akirainurc.yml</code>) and JavaScript format (
        <code>.akitainurc.js</code>), backed by{" "}
        <a href="https://www.npmjs.com/package/cosmiconfig" rel="external">
          cosmiconfig
        </a>
        . JavaScript is recommennded since it supports switching configurations
        based on ennvironment variables.
      </p>
      <p>Akitaiun configuration is an object with following properties:</p>
      <ul>
        <li>
          <a href="#baseDirectory">baseDirectory</a>
        </li>
        <li>
          <a href="#rules">rules</a>
        </li>
        <li>
          <a href="#reporter">reporters</a>
        </li>
      </ul>
      <h2 id="baseDirectory">baseDirectory</h2>
      <Code language="ts">baseDirectory?: string</Code>
      <p>
        Path that is basis of relative paths in configuration. Defaults to the
        directory where configuration file exists.
      </p>

      <h2 id="rules">rules</h2>
      <Code language="ts">rules?: ConfigRule[]</Code>
      <p>
        One rule roughly corresponds to configuration of one linting tool. Rule
        is a set of source, checker and filter.
      </p>

      <h3>rules.source</h3>
      <Code language="ts">source?: PackageConfig</Code>
      <p>
        <b>Source</b> is a package that calculates the set of files to be
        linted. Specified in the form of{" "}
        <a href="#PackageConfig">PackageConfig</a>. If omitted, falls back to
        checker's default.
      </p>
      <p>Example:</p>
      <Code language="ts" highlight={[3, 5]}>
        {`
{
  rules: [{
    source: ["akitainu:source-static", {
      files: ["./src/**/*.ts", "./src/**/*.tsx"]
    }],
    checker: "akitainu-checker-eslint"
  }]
}`.trim()}
      </Code>

      <h3>rules.checker</h3>
      <Code language="ts">checker: PackageConfig</Code>
      <p>
        <b>Checker</b> is a package that runs linting against files specified by
        the accompanying source. Specified in the form of{" "}
        <a href="#PackageConfig">PackageConfig</a>. Checker cannot be omitted.
      </p>
      <p>Example:</p>
      <Code language="ts" highlight={[6, 6]}>
        {`
{
  rules: [{
    source: ["akitainu:source-static", {
      files: ["./src/**/*.ts", "./src/**/*.tsx"]
    }],
    checker: "akitainu-checker-eslint"
  }]
}`.trim()}
      </Code>

      <h3>rules.filter</h3>
      <Code language="ts">filter?: PackageConfig</Code>
      <p>
        <b>Filter</b> is a package that filters lint errors from the
        accompanying checker. Filters can be utilized when you want to ignore
        some sort of errors. Specified in the form of{" "}
        <a href="#PackageConfig">PackageConfig</a>. If omitted, no filtering is
        done.
      </p>
      <Code language="ts" highlight={[7, 10]}>
        {`
{
  rules: [{
    source: ["akitainu:source-static", {
      files: ["./src/**/*.ts", "./src/**/*.tsx"]
    }],
    checker: "akitainu-checker-eslint",
    filter: ["akitaiu:filter-by-code", {
      // do not report no-explicit-any errors
      exclude: "@typescript-eslint/no-explicit-any"
    }]
  }]
}`.trim()}
      </Code>

      <h2 id="reporters">reporters</h2>
      <p>
        <b>Reporter</b> defines how to output lint errors. If omitted,{" "}
        <code>reporters</code> defaults to{" "}
        <code>akitainu:reporter-pretty-console</code> that prints the result to
        console.
      </p>
      <Code language="ts">
        {`
{
  reporters: [
    "akitainu:reporter-pretty-console"
  ]
}
        `.trim()}
      </Code>

      <h2 id="PackageConfig">PackageConfig Type</h2>
      <Code language="ts">
        type PackageConfig = string | [packageName: string, config: unknown];
      </Code>
      <p>
        The PackageConfig type is used in akitainu config to specify what
        package to use as source, checker, filter or reporter. It also allows
        passing options to the specified package.
      </p>
      <p>
        PackageConfig is either a package name as a string or a pair of package
        name and config given to that package. <code>"package-name"</code> is
        equivalent to <code>["package-name", {"{}"}]</code>.
      </p>
      <p>
        Package name is to be <code>require</code>d/<code>import</code>ed from
        the akitainu runtime. However, names that start with{" "}
        <code>akitainu:</code> are considered <em>internal packages</em> that
        come along with the <code>akitainu</code> package and do not require
        installation of additional packages.
      </p>
    </Fragment>
  );
}
