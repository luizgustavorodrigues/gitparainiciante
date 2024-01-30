const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send({message:'Olá Mundo esse é meu novo repositorio'})
})

app.listen(4001, () => {
    console.log('Api Inicialiada na porta 4001');
})