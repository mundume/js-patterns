class User {
    constructor(name) {
        this.name = name
        this.chatroom = null

    }
    send(message, to) {
        this.chatroom.send(message, this, to)

    }
    recieve(message, from) {
        console.log(`${from.name} to ${this.name} : ${message}`)
    }
}


const Chatroom = function (){
    let users = {}
    return {
        register: function (user){
            users[user.name] = user
            user.chatroom = this
        },
        send: function(message, from, to){
          if(to){
            //ssingle user message
            to.recieve(message, from)
          }else{
            //mass message
            for(key in users) {
                if(users[key] !==from){
                    users[key].recieve(message, from)
            }

        }

          }
        }
    }
}

const Nzai  = new User('Nzai')

const kilonzo  = new User('Kilonzo')
const glenn  = new User('Glenn')

const chatroom = new Chatroom()

chatroom.register(Nzai)
chatroom.register(kilonzo)
chatroom.register(glenn)

Nzai.send('Hello', kilonzo)