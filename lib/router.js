Router.configure({
	layoutTemplate: 'layout',
	waitOn:function(){
	  	
		return [Meteor.subscribe("logs"), Meteor.subscribe("blogs")];
	  	
	}
});
Router.map(function() {
	// Route for the landing page when user is not logged in
	this.route('hello', {
		path: '/',
		layoutTemplate:"layout",
		data:function(){
			return Logs.find();
		},
	});
});