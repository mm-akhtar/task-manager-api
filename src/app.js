const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
// const bcrypt = require('bcryptjs')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// console.log(process.env.MONGODB_URL)

module.exports = app


// middleware should be before app.use(route)
// app.use((req, res, next) => {
//     if (req.method == 'GET') {
//         res.send('GET request are diable')
//     } else {
//         next()
//     }
// })
// app.use((req, res, next) => {
//     if (req.method) {
//         res.status(503).send('site is under maintanence')
//     } else {
//         next()
//     }
// })


// const myfunction = async () => {
//     const password = 'Red12345'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(hashedPassword)
//     const isMatch = await bcrypt.compare('red12345', hashedPassword)
//     console.log(isMatch)
// }
// myfunction()


//  jwt
// const jwt = require('jsonwebtoken')
// const myfunction = async () => {
//     const token = jwt.sign({ _id: '12345' }, 'thisismynewcourse', {expiresIn: '5 seconds'})
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
// myfunction()


// toJSON check
// const pet = {
//     name: 'Hal'
// }
// pet.toJSON = function () {
//     return {}
// }
// console.log(JSON.stringify(pet))

// populate
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     const task = await Task.findById('60633c1aa3ab9a4e70103bbc')
//     await task.populate('owner').execPopulate()
//     console.log(task)
 
//     const user = await User.findById('6065ea747a2f663fb4f992dd')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }   
// main()

// working with file upload
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('please upload a word document'))
//         }
        
//         cb(undefined, true)

//         // cb(new Error('file must be a PDG'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('from middle ware')
// }

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error:error.message})
// })
