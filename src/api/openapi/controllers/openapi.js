const fs = require("fs");

module.exports = {
  async index(ctx, next) {
    const result = fs.readFileSync(
      process.cwd() +
        "/src/extensions/documentation/documentation/1.0.0/full_documentation.json",
      "utf8"
    );

    ctx.body = JSON.parse(result);
  },
};
