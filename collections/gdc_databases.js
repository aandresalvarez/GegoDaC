Databases = new Mongo.Collection('gdc_databases');

Databases.allow({
	insert: function (userId, doc) {

		return !! userId;
	}
});

Database_1 = new SimpleSchema({
	name:{
		type: String,
		label: "Name"
	},
	id:{
		type: String,
		label:"Id",
		autoValue: function(){
			var num =String(Math.random())
			var iden =String(this._id)
		return  iden.concat(num)
		 
	},
		autoform:{ 
			type: "hidden"

		}
		},

author:{
	type: String,
	label: "Author",
	autoValue: function(){
		return this.userId
	},
	autoform:{ 
			type: "hidden"

		}

},		
	description: {
		type: String,
		label: "Description"
	}

});

Databases.attachSchema(Database_1);





/* prueba crear multiples bases de datos*/
for (var i = 5 ; i >= 0; i--) {
	var identi= String(i);
	var datab='dbs';
	DataSet = new Mongo.Collection( datab.concat(identi));
Database_2 = new SimpleSchema({
	name:{
		type: String,
		label: "Name"
	},
	id:{
		type: String,
		label:"Id",
		autoValue: function(){
			var num =String(Math.random())
			var iden =String(this._id)
		return  iden.concat(num)
		 
	},
		autoform:{ 
			type: "hidden"

		}
		},

author:{
	type: String,
	label: "Author",
	autoValue: function(){
		return this.userId
	},
	autoform:{ 
			type: "hidden"

		}

},		
	description: {
		type: String,
		label: "Description"
	}

});

DataSet.attachSchema(Database_2);




if (DataSet.find().count() === 0) {
  DataSet.insert({
    name: 'Introducing Telescope',
    description: 'este es la primera description ssssdfdf'
  },function(error, result) {
  //The insert will fail, error will be set,
  //and result will be undefined or false because "copies" is required.
  //
  //The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
});
console.log ('registro cargado');
console.log (DataSet.find({}));
}

};

