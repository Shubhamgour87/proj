const nodemailer = require("nodemailer")

exports.sendMail = (req, res) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "shubhamgour1073@gmail.com",
            pass: "hepzbarxmorrtnbq",
        },
    })
    const mailoption = {
        from: " Pvt. Ltd.shubhamgour1073@gmail.com",
        to: req.body.email,
        subject: "NEWSLETTER SUBSCRIPTION",
        html: `<h1>Welcome</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, earum.</p>
<button>Explore More</button>`,
    }
    transport.sendMail(mailoption, (err, info) => {
        if (err) return res.send(err);
        console.log("mail send")
        return res.send(
            "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1><a href='/'>HomePage</a>"
        );
    })
}