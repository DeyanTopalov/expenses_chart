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
      <body
        className={`${dmSans.className} bg-clr-cream grid h-svh w-svw place-content-center gap-0 text-lg antialiased md:h-screen md:w-full`}
      >
        <main className="grid h-svh w-svw place-items-center px-4 md:max-w-[90rem]">
          {children}
        </main>
      </body>
    </html>
  );
}
