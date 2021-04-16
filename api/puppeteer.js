const init = require("../init");

module.exports = (req, res) => {
  await init();
  res.send(`Success`)
}