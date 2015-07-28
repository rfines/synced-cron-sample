SyncedCron.add({
 	name: 'sample method',
    schedule: function(parser) {
        // parser is a later.parse object
         //"every 2 minutes"at 2:01 am and 2:01 pm and 8:01 pm
        return parser.text("every 2 minutes");
    }, 
    job: function() {
        console.log("Running sample method");
        Logs.insert({startedAt:new Date(), message:"Starting sample method"});
    }
});


Meteor.publish("logs", function(){
	return Logs.find();
});

Meteor.startup(function () {
// code to run on server at startup
	SyncedCron.start();
});
