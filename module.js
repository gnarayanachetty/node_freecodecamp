// Modules
//CommonJs -every file is module by default
// Modules - encapsulated code (only share minimum)

// const john = 'john'

const {john,smith} = require('./first-module')
const sayHi = require('./2-module')
const data = require('./alternative-module')
require('./mind-grade')
// console.log(data)
// console.log(name)
// const sayHi = (name) =>{
//     console.log(`hello there ${name}`)
// }
// sayHi('susan');
// sayHi(john);