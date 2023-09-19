import "@/styles/main.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hadith | Homepage",
  description: "Random hadith for every refresh. Know more ahadeith.",
  openGraph: {
    images: "/7ades.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
