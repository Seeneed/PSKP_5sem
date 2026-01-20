const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, 
    secure: true, 
    auth: {
        user: 'u2345451922@gmail.com', 
        pass: 'evcjffpdwvuupcvq' 
    }
});

const fixed_mail = 'denismmnk@gmail.com';

const send = function (message) {
    transporter.sendMail({
        from: 'u2345451922@gmail.com',
        to: fixed_mail,
        subject: 'test sendmail',
        html: message
    }, (err, reply) => {
        if (err) {
            console.log(err && err.stack);
            console.dir(reply);
        }
        else {
            console.log('message send');
        }
    })
}

module.exports = send