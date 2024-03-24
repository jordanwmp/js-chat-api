const findIndex = (field, value, array) =>{
    const index = array.findIndex((data)=>{
        return data[`${field}`] == value
    })

    return index
}

module.exports = findIndex