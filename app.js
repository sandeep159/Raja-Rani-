const player1Score = 0;
const player2Score = 0;
const player3Score = 0;
const player4Score = 0;
const player5Score = 0;

const score=[1000,800,600,400,0];
var score_dict={"p1":0,"p2":0,"p3":0,"p4":0,"p5":0};
const players=["p1","p2","p3","p4","p5"];
var dict={};
var i=0;
var done=[]
const scoreBoard_table = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const state_div = document.querySelector('.control-badge');

const player1_div = document.getElementById('p1');
const player2_div = document.getElementById('p2');
const player3_div = document.getElementById('p3');
const player4_div = document.getElementById('p4');
const player5_div = document.getElementById('p5');
const start_div = document.getElementById('start-label');
const end_div = document.getElementById('end-label');



function shuffle(initial) {
  let dump = initial;
  let count = 5;
  let temp = 0;
  let index= 0;
  while (count > 0) {
    index= Math.floor(Math.random() * count);
    count--;
    temp=dump[count];
    dump[count]=dump[index];
    dump[index]=temp;
  }
  return dump;
}


function begining(c){
    for(var j=0;j<5;j++){
      document.getElementById(players[j]).style.borderColor  = "#4CAF50";
    }
    i=0;
    arr = shuffle(players);

  dict["king"] = arr[0];
  dict["queen"] = arr[1];
  dict["minister"] = arr[2];
  dict["cop"] = arr[3];
  dict["thief"] = arr[4];
  console.log(dict);

  playerselection();
  document.getElementById(dict["king"]).style.borderColor  = "orange";
  console.log("predict queen");
  var mtodo =  document.getElementById("todo");
  mtodo.innerHTML = "predict queen";
}

function key(pred){
  const refer=["king","queen","minister","cop","thief"];
  for(var j=0;j<5;j++){
    if (dict[refer[j]]==pred){
      return refer[j];
    }
  }
}


function exchange(key_pred,actual){
  const refer=["king","queen","minister","cop","thief","press start again"];
  var temp=dict[key_pred];
  dict[key_pred]=dict[actual];
  dict[actual]=temp;
  console.log(key_pred,actual);

  console.log("excganged",dict,actual);
  var mhappened = document.getElementById("happened");
  mhappened.innerHTML = "card exchanged!!!";

  console.log("predict",refer[i+1]);
  document.getElementById(dict[refer[i]]).style.borderColor  = "orange";
  var mtodo = document.getElementById("todo");
  mtodo.innerHTML = "predict "+refer[i+1];
}


function getprediction(pred){
  const refer=["king","queen","minister","cop","thief","press start again"];
  document.getElementById(dict[refer[i]]).style.borderColor  = "orange";

  if (pred ==dict[refer[i+1]]){

    var update_score="player"+dict[refer[i]];
    document.getElementById(dict[refer[i+1]]).style.borderColor  = "orange";
    document.getElementById(dict[refer[i]]).style.borderColor  = "red";
    score_dict[dict[refer[i]]]+=score[i];
    document.getElementById(update_score).innerHTML = score_dict[dict[refer[i]]];
    done.push(dict[refer[i]]);
    i++;

    var mhappened = document.getElementById("happened");
    mhappened.innerHTML = refer[i]+" predicted !!!!!";
    console.log(refer[i],"predicted",dict);

    console.log("predict",refer[i+1]);
    var mtodo =  document.getElementById("todo");
    mtodo.innerHTML = "predict "+refer[i+1];

    }
    else{

      key_pred=key(pred);
      console.log(key_pred);

      if (present(pred)==1){
        document.getElementById(dict[key_pred]).style.borderColor  = "orange";
        document.getElementById(dict[refer[i]]).style.borderColor  = "#4CAF50";
        exchange(key_pred,refer[i]);
         }
    }

  }


function present(pred){
  var count=done.length;
  for(var j=0;j<count;j++)
    {
      if (pred==done[j]){
        return 0;
      }
}
return 1;
}



function playerselection(){


  player1_div.addEventListener('click', function(){
    getprediction("p1",i);
  })
  player2_div.addEventListener('click', function(){
    getprediction("p2",i);
  })
  player3_div.addEventListener('click', function(){
    getprediction("p3",i);
  })
  player4_div.addEventListener('click', function(){
    getprediction("p4",i);
  })
  player5_div.addEventListener('click', function(){
    getprediction("p5",i);
  })

}

function main() {

  start_div.addEventListener('click', function(){
    begining(0);
    i=0;
  })

  end_div.addEventListener('click', function(){
    for(var x=0;x<5;x++){
      document.getElementById(players[x]).style.borderColor  = "#4CAF50";
    }
    console.log("game ended");
    var mhappened = document.getElementById("happened");
    mhappened.innerHTML ="";

    var mtodo = document.getElementById("todo");
    mtodo.innerHTML = "refresh the page to start freshly";
  })

}

main();
console.log("press start game!!!!!!");


var x1 = prompt("enter player1");
if (x1 != null) {
  document.getElementById("text1").innerHTML =x1;
  document.getElementById("t1").innerHTML =x1;
}

var x2 = prompt("enter player2");
if (x2 != null) {
  document.getElementById("text2").innerHTML =x2;
  document.getElementById("t2").innerHTML =x2;
}

var x3 = prompt("enter player3");
if (x3 != null) {
  document.getElementById("text3").innerHTML =x3;
  document.getElementById("t3").innerHTML =x3;
}

var x4 = prompt("enter player4");
if (x4 != null) {
  document.getElementById("text4").innerHTML =x4;
  document.getElementById("t4").innerHTML =x4;
}

var x5 = prompt("enter player5");
if (x5 != null) {
  document.getElementById("text5").innerHTML =x5;
  document.getElementById("t5").innerHTML =x5;
}
