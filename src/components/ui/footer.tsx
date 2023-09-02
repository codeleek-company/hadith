import Link from "next/link";

export default function Footer({ lang, type }: { lang: number; type: string }) {
  let langs = [`/ar/${type}`, `/en/${type}`];
  let langsContext = ["AR", "EN"];

  return (
    <div className="fixed h-[40px] w-full bottom-0 p-3 bg-[#554b1a]">
      <Link href={langs[lang]}>{langsContext[lang]}</Link>
    </div>
  );
}
