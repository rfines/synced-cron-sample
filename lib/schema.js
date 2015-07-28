if(Meteor.isServer){
	Cluster.connect("mongodb://eventrio:EventrioStageComposeIO!!2015@candidate.6.mongolayer.com:10381,candidate.5.mongolayer.com:10492/eventrio-cluster-stage?replicaSet=set-55afb5779495f49353000b48");
	Cluster.register("app");
}

Logs = new Mongo.Collection('logs');
Logs.allow({
	insert: function (userId, doc) {
		//...
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		//...
		return true;
	},
	remove: function (userId, doc) {
		//...
		return true;
	},
	
});
Schema = {};

Schema.Logs = new SimpleSchema({
	message:{
		type:String,
		defaultValue:"Job Running"
	},
	startedAt:{
		type:Date,
		defaultValue:new Date()
	}
});

