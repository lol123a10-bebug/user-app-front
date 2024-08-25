const path = require("path");
const pathConfig = require("./tsconfig.paths.json");

const { paths } = pathConfig.compilerOptions;

const alias = Object.keys(pathConfig.compilerOptions.paths).reduce(
  (all, alias) => ({
    ...all,
    [alias.replace("/*", "")]: path.resolve(__dirname, paths[alias][0].replace("/*", ""))
  }),
  {}
);

module.exports = {
  webpack: {
    alias: alias
  }
};
