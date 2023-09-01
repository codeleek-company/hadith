import type { Metadata } from "next";
import { redirect } from "next/navigation";

import T from "@/utils/t";
const t = new T("ar");

export const metadata: Metadata = {
  title: "Hadith | Homepage",
  description: "Random hadith for every refresh. Know more ahadeith.",
};

export default async function Home() {
  redirect("/ar/hadith");
}
