const paths = require("./paths");

module.exports = {
  mode: "production",
  entry: paths.ssrIndexJs,
  target: "node",
  output: {
    path: paths.ssrBuild,
    filename: "server.js",
    libraryTarget: "js/[name].chunk.js",
    publicPath: paths.publicUrlOrPath,
  },
};
