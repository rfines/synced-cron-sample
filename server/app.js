
Meteor.publish("logs", function(){
	console.log("publishing logs");
	return Logs.find();
});

Meteor.startup(function () {
// code to run on server at startup
	
});
