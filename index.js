require('dotenv').config();
// eslint-disable-next-line no-undef

const server = require("./api/server");

// eslint-disable-next-line no-undef
const port = process.env.PORT || "9001";

server.listen(port,()=>{
    console.log(`server is listening on ${port}`);
});