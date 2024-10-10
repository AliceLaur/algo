//a. Écrire une fonction print_int qui prend un entier n et affiche tous les entiers entre 1 et n inclus
function print_int(n: number) {
    for (let i = 1; i <= n; i++) {
        console.log('Entiers entre 1 et n : ',i);
    }
}
print_int(5);

//b. Écrire une fonction sum_int qui prend un entier n et renvoie la somme de tous les entiers entre 1 et n inclus
function sum_int(n: number): number {
    let sum: number = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log('Somme de tous les entiers entre 1 et n : ',sum_int(5));
//c. Écrire une fonction mult_table qui prend un entier n et qui affiche sa table de multiplication


//d. Écrire une fonction factorial qui prend un entier n et renvoie sa factorielle tel que n! = n * n-1* n-2 * ... * 2
function factorial(n: number): number {
    let result: number = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log('Factorielle de n = ',factorial(5));

//e. Écrire une fonction power qui prend deux entiers x et n et renvoie x puissance n
function power(x: number, n: number): number {
    let result: number = 1;
    for (let i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
}
console.log('x puissance n = ',power(2, 3));

//f. Écrire une fonction sum_even qui prend un entier n et renvoie la somme de tous les entiers pairs compris entre 1 et n.
function sum_even(n: number): number {
    let sum: number = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log('Somme de tous les entiers pairs = ',sum_even(5));

//g. Un nombre premier est un nombre qui n’a pour unique diviseurs 1 et lui-même. Ainsi 13 est un nombre premier puisqu’il n’existe
//aucun nombre qui ne soit ni 1 ni 13 qui le divise. Écrire une fonction is_prime qui prend un entier n et renvoie true s’il est premier, false sinon.
function isPrime(n : number) : boolean {
    for (let i = 0; i < n ; i++) {
    // for (let i = 2; i < n ; i++) {
        if ((i != n) && (i != 1) && ((n%i) == 0)) {
        //if ((n%i) == 0) {
            return false
        } 
    } return true
}
console.log('N est-il un nombre premier ? ',isPrime(13))

//h. Le PGCD est le Plus Grand Diviseur Commun entre deux nombres. Par exemple 24 et 32 ont comme PGCD 8, puisqu’il s’agit du plus grand nombre 
//qui divise les deux. Écrire une fonction pgcd qui prend deux entiers a et b et qui renvoie leur PGCD.
function pgcd(a: number, b: number): number {
    while (b !== 0) {
        let restInB = a % b;
        a = b;
        b = restInB;
    }
    return a;
}
console.log('PGCD = ',pgcd(24, 32));

//i. Un nombre parfait est un nombre dont la somme de tous ses diviseurs autres que lui-même est égale au nombre en question. 
//Par exemple, 6 est un nombre parfait parce que la somme de ses diviseurs 1+2+3 est égale à 6. De même, 28 est parfait puisque 1+2+4+7+14=28.
//Écrire une fonction is_perfect qui prend un entier n et renvoie true s’il est parfait, false sinon.
function isPerfect(n: number): boolean {
    let sum: number = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}
console.log('N est-il un nombre parfait ? ',isPerfect(6));