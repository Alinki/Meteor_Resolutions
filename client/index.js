/**
 * Created by Minki on 2/9/16.
 */

Resolutions = new Mongo.Collection('resolutions');

// counter starts at 0
Session.setDefault('counter', 0);

Template.body.helpers({
   resolutions: function(){
       console.log('do i reach here');
       return Resolutions.find();
   }
});