class UsersRepository {
    constructor() {
        this.users = [];
    }

    async getUsers() {
        try {
            let data = await $.get('/users')
            // console.log(data);
            this.users = data;
        }
        catch (error) {
            throw error;
        }
    }
  
    async addUser(name, password, age, gender, phone, email, smoker, alcohol, pets, proffession, wantedLocation, diet, religion, hygenicRating, hobbies, host, joinedGrocery, quietRating, financesRating, maxrent, chores, maxnumroomates, allergies, photo, aboutMe, tvShows, hangout, music) {
        try {
            let newuser = await $.post('/users', { fullName: name, password: password, age: age, gender: gender, phone: phone, email: email, smoker: smoker, alcohol: alcohol, pets: pets, proffession: proffession, wantedLocation: wantedLocation, diet: diet, religion: religion, hygenicRating: hygenicRating, hobbies: hobbies, host: host, joinedGrocery: joinedGrocery, quietRating: quietRating, financesRating: financesRating, maxrent: maxrent, chores: chores, maxnumroomates: maxnumroomates, allergies: allergies, photo: photo, aboutMe: aboutMe, tvShows: tvShows, hangout: hangout, music: music })
            this.users.push(newuser);
        } catch (error) {
            throw error;
        }
    }

    async findRelevantApts(address, minage, maxage, pets) {
        let relevantApts = this.users.filter(a =>
            a. wantedLocation.toLowerCase().includes(address.toLowerCase() || "") &&
            a.age >= (minage || 0) &&
            a.age <= (maxage || a.age) 
        )
        pets= !pets[0].checked
        return pets ? relevantApts : relevantApts.filter(a => (a.pets))
    }
}

export default UsersRepository