var mongodb = require('mongodb'),
	dbServer = new mongodb.Server('localhost', 27017, {auto_reconnect:true}),
	db = new mongodb.Db('mydb', dbServer, {w:1});
	
db.open( function(err, conn){
	// add a collcetion to the db
	db.collection('myCollection', function(err, collection){
		// insert a document into the collection
		collection.insert({
				a: 'my item'	
			}, function(err,result){
			// log the result
			console.log(result);
			// close the connection
			db.close();		
		});
	});
});