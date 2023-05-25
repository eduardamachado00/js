const soma = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
            return "somente números de 1 a 9"
    } else {
            return num1 + num2;
    } 
}
console.log(soma(11,2));