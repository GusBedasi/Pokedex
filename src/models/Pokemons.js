const { Schema, model } = require('mongoose')

const pokemonSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    
    url: {
        type: String,
        require: true
    },

    abilities: [{
        ability:{
            name: String,
            url: String,
        },
        is_hidden: Boolean,
        slot: Number
    }],

    forms: [{
        name: String,
        url: String,
    }],

    types: [{
        slot: Number,
        type: Object
    }]
})

module.exports = new model('Pokemon', pokemonSchema)