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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

//1

for(let i = 0; i < students.length; i++){
  const thisStudent = students[i].name
  if (thisStudent === 'Marco Lanci'){
    console.log(`la classe di Marco Lanci è la ${students[i].class}`)
  }
}

//2
const classStudent = students.find(checkStudent)

function checkStudent(student){
const thisStudent = student.name
if(thisStudent === 'Marco Lanci'){
  console.log(`la classe di Marco Lanci è la ${student.class}`)
}
}