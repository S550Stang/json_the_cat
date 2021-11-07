const userInput = process.argv.slice(2);
const request = require("request");
const clientObj = {
  host: `https://api.thecatapi.com/v1/breeds/search?name=${userInput}`,
  port: 80,
};

request(clientObj.host, (error, response, body) => {
  if (error) {
    console.log("error: Code not found!");
  }

  if (body && response && response.statusCode !== 404) {
    const bodyObj = JSON.parse(body);
    if (bodyObj.length !== 0) {
      if (bodyObj.length < 2 && bodyObj[0]) {
        console.log(bodyObj[0].description);
      } else {
        console.log(bodyObj);
      }
    } else {
      console.log("cat not found");
    }
  } else {
    console.log("Url not found,please verify the url");
  }
});
