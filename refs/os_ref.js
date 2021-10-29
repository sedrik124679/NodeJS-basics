const os = require('os')

// Platform(darwin, win...)
console.log(os.platform())

// Architecture(x32, x64)
console.log(os.arch())

// Information(proccesor)
console.log(os.cpus())

// Free memory
console.log(os.freemem())

// All memory in comp
console.log(os.totalmem())

// Root directory on computer
console.log(os.homedir())

// Work time computer
console.log(os.uptime())