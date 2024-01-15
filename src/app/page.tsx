import { getRandomHadith } from "@/app/getRandomHadith";

export default async function Hadith() {
  const response = await getRandomHadith();
  let hadith =
    typeof response == "string"
      ? response
      : response.hadith[1].body.replace(/<p>?- /, "").replace("</p>", "");

  return (
    <div className="bg-[hsl(217,19%,24%)] w-[80%] mx-auto rounded-2xl p-5">
      <h2 className="text-[2.4rem] w-fit py-6 mx-auto text-[hsl(150,100%,66%)]">
        حديث
      </h2>
      <p className="text-center max-w-prose text-[1.6rem] p-3 mx-auto">
        {hadith}
      </p>
    </div>
  );
}
