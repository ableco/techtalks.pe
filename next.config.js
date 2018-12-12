module.exports = {
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
