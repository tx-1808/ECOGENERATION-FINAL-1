const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index"); // Certifique-se de ter o arquivo index.ejs em ./app/views
});

module.exports = router;