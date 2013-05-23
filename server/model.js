Test = new Meteor.Collection("test");

  if (Test.find().count() < 1) {
    Test.insert({id: 1,
                 name: "test1"});

    Test.insert({id: 2,
                 name: "test2"});
  }

Meteor.publish('test', function () {
  return Test.find();
});


//Messages = new Meteor.Collection("messages");
  if (Messages.find().count() < 1) {
    Messages.insert({id: 1,
                 channel_name: "cool_people_channel"});
  }
    Meteor.publish("messages", function(channel_name) {
        return Messages.find({channel: channel_name});
    });

