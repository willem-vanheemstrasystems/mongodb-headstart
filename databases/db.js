var mongodb = require('mongodb'),
	dbServer = new mongodb.Server('localhost', 27017, {auto_reconnect:true}),
	db = new mongodb.Db('mydb', dbServer, {w:1});

/* INSERT 5 DOCUMENTS 
// open database connection
db.open( function(err, conn){
	// select and or add a collection to the db
	db.collection('myNewCollection', function(err, collection){
		// cache a count variable
		var count = 0;
		// insert numbers into the collection
		for(var i=0; i<5; i++) {
			collection.insert({
				num: i
			}, function(err, result) {
			  // log the result
			  console.log(result);
			  // increment the count value
			  count++;
			  // if the count is high enough, close the connection
			  if (count > 4) {
				  db.close();
			  }
			});
		}
	});
});
*/

/* FIND ALL DOCUMENTS
// open database connection
db.open(function(err, conn){
	// select the collection
	db.collection('myNewCollection', function(err, collection) {
		// select all the documents in the collection
		collection.find().toArray(function(err, result) {
			// log the data
			console.log(result);
			// close the connection
			db.close();
		});
	});
});
*/

/* FIND ALL DOCUMENT WITH num = 2
// open database connection
db.open(function(err, conn){
	// select the collection
	db.collection('myNewCollection', function(err, collection) {
		// select all the documents where num is 2 in the collection
		collection.find({num: 2}).toArray(function(err, result) {
			// log the data
			console.log(result);
			// close the connection
			db.close();
		});
	});
});
*/

/* FIND ALL DOCUMENT WITH num greater than 1 but less than 4, limit to 10 results, sort in descending order
// open database connection
db.open(function(err, conn){
	// select the collection
	db.collection('myNewCollection', function(err, collection) {
		// select all the documents where num is greater than 1 but less than 4 in the collection, limit to 10 results, sort in descending order
		collection.find({num: {$gt: 1, $lt: 4}}, {limit: 10}, {sort: [['num', 'desc']]}).toArray(function(err, result) {
			// log the data
			console.log(result);
			// close the connection
			db.close();
		});
	});
});
*/

/* UPDATING AN ENTIRE ENTRY
// open database connection
db.open(function(err, conn){
	// select the collection
	db.collection('myNewCollection', function(err, collection) {
		// update one of the documents
		collection.update({num: 2}, {num: 10}, {safe: true}, function(err) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('Successfully updated');
			}
			db.close();
		});
	});
});
*/

/* UPSERTING AN ENTIRE ENTRY
// open database connection
db.open(function(err, conn){
	// select the collection
	db.collection('myNewCollection', function(err, collection) {
		// upsert one of the documents
		collection.update({num: 8}, {num: 7}, {safe: true, upsert: true}, function(err) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('Successfully upserted');
			}
			db.close();
		});
	});
});
*/

/* UPDATING AN PARTICULAR FIELD OF AN ENTRY */
// open database connection
db.open(function(err, conn){
	// select the collection
	db.collection('myNewCollection', function(err, collection) {
		// update one of the documents
		collection.update({num: 3}, {$set: {desc: 'favourite number'}}, {safe: true}, function(err) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('Successfully updated');
			}
			db.close();
		});
	});
});


