
Meteor.publish("logs", function(){
	console.log("publishing logs");
	return Logs.find();
});
_=lodash;

Meteor.startup(function () {
  // code to run on server at startup
  
  if(Bloggers.find().count() === 0){
    var bloggers = [];
    
    for(var i =0; i<25;i++){
      Bloggers.insert(Fake.user(), function(e,id){bloggers.push(id);});
    }
    for(var i=0;i<15;i++){
      var comments = [];
      for(var j = 0; j<15;j++){
        var cId = Comments.insert({body:Fake.paragraph(Math.floor(Math.random() * (7 - 2 + 1)) + 2), createdAt:new Date(), bloggerId:bloggers[_.random(0, 24)]});
        comments.push(cId);
      }
      var bId = Blogs.insert({title:Fake.sentence(Math.floor(Math.random() * (7 - 2 + 1)) + 2),body:Fake.paragraph(Math.floor(Math.random() * (7 - 2 + 1)) + 2),comments:comments, createdAt:new Date(), bloggerId:bloggers[_.random(0, 24)]});
      for(var k=0;k<4;k++){
        Categories.insert({blogId:bId, slug:Fake.sentence(Math.floor(Math.random() * (4 - 2 + 1)) + 2)})
      }
    }
    
    Blogs.insert({title:Fake.sentence(Math.floor(Math.random() * (7 - 2 + 1)) + 2),body:Fake.paragraph(Math.floor(Math.random() * (7 - 2 + 1)) + 2), createdAt:new Date(), bloggerId:bloggers[_.random(0, 24)]})
  }
    
    
});


Meteor.publishComposite('blogs', function(){
  return {
    find:function(){
    	console.log("publishing blogs");
      return Blogs.find();
    },
    children:[
      {
        find:function(blog){
          return Categories.find({blogId:blog._id});
        }
      },
      {
        find:function(blog){
          return Bloggers.find({_id:blog.bloggerId});
        }
      },
      {
        find:function(blog){
          if(blog.comments){
            return Comments.find({_id:{$in:blog.comments}});
          }
        },
        children:[
          {
            find:function(comment){
              return Bloggers.find({_id:comment.bloggerId});
            }
          }
        ]
      }
    ]
  };
});
