console.log('Hello')
// Globals -NO WINDOW

// __dirname - path to current directory
// __filename -file

// require - function to use modules(CommonJs)
// module - info about current module(file)
// process - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
    console.log('hello world')
}, 1000);
