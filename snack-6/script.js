const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

//1
const longZucchine = []
const otherZucchine = []

for (let i = 0; i < zucchine.length; i++) {
  const lengthZucchine = zucchine[i].length
  if (lengthZucchine >= '15') {
    longZucchine.push(zucchine[i])
  } else {
    otherZucchine.push(zucchine[i])
  }
}

console.log(longZucchine)
console.log(otherZucchine)

//2
const bigZucc = zucchine.filter(checkBig)

function checkBig(zucc) {
  return zucc.length >= 15
}

console.log(bigZucc)

const smallZucc = zucchine.filter(checkSmall)

function checkSmall(zucc) {
  return zucc.length < 15
}

console.log(smallZucc)

//3
const zuccBig = []
const zuccSmall = []

zucchine.filter((zucc) => {
  if (zucc.length >= 15) {
    zuccBig.push(zucc)
  } else {
    zuccSmall.push(zucc)
  }
})

console.log(zuccBig)
console.log(zuccSmall)