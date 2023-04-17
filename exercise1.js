// Exercício 01

alert("Vamos realizar algumas operações com dois números escolhidos!!")

let numberOne = prompt("Digite o primeiro número: ")

let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let result = numberOne + numberTwo

alert("Os números escolhidos foram: " + numberOne + " e " + numberTwo + " !!")
if(numberOne === numberTwo){
  alert("Os números escolhidos são iguais!!")
}
else{
  alert("Os números escolhidos são diferentes!!")
}
alert("Vamos para as operações!!")

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const module = numberOne % numberTwo

alert("A soma dos dois número é: " + sum)

if(sum % 2 == 0){
  alert("A soma dos dois números é par!!")
}
else{
  alert("A soma dos dois números é ímpar!!")
}

alert("A subtração entre os dois número é: " + subtraction)
alert("A multiplicação entre os dois número é: " + multiplication)
alert("A divisão entre os dois número é: " + division)
alert("O módulo entre os dois número é " + module + ". Ou seja, o resto da divisão entre ambos os números é " + module)

