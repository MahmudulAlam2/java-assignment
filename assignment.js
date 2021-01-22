//
function kilometerToMeter(kilometer) {
var meter = 0;
if(kilometer >= 1){
    meter = kilometer * 1000;
}
return meter;
}
var count = kilometerToMeter(15);
console.log(count);


///////

function budgetCalculater(number){
    var Price = 0;
if(number <= 10){
   Price = clock = number * 50;
} else if(number <= 20){
   var clockPrice = number * 50;
   var after = number - 10;
   var phone = after * 100;
   Price = phone + clockPrice;
}else{
   var clockPrice = 10 * 50;
   var phone = 10 * 100;
   var after = number - 20;
   var computer = after * 500;
   Price = computer + phone + clockPrice;
}
return Price;
}
var count = budgetCalculater(26);
console.log(count);

////

function hotelCost(day){
    var Price = 0;
if(day <= 10){
   Price = day * 100;
} else if(day <= 20){
   var tenDay = day * 00;
   var after = day - 10;
   var afterTenDay = after * 80;
   Price = afterTenDay + tenDay;
}else{
  var tenDay = 10 * 5;
   var afterTenDay = 10 * 100;
   var after = day - 20;
   var otherDay = after * 50;
   Price = otherDay + afterTenDay + tenDay;
}
return Price;
}
var count = hotelCost(70);
console.log(count);


///
function megaFriend(name){
var name = ["Abrams", "Frank", "SohadBhuya", "Rahid", "Sami", "Rakibkhan"];
for(var i = 0; i > name.length; i++){
    var longest = megaFriend;
}
return longest
}
var hight = megaFriend(" ")
console.log(hight)
//I couldn't do it.