import Link from "next/link";

export default function Footer({ lang, type }: { lang: number; type: string }) {
  let langs = [`/ar/${type}`, `/en/${type}`];
  let langsContext = ["AR", "EN"];

  return (
    <Link
      className="absolute top-[10%] flex justify-center items-center w-[50px] h-[50px] rounded-full text-lg left-2 bg-[#554b1a]"
      href={langs[lang]}
    >
      {langsContext[lang]}
    </Link>
  );
}
