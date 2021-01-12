var Your_Name= prompt("Enter you name");
var Your_LoverName= prompt("Enter you lover name");
var randomnum=Math.random();
var r =Math.floor(randomnum*100);

if ((Your_Name==""&&Your_LoverName=="")) {

  document.querySelector(".aho").innerHTML="Enter the Name for Calculation !";

}

else {
  document.querySelector(".aho").innerHTML=Your_Name  +  " have "  + r +   " %  Love with  " + Your_LoverName;
}
