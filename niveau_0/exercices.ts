import { log } from "console";

//a. Écrire une fonction hello qui renvoie un string “Hello World!”
function hello() {
    return "Hello World!";
}
console.log(hello());

//b. Écrire une fonction add qui prend deux entiers a et b et renvoie leur somme.
function add (a: number, b: number): number {
    return a + b;
}
console.log('2+3 = ',add(2, 3));

//c. Écrire une fonction mult qui prend deux entiers a et b et renvoie leur multiplication.
function mult(a: number, b: number): number {
    return a * b;
} 
console.log('2*3 = ',mult(2, 3));

//d. Écrire une fonction max_nb qui prend deux entiers a et b et renvoie le plus grand des deux.
function max_nb(a: number, b: number): number {
    return Math.max(a, b);
}
console.log('Plus grand entre a et b ? ',max_nb(2, 3));

//e. Écrire une fonction min_nb qui prend deux entiers a et b et renvoie le plus petit des deux.
function min_nb(a: number, b: number): number {
    return Math.min(a, b);
}
console.log('Plus petit entre a et b ? ',min_nb(2, 3));

//f. Écrire une fonction is_even qui prend un entier et renvoie true s’il est pair, false sinon.
function is_even(a: number): boolean {
    return a % 2 === 0;
}
console.log('2 est-il pair ? ',is_even(2), '3 est-il pair ? ',is_even(3));

//g. Écrire une fonction is_div qui prend deux entiers a et b et qui renvoie true si b est un diviseur de a, false sinon.
function is_div(a: number, b: number): boolean {
    return a % b === 0;
}
console.log('b est-il un diviseur de a ? (4 et 2) ',is_div(4, 2));

//h. Écrire une fonction is_leap qui prend en entrée un entier year et qui renvoie true s’il s’agit d’une année bissextile, false sinon.
function is_leap(year: number): boolean {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
console.log('Est-ce une année bissextile ? (2020) ', is_leap(2020));

//i. Écrire une fonction delta qui prend trois coefficients a, b et c et qui calcule le coefficient 
//delta du polynôme ax²+bx+c tel que delta = b² - 4ac.
function delta(a: number, b:number, c:number) {
    let result: number = b*b - 4*a*c
    return result
}
console.log('delta =',delta(2,3,2));

//j. Écrire une fonction root qui prend trois coefficients a, b et c et qui, en utilisant la fonction delta 
//détermine s’il existe une racine au polynôme associé.
// Si delta < 0, on renverra un tableau vide pour indiquer qu’il n’y a pas de racine.
// Si delta = 0, on renverra un tableau contenant l’unique racine : -b / 2a
// Si delta >0, on renverra un tableau contenant les deux racines :
//▪ -b – sqrt(delta) / 2a
//▪ -b + sqrt(delta) / 2a

function root(a: number, b:number, c:number) {
    let result_d: number = delta(a,b,c);
    let result_r: [number] = [0];
    if (result_d < 0) {
        result_r.pop()
       return result_r
    } else if (result_d === 0){ 
        let racine:number = -b/2*a;
        result_r.push(racine);
        return result_r
    } else if (result_d > 0) {
        let sqrt = Math.sqrt(result_d)
        let result_1 = -b - sqrt / 2 * a;
        let result_2 = -b + sqrt / 2 * a;
        result_r.push(result_1, result_2);
        return result_r
    }
} 
console.log(root(2,3,2));

