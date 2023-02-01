import config from "../config";

async function convert(amount) {
  let data = "";
  await fetch(
    `https://api.apilayer.com/currency_data/convert?to=usd&from=cop&amount=${amount}`,
    {
      method: "GET",
      headers: {
        apikey: config.apiKey,
      },
    }
  )
    .then((response) => response.text())
    .then((result) => {
      data = result;
    })
    .catch((error) => console.log("error", error));

  return data;
}

module.exports = convert;
