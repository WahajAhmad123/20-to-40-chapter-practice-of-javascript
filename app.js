// --------------------------Changing Case Starts Here-----------------------------------------//
// -------------------------------------Part 1-----------------------------------------//
var name1=prompt("Enter Your Name in Lower Case I Will Convert it To Upper Case")
var a=name1.toUpperCase()
console.log(a)
// -------------------------------------Part 2-----------------------------------------//
var name1=prompt("Enter Your Name in Upper Case I Will Convert it To Lower Case")
var a=name1.toLowerCase() 
console.log(a)
// --------------------------Changing Case Ends Here-----------------------------------------//
// --------------Strings: measuring length and extracting parts Starts Here-------------------//
// -------------------------------------Part 1-----------------------------------------//
var word=prompt("Enter Your favorite mobile phone model")
var b=word.length
console.log(b)
// -------------------------------------Part 2-----------------------------------------//
var text ="Hi My Name is Wahaj Ahmad"
var letter = text.charAt(text.length-1)
console.log(letter)
// ----------------Strings: measuring length and extracting parts Ends Here-------------//
// -------------------------Strings: finding segments Starts Here----------------------//
// -------------------------------------Part 1-----------------------------------------//
var name2=prompt("Enter Username") 
if(name2=="@"){
    console.log("INVALID")
}
else if(name2==","){
    console.log("INVALID")
}
else if(name2=="."){
    console.log("INVALID")
}
else if(name2=="!"){
    console.log("INVALID")
}
else{
    console.log("VALID")
}
// -------------------------------------Part 2-----------------------------------------//
// -------------------------Strings: finding segments Ends Here-------------------//
// -------------------------Chapter no 30 to 35 Starts Here-------------------//
// -------------------------------------Part 1-----------------------------------------//
var dd= new Date()
console.log(dd)
// -------------------------------------Part 2-----------------------------------------//
var dd= new Date()
var tt= dd.getMonth()
var dt= ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
console.log(dt[tt])
// -------------------------------------Part 3-----------------------------------------//
var dd= new Date()
var tt= dd.getDay()
var dt= ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
console.log(dt[tt])
// -------------------------------------Part 4-----------------------------------------//
var dd= new Date()
var tt= dd.getDay()
var dt= ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
console.log(dt[tt])
if(dt==0&&dt==6){
    console.log("It's Fun Day")
}
else{
    console.log("Working Day")
}
// -------------------------------------Part 5-----------------------------------------//
var dd=new Date()
var month=dd.getDate()
console.log(month)
if(month<=16){
    console.log("Start of Month")
}
else{
    console.log("End Of Month")
}
// -------------------------------------Part 6-----------------------------------------//
var dd= new Date()
var ttt= dd.getMilliseconds()
console.log("Miliseconds Since 1st Jan 1970 is : ",ttt)
var dd= new Date()
var ttt= dd.getMinutes()
console.log("Minutes Since 1st Jan 1970 is : ",ttt)
// -------------------------------------Part 7-----------------------------------------//
var a = new Date();
var b = a.toString();
var c = b.slice(16,19);
if (c === "12:"){
    document.write("It's PM")
}else if(c === "13:"){
    document.write("It's PM")
}else if(c === "14:"){
    document.write("It's PM")
}else if(c === "15:"){
    document.write("It's PM")
}else if(c === "16:"){
    document.write("It's PM")
}else if(c === "17:"){
    document.write("It's PM")
}else if(c === "18:"){
    document.write("It's PM")
}else if(c === "19:"){
    document.write("It's PM")
}else if(c === "20:"){
    document.write("It's PM")
}else if(c === "21:"){
    document.write("It's PM")
}else if(c === "22:"){
    document.write("It's PM")
}else if(c === "23:"){
    document.write("It's PM")
}else if(c === "24:"){
    document.write("It's AM")
}else if(c === "01:"){
    document.write("It's AM")
}else if(c === "02:"){
    document.write("It's AM")
}else if(c === "03:"){
    document.write("It's AM")
}else if(c === "04:"){
    document.write("It's AM")
}else if(c === "05:"){
    document.write("It's AM")
}else if(c === "06:"){
    document.write("It's AM")
}else if(c === "07:"){
    document.write("It's AM")
}else if(c === "08:"){
    document.write("It's AM")
}else if(c === "09:"){
    document.write("It's AM")
}else if(c === "10:"){
    document.write("It's AM")
}else if(c === "11:"){
    document.write("It's AM")
}
// -------------------------------------Part 8-----------------------------------------//
var a= new Date()
var user=prompt("DD-MM-YY")
var b= new Date(user)
var total= a-user
console.log(total)
// -------------------------------------Part 8-----------------------------------------//
var name3=prompt("Enter Name")
var month3=prompt("Enter MONTH")
var nounits3=prompt("Enter Units")
var unit3=16
var total = nounits3*unit3
console.log("Your Total Payable Amount(Within Due Date) is: "+total)
var total = nounits3*unit3*10
console.log("Your Total Payable Amount With due date is: "+total)
// -------------------------Chapter no 30 to 35 Ends Here-------------------//
function abc(){
    alert("My name is WAhaj Ahmad")
}
abc()
var count = 0;
function addcount(){
    count = 1;
}
addcount();
console.log(count);
function xyz(){
    var a = 15;
    return a;
}
var b = xyz()
console.log(b)
var day = prompt("Enter Day")
switch (day){
    case "Sunday" :
    console.log("Holiday");
    break;
    case "Monday" :
    console.log("Working day");
    break;
    case" Tuesday" :
    console.log("Working day");
    break;
    case "Wednesday" :
    console.log("Working day");
    break;
    case "Thursday" :
    console.log("Working day");
    break;
    case " Friday" :
    console.log("Working day");
    break;
    case "Saturday" :
    console.log("Working day");
    break;
    default :
    console.log("No day found")
}
var i = 1
// do {
//     console.log(i);
//     i++;
// }while (i < 10);
while (i<=10){
    console.log(i);
    i++;
}
function button(){
    var c = "You have click the button"
    console.log(c)
}
function hover(){
    var f = "You have come to the picture"
    console.log(f)
}
function out(){
    var g = "You have gone from the picture"
    console.log(g)
}