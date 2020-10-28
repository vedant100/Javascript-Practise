function rpsGame(selectedAtom){
  var temp;
  var p;
  console.log(selectedAtom);
  var humanChoice,computerChoice;
  var k = selectedAtom.id;
  if (k == 'rock'){humanChoice = 0 }
  else if (k == 'paper') {humanChoice = 1}
  else if(k == 'scissor'){humanChoice = 2}

  console.log('hc =', humanChoice);
  computerChoice = random_gen();
  console.log('cc =', computerChoice);
  if(computerChoice==0){p='rock'} else if(computerChoice==1){p='paper'}else if(computerChoice==2){p='scissor'}else{p='scissor'}
  temp = desicion(humanChoice,computerChoice);
  repFontEnd(k,p,temp);
}

function desicion(hc,cc){

  console.log(hc);
  console.log(cc);

  if(hc==0 && cc==0){console.log(3);console.log('Match tied'); return('Game Tied');}
  else if(hc==0 && cc==1){console.log(1); console.log('You lose'); return ('You Lose');}
  else if(hc==0 && cc==2){console.log(0); console.log('You win !!!'); return ('You Win !!!');}
  else if(hc==1 && cc==0){console.log(1); console.log('You Win!!!'); return ('You Win!!!');}
  else if(hc==1 && cc==1){console.log(3); console.log('Match tied'); return ('Game Tied');}
  else if(hc==1 && cc==2){console.log(2); console.log('You lose'); return ('You Lose');}
  else if(hc==2 && cc==0){console.log(0); console.log('You lose'); return ('You Lose');}
  else if(hc==2 && cc==1){console.log(2); console.log('You win!!!'); return ('You Win!!!');}
  else if(hc==2 && cc==2){console.log(3); console.log('Match tied'); return ('Game Tied');}
  else{console.log('Some thing went wrong');
  }
}

function random_gen(){
  return (Math.floor(Math.random() * 3));
}



function repFontEnd(hc,cc,msg){

  console.log('msg in repFontEnd',msg)
  console.log(hc)
  console.log(cc)

  var image_repositary={'rock':document.getElementById('rock').src,
 'paper':document.getElementById('paper').src,
 'scissor':document.getElementById('scissor').src};

 document.getElementById('choose_msg').remove();
 document.getElementById('rock').remove();
 document.getElementById('paper').remove();
 document.getElementById('scissor').remove();



 var humanDiv = document.createElement('div');
 var computerDiv = document.createElement('div');
 var result = document.createElement('div');
 var reload = document.createElement('div');
 var ok = 'Reload';


 humanDiv.innerHTML = "<img src ='" + image_repositary[hc] + "'  height='250' width='250' style='box-shadow: 0px 10px 50px rgba(255,0,0,1)'>";
 computerDiv.innerHTML = "<img src ='" + image_repositary[cc] + "'  height='250' width='250' style='box-shadow: 0px 10px 50px rgba(0,250,0,1)'>";
 result.innerHTML = "<h1 height='250' width='250' style='color:red'>" + msg  + "</h1>";
 reload.innerHTML = "<button onclick='location.reload()' class='btn btn-danger'>" + ok + "</button>" ;


document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(result);
document.getElementById('flex-box-rps-div').appendChild(computerDiv);
document.getElementById('flex-box-rps-div').appendChild(reload);
}
