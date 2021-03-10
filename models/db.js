const Sequelize = require('sequelize');

	//Conexão com BD MySQL
	const sequelize = new Sequelize ('postapp', 'root', 'admin', {
		host: "localhost",
		dialect: 'mysql'
	})

  //Verificando Conexão com BD
  sequelize.authenticate().then(function(){
  	console.log("DB Conectado com sucesso!!!");
  		}).catch(function(erro){
  	console.log("Falha ao se conectar: " +erro);
  		})

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }
