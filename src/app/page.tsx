"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

// interface RegexExec {
//   [
//    string,
//     lang:
//   ]
// }

export default function Home() {
  useEffect(() => {
    redirect(`/${(/../.exec(navigator.language) as any)[0]}/hadith`);
  }, []);

  return "Redirecting...";
}
