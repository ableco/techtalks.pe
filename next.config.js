const withMDX = require("@next/mdx");

const config = {
  pageExtensions: ["js", "ts", "tsx", "md", "mdx"],
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

module.exports = withMDX({ extension: /\.mdx?$/ })(config);
