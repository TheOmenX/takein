const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    sender: {type: mongoose.Types.ObjectId, required: true},
    time: {type: Date, required: true},
    content: {type: String, required: true}
}, { versionKey: false, _id: false })


const chatSchema = new mongoose.Schema({
    users: {type: [mongoose.Types.ObjectId], required: true, 
        validate: [(val) => val.length = 2 && val[0] != val[1], "Must contain two user id's that are not equal."]},
    messages: {type: [messageSchema]},
}, { versionKey: false })

module.exports = mongoose.model("chat", chatSchema)
           