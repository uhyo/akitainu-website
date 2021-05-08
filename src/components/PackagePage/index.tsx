import Head from "next/head";

type Props = {
  /**
   * Package name.
   */
  name: string;
  /**
   * Whether this is internal package.
   */
  internal?: boolean;
  children?: React.ReactNode;
};

export const PackagePage: React.VFC<Props> = ({ name, internal, children }) => {
  return (
    <div>
      <Head>
        <title>Package: {name}</title>
      </Head>
      <h1>Package: {name}</h1>
      {!internal && (
        <div>
          <a href={`https://www.npmjs.com/package/${name}`} rel="external">
            <img
              src={`https://img.shields.io/npm/v/${name}`}
              alt="npm"
              height="20"
            />
          </a>
        </div>
      )}
      {children}
    </div>
  );
};
