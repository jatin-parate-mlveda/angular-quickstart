const fs = require("fs");
const path = require("path");
const dotEnv = require("dotenv");

const dotEnvResult = dotEnv.config().parsed;

const env = {
  EMAIL: process.env.EMAIL,
  ...dotEnvResult,
};

console.log(JSON.stringify(fs.readdirSync(path.resolve(), null, 2)));
console.log(JSON.stringify(fs.readdirSync(path.resolve("src"), null, 2)));

fs.writeFileSync(
  path.resolve("src", "environment_variables.ts"),
  `
  export default ${JSON.stringify(env, null, 2)};
`
);
