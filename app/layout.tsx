import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mohammad Abdalla — AI & Creative Technology Developer",
    template: "%s | Mohammad Abdalla",
  },
  description:
    "Computer Engineer and Master's student in Artificial Intelligence in Oslo, building AI systems, digital platforms, and creative technology for arts, culture, and social impact.",
  keywords: [
    "Mohammad Abdalla",
    "AI Developer",
    "Creative Technologist",
    "Computer Vision",
    "Full-Stack Developer",
    "Theatre Technology",
    "Oslo",
  ],
  authors: [{ name: "Mohammad Abdalla" }],
  openGraph: {
    title: "Mohammad Abdalla — AI & Creative Technology Developer",
    description:
      "AI, software, and creative technology for arts, culture, and social impact.",
    type: "website",
    locale: "en_NO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070909",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
