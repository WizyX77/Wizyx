import ProgressBarProvider from "@/app/components/Providers/ProgressBar";
import cn from "@/lib/cn";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizyx",
  description: "**» Bot / Web Developer & Content Creator. Professional Pubg Mobile Player, S2G Here Academy Leader! «**",
  themeColor: "#8B5CF6",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: "/Profil.jpg",
  openGraph: {
    images: "https://cdn.discordapp.com/attachments/1271835757375393876/1271836150998372392/Wizyx_Code_3.gif?ex=66b8c937&is=66b777b7&hm=b5e6dd9a89eb6c7115bf12e6046954b60d4646095e9040944c3b689a9f0d69c6&",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col", GeistSans.className, GeistSans.variable)}>
        <ProgressBarProvider>
          {children}
        </ProgressBarProvider>
      </body>
    </html>
  );
}
