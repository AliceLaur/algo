import { log } from 'console';
import readlineSync = require('readline-sync');

// // Écrire une fonction hello qui demande à l’utilisateur d’entrer son nom et affiche une salutation reprenant son nom.
// function hello(): string {
//     let userName = readlineSync.question('May I have your name? ');
//     return 'Hi ' + userName + '!';
// }
// console.log(hello());

// // b. Écrire une fonction avg_inputs qui demande à l’utilisateur d’entrer des nombres un à un. Tant
// // que le nombre entré est positif, on le comptabilise. Dès que le nombre est négatif, on s’arrête
// // et l’on renvoie la moyenne de tous les nombres entrés par l’utilisateur.
// function avg_inputs(): number {
//     let sum: number = 0;
//     let count: number = 0;
//     let input: number = 0;
//     while (input >= 0) {
//         input = readlineSync.questionInt('Enter a number please: ');
//         if (input >= 0) {
//             sum += input;
//             count++;
//         }
//     }
//     return sum / count;
// }
// console.log(avg_inputs());

// c. Écrire une fonction RPS qui demande à l’utilisateur de rentrer au choix “Rock”, “Paper” ou
// “Scissor”. À l’aide de la fonction Math.random(), faites également choisir votre programme et
// indiquez au joueur s’il a gagné ou perdu. Recommencer jusqu’à ce que le joueur gagne.
function inputPlayed(): number {
    let choice: string[] = ['Paper', 'Scissor', 'Rock']
    let input = readlineSync.keyInSelect(choice, 'What do you want to play ?')
    return input
}
// function inputProg(): number {
//     let input = Math.floor(Math.random() * 3)
//     if (input == 0) {
//             Math.floor(Math.random() * 3)
//     }
//     console.log(input);
//     return input
// }
function inputProg() : number {
    let input = Math.floor(Math.random() * 4) + 1;
    switch (input) {
        case 1 :
            console.log('Paper')
            break;
        case 2 : 
            console.log('Scissor')
            break;
        case 3 : 
            console.log('Rock')
            break;
        default : 'play again'      
    } 
    return input
}

function RPS(): string {
    let inputPlayer = inputPlayed()
    let inputProgram = inputProg()
    while (((inputPlayer +1)%3) == inputProgram) 
    {
        inputPlayer = inputPlayed()
        inputProgram = inputProg()
    } 
    return 'You win !'
}
console.log(RPS());

//d. Guess a Number.
// L’objectif est de choisir aléatoirement un nombre compris entre 1 et 1000 et de faire deviner à
// l’utilisateur jusqu’à ce qu’il trouve, lui indiquant à chaque fois s’il a deviné “trop grand” ou
// “trop petit”. Bonus : compter en combien de coups le joueur a deviné.

//function guessANumber(): string {
