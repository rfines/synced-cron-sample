if(Meteor.isServer){
	Cluster.connect("mongodb://eventrio:EventrioStageComposeIO!!2015@candidate.6.mongolayer.com:10381,candidate.5.mongolayer.com:10492/eventrio-cluster-stage?replicaSet=set-55afb5779495f49353000b48");
	Cluster.register("app");
}
Comments = new Mongo.Collection('comments');
Comments.allow({
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
Categories = new Mongo.Collection('categories');
Categories.allow({
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
Blogs = new Mongo.Collection("blogs");
Blogs.allow({
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
Bloggers = new Mongo.Collection("bloggers");
Bloggers.allow({
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
Schema.category = new SimpleSchema({
    slug:{
        type:String,
    },
    blogId:{
    	type:String,

    }
});

Schema.comments = new SimpleSchema({
	body:{
		type:String
	},
	createdAt:{
		type:Date,
		defaultValue:new Date()
	},
	bloggerId:{
		type:String
	}
});

Schema.blog = new SimpleSchema({
	title:{
		type:String
	},
	comments:{
		type:[String],
		optional:true

	},
	body:{
		type:String
	},
	createdAt:{
		type:Date,
		defaultValue:new Date()
	},
	bloggerId:{
		type:String
	}
});
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

