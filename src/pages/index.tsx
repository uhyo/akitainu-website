import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.css";

export default function Home() {
  const title = "Akitainu: unified linting toolkit for node.js projects";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{title}</h1>
      <figure className={classes.akitainu}>
        <Image src="/images/akitainu_irasutoya.png" width={170} height={191} />
        <figcaption>
          Image of Akitainu (image&nbsp;credit:{" "}
          <a href="https://www.irasutoya.com/" rel="external">
            いらすとや
          </a>
          )
        </figcaption>
      </figure>
      <div>
        <a href="https://www.npmjs.com/package/akitainu" rel="external">
          <img
            src="https://img.shields.io/npm/v/akitainu"
            alt="npm"
            height="20"
          />
        </a>
      </div>
      <p>
        <b>Akitainu</b> is a tool for unifying linting workflows of node.js
        projects. Based on <code>.akitainurc.js</code>, Akitainu can invoke
        multiple linters and provide results in a unified format. It also
        supports posting list results as a pull request review comment on
        GitHub.
      </p>
      <p>
        Akitainu is also suitable in the case where you want to tighten linter
        settings but cannot afford to fix all existing code for the new
        settings. Akitainu provides a pull request-based gradual adoption
        strategy in which only changed files are checked with the tightened
        setting. This way, existing code is gradually fixed as it is modified.
      </p>
    </div>
  );
}
