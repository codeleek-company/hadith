"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect(`/${navigator.languages[1]}/hadith`);
  }, []);

  return "Redirecting...";
}
