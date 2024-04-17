const findIndex = require('../utils/findIndex')

class Contact
{
    contact = [
        /*{
            id: 1,
            avatar: 'https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg',
            name: 'Jordan Wilian',
            phone: '(11) 1 1111-1111'
          },
          {
            id: 2,
            avatar: 'https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg',
            name: 'Carlos Oliveira',
            phone: '(22) 2 2222-2222'
          },
          {
            id: 3,
            avatar: 'https://parrotprint.com/media/wordpress/7630543941b44634748ddea65e5a417c.jpg',
            name: 'Ana Beatriz',
            phone: '(33) 3 3333-3333'
          },*/
    ]

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