 const nodemailer = require('nodemailer')

// // Créer un transporteur
 const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
         user: 'Votre email@gmail.com', // Remplacez par votre email
         pass: 'votre mot de passe'          // Remplacez par votre mot de passe
     }
 })

// // Définir les options de l'email
 const mailOptions = {
     from: 'votre email@gmail.com',
     to: 'myfriend@yahoo.com',
     subject: 'Sending Email using Node.js',
     text: 'Message envoyer avec succès!'
 }

 // Envoyer l'email
 transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
         return console.log(error)
     }
     console.log('Email sent: ' + info.response)
 })