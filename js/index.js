/*------------------------------------------------|
|                                                 |
|                                                 |
|                                                 |
|                  Welcome :)   🐱                |
|                                                 |
|                                                 |
|                                                 |
-------------------------------------------------*/

//-------------------------------------------------
//
//            [Animation code below]
//
//-------------------------------------------------

function alertEmUp(){
//  alert("Alert Em Up Cowboy Coders")
}

function animateOne(){
 
TweenMax.from("#one",1, {
  y:"-500%", /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
}).delay(1);

TweenMax.from("#two",1, {
  y:"-500%", /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
});

TweenMax.from("#three",1, {
  y:"-500%", /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
});

TweenMax.from("#four",1, {
  x:"-500%", /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
});

TweenMax.from("#five",1, {
  x:"500%", /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
});

TweenMax.from("#six",1, {
  x:"800%", /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
}).delay(1);

TweenMax.from("#seven",1, {
  y:"500%",  /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
}).delay(1);;

TweenMax.from("#eight",1, {
  y:"500%", /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
});

TweenMax.from("#nine",1, {
  y:"500%", /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
 }).delay(1);
};
function animateMessage(){
  TweenMax.to(".gameMessage",2, {
  y:"0%", opacity:"1",  scale:"1.5", ease: Bounce.easeOut, 
});  
  TweenMax.to(".gameMessage",1, {
   opacity:"0" /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
}).delay(3); 
};

function animateFade(){
 
TweenMax.from("#fade",5, {
  opacity: 0, /*ease: SlowMo.ease.config(0.7, 0.7, false), pointerEvents: "none"*/
});
}

animateFade();
/*
function animateScore(prop){
 if(prop = "ai"){
TweenMax.from("#aiscore",1, {
  color:"red", }); 
} else {
  TweenMax.to("#playerScore",1, {
  scale:"1.5", });           
              } 
  //ai player
  };

  */
  
function animateAiThinking(thought){
 TweenMax.from(thought,1, { scale:"0",   ease:Back.easeOut.config(1.7)});
  
TweenMax.from(thought,0.5, {
// opacity: 0,
  
});
// TweenMax.from("#bdy", 1, {pointerEvents: "none",});
  console.log("ai thinking " + thought.innerHTML + " " + thought.id);
  
};
//animateOne();

//-------------------------------------------------
//
//            [Animation code above]
//
//-------------------------------------------------


//Objects and global variables

var one = {
  loc: "corner",
  xO: "e",
  oppX: "three" ,
  oppY: "seven",
  adjX: "two",
  adjY: "four",
  oppAdjY: "six",
  oppAdjX: "eight",
  oppC: "nine",
  id: "one"
};
var two = {
  loc: "edge",
  xO: "e",
  oppX: "eight",
  adjX: "five",
  adjC: ["one", "three"],
  id: "two"
};
var three = {
  loc: "corner",
  xO: "e",
  oppX: "one" ,
  oppY: "nine",
  adjX: "two",
  adjY: "six",
  oppAdjY: "four",
  oppAdjX: "eight",
  oppC: "seven",
  id: "three"
};
var four = {
  loc: "edge",
  xO: "e",
  oppX: "six",
  adjX: "five",
  adjC: ["one", "seven"],
  id: "four"
};
var five = {
  loc: "center",
  xO: "e",
  id: "five"
};
var six = {
  loc: "edge",
  xO: "e",
  oppX: "four",
  adjX: "five",
  adjC: ["one", "nine"],
  id: "six"
};
var seven = {
  loc: "corner",
  xO: "e",
  oppX: "nine" ,
  oppY: "one",
  adjX: "eight",
  adjY: "four",
  oppAdjY: "six",
  oppAdjX: "two",
  oppC: "three",
  id: "seven"
};
var eight = {
  loc: "edge",
  xO: "e",
  oppX: "two",
  adjX: "five",
  adjC: ["seven", "nine"],
  id: "eight"
};
var nine = {
  loc: "corner",
  xO: "e",
  oppX: "seven" ,
  oppY: "three",
  adjX: "eight",
  adjY: "six",
  oppAdjY: "four",
  oppAdjX: "two",
  oppC: "one",
  id: "nine"
};
//---boolians---
var pageStyle = true; // true = default, false = bight
var aiStart = true; //this gets switched to false and true every round alternating which player goes first. 
var xGoesFirst = false; //This is used in the code for the AI logic - 
var winner = false;
var winLoseNextFun = true; //this is to solve a problem (the's got to be 10 better ways to do this). I am using this as a global variable to check and see if a function was sucessful with Winning or blocking a loss. The variable will be "False" if there is a win/lose alowing the next function to run using an if(!true) statement. ...If I don't have a system like this in place the AI could end up playing 2 moves in a row (which is cheating).
var startingPostion; // This is used in the OstartsC function. 
//----vars----
var ex = "X";//in the code x represnts the ai / computer
var oh = "O"; //in the code o stands for the user
var userScore = 0;
var aiScore = 0;
var difficulty = 1 //1 = easy, 2 = difficult, 3 = impossible
var moveCount = 0;
var historyArr = [ ]; //This is where the users move's will be stored giving the AI the info to play the next move
var historyArrAI = [ ]; //This is where the AI's moves will be stored (not perfect yet)
//-------------------------------------------------------
var allAvail = [one, two, three, four, five, six, seven, eight, nine];
var cornerAvail = [one, three, seven, nine];
var edgeAvail = [two, four, six, eight];
var centerAvail = [five];
//-------------------------------------------------------

