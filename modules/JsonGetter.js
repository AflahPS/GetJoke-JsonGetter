const superagent = require("superagent");
const fs = require("fs");
module.exports = async () => {
  try {
    const res = await superagent.get(
      "https://official-joke-api.appspot.com/random_ten"
    );
    const footage = res.body;
    fs.writeFile(`./JSON/new.json`, JSON.stringify(footage), (err) => {
      if (err) console.error(err);
    });
  } catch (err) {
    console.error(err);
  }
};
