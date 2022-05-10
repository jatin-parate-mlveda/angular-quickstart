const fs = require("fs");
const path = require("path");
const dotEnv = require("dotenv");

const dotEnvResult = dotEnv.config().parsed;

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
