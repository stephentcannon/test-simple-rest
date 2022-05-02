import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('**************************************');
  console.log('**************************************');
  console.log('************** START *****************');
  console.log('**************************************');
  console.log('**************************************');
  console.log('********* TEST-SIMPLE-REST ***********');
  console.log('**************************************');
  console.log('**************************************');
  HTTP.post("http://127.0.0.1:3000/methods/add-numbers", {
    data: [2, 2]
  }, function (err, res) {
    console.log(res); // 4
  });
});

