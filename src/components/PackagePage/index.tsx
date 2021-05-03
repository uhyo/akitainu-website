type Props = {
  /**
   * Package name.
   */
  name: string;
  children?: React.ReactNode;
};

export const PackagePage: React.VFC<Props> = ({ name, children }) => {
  return (
    <div>
      <h1>Package: {name}</h1>
      <div>
        <a href={`https://www.npmjs.com/package/${name}`} rel="external">
          <img
            src={`https://img.shields.io/npm/v/${name}`}
            alt="npm"
            height="20"
          />
        </a>
      </div>
      {children}
    </div>
  );
};
