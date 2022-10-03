const PORT = process.env.PORT || 5000
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const parserJSON = require('./framework/parserJSON')
const parserBODY = require('./framework/parserBODY')
const parserURL = require('./framework/parserURL')
const mongoose = require('mongoose')

const app = new Application()

app.use(parserJSON)
app.use(parserURL('http://localhost:5000'))

app.addRouter(userRouter)



const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Alexey:QAZ123qaz@cluster0.qrbbvr1.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()