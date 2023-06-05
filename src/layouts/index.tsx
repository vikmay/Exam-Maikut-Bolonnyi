import React, { ReactNode } from "react";
import Header from "./header";
import Head from "next/head";
import Footer from "./footer";
import s from "./index.module.scss";

type LayoutProps = {
  children: ReactNode;
};

const Layouts = ({ children, ...props }: LayoutProps) => {
  return (
    <div className={s.container}>
      <Head>
        <title>TZL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={s.main} {...props}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layouts;
