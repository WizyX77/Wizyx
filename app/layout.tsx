import ProgressBarProvider from "@/app/components/Providers/ProgressBar";
import cn from "@/lib/cn";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizyx",
  description: " Hi, I’m @_wizyx",
  themeColor: "#8B5CF6",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: "https://cdn.discordapp.com/attachments/1271835757375393876/1271853609759408211/48174d45618a79369695ad1d9c0f2419.jpg?ex=66b8d97a&is=66b787fa&hm=003732fae3bb5d4ae6f3a4db48c4f935eb46deff291d18625adc8ee2d9a0c103&",
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
