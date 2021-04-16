const init = require("../init");

module.exports = (req, res) => {
  init();
  res.send(`Success`)
}