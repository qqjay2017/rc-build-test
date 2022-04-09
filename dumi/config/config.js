const path = require("path");
export default {
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
  dynamicImport: {},
  alias: {
    "ljc-react": path.join(__dirname, "../../src"),
  },
};
