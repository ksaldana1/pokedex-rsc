import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Suspense } from "react";
import ClientSideScrollRestorer from "./ClientSideRestorer";

export const metadata: Metadata = {
  title: "Pokedex RSC",
  description: "Pokedex example using React Server Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`antialiased flex justify-center w-screen h-screen`}>
          {children}
        </body>
        <Suspense>
          <ClientSideScrollRestorer />
        </Suspense>
      </html>
    </ViewTransitions>
  );
}
