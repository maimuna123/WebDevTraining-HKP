var questionCount = 0;
var JoeyScore = 1;
var RachelScore = 2;
var RossScore = 3;
var MonicaScore = 4;
var result = document.getElementById("result");

//question options 
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//how the quiz adds points
q1a1.addEventListener("click", Joey);
q1a2.addEventListener("click", Rachel);
q1a3.addEventListener("click", Ross);
q1a4.addEventListener("click", Monica);
q2a1.addEventListener("click", Joey);
q2a2.addEventListener("click", Rachel);
q2a3.addEventListener("click", Ross);
q2a4.addEventListener("click", Monica);
q3a1.addEventListener("click", Joey);
q3a2.addEventListener("click", Rachel);
q3a3.addEventListener("click", Ross);
q3a4.addEventListener("click", Monica);
q4a1.addEventListener("click", Joey);
q4a2.addEventListener("click", Rachel);
q4a3.addEventListener("click", Ross);
q4a4.addEventListener("click", Monica);

//Quiz function
function Joey() {
  JoeyScore += 1;
  questionCount += 1;
  //("One Point to Joey");
  if (questionCount>=4){
  updateResult();
  }
}
function Rachel() {
  RachelScore += 1;
  questionCount += 1;
  //("One Point to Rachel");
  if (questionCount>=4){
  updateResult();}
}

function Ross() {
  RossScore += 1;
  questionCount += 1;
  //("One Point to Ross");
  if (questionCount>=4){
  updateResult();
  }
}

function Monica() {
  MonicaScore += 1;
  questionCount += 1;
  //("One Point to Monica");
  if (questionCount>=4){
  updateResult();
  }
}

function updateResult(){
if (JoeyScore >= 3){
 result.innerHTML = "You are Joey!";
 }
else if(RachelScore >=3){
 result.innerHTML = "You are Rachel!";
 }
else if(RossScore >=3){
 result.innerHTML = "You are Ross!";
 }
else if (MonicaScore>= 3){
 result.innerHTML = "You are Monica!";
 }
else{
 result.innerHTML = "Hmm... I'm not sure. Try Again";
 }
}