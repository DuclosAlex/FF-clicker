class User {

    constructor(user) {

        this.id = user.id;
        this.name = user.username;
    }

    hello () {
        console.log(this.name);
    }
}

export default User;