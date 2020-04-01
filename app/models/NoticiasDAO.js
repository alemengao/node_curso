//Aplicando o conceito de modelos de classes DAO (Data Access Object) em Js

function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    //mysql do node interpreta a instrucao sql insert com o comando set
    this._connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function (){
	return NoticiasDAO;
}