//-------------------------------------------------------
 /*function resetUi(){
  for(i = 0; i < 9; i ++){
   //document.getElementById(allAvail[i].id).innerHTML=allAvail[i].num;
   let z = document.getElementById(allAvail[i].id);
      z.innerHTML="";
      z.classList.remove("box-mine");
      z.classList.remove("box-taken"); 
      z.classList.remove("box-mine1");
      z.classList.remove("box-taken1"); 
    if(pageStyle){
      //class list add / remove
       z.classList.remove("box1");
      // z.classList.add("box");
    }else{
      //class list add / remove
       z.classList.add("box1"); 
      
    }
  }//loop

};  resetUi();*/
function ohEx(prop){
  if(prop === "X"){
    ex = "O";
    oh = "X";
    
    document.getElementById("ex").classList.add("buttonOn");
    document.getElementById("oh").classList.remove("buttonOn");
    
  } else {
    oh = "O";
    ex = "X";
    document.getElementById("oh").classList.add("buttonOn");
    document.getElementById("ex").classList.remove("buttonOn");
  }
};
function reset(){
  //aiStart = true;
  document.getElementById("ex").classList.remove("unclickable");
  document.getElementById("oh").classList.remove("unclickable");
  //FYI Dont add dificulty, or score to reset function
  startingPostion = ""; //Not necessary to reset 
  historyArr = [];
  historyArrAI = [];
  b =  theFirstMove;
  moveCount = 0;
  xGoesFirst = false;
  //winner = false; 

  allAvail = [one, two, three, four, five, six, seven, eight, nine];
  cornerAvail = [one, three, seven, nine];
  edgeAvail = [two, four, six, eight];
  centerAvail = [five];

one.xO = "e"; 
two.xO = "e";
three.xO = "e";
four.xO = "e";
five.xO = "e";
six.xO = "e";
seven.xO = "e";
eight.xO = "e";
nine.xO = "e";
    
 //obsolete// document.getElementById("aiStarts").classList.remove("selected");

  for(i = 0; i < 9; i ++){
   //document.getElementById(allAvail[i].id).innerHTML=allAvail[i].num;
   let z = document.getElementById(allAvail[i].id);
      z.innerHTML="";
      z.classList.remove("box-mine");
      z.classList.remove("box-taken"); 
      z.classList.remove("box-mine1");
      z.classList.remove("box-taken1"); 
    if(pageStyle){
      //class list add / remove
       z.classList.remove("box1");
      // z.classList.add("box");
    }else{
      //class list add / remove
       z.classList.add("box1"); 
      
    }
  }//loop
  
 // animateOne(); moved below for testing
  if(aiStart){//This part of the code is for alternating between who gets to do the first move (ai or user)
  AIGoesFirstFun();
  } else {
    aiStart = true; //This is my plan on alternating 
  }
  //alert("AnimateOne Test 1 ");
  animateOne();
  //alert("AnimateOne Test 2");
};
function aiUI(loc){
  
//  console.log("aiUI");
 // alert(loc);
  var targetId = document.getElementById(loc);
        if(pageStyle){
   targetId.classList.add("box-taken");
  }else{
   targetId.classList.add("box-taken1");
   // targetId.classList.add("red");
  }
  animateAiThinking(targetId); /* */
};
function difficultyLevel(prop){
  //This is where the difficulty butons will go
 
  
  var easyHtml = document.getElementById("easy");
  var mediumHtml = document.getElementById("medium");
  var impossibleHtml = document.getElementById("impossible");

  if(prop== "easy"){
   //alert("[TEST] easy");
    easyHtml.className = "buttonOn";
    mediumHtml.className = "buttonOff";
    impossibleHtml.className = "buttonOff";
    difficulty = 1;
    
  } else if(prop== "medium"){
    //alert("[TEST] medium");
    easyHtml.className = "buttonOff";
    mediumHtml.className = "buttonOn";
    impossibleHtml.className = "buttonOff";
    difficulty = 2;
    
  } else if(prop== "impossible"){
    //alert("[TEST] impossible");
    easyHtml.className = "buttonOff";
    mediumHtml.className = "buttonOff";
    impossibleHtml.className = "buttonOn";
    difficulty = 3;
  }
};//GTG
function catsGame(){
  //alert("Cats Game 🐱");
   document.getElementById("messages").innerHTML = "Cats Game 🐱";
   // alert("pause game");
    animateMessage(); 
    reset();
   //animateMessage();
   winner = true; 
  // document.getElementById("nxtRound").classList.remove("unclickable");
 //  
   
}; //StaleMate
function xWinFun(){
    // b = reset; this is breaking the code somehow creating an indefinate loop 
     // alert("X Wins!");
 //  alert("pause game");
      aiScore ++;
      document.getElementById("messages").innerHTML = "Computer Wins 🐲";
      document.getElementById("aiScore").innerHTML = aiScore;
     // document.getElementById("nxtRound").classList.remove("unclickable");
  animateMessage();  
  reset();
  //animateMessage();
  winner = true;// <-- This was the plan but It's not working
     //removed below code as it is obsolete - especially when I cause it to automatically start the next round
     //   for(i = 0; i < allAvail.length; i ++){
     //   allAvail[i].xO = "ENDGAME";} //This is not the best solution - its intended to keep the user from playing after someone has won
};
function oWinFun(){
     // b = reset; // <--- This is very important. //per xWinFun: this is breaking the code somehow creating an indefinate loop 
    //  alert("O Wins!");
   //alert("pause game");
      userScore ++;
      document.getElementById("messages").innerHTML = "You Win!";
      document.getElementById("playerScore").innerHTML = userScore;
     // document.getElementById("nxtRound").classList.remove("unclickable");
    animateMessage();
    reset();
    //animateMessage();
    winner = true;//<-- This was the plan but It's not working
      //for(i = 0; i < allAvail.length; i ++){
      //  allAvail[i].xO = "ENDGAME";}//This is not the best solution - its intended to keep the user from playing after someone has won
};
//Important Test function ...which became the foundation for almost all the other functions
function testRandom(whichSpot){
  if(whichSpot.length < 1){whichSpot = allAvail}//This is intended to keep the computer from trying to play a corner when there are non availible (Tested and it works)
 var randomNum = Math.floor(Math.random() * whichSpot.length);
  var randomSpot = whichSpot[randomNum];
   historyArrAI.push(randomSpot);//This is new - its for an AI goes first function - 3/7/18 (MM)
   document.getElementById(randomSpot.id).innerHTML = ex; 
    randomSpot.xO = "X"; //This is important. It changes the property NEEDED for future refrence.
  //alert(randomSpot.id + " " + randomSpot.xO + " " + "Random");
  removeObj(randomSpot); 
  
  aiUI(randomSpot.id); //This put the X in its place
  winCheck();
  
};//GTG
function playSpecific(spot){
 //the imput will be a string
  var funObj; //This stores the object that we are going to play
  var testTF = false //This is used for a error test
  for(i = 0; i < allAvail.length; i++){
    if(spot === allAvail[i].id){
      funObj = allAvail[i];
      testTF = true;
      i = allAvail.length; //This ends the loop
       //alert("[SUCESS] function playSpecific - match found: " + funObj.id);
    } else {
      // Error
    }
    
  }
      if(!testTF){
      alert("[ERROR] function playSpecific - No match found");
      winLoseRandom("center");
    } else {
  document.getElementById(funObj.id).innerHTML = ex;
  funObj.xO = "X";
  removeObj(funObj);
  aiUI(funObj.id); //This puts the x in its place
  /*
    var targetId = document.getElementById(funObj.id);
        if(pageStyle){
   targetId.classList.add("box-taken");
  }else{
   targetId.classList.add("box-taken1");
   // targetId.classList.add("red");
  }
    // console.log(funObj.id);
  animateAiThinking(targetId); */
    }
 
  winCheck(); 
};
//Editing WinCheck to include a "StaleMate" check
function winCheck(){
  //Goal: check if either player won.
  //console.log(winner + "win should be true");
  winner = false;
  
  //This adds up the X or O properties up (i.e. result could be "XXO", "X", "XX", "OOX"..ect)
  var winR1 = one.xO + two.xO + three.xO;  //winR1 = Row One
  var winR2 = four.xO + five.xO + six.xO; 
  var winR3 = seven.xO + eight.xO + nine.xO; 
  var winC1 = one.xO + four.xO + seven.xO; //winC1 = Column One
  var winC2 = two.xO + five.xO + eight.xO;
  var winC3 = three.xO + six.xO + nine.xO;
  var winD1 = one.xO + five.xO + nine.xO; //winD1 = diagnal One (top left to bottom right)
  var winD2 = three.xO + five.xO + seven.xO;
  var loopWins = [winR1, winR2, winR3, winC1, winC2, winC3, winD1, winD2];
//  console.log(loopWins);
  for(i = 0; i < 8; i++){
    if(loopWins[i] == "XXX"){
      winner = true;
      i = 8; //Keeps program from repeating it's self if there is a double win (which is super rare)
        for(k=0; k <allAvail.length; k++){ //I kind of dislike using this loop but it works great for what I need it to do (make the empty spots unclickable after wining or losing)
          allAvail[k].xO = "n/a";
        }
      xWinFun();
    } else if(loopWins[i] == "OOO"){
      winner = true;
      i = 8; //Keeps program from repeating it's self if there is a double win (...opse I repeated mySelf)
      for(k=0; k <allAvail.length; k++){
          allAvail[k].xO = "n/a";
        }
      oWinFun();
    } 
  }//loop close
  
  
    if(!winner && allAvail.length === 0){
             for(k=0; k <allAvail.length; k++){ //I kind of dislike using this loop but it works great for what I need it to do (make the empty spots unclickable after wining or losing)
               winner = true;
          allAvail[k].xO = "n/a";}
      
      
   catsGame();
  }
}; //GTG
function winLoseRandom(prop, sk){
  /*The goal of this function(a):
  
    1. Filter through each possible WIN (rows, columns, & diagnals). If a win can be made then play that win. If unsucessful move to step two.
    2. Filter through each possible LOSS. If a loss can be prevented play that move. If unsucessful move to step 3.
    3. Play a random spot. If a general location was provided (corner, edge, center) play there.
    
    The secondary goal:
    
    1. check for a win / loss (if there is one act on it)
    2. dont play random and alow a differnt function to choose where to play.
     (i.e. if there is no win loss do not play a random spot. Instead change "winLoseNextFun")
  
  */
  winLoseNextFun = true;
  //accii
  var rowOne = [one, two, three];
  var rowTwo = [four, five, six];
  var rowThree = [seven, eight, nine];
  var colOne = [one, four, seven];
  var colTwo = [two, five, eight];
  var colThree = [three, six, nine];
  var diagOne = [one, five, nine];
  var diagTwo = [three, five, seven];
  var arrLoop = [rowOne, rowTwo, rowThree, colOne, colTwo, colThree, diagOne,diagTwo];

  for(i = 0; i < 8; i++){ //loop through collection
      var xCount = 0; //used to see if there are 2 x's in the row.
      var oCount = 0; //Used to see how many O's
      var eLoc; //This gets assigned to the empty spot
      var randomBoolian = true; //after all the loops run it will play a random spot if true isn't switched to false
      randomBoolian = true;
    for(var a = 0; a < 3; a++){//loop through individual rows, columns or diagnals
       if(arrLoop[i][a].xO == "X"){
        xCount += 1;
         //console.log(arrLoop[i][a].id + " " + arrLoop[i][a].xO + " xCount:" + xCount );
      } else if (arrLoop[i][a].xO == "O"){
        //console.log(arrLoop[i][a].id + " " + arrLoop[i][a].xO + " oCount:" + xCount );
        oCount += 1;
      } else if (arrLoop[i][a].xO == "e"){
        eLoc = arrLoop[i][a];
      } 
      //console.log(xCount);
      //console.log(arrLoop[i][a].xO);
    }//closing [a] loop
  
    
    if(xCount == 2 && oCount == 0){ //This needs to remove it from the arrays!!!!
      //console.log(eLoc);
      document.getElementById(eLoc.id).innerHTML = ex;
      aiUI(eLoc.id); 
      eLoc.xO = "X";
      randomBoolian = false;
      winLoseNextFun = false;
      //alert(eLoc.id + "Attack" + " Xcount:" + xCount);
       removeObj(eLoc);
      i = 8;
      //return "winlose";
    }
  }//closing for [i] loop
  
  if(randomBoolian){
      for(i = 0; i < 8; i++){ //loop through collection
       xCount = 0; //used to see if there are 2 x's in the row.
       oCount = 0; //Used to see how many O's
      for(var b = 0; b < 3; b++){//loop through individual rows, columns or diagnals
       if(arrLoop[i][b].xO == "X"){
        xCount += 1;
      } else if (arrLoop[i][b].xO == "O"){
        oCount += 1;
      } else if (arrLoop[i][b].xO == "e"){
        eLoc = arrLoop[i][b];
      } 
    }//closing [a] loop
        
 if (oCount == 2 && xCount == 0){
      document.getElementById(eLoc.id).innerHTML = ex;
      aiUI(eLoc.id); 
      eLoc.xO = "X";
      randomBoolian = false;
      winLoseNextFun = false;
      //alert(eLoc.id + "Defend"  + " Xcount:" + xCount);
      removeObj(eLoc);
      i = 8;
      //return "winlose"
    }    
  }//closing i loop
}//closing if(randomBoolian)
  
  if (randomBoolian && sk !== "skip"){
    if(prop == "corner"){
     testRandom(cornerAvail);
    } else if (prop == "edge"){
      testRandom(edgeAvail);
    } else if (prop =="center"){
      testRandom(centerAvail);
    } else {
      testRandom(allAvail);O
    }
  
  }
  
  winCheck();
}; //This is a <<Key>> function that checks if X or O are one move away from winning. Then it plays
function removeObj(num){
  
  
  for(i = 0; i < allAvail.length; i++){
    if(allAvail[i].id == num.id){
      allAvail.splice(i, 1);
      i = allAvail.length;
    }
  }
    for(i = 0; i < cornerAvail.length; i++){
    if(cornerAvail[i].id == num.id){
      cornerAvail.splice(i, 1);
      i = cornerAvail.length;
    }
  }
  
    for(i = 0; i < edgeAvail.length; i++){
    if(edgeAvail[i].id == num.id){
      edgeAvail.splice(i, 1);
      i = edgeAvail.length;
    }
  }
  
    for(i = 0; i < centerAvail.length; i++){
    if(centerAvail[i].id == num.id){
      centerAvail.splice(i, 1);
      i = centerAvail.length;
    }
  }
}; //This is a function of loops used to remove the object from the "Avail" arrays.

