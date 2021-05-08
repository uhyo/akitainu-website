import React, { useMemo } from "react";
import { PrismAsyncLight } from "react-syntax-highlighter";
import shellLanguage from "react-syntax-highlighter/dist/cjs/languages/prism/shell-session";
import typescriptLanguage from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import yamlLanguage from "react-syntax-highlighter/dist/cjs/languages/prism/yaml";
import prism from "react-syntax-highlighter/dist/cjs/styles/prism/prism";
import classes from "./Code.module.css";

type Language = "ts" | "sh" | "yaml";

const langMap: Record<Language, string> = {
  ts: "typescript",
  sh: "shell-session",
  yaml: "yaml",
};

PrismAsyncLight.registerLanguage(langMap.ts, typescriptLanguage);
PrismAsyncLight.registerLanguage(langMap.sh, shellLanguage);
PrismAsyncLight.registerLanguage(langMap.yaml, yamlLanguage);

const preCustomStyle = {
  position: "relative",
};

type Props = {
  language: Language;
  highlight?: readonly [start: number, end: number];
  children?: React.ReactNode;
};

export const Code: React.VFC<Props> = ({ language, highlight, children }) => {
  const PreTag = useMemo(() => {
    if (!highlight) {
      return "pre";
    }
    return ({ children, ...rest }: { children?: React.ReactNode }) => {
      return (
        <pre {...rest}>
          {children}
          <Highlight start={highlight[0]} end={highlight[1]} />
        </pre>
      );
    };
  }, [highlight]);

  return (
    <PrismAsyncLight
      language={langMap[language]}
      style={prism}
      PreTag={PreTag}
      customStyle={preCustomStyle}
    >
      {children}
    </PrismAsyncLight>
  );
};

type HighlightProps = {
  start: number;
  end: number;
};

const Highlight: React.VFC<HighlightProps> = ({ start, end }) => {
  return (
    <div
      aria-hidden
      className={classes.highlight}
      style={{
        top: `calc(1em + ${start - 1}em * 1.5)`,
      }}
    >
      {" \n".repeat(end - start + 1)}
    </div>
  );
};
