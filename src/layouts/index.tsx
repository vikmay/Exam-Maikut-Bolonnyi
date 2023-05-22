import React, { ReactNode } from "react";
import Header from "./header";
import Head from "next/head";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
};

const Layouts = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>TZL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ width: "90%", margin: "0 auto" }} {...props}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layouts;
