import chalk from 'chalk'
import inquirer from 'inquirer'

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual seu nome ?: ',
    },
    {
        name: 'idade',
        message: 'Qual sua idade ?: '
    },
]).then((awnsers) =>{
    const nome = awnsers.nome
    const idade = awnsers.idade
    console.log(chalk.bgYellow.black(`Seu nome é ${nome}! Você tem ${idade} anos!`))
}).catch(err => console.log(err))