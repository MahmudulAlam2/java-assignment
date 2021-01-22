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