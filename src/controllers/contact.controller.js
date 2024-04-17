const Contact = require('../helpers/contact.class')
const { generateFileName, renameFile } = require('../helpers/renameFile')

const contact = new Contact()

const all = ((req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            contacts: contact.getContacts()
        }
    })
})

const find = ((req, res) => {
    const _contact = contact.find(req.params.phone)
    res.status(200).json({
        status: 'success',
        data: {
            contact: _contact
        }
    })
})

const create = ((req, res) => {
    console.log('file name? ', req.file.filename)
    const _contact = { ...req.body}

    if(req.file.filename)
    {
        const name = generateFileName(req.file.filename);
        _contact['avatar'] = name;
        renameFile(req.file.filename, name);
    }else{
        _contact['avatar'] = ''
    }
    
    contact.addContact(_contact)
    res.status(200).json({
        status: 200,
        data: {
            contact: _contact
        }
    })
})

const update = ((req, res) => {
    const _contact = { ...req.body }
    const contactUpdated = contact.updateContact(_contact)
    res.status(200).json({
        status: 'success',
        data: {
            contact: contactUpdated
        }
    })
})

const del = ((req, res) => {
    const { phone } = req.params;
    const _contact = contact.removeContact(phone)
    res.status(200).json({
        status: 'success',
        data: {
            contact: _contact
        }
    })
})


module.exports = { all, find, create, update, del }