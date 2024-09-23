import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import { ConfirmProvider } from '@/components/Confirm';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ConfirmProvider>
            {children}
            </ConfirmProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}