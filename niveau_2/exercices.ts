//a. Écrire une fonction h_triangle qui prend en entrée un entier h et qui renvoie un unique string
//symbolisant un triangle de hauteur h à l’aide de caractère ascii, par exemple des *.
function h_triangle (h: number): string {
    let result: string = '';
    for (let i = 1; i <= h; i++) {
        for (let j = 1; j <= i; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}
console.log(h_triangle(3));

//b. Écrire une fonction rectangle qui prend deux entiers n et m et qui renvoie un unique string symbolisant un rectangle n*m.
function rectangle(n: number, m:number): string {
    let result: string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            result += '*';
        }
        result +='\n'
    }
    return result;
}
console.log(rectangle(2,3));


// c. Écrire une fonction reverse_ints qui prend un entier n et qui renvoie un string faisant le
// décompte inverse des entiers compris entre 1 et n inclus.
// Par exemple pour n=5, on obtient “54321”.
function reverse_ints(n: number): string {
    let result: string = '';
    for (let i = n; i > 0; i--) {
        result += ''+i  
    }
    return result
}
console.log(reverse_ints(5));

// d. Écrire une fonction int_pyramid qui prend un entier n et qui renvoie un string constituant un
// triangle qui indique à chaque emplacement la longueur de la pyramide. Tel que 1 12 123
function int_pyramid(n: number): string {
    let result: string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += ''+j;
        }
        result += '\n';
    }
    return result;
}
console.log(int_pyramid(3));

// e. Écrire une fonction beautiful_mult qui prend un entier n et renvoie à l’aide d’un unique string
// sa table de multiplication formatée.
// Par exemple, pour n=5 : “5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, 5 x 4 = 20 .... 5 x 10 = 50”.
function beautiful_mult(n: number): string {
    let result: string = '';
    for (let i = 1; i <= 10; i++) {
        result += n + ' x ' + i + ' = ' + n*i + ', ';
    }
    return result;
}
console.log(beautiful_mult(5));