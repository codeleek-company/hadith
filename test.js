// var http = require("https");

// var options = {
//   method: "GET",
//   hostname: "api.sunnah.com",
//   port: null,
//   path: "/v1/hadiths/random",
//   headers: {
//     "x-api-key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk",
//   },
// };

// async function getRandomHadith() {
//   var body;
//   var req = http.request(options, function (res) {
//     var chunks = [];

//     res.on("data", function (chunk) {
//       chunks.push(chunk);
//     });

//     res.on("end", function () {
//       body = Buffer.concat(chunks);
//       // console.log(JSON.parse(body));
//     });
//     res.on("close", (result) => {
//       console.log("done", result);
//     });
//   });
//   req.end();
// }
// async function hi() {
//   console.log(await getRandomHadith());
//   getRandomHadith();
// }
// hi();
// const axios = require("axios");

// function getRandomHadith() {
//   var config = {
//     method: "get",
//     hostname: "api.sunnah.com",
//     url: `/v1/hadiths/random`,
//     port: null,
//     headers: {
//       "x-api-key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk",
//     },
//   };

//   axios(config)
//     .then(function (response) {
//       console.log(response);
//       // return JSON.stringify(response);
//     })
//     .catch(function (error) {
//       // return `Error occured: ${error}`;
//       console.log(`error`);
//     });
// }
// getRandomHadith();
// var request = require("request");

// var options = {
//   method: "GET",
//   url: "https://api.sunnah.com/v1/hadiths/random",
//   headers: { "x-api-key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk" },
//   body: "{}",
// };

// async function test() {
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);

//     return body;
//   });
// }

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://api.sunnah.com/v1/hadiths/random",
  headers: { "x-api-key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk" },
};

async function test() {
  try {
    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
