     const fs = require('fs')

// Créer le fichier welcome.txt
  fs.writeFile('welcome.txt', 'Hello Node', (err) => {
         if (err) throw err

 console.log('welcome.txt a été créé.')


    // Lire le fichier welcome.txt
         fs.readFile('welcome.txt', 'utf8', (err, data) => {
                 if (err) throw err
             console.log(data)
         })
     })