function a(num){
//  aiStart=false; // <-- This may be temporary 
  if(num.xO == "e"){
      document.getElementById("ex").classList.add("unclickable");
      document.getElementById("oh").classList.add("unclickable");
    
    moveCount +=1; 
    historyArr.unshift(num);
    document.getElementById(num.id).innerHTML = oh; 
    if(pageStyle){
    document.getElementById(num.id).classList.add("box-mine");
    } else {
     document.getElementById(num.id).classList.add("box-mine1") 
    }
    num.xO = "O";
    removeObj(num); //This can replace some of testRandom function guts 
    winner = true;
    winCheck();
  if(!winner){
   // console.log("b: " + num.id + " " + num.xO);
      b(num);
  } else {
   // reset();
  //  winner = false; //This resets the winner to false - it may cause other issues I'll need to fix but I need it to work like this.
  }
}
 // alert(num.loc);
}; //a is played everytime a place is clicked. "a" then calls "b". "b" will get reassigned and changed as needed. "a" is consitant and doesnt get changed. 
function b(num){
  theFirstMove(num);
};

function theFirstMove(num){
//  alert("the First Move");
  //function b is empty. It will be assiged (b = c) or (b = d, e, f or g)
    if(xGoesFirst){ //Ai Goes first
     // alert("temporary xGoesFirstFunction");
    winLoseRandom(); //temporary function holding the place of a more advanced set of functions
    
  } else if (!xGoesFirst){ //User Goes first

    if(difficulty == 3){ //GTG
    //impossible
      if(num.loc == "corner"){// Num.loc determins the users last move
        b = xStartC; // <--- 1. This reasigns b to "xStartC" all of the AI for that round will be inside of xStartC
        xStartC(); // <--- 2. This calls xStartC()
      } else if(num.loc == "center"){
         b = xStartCtr; //This is broken because when hitting reset it doesnt reset b
         xStartCtr(); 
      } else if(num.loc == "edge"){
         b = xStartE;
         xStartE(); 
      }
  //  }

  } else if (difficulty == 2){
    //Medium
    b = winLoseRandom;
    winLoseRandom("center");

  } else if (difficulty == 1){
    //Easy
    b = easyRandom;
    easyRandom();
  }
}
};
function AIGoesFirstFun(){ 
  if(aiStart){
  aiStart = false;
  xGoesFirst = true;
  var randomChoice = Math.floor(Math.random() * 11); // random number between 1-10 [ used for all random "decisions" below ]
    /// alert("test1");
  if(difficulty == 3){ //GTG
    //impossible
      if (randomChoice > 1){ // 1:10 odd of playing corner
        winLoseRandom("corner");
        b = oStartsC;
      } else {
        winLoseRandom("center");
        b = oStartsCtr;
      }
  } else if (difficulty == 2){  //Difficulty 2 and 1 still need work
    //Medium
    if(randomChoice > 3){
     winLoseRandom("corner"); 
    } else{
      winLoseRandom();
    }

  } else if (difficulty == 1){
    //Easy
    if(randomChoice > 3){
    // console.log("w/l edge");
     winLoseRandom("edge"); 
    } else{
      winLoseRandom();
     // console.log("w/l random");
    }
    //play random win/lose and specific that way it missed oppertinites to win
  }  
  //obsolete// document.getElementById("aiStarts").className = "selected";
  }
};
function easyRandom(){
  var randomChoice = Math.floor(Math.random() * 11);  
  var randomSpecific = Math.floor(Math.random() * allAvail.length); 
  if(randomChoice > 3){
    winLoseRandom();// 
  } else {
   // winLoseRandom(); //TEST
    playSpecific(allAvail[randomSpecific].id); 
  }
};

