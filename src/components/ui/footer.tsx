import Link from "next/link";

export default function Footer({ lang, type }: { lang: number; type: string }) {
  let arBg = "bg-[#111]",
    enBg = "bg-[#111]";

  if (lang) arBg = "bg-[#222]";
  else enBg = "bg-[#222]";

  return (
    <div className="justify-center w-full flex fixed bottom-0 monospace p-5 gap-1">
      <Link
        className={`flex justify-center items-center w-[40px] h-[40px] rounded-full text-[14px] ${arBg}`}
        href={`/ar/${type}`}
      >
        AR
      </Link>
      <Link
        className={`flex justify-center items-center w-[40px] h-[40px] rounded-full text-[14px] ${enBg}`}
        href={`/en/${type}`}
      >
        EN
      </Link>
    </div>
  );
}
