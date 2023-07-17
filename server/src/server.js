var http = require('http');
const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;





async function startServer() {
    await mongoConnect();

    server.listen(PORT,"0.0.0.0", () => {
    console.log(`Listening on port : ${PORT}`)
    });
}


startServer();
