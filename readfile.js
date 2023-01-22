const { fstat } = require("fs");

const fs = require("fs");

fs.readFile("./Welcome.txt", "utf-8", (err, data) => {
  console.log(data);
});
