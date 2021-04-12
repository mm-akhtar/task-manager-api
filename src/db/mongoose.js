const mongoose = require('mongoose');

mongoose.createConnection(process.env.MONGODB_URL,{
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,
    useFindAndModify: false
});



// var akhtar = new User ({
//     name: '  Salman Khan 2  ',
//     email: '   Solmen@hwgf.com   ',
//     password: '23passwo',
//     age: 0
// });

// akhtar.save().then( (user) => {
//     console.log(user);
// }).catch( (err) => {
//     console.log(`error: ${err}`);
// });


// var task1 = new Tasks ({
//     description : 'I dont know what to do 3',
//     completed: false
// });

// task1.save().then( (task) => {
//     console.log(task);
// }).catch( (err) => {
//     console.log(err)
// });