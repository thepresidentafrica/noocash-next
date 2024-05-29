import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { env } from "process";
import ServerProvider from "@/components/ServerProvider/ServerProvider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FancyLayout } from "@/components/FancyLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "noo.cash| home",
    template: " noo.cash | %s",
  },
  description: "Nextjs Auth Prisma tRPC template",
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
            name: "Actions",
            link: "/actions",
          },
          {
            name: "Trpc",
            link: "/trpc",
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
