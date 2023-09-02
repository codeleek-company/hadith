import Link from "next/link";

export default function Header({ lang }: { lang: number }) {
  let url = ["/en/aya", "/ar/aya"];
  let url2 = ["/en/hadith", "/ar/hadith"];
  let aya = ["Aya", "أيه"];
  let hadith = ["Hadith", "حديث"];
  let family = ["monospace", "rwd"];
  let classes = `m-3 flex justify-between gap-3 ${family[lang]}`;

  return (
    <div className={classes}>
      <Link
        href={url[lang]}
        className="w-[50%] bg-[#554b1a] text-center hover:bg-[#554b1ab4] rounded-3xl text-[1.5rem]"
      >
        {aya[lang]}
      </Link>
      <Link
        href={url2[lang]}
        className="w-[50%] bg-[#554b1a] text-center hover:bg-[#554b1ab4] rounded-3xl text-[1.5rem]"
      >
        {hadith[lang]}
      </Link>
    </div>
  );
}
