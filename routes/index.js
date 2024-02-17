var express = require("express");
var router = express.Router();
const catAPI = require("../controllers/catController.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Cat Facts!" });
});

router.get("/cats/fact", async (req, res) => {
  try {
    const catFact = await catAPI.fetchCatFacts();
    res.render("cat/fact", { catFact });
  } catch (err) {
    console.error("Error: ", err);
  }
});

module.exports = router;
