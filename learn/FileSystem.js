// Working with file system
// Task: Create a file, read and counting number of words, write count of words to new file, delete original.

const fs = require('fs')
const path = require('path')

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (error) => {
        if (error) {
            return reject(error.message)
        }   
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (error, data) => {
        if (error) {
            return reject(error.message)
        }   
        resolve(data)
    }))
}

const deleteFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (error) => {
        if (error) {
            return reject(error.message)
        }   
        resolve()
    }))
}

const text_env = process.env.TEXT || "no string"

writeFileAsync(path.join(__dirname, 'text.txt'), text_env)
    .then(() => readFileAsync(path.join(__dirname, 'text.txt'))
    .then(data => data.split(" ").length)
    .then(count => writeFileAsync(path.join(__dirname, 'count.txt'), `Count of words: ${count}`))
    .then(() => deleteFileAsync(path.join(__dirname, 'text.txt')))
    )