export default function Header({ lang }: { lang: number }) {
  let aya = ["Aya", "أيه"];
  let hadith = ["Hadith", "حديث"];
  return (
    <div className="p-3 flex justify-between">
      <div className="w-[50%] bg-gray-900">{aya[lang]}</div>
      <div className="w-[50%] bg-gray-900">{hadith[lang]}</div>
    </div>
  );
}
