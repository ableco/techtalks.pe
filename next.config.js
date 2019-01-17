const withOffline = require("next-offline");
const withMDX = require("@zeit/next-mdx");
const compose = require("compose-function");

const config = {
  pageExtensions: ["js", "md", "mdx"],
  webpack: function(config) {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./lib/polyfills.js")
      ) {
        entries["main.js"].unshift("./lib/polyfills.js");
      }

      return entries;
    };

    return config;
  }
};

module.exports = compose(
  withOffline,
  withMDX({ extension: /\.mdx?$/ })
)(config);
