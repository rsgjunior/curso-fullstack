import express from 'express'

const app = express()

// Rotas

app.get('/users', (request, response) => {
    return response.json(['fulano', 'ciclano', 'beltrano'])
})

app.post('/users', (request, response) => {
    return response.json({ message: 'Criando usuário' })
})

app.put('/users', (request, response) => {
    return response.json({ message: 'Atualizando usuário' })
})

app.delete('/users', (request, response) => {
    return response.json({ message: 'Deletando usuário' })
})

app.listen('3333', () => {
    console.log("back-end iniciou")
})