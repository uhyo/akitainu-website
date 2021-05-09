import Head from "next/head";
import React from "react";
import { GlobalHeader } from "../GlobalHeader";
import { GlobalNavigation } from "../GlobalNavigation";
import classes from "./PageLayout.module.css";

export const PageLayout: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <Head>
        <link rel="icon" href="/images/akitainu_icon.png" sizes="128x128" />
        <link rel="icon" href="/images/akitainu_icon_small.png" sizes="32x32" />
      </Head>
      <header>
        <GlobalHeader />
      </header>
      <main>{children}</main>
      <nav>
        <GlobalNavigation />
      </nav>
    </div>
  );
};
