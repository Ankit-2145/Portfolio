import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/ui/scrollToTop";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-FiraCode antialiased scroll-smooth">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
