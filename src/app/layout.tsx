import Header from "@/components/ui/header";
import "@/styles/main.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hadith | Homepage",
  description: "Random hadith for every refresh. Know more ahadeith.",
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
