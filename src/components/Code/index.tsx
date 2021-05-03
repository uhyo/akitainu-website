import { PrismAsyncLight } from "react-syntax-highlighter";
import shellLanguage from "react-syntax-highlighter/dist/cjs/languages/prism/shell-session";
import typescriptLanguage from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import prism from "react-syntax-highlighter/dist/cjs/styles/prism/prism";

type Language = "ts" | "sh";

const langMap: Record<Language, string> = {
  ts: "typescript",
  sh: "shell-session",
};

PrismAsyncLight.registerLanguage(langMap.ts, typescriptLanguage);
PrismAsyncLight.registerLanguage(langMap.sh, shellLanguage);

type Props = {
  language: Language;
  children?: React.ReactNode;
};

export const Code: React.VFC<Props> = ({ language, children }) => {
  return (
    <PrismAsyncLight language={langMap[language]} style={prism}>
      {children}
    </PrismAsyncLight>
  );
};
