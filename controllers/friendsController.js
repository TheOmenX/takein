const friendsPage = (req, res) => {
    res.render('./friends/friends')
}

const friendPage = (req, res) => {
    res.render('./friends/friend')
}

const chatsPage = (req, res) => {
    res.render('./friends/chats')
}

const chatPage = (req, res) => {
    res.render('./friends/chat')
}




module.exports = { friendsPage, friendPage, chatsPage, chatPage }