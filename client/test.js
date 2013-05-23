Meteor.subscribe("test");

Test = new Meteor.Collection("test");

Template.hello.test = function () {
  console.log(Test.find().count());//returns 0
  return Test.findOne();
}
Template.hello.messages = function () {
  console.log(Messages.find().count());//returns 0
  return Messages.find();
}

Template.hello.events = {
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
};

//Messages = new Meteor.Collection("messages");

    Session.set("current_channel", "cool_people_channel");

    Meteor.autorun(function() {
        Meteor.subscribe("messages", Session.get("current_channel"));
    });

    Template.hello.greeting = function() {
    	return "Hi there";
    };
