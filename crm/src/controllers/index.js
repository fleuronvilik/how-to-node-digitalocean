import mongoose from 'mongoose'

import { ContactSchema } from '../models'

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save()
        .then(contact => {
            res.json(contact)
        })
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()
        res.json(contacts)
    } catch(err) {
        res.send(err)
    }
}

export const updateContact = async(req, res) => {
    const contactId = req.params.contactId
    try {
        const contact = await Contact.findOneAndUpdate({ _id: contactId }, req.body, {
            new: true,
        })
        res.json(contact)

    } catch(err) {
        res.send(err);
    }
}

export const deleteContact = async(req, res) => {
    try {
    const contactId = req.params.contactId;
    const result = await Contact.deleteOne({ _id: contactId });
        if (result.ok) {
            res.json({
                message: "Delete successful"
            })
        }
    } catch(err) {
        res.send(err)
    }
}