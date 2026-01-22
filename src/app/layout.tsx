import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Chah E Piaa De - Authentic Indian Chai",
  description: "Experience authentic Indian chai in a warm, welcoming atmosphere. ਚਾਹ ਦੀ ਪਿਆਲਾ ਦੇ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
