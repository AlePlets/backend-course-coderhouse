import contactsModel from '../models/contacts.mongo.js';

export default class Contacts {
    constructor() {
        
    }
    get = async() => {
        let contacts = await contactsModel.find();
        return contacts;
    }
}