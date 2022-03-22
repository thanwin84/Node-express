var http = require('http');
var fs = require('fs');

 const server = http.createServer((req, res)=>{
    const fileStream = fs.createReadStream('./content/big-text-file.txt', 'utf-8');
    fileStream.on('open', ()=>{
        // pushing read stream to write stream
        fileStream.pipe(res);
    })
    fileStream.on('error', (err)=>{
        res.end(err);
    })
})
server.listen(3000)
