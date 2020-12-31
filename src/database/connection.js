const mongoose = require('mongoose')

try {
    mongoose.connect(process.env.DB_URL || 'mongodb://localhost/pokedex', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => { console.log('DATABASE CONNECTED') })
} catch (error) {
    console.error(error)
}

module.exports = mongoose