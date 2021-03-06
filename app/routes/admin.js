module.exports = function(application){

	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia", {validacao : {}}, {noticias : {}});
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		req.assert('titulo', 'Titulo é obrigatório').notEmpty();	
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres.').len(10, 100);
		req.assert('autor', 'Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Formato de data inválido.').notEmpty().isISO8601();
		req.assert('noticia', 'Noticia é obrigatório.').notEmpty();

		var erros = req.validationErrors();

		if(erros){
			res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
			return;
		}

        //Conexao

    	var connection = application.config.dbConnection();
	    var noticiaModel = new application.app.models.NoticiasDAO(connection);
	    
		noticiaModel.salvarNoticia(noticia, function(error, result){
	        res.redirect('/noticias');
		});
	});
}
