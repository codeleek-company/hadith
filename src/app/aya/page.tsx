import getRandomAya from "@/utils/getRandomAya";
import Image from "next/image";
import Header from "@/components/ui/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aya | Homepage",
  description: "Random aya for every refresh. Know more ahadeith.",
};

interface SearchParams {
  lang: string;
}

export default async function Hadith() {
  const response = await getRandomAya();

  try {
    let hadith = response.data.text;
    return (
      <>
        <Header />
        <div className="rtl bg-[#000a] min-h-screen">
          <div className="text-[2.4rem] flex flex-col items-center py-3 pt-6">
            <div>أيه</div>
            <Image width="100" height="100" src="/images/moon.png" alt="moon" />
          </div>
          <div
            className="text-center text-[1.6rem] p-3"
            dangerouslySetInnerHTML={{ __html: hadith }}
          ></div>
        </div>
      </>
    );
  } catch {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-3 bg-[#000a]">
        فشل التحميل. حاول مره اخرى
        <a href={`/aya`} className="p-3 rounded-md bg-gray-400">
          حاول مجددا
        </a>
      </div>
    );
  }
}
