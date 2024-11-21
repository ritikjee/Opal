import { ThemeProvider } from "@/components/theme";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import ReactQueryProvider from "@/lib/react-query";
import { Toaster } from "sonner";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "AI StreamCraft",
  description: "Share AI power videos with your friends",
};

const manrope = DM_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className} bg-[#171717]`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ReduxProvider>
              <ReactQueryProvider>
                {children}
                <Toaster />
              </ReactQueryProvider>
            </ReduxProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