//..It's confusing how I have the names... Technically the "user" starts not "X".
function xStartC(prop){
 
if(moveCount === 1){
  //1st Move
winLoseRandom("center");
} else if (moveCount === 2){
  //2nd Move
 if(historyArr[0].loc == "edge"){
   //This this is for a complex scenario (blocking the arrow shaped stratigy [i.e. 1,8,6])
   if(historyArr[1].oppAdjX == historyArr[0].id){
     playSpecific(historyArr[1].oppAdjY);
   } else if (historyArr[1].oppAdjY == historyArr[0].id){
     playSpecific(historyArr[1].oppAdjX);
   } else {
     winLoseRandom("edge");
   }
 }else{
   winLoseRandom("edge");
 }        
} else if (moveCount > 2){
  //3rd + moves
  winLoseRandom("edge");
}

  
}; //GTG :) 
function xStartCtr(prop){
  winLoseRandom("corner"); //This function covers the stratigy for this scnario
}; //GTG :)
function xStartE(prop){
  
  if(moveCount === 1){
    //alert(historyArr[0].id);
    var randomAdjC = Math.floor(Math.random() * 2); //This just pulls a random number between 0 and 1 (there's only ever two options)
    playSpecific(historyArr[0].adjC[randomAdjC]);
    //winLoseRandom("corner");//needs to be in corner nect to "O"
  } else if (moveCount === 2) {
   winLoseRandom("center");  
  } else {
    winLoseRandom();  
  }
  
}; //GTG :)

