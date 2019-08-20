var Discord = require('discord.io');
var logger = require('winston');

//I'll call this command through IFTTT and a webhook (working)
//It will output the name of the next roomate and time the dishwasher will be finished 

  var Time;
  var Name; 
  var n = 0;
  
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}; //purley cosmetic, just adds a 0 to the time

function getTime() {
  var d = new Date();
  var h = d.getHours();
  h = h + 1;
  addZero(h);
  var m = addZero(d.getMinutes());
  Time =  h + ":" + m;
}; //should return the time one hour from now

function getName() {
  switch (n){
    case 0:
      Name = "Alex";
      n = 1;
      break;
   case 1:
      Name = "Clay";
      n = 2;
      break;
    case 2:
      Name = "Marshal";
      n = 3;
      break;
    case 3
      Name = "Mike";
      n = 0;
      break;
    default:
      text = "err";
}; 

exports.dishwasher = function(Name, Time) {

//how do I send these values back?

};
