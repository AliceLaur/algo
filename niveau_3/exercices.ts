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
    let choice: string[] = ['Rock', 'Paper', 'Scissor']
    let input = readlineSync.keyInSelect(choice, 'Rock, paper, scissor ?')
    return input
}
function RPS(): string {
    let inputPlayed_ = inputPlayed()
    let inputPlayer = inputPlayed().valueOf()
    let inputProg = Math.floor(Math.random() * 3)
    while (inputPlayer < inputProg) {
        console.log(inputProg);
        inputPlayed_
    }
    console.log(inputProg);
    return 'You win !'
}
console.log(RPS());
