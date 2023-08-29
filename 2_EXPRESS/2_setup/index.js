const express = require("express")

const app = express()

app.get('/' , (requisicao , resposta) => {
    resposta.send('blackzin yZ e o melhor jett do brasil e mira mais calma do dima')
})

app.listen(3000 , () => {
    console.log('App rodando na porta 3000')
})