
module.exports = function(application){

	application.get('/noticias', function(req, res){

	    var connection = application.config.dbConnection();
	    var noticiaModel = new application.app.models.NoticiasDAO(connection);
	    
		noticiaModel.getNoticias(function(error, result){
	        	res.render("noticias/noticias", {noticias: result});
		});
	}
)};
