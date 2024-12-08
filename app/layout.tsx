import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import { Header } from "./(display)/headerfooter";

export const metadata: Metadata = {
  title: {
    template: '%s ✦ AxionSpire',
    default: '✦ AxionSpire', // a default is required when creating a template
  },
  description: 'An innovative, story-based Minecraft server. LGBTQ+ owned!',
  keywords: ['AxionSpire', 'Minecraft', 'LGBTQ', 'Story', 'Game', 'Video Game'],
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
