import { getRandomHadith } from "@/app/getRandomHadith";

export default async function Hadith() {
  const response = await getRandomHadith();
  let hadith =
    typeof response == "string"
      ? response
      : response.hadith[1].body
          .replaceAll(/<p>?-? /g, "")
          .replaceAll("</p>", "");

  return hadith;
}
