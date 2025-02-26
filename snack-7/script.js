const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

//1
const specificStudent = students.find((student) => {
  return student.id === 2
})

console.log(specificStudent)

//2
const studentSpecific = 0;

for (let i = 0; i < students.length; i++){
  const thisStudent = students[i].id
  if(thisStudent === 2){
    console.log(students[i])
  }
}