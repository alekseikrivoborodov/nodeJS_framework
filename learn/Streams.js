const fs = require('fs')
const path = require('path')


const writableStream = fs.createWriteStream(path.join(__dirname, 'test.txt'))
for (let i=0; i<20; i++) {
    writableStream.write(i + '\n')
}
writableStream.end()


const readableStream = fs.createReadStream(path.join(__dirname, 'test.txt'), {encoding: 'utf-8'})

// one chunk == 64 kilobites
readableStream.on('data', (chunk) => {
    console.log(chunk)
})

readableStream.on('end', () => {
    console.log("end of stream")
})

readableStream.on('error', (error) => {
    console.log(error)
})
