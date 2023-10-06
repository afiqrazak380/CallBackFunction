//callback function -> function as argument

function sum(a , b, funcArg){
  let result = a + b;
  return displayDOM(result)
}
function display(toPrint){
  console.log(toPrint)
};
function displayDOM(toPrint){
  document.getElementById("myLabel").innerHTML = toPrint;
}
sum(2,3, displayDOM)