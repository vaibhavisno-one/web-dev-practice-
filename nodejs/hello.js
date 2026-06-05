const fs = require("fs");

const result =fs.readFileSync("./context.txt", "utf-8")
console.log(result)

fs.appendFileSync("./context.txt","heythere")

console.log(result)

