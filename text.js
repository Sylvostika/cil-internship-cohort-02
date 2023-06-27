alert("Hello world");

var youLikeMeat = false
if (youLikeMeat){
  document.write("you like meat");
}else {
  document.write("you hate meat")
}

var myNum = 15;
if (myNum == 10){
  document.write("myNum is equal to 10");
} else {
  document.write("myNumis not equal to 10");
}

var myAge = 12;
if (myAge > 30){
  document.write("you are over 35!");
}else if (myAge > 25){
  document.write("you are over 25");

  }else if (myAge > 15){
  document.write("you are over 15");
} else{
  document.write("you are not over 15");
}

var myAge = 15;

if (myAge >= 18 && myAge <= 30){
  document.write("You can come, you cool dude!");

}else{
  document.write("you ain't coming");

}

var myAge = 26;
if (myAge < 18 || myAge > 30 || myAge === 25){
  document.write("you ain't coming");
}else{
  document.write("You can come, you cool dude!"); 
}

// while loops //

var age = 5;
while (age < 10); {
console.log("Your age is less than 10");
age++;
}

document.write("You are now over 10");

// for loops //

var age = 5;
for (age = 5; age < 10; age++){
  console.log("Yor age is than 10");
}

document.write("you are now over 10")

