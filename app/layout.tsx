import type { Metadata } from "next";
import "./globals.css";
import { outfit } from "./fonts";
import Providers from "@/lib/themeProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Techno Club",
  description: "The official website for Techno Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body className={outfit.className}>
        <Providers>
          <main className="bg-background">
            <div className="parent-container">
              <Header />
              <div className="">{children}</div>
              <Footer />
            </div>
          </main>
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
