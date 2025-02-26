const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

console.log(names)

//1
for (let i = 0; i< names.length; i++){
    const thisName = names[i]
    console.log(thisName)
}

//2
names.forEach(getNames)

function getNames(name){
    console.log(name)
}

//3
let allNames = names.join()
console.log(allNames)

