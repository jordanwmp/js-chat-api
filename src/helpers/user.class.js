class User
{
    constructor(name, phone, profilePhoto = '')
    {
         this.name = name
         this.phone = phone   
         this.profilePhoto = profilePhoto
    }

    setName(name)
    {
        this.name = name
    }

    getName()
    {
        return this.name
    }

    setPhone(phone)
    {
        this.phone = phone
    }

    getPhone()
    {
        return this.phone
    }

    setProfilePhoto(profilePhoto)
    {
        this.profilePhoto =  profilePhoto
    }

    getProfilePhoto()
    {
        return this.profilePhoto
    }

}

module.exports = User