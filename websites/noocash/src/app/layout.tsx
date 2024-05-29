import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "next/document";
import { env } from "process";
import ServerProvider from "@/components/ServerProvider/ServerProvider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FancyLayout } from "@/components/FancyLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  creator: "noocash",
  publisher: "The President Africa",
  applicationName: "noo.cash",
  title: {
    default: "noo.cash| home",
    template: " noo.cash | %s",
  },
  description: "noo.cash is a home for all your easy payment  needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const url = env.TRPC_URL
  return (
    <ServerProvider url={`${url}`}>

      <html lang="en" className="bg-gray-50">
        <body className={inter.className}>
          <FloatingNav navItems={[{
            name: "Home",
            link: "/",
          }, {
            name: "How it works",
            link: "/#how-it-corks",
          },
          {
            name: "Pricing",
            link: "/#pricing",
          },
          {
            name: "Developers",
            link: "/#developers",
          }
          ]} />
          <FancyLayout>
            {children}
          </FancyLayout>
        </body>
      </html>
    </ServerProvider>
  );
}
