import ProgressBarProvider from "@/app/components/Providers/ProgressBar";
import cn from "@/lib/cn";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizyx",
  description: " Hi, I’m @_wizyx I'm currently learning I am currently living in Adana, Turkey.",
  themeColor: "#8B5CF6",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: "https://cdn.discordapp.com/attachments/1266051388962640056/1271216520558674051/Discord-Profil.jpg?ex=66b68824&is=66b536a4&hm=c38b2b5ae38c9b6c82ed3cd59906089f8d55b9b92fc2aa189a8bd5958d0bbc72&",
  openGraph: {
    images: "https://cdn.discordapp.com/attachments/1266051388962640056/1271216520558674051/Discord-Profil.jpg?ex=66b68824&is=66b536a4&hm=c38b2b5ae38c9b6c82ed3cd59906089f8d55b9b92fc2aa189a8bd5958d0bbc72&",
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
