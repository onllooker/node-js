const fs = require("fs");

const readStream = fs.createReadStream("./JavaScript/node-js/input.txt");
const writeStream = fs.createWriteStream("./JavaScript/node-js/output.txt");

// console.log(
readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});
// );
