const fs = require("fs");
const path = require("path");
const dotEnv = require("dotenv");

const dotEnvResult = dotEnv.config().parsed;

const env = {
  ...dotEnvResult,
  NAME: process.env.NAME,
};

fs.writeFileSync(
  path.resolve("src", "environment_variables.ts"),
  `
  export default ${JSON.stringify(env, null, 2)};
`
);
