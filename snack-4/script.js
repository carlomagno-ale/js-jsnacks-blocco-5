const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

console.log(posts)

//1
const allAuthor = []

for(let i = 0; i < posts.length; i++){
  const onlyAuthor = posts[i].author
  allAuthor.push(onlyAuthor)
}

console.log(allAuthor)

//2
const authorOnly = posts.map((name)=>{
  return name.author
})

console.log(authorOnly)