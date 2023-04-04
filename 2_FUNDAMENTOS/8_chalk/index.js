const chalk = require('chalk')

const nota = 3

if (nota >= 7){
    console.log(chalk.green.bold('Parabén! Você foi aprovado!'))
}else{
    console.log(chalk.bgRed('REPROVADO!!!'))
}