const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

console.log(people)

//1
const peopleName = people.map((personName)=>{
  return personName.name
})

console.log(peopleName)

//2
const onlyName = []

for (let i = 0; i < people.length; i++){
  const thisPerson = people[i]
  onlyName.push(thisPerson.name)
}
console.log(onlyName)

