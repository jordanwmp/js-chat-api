const findIndex = require('../utils/findIndex')

class Contact
{
    contact = []

    getContacts()
    {
        return this.contact
    }

    size()
    {
        return this.contact.length
    }

    clearContact()
    {
        this.contact = []
    }

    addContact(contact)
    {
        this.contact.unshift(contact)
    }

    removeContact(phone)
    {
        const index = findIndex('phone', phone, this.contact)
        
        /*this.contact.findIndex((con)=>{
            return con.phone == phone
        })*/

        return this.contact.splice(index, 1, 0)
    }

    find(phone)
    {
        const contact =  this.contact.find((contact)=>{
            return contact.phone == phone
        })
        return contact
    }

    updateContact(contact)
    {
       const index = findIndex('phone', contact.oldPhone, this.contact)
       contact.phone = contact.oldPhone
       delete contact.oldPhone;
       this.contact[index] = {...contact}
       return this.contact[index]
    }

    

}

module.exports = Contact