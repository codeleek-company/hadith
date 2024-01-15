const axios = require("axios");

export default async function getRandomAya() {
  let aya = Math.floor(Math.random() * 6236);
  const options = {
    method: "GET",
    url: `http://api.alquran.cloud/v1/ayah/${aya}/ar.alafasy`,
  };

  try {
    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return `ERROR OCCURED`;
  }
}
