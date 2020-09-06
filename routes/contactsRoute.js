const router = require('express').Router();
const mongoose = require('mongoose');
const {
    Contact,
    validationContact
} = require('../modules/contactModul');


router.post('/', async (req, res) => {

    let {
        error
    } = validationContact(req.body);
    if (error) {
        return res.send(error.details[0].message);
    }
    let contact = new Contact(req.body);
    await contact.save();
    return res.send("OK");
})





module.exports = router;