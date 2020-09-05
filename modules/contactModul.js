const mongoose = require('mongoose');
const Joi = require('@hapi/joi');


const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    email: {
        type: String,
        minlength: 2,
        maxlength: 255
    },
    phone: {
        type: String,
        minlength: 9,
        maxlength: 11

    },
    address: String,
    favorite: Boolean
})

const Contact = mongoose.model('Contact', contactSchema);

function validationContact(contact) {
    const schema = Joi.object({
        firstName: Joi.required().string().minlength(2).maxlength(255),
        lastName: Joi.required().string().minlength(2).maxlength(255),
        email: Joi.email().string(),
        phone: Joi.string().phone(),
        address: Joi.string(),
        favorite: Joi.boolean()

    })

    return schema.validate(contact, schema);
}

exports.Contact = Contact;
exports.validationContact = validationContact;