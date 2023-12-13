"use clinet";
import type { Metadata } from "next";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { LoadingContextProvider } from "@/context/LoadingContext";
import SWRConfigContext from "@/context/SWRConfigContext";
import { sequelize } from "@/db/database.js";

sequelize.sync();

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>BeBeFace</title>
      </head>
      <body>
        <LoadingContextProvider>
          <AuthContextProvider>
            <main className="p-10 h-auto grow">
              <SWRConfigContext>
                <div className="max-w-4xl mx-auto h-full">{children}</div>
              </SWRConfigContext>
            </main>
          </AuthContextProvider>
        </LoadingContextProvider>
      </body>
    </html>
  );
}
