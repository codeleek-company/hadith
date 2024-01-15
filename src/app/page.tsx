"use client";

import Hadith from "./hadith";
import { useState } from "react";

export default function Homepage() {
  const [hadith, setHadith] = useState("");

  function copyHadith() {
    navigator.clipboard.writeText(hadith);
  }

  return (
    <div
      onClick={copyHadith}
      className="bg-[hsl(217,19%,24%)] w-[80%] mx-auto rounded-2xl p-5 cursor-pointer drop-shadow-lg after:content-['اضغط_لنسخ_الحديث'] after:text-gray-400"
    >
      <h2 className="text-[2.4rem] w-fit py-6 mx-auto text-[hsl(150,100%,66%)]">
        حديث
      </h2>
      <p className="text-center max-w-prose text-[1.6rem] p-3 mx-auto">
        <Hadith stater={setHadith} />
      </p>
    </div>
  );
}
