import getRandomAya from "@/utils/getRadomAya";
import type { Metadata } from "next";
import T from "@/utils/t";
import Image from "next/image";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Hadith | Homepage",
  description: "pageTitle",
};

interface SearchParams {
  lang: string;
}

export default async function Hadith({ params }: { params: SearchParams }) {
  let lang = params.lang == "ar" ? 1 : 0;

  const t = new T(params.lang);

  const response = await getRandomAya(lang);

  let classes = "";

  if (lang) classes = "rtl rwd";

  try {
    let hadith = response.data.text;
    return (
      <>
        <Header lang={lang} />
        <div className={classes}>
          <div className="text-[2.4rem] flex flex-col items-center py-3 pt-6">
            <div>{t.translate("title-aya")}</div>
            <Image width="100" height="100" src="/images/moon.png" alt="moon" />
          </div>
          <div
            className="text-center text-[1.6rem] p-3"
            dangerouslySetInnerHTML={{ __html: hadith }}
          ></div>
        </div>
        <Footer type="aya" lang={lang} />
      </>
    );
  } catch {
    return "time out";
  }
}
