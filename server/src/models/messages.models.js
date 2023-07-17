const messages = require('./messages.schema');
const DEFAULT_ID = 1;

async function saveMessages(Message) {
    await messages.findOneAndUpdate ({
        id: Message.id
    }, Message, 
    {
        upsert: true
    }
    )
} 

async function getAllMessages()
{
    return await messages
    .find({},{_id: 0,__v: 0})
    .sort({ date: 1 });
}

async function postMessages(newMessage) {
    
    const newId = await getLatestId() + 1;
    newMessage = Object.assign(newMessage, {
        id: newId
    });

    await saveMessages(newMessage);
}


async function getLatestId() {
    const latestMessage = await messages.findOne().sort('-id');
    if(!latestMessage)
    {
        return DEFAULT_ID;
    }
    return latestMessage.id;
}


module.exports = {
    getAllMessages,
    postMessages
}