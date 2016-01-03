

Meteor.publish('gdc_databases',function(){
	
	
	return Databases.find({author: this.userId});

	//{author: this.userId}
}

	);