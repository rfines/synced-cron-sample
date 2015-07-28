Logs = new Mongo.Collection('logs');

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

