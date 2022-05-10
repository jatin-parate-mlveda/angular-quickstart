const fs = require("fs");
const path = require("path");
const dotEnv = require("dotenv");

const dotEnvResult = dotEnv.config().parsed;

console.log(dotEnvResult);

const env = {
  EMAIL: process.env.EMAIL,
  ...dotEnvResult,
};

fs.writeFileSync(
  path.resolve("src", "environment_variables.ts"),
  `
  export default ${JSON.stringify(env, null, 2)};
`
);

console.log(JSON.stringify(fs.readdirSync(path.resolve(), null, 2)));
console.log(JSON.stringify(fs.readdirSync(path.resolve("src"), null, 2)));

console.log(JSON.stringify(env, null, 2));
console.log(fs.readFileSync(path.resolve("src", "environment_variables.ts")));
