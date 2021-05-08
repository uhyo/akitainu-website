import Link from "next/link";
import classes from "./GlobalNavigation.module.css";

export const GlobalNavigation: React.VFC = () => {
  return (
    <div className={classes.wrapper}>
      <h1>Docs</h1>
      <p>
        <Link href="/docs/config">Configuration</Link>
      </p>
      <h2>Packages</h2>
      <ul>
        <li>
          <Link href="/docs/packages/akitainu">akitainu</Link>
        </li>
        <li>
          <Link href="/docs/packages/akitainu-checker-eslint">
            akitainu-checker-eslint
          </Link>
        </li>
        <li>
          <Link href="/docs/packages/akitainu-checker-typescript">
            akitainu-checker-typescript
          </Link>
        </li>
      </ul>
      <h2>Internal Packages</h2>
      <ul>
        <li>
          <Link href="/docs/packages/akitainu:source-static">
            akitainu:source-static
          </Link>
        </li>
        <li>
          <Link href="/docs/packages/akitainu:source-git-diff">
            akitainu:source-git-diff
          </Link>
        </li>
        <li>
          <Link href="/docs/packages/akitainu:filter-by-code">
            akitainu:filter-by-code
          </Link>
        </li>
      </ul>
      <hr />
      <h2>Recipes</h2>
      <ul>
        <li>
          <Link href="/recipes/basic-eslint-ts">
            Basic ESLint and TypeScript Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};