function oStartsC(prop){ //This is GTG for user starting with EDGE but It needs code for CORNER & CENTER.
    if(moveCount === 1){
    //1st move
      if(historyArr[0].loc == "edge"){ //not sure if this is right 
         //edge start
        startingPostion = "edge";
       // alert(startingPostion);
        winLoseRandom("center");
        
      } else if (historyArr[0].loc == "corner") {
        //corner start
        startingPostion = "corner";
        winLoseRandom("center");//default
        
      } else if (historyArr[0].loc == "center"){
         //center start
        startingPostion = "center"; 
        playSpecific(historyArrAI[0].oppC); // GTG :)

      } else { alert("[ERROR 29] starting position no defined");
              winLoseRandom();
             }
    
  } else if (moveCount === 2){
    //2nd move 
    //This is a for loop that checks if the adjacent edge is availible
    var theFirstCorner = historyArrAI[0]; //This should pull the first move unless there is an issyue with AIGoesFirst

    if(startingPostion == "edge"){
       //edge start move 2
    for(i = 0; i < edgeAvail.length; i++){

      if (theFirstCorner.adjX == edgeAvail[i].id){
        //play the opposite x spot
        winLoseRandom("corner", "skip");
        if(winLoseNextFun){
        playSpecific(theFirstCorner.oppX);
        i = edgeAvail.length; //end loop
        }
      } else if (theFirstCorner.adjY == edgeAvail[i].id){
        //play the opposite Y spot
        winLoseRandom("corner", "skip");
        if(winLoseNextFun){
        playSpecific(theFirstCorner.oppY);
        i = edgeAvail.length; //end loop
         }
    } 

    } //closing for [i] loop
    }  else if(startingPostion == "corner"){ //GTG :)
      //---------------------------------//
      //                                 //
      //      2nd move - corner          //
            winLoseRandom("corner");     
      //                                 //
      //---------------------------------//  
    } else if(startingPostion == "center"){ //GTG :)
      //---------------------------------//
      //                                 //
      //      2nd move - center          //
      //                                 //
      //---------------------------------//
      winLoseRandom("corner");//default
    }
  } else {//This is the "else" to the seccond move  - i.e the 3rd 4th and 5th move
        winLoseRandom("corner"); //GTG :)
  } 
  
};//GTG :) 
function oStartsCtr(prop){
  if(moveCount === 1){
       winLoseRandom("corner");//default
  } else if (moveCount === 2){
       winLoseRandom("corner");//default
  } else {
       winLoseRandom();//default
  }
  
};//GTG :)
function oStartsE(prop){ 
  if(moveCount === 1){
       winLoseRandom();//default
  } else if (moveCount === 2){
       winLoseRandom();//default
  } else {
       winLoseRandom();//default
  }
  
};// no need - Delete

