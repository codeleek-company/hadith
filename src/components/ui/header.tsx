import Link from "next/link";

export default function Header({ lang }: { lang: number }) {
  let url = ["/en/aya", "/ar/aya"];
  let url2 = ["/en/hadith", "/ar/hadith"];
  let aya = ["Aya", "أيه"];
  let hadith = ["Hadith", "حديث"];
  let family = ["monospace", "rwd"];
  let button =
    "bg-[#111] text-center w-[200px] transition-all duration-300 hover:bg-[#222] rounded-lg py-2 text-[1.5rem]";

  return (
    <div className={`p-3 flex justify-center gap-3 ${family[lang]} bg-[#000a]`}>
      <Link href={url[lang]} className={button}>
        {aya[lang]}
      </Link>
      <Link href={url2[lang]} className={button}>
        {hadith[lang]}
      </Link>
    </div>
  );
}
