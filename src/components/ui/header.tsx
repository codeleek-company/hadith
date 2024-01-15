import Link from "next/link";

export default function Header() {
  let button =
    "bg-[#111] text-center w-[200px] transition-all duration-300 hover:bg-[#222] rounded-lg py-2 text-[1.5rem]";

  return (
    <div className={`p-3 flex justify-center gap-3 rwd bg-[#000a]`}>
      <Link href="/aya" className={button}>
        أيه
      </Link>
      <Link href="/hadith" className={button}>
        حديث
      </Link>
    </div>
  );
}
