import { getRandomHadith } from "@/app/getRandomHadith";

export default async function Hadith({ stater }: { stater: any }) {
  const response = await getRandomHadith();
  let hadith =
    typeof response == "string"
      ? response
      : response.hadith[1].body.replaceAll(/<p>?- /, "").replaceAll("</p>", "");

  stater(hadith);

  return hadith;
}
