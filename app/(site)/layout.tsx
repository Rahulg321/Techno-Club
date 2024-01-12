import type { Metadata } from "next";
import "./globals.css";
import { outfit } from "../fonts";
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
        <meta
          name="google-site-verification"
          content="8pP_lJBKWWCw5FpUWOGsVYea4jHoZ4bVNitNrYCI_EU"
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
