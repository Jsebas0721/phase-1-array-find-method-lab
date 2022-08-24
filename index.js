// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]



function superbowlWin(array){
     
    let object = array.find(element => element.result === 'W');
    console.log(object);
    if(object){
        return object.year;
    }
}




