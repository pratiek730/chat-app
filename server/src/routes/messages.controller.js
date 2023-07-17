const { getAllMessages, postMessages } = require("../models/messages.models");

  
  

async function httpGetMessages(req, res) {
    const messages = await getAllMessages();

    return res.status(200).json(messages);
}




async function httpPostMessage(req, res)
{

    data = req.body;
    if(!data.name || !data.text)
    {
        return res.status(400).json({
            error: 'Invalid Format'
        })
    }

    data.date = new Date(data.date);

    if(isNaN(data.date))
    {
        return res.status(400).json({
            error: 'Invalid Date'
        })
    }

    await postMessages(data).catch((err) => {console.log(err)})

 
    res.status(200).json(data);

}


module.exports = {
    httpGetMessages,
    httpPostMessage

};
