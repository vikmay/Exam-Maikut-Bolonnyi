import Providers from "@/components/Providers";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../store/store";
import "styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Providers>
  );
}
