function getAverage (a,b,c,d,e,f){

  var average = (a+b+c+d+e+f) / 6;
  console.log(average);
  return average;
}

var myResult = getAverage(7,8,9,10,11,12);
console.log("The average is " + myResult);

// This function will have as a result the average of 5 numbers
function getmyAverage (a,b,c,d,e){

  var myAverage = (a+b+c+d+e) / 5;
  console.log(myAverage);
}

getmyAverage(2,13,16,20,4);

// This function will have as a result the difference of two numbers
function getDifference(a,b){


  if (a < b) {
    var myDifference = b - a;

  } else {

    var myDifference = a - b;
  }
  console.log(myDifference);
  return myDifference;
}

var myIResult = getDifference(25,100);
console.log("The difference is " + myIResult);

// This function will have as a result the FirstName and the LastName.
function getfullName (fName, lName){

  var myfullName = fName + lName;
  console.log(myfullName);
  return myfullName;
}

var myNameis = getfullName ("Israel ", "Leazard");
console.log("My Name is: " + myNameis);
