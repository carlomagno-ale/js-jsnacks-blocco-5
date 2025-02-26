const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

console.log(numbers)

//1
const plusOne = []

for (let i = 0; i < numbers.length; i++) {
    const thisNumb = numbers[i]
    const sum = thisNumb + 1
    plusOne.push(sum)

}

console.log(plusOne)

//2

const addOne = numbers.map((numb)=>{
   return numb + 1
})

console.log(addOne)