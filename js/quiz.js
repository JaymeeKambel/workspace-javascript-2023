// generate the numbers for the quiz
function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var M = randInt(300,600);
var N = randInt(100,M);
var K = randInt(1,10);
console.log(M,N,K);

// put the random numbers into the HTML
document.getElementById("s1").textContent = M.toString();
// do the rest

// generate the correct answer
var T = N + K;
var S = N -K;

document.querySelector('[value="4"]').nextSibling.nodeValue = M.toString()+"-"+N.toString()+"+"+K.toString();

// Action -- click and change style
function changestyle(e){
    e.preventDefault();  // prevent the default action 
    // get the style of the element
    var classname = this.getAttribute("class");

    // change of the style of this element
    if (classsname == "answer"){
        this.setAttribute("class","answer selected");
    }else{

    }
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg)'}],{duration:3000,fill:"forwards"});
}

// add the event listener to all the answers
for (var i=0; i<4; i++){
    document.getElementsByClassName("answer")[i].addEventListener("click",changestyle,false);
}

// implement the submit action --- OPtional 