
//nodejs allows us to create a server using http modulle

const http = require('node:http'); //nodejs core module

const server =  http.createServer(function(req, res) {
    //replay to clients 
    // res.end("hello world! this is my first server") //sedning the data back to user who is coming to server



    if(req.url === "/secretdata" ){
        res.end("Hello world! This is my secret data!")
    }
    res.end("Hello world: this is home")
})

server.listen(7777)

//this is just one way - a tough and tedious , here it is difficult to handle routes  and also 
// hence we use express to build server using nodejs , not http 


