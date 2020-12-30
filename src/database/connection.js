const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL || 'mongodb://localhost/pokedex', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => { console.log('DATABASE ON') })

module.exports = mongoose