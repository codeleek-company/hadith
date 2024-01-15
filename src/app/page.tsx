import { getRandomHadith } from "@/app/getRandomHadith";

export default async function Hadith() {
  const response = await getRandomHadith();

  try {
    let hadith = response.hadith[1].body;
    return (
      <div className="bg-[hsl(217,19%,24%)] w-[80%] mx-auto rounded-2xl p-5">
        <h2 className="text-[2.4rem] w-fit py-6 mx-auto text-[hsl(150,100%,66%)]">
          حديث
        </h2>
        <p className="text-center max-w-prose text-[1.6rem] p-3">
          {hadith.replace(/<p>?- /, "").replace("</p>", "")}
        </p>
      </div>
    );
  } catch {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-3">
        فشل التحميل. حاول مره اخرى
        <a href={`/hadith`} className="p-3 rounded-md bg-gray-400">
          حاول مجددا
        </a>
      </div>
    );
  }
}
