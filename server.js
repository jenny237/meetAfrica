/* nous commencons par la commande de base pour coder plus rapidemant est utilisant le framework express*/
const express = require('express');

require("dotenv").config({path:'./config/.env'});

/* signifie que chaque fois que nous utiliserons app on fera reference a l'utilisation d'express */
const app = express();

/* defdu port d'ecoute et un callback en retour */
app.listen(process.env.PORT, () =>{
    console.log(`listening on port ${process.env.PORT}`);
})
