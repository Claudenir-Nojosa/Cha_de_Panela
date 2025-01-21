import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "../../providers/query-provider";
import { AuthProvider } from "../../providers/auth-provider";
import { ThemeProvider } from "../../providers/theme-provider";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { NavBar } from "@/components/shared/Navbar";
import BottomBar from "@/components/shared/BottomBar";
import Footer from "@/components/shared/Footer";
import { siteConfig } from "../../config/site";
import { Toaster } from "sonner";
import "../../styles/globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/assets/logo.ico",
    shortcut: "/assets/logo.ico",
    apple: "/assets/logo.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Toaster />
      <AuthProvider>
        <body className={inter.className}>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex">
                <div className="flex flex-col flex-1">
                  <NavBar />
                  <MaxWidthWrapper className="mb-12 mt-14 sm:mt-15">
                    {children}
                  </MaxWidthWrapper>
                  <Footer />
                </div>
               <BottomBar />
              </div>
            </ThemeProvider>
          </QueryProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
