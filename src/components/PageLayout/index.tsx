import React from "react";
import { GlobalNavigation } from "../GlobalNavigation";
import classes from "./PageLayout.module.css";

export const PageLayout: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <header>Header</header>
      <main>{children}</main>
      <nav>
        <GlobalNavigation />
      </nav>
    </div>
  );
};
