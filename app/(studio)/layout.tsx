import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
