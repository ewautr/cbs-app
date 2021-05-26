// class User {
//     constructor(id, name, password, email, image, title, chatNotification)
//     {
//         this.id = id;
//         this.name = name;
//         this.password = password;
//         this.email = email;
//         this.image = image;
//         this.title = title;
//         this.chatNotification = chatNotification; // true / false
//     }
// }


class User {

    constructor(public id: string, public email: string,
        public name?: string, public image?: string,
        public title?: string, public chatNotification?: boolean) {
    }
}

export default User;