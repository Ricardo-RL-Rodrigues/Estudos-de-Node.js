import inquirer from 'inquirer';

inquirer.prompt([
    {
        name: 'p1', 
        message: 'Qual a primeira nota?',
    },
    {
        name:'p2', 
        message: 'Qual a segunda nota?',
    },
]).then((awnsers) =>{
    console.log(awnsers)
    const media = (parseInt(awnsers.p1) + parseInt(awnsers.p2))/2
    console.log(`A média é ${media}`)
}).catch(err => console.log(err))