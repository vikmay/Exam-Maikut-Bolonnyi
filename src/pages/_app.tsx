import React from "react";
import "@/styles/globals.scss";
import "swiper/css";
import Layouts from "@/layouts";
import Providers from "@/components/Providers";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  return (
    <Providers>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Providers>
  );
}

export default MyApp;
