
import React from "react";
import "@/styles/globals.scss";
import "swiper/css";
import Layouts from "@/layouts";

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>; pageProps: any }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts> main
  );
}

export default MyApp;
