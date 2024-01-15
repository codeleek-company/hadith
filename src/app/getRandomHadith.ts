import HadithResponse from "@/types/hadith-response";

const axios = require("axios");

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
    return "حاول مجددا";
  }
}
