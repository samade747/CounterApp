
var msec = 0;


function Inc(){
    var sam = document.getElementById('msec').innerHTML;

    sam++

    var sam = document.getElementById('msec').innerHTML = sam;

    
}

function dec(){
    var sam = document.getElementById('msec').innerHTML;

    --sam;

    var sam = document.getElementById('msec').innerHTML = sam;


}



function reset(){
    var sam = document.getElementById('msec').innerHTML;

    sam = 0;

    var sam = document.getElementById('msec').innerHTML = sam;


}
// function Inc(){
//   var num = document.getElementById('msec');
//   var check = num.innerHTML;
//   ++check;
//   document.getElementById('msec').innerHTML = check;
  
//   console.log(check);
  
// }