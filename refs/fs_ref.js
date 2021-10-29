const fs = require('fs') // File System
const path = require('path')

// Method for create folder in your project

// fs.mkdir(path.join(__dirname, 'notes'), (error) => {
//     if(error) throw new Error(error)
//
//     console.log('Folder was created successfully')
// })

// Method for create files in your project

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello Sasha', (error) => {
//     if(error) throw new Error(error)
//
//     console.log('File was created successfully')
//
//     // fs.appendFile - add new content in your file
//
//     fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), ' From append file', (error) => {
//         if(error) throw new Error(error)
//
//         console.log('File was changed')
//
//         // Метод поверне нам дані які були создані + дані які були зміненні, якщо ми викличемо його в середині апенду
//
//         fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'),  'utf-8',(error, data) => {
//             if(error) throw error
//             console.log(data)
//         })
//     })
// })

// Method for read file

// fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'),  'utf-8',(error, data) => {
//     if(error) throw error
//     console.log(data)
// })

// Method for rename file

fs.rename(path.join(__dirname, 'notes', 'mynotes.txt'), path.join(__dirname, 'notes', 'notes.txt'), (error) => {
    if(error) throw error

    console.log('File for renamed')
})