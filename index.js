const express = require('express')
const app = express()
const nodemailer = require("nodemailer")
const cors = require("cors")
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: 'smtp.mail.ru',
    port: 25,//465,
    secure: false,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: 'ssemenenco98@gmail.com',
        pass: 'tnhbzuocdiwdifmq'
    },

});

app.get('/', function (req, res){
    res.send("Hello World!")
})

app.post('/sendMessage', async function (req, res) {

    let {firstName, email, message} = req.body
    //
    //
    const info = await transporter.sendMail({
        from: 'sitePortfolio <moiredmi7@gmail.com>', // sender address
        to: "ssemenenco98@gmail.com", // list of receivers
        subject: "HR NAPISAL", // Subject line
        // text: {message, email, firstName}, // plain text body
        html: `
    <b>Сообщение с вашего PROFILE PAGE</b>
    <div>name:${firstName}</div>
    <div>Contacts:${email}</div>
    <div>${message}</div>`, // html body
    });

    res.send('ok')
})
app.listen(3010, function () {
    console.log("kekeke")
})