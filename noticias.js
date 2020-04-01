var http = require ('http');

var server = http.createServer(function (req, res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
      res.end("<html><body>Notícias de Tecnolgia</body></html>");	
    }else if (categoria == '/moda'){
       res.end("<html><body>Notícias de Moda</body></html>");
    }else {
       res.end("<html><body>Portal de Notícias</body></html>");
    }
});

server.listen(3000);