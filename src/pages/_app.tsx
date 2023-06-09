import React, { useRef } from "react";
import "@/styles/globals.scss";
import "swiper/css";
import Layouts from "@/layouts";
import Providers from "@/components/providers/Providers";

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
