// import HadithResponse from "@/types/hadith-response";
// var axios = require("axios");

// function rand3Int() {
//   let rand = Math.floor(Math.random() * 1000);

//   return rand.toString();
// }

// export function getRandomHadith() {
//   var config = {
//     method: "get",
//     maxBodyLength: Infinity,
//     url: `https://hadeethenc.com/api/v1/hadeeths/one/?language=ar&id=2982`,
//   };

//   return axios(config)
//     .then(function (response: HadithResponse) {
//       return JSON.stringify(response.data);
//     })
//     .catch(function (error: Error) {
//       return `Error occured: ${error}`;
//     });
// }

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://api.sunnah.com/v1/hadiths/random",
  headers: { "x-api-key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk" },
};

export async function getRandomHadith() {
  try {
    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return `ERROR OCCURED`;
  }
}
