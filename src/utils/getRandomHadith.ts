import HadithResponse from "@/types/hadith-response";

const axios = require("axios");

const defaultResponse = {
  collection: "riyadussalihin",
  bookNumber: "introduction",
  chapterId: "11.00",
  hadithNumber: "98",
  hadith: [
    {
      lang: "en",
      chapterNumber: "11",
      chapterTitle: "The Struggle (in the Cause of Allah)",
      urn: 1600970,
      body: `<p>'Aishah (May Allah be pleased with her) said: The Prophet (ﷺ) would stand (in prayer) so long that the skin of his feet would crack. I asked him, "Why do you do this while your past and future sins have been forgiven?" He said, "Should I not be a grateful slave of Allah?"<br/><br/><b>[Al-Bukhari and Muslim]</b>.<br/><br/></p>`,
      grades: [],
    },
    {
      lang: "ar",
      chapterNumber: "11",
      chapterTitle: "- باب المجاهدة",
      urn: 1700970,
      body: `<p>- الرابع‏:‏ عن عائشة رضي الله عنها أن النبي صلى الله عليه وسلم كان يقوم من الليل حتى تنفطر قدماه، فقلت له‏:‏ لم تصنع هذا يا رسول الله، وقد غفر الله لك ما تقدم من ذنبك وما تأخر‏؟‏‏!‏ قال‏:‏ ‏"‏ أفلا أحب أن أكون عبداً شكوراً‏؟‏‏"‏ ‏(‏‏(‏متفق عليه‏.‏ هذا لفظ البخاري، ونحوه في الصحيحين من رواية المغيرة بن شعبة‏)‏‏)‏‏.‏</p>`,
      grades: [],
    },
  ],
};

const options = {
  method: "GET",
  url: "https://api.sunnah.com/v1/hadiths/random",
  headers: { "x-api-key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk" },
};

export async function getRandomHadith() {
  try {
    const response: HadithResponse = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return defaultResponse;
  }
}
