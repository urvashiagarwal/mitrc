const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },



        category: {
            type: String
        },


        description: {
            type: String
        },

        price: {
            type: Number

        },

        quantity: {
            type: Number

        },

        featured: {
            type: String

        },

        image: {
            type: String

        },

        rating: {
            type: Number

        },

        restaurant: {
            type: String

        },

        time: {
            type: String

        },
        available: {
            type: Boolean
        }

    }
)

const foods = new mongoose.model('foods', foodSchema)

module.exports = foods;