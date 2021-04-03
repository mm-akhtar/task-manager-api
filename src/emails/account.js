const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kkakhtar143@gmail.com',
        subject: 'thanks for joining in',
        text: `Welcome to tha app, ${name}, Let me know how you get along with tha app`,
    })
}

const sendEndEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kkakhtar143@gmail.com',
        subject: 'Sorry to see you go',
        text:`Sorry ${name} you are leaving us, let us know if you we can do something for you`
    })
} 

module.exports = {
    sendWelcomeEmail,
    sendEndEmail
}

// sgMail.send({
//     to: 'contact.mmakhtar@gmail.com',
//     from: 'kkakhtar143@gmail.com',
//     subject: 'This is my first creation',
//     text: 'I hope this one actually get to you'
// })

// subhedaraltamash@gmail.com