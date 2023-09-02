const axios = require("axios");

export default async function getRandomAya(lang: number) {
  let aya = Math.floor(Math.random() * 6236);
  let langs = ["en.asad", "ar.alafasy"];
  const options = {
    method: "GET",
    url: `http://api.alquran.cloud/v1/ayah/${aya}/${langs[lang]}`,
  };

  try {
    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return `ERROR OCCURED`;
  }
}
