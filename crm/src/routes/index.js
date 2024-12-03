import { addNewContact, getContacts, updateContact, deleteContact } from '../controllers'

export function route(app) {
    app.route('/contact')
    .get(getContacts)
    .post(addNewContact)

    app.route('/contact/:contactId')
    .put(updateContact)
    .delete(deleteContact)
}