//for "Ostart" could do code like if num > 8 then do this; else do this. (2:8 odd ratio) ...Random 1-10


//-----------------------------------------------//
//
//
//            User Interface (below)            
//
//
//-----------------------------------------------//

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function colorTheme(style){
  var styleIds=[one, two, three, four, five, six,seven, eight,nine];
  if(style === "default"){
    pageStyle = true;
    document.getElementById("bdy").className = "one";
    document.getElementById("styleH").className = "one";
    document.getElementById("scoreStyl").className = "one"; 
    document.getElementById("gridBack").className = "one";
  } else if (style === "morning"){
    pageStyle = false;
    document.getElementById("bdy").className = "two";
    document.getElementById("styleH").className = "two";
    document.getElementById("scoreStyl").className = "two";
    document.getElementById("gridBack").className = "two";
  }

  for(i = 0; i < 9; i++){
    if(style == "morning"){
      
      if(styleIds[i].xO =="X"){
    document.getElementById(styleIds[i].id).classList.add("box-taken1");
      } else if(styleIds[i].xO =="O"){
     document.getElementById(styleIds[i].id).classList.add("box-mine1"); 

      } else {
    document.getElementById(styleIds[i].id).classList.add("box1");  
      }
      
    } else if (style == "default") {
      
      if(styleIds[i].xO =="X"){
     document.getElementById(styleIds[i].id).classList.add("box-taken"); 
     document.getElementById(styleIds[i].id).classList.remove("box1"); 
     document.getElementById(styleIds[i].id).classList.remove("box-taken1"); 
     
      } else if(styleIds[i].xO =="O"){
        document.getElementById(styleIds[i].id).classList.add("box-mine"); 
     document.getElementById(styleIds[i].id).classList.remove("box1"); 
        document.getElementById(styleIds[i].id).classList.remove("box-mine1"); 

      } else {
     document.getElementById(styleIds[i].id).classList.remove("box1");  
      }
      
    }
  }
    //.classList.replace(a, b);

};
//w3 school
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal - var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/*btn.onclick = function() {
    modal.style.display = "block";
}*/

// When the user clicks on <span> (x), close the modal
function openClose() {
    animateOne();
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/