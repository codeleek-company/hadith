"use client";

import Hadith from "./hadith";

export default function Homepage() {
  function copyHadith() {
    navigator.clipboard.writeText(
      document.getElementById("hadith")?.innerHTML as string
    );
  }

  return (
    <div
      onClick={copyHadith}
      className="bg-[hsl(217,19%,24%)] w-[80%] mx-auto rounded-2xl p-5 cursor-pointer drop-shadow-lg after:content-['اضغط_لنسخ_الحديث'] after:text-gray-400"
    >
      <h2 className="text-[2.4rem] w-fit py-6 mx-auto text-[hsl(150,100%,66%)]">
        حديث
      </h2>
      <p
        id="hadith"
        className="text-center max-w-prose text-[1.6rem] p-3 mx-auto"
      >
        <Hadith />
      </p>
    </div>
  );
}
