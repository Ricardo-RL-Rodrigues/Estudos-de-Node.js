const http = require("http")

const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Olá! Esse é o meu primeiro server com HTML!</h1>Testando atualização!')
})

server.listen(port, () =>{
    console.log(`SErvidor rodando na porta ${port}`)
})