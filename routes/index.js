var express = require('express');
var router = express.Router();
const { sendMail } = require("../utils/mail")
const collection = require("../modles/bookSchema")
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/send-mail", async (req, res, next) => {
  await sendMail(req, res);
  const user = await new collection(req.body);
  await user.save();
  res.send("mail send");
})

module.exports = router;