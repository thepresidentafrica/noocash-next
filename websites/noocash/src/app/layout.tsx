import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { env } from "process";
import ServerProvider from "@/components/ServerProvider/ServerProvider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FancyLayout } from "@/components/FancyLayout";
import { AOSConfig } from "@/components/ui/Aos";
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
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["noocash", "cash", "fintech", "banking", "money"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Mitch Chimwemwe Chanza", url: "https://mitch.guru" },
   
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const url = env.TRPC_URL
  return (
    <ServerProvider url={`${url}`}>

      <html lang="en" className="bg-purple-50">
        <body className={`${inter.className} overflow-x-hidden`}>
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
          <AOSConfig />
            {children}
          </FancyLayout>
        </body>
      </html>
    </ServerProvider>
  );
}
