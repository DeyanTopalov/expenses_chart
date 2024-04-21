import type { Metadata } from "next";
import { dmSans } from "./ui/fonts";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Expenses Chart Component",
  description: "Frontend Mentor challenge to build Expenses Chart Component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
