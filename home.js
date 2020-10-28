  console.log("Hello");
  alert("OK ch");
  var x="Its complete ok man!!!!!";
  console.log(x);


  var y=10;
  var k="Apple";

  arr=['Car','Bike','Cycle','Plane'];
  console.log(arr.toString());
  console.log(arr.join("*"));
  console.log(arr.pop());
  console.log(arr.push('BlackBerries'));
  console.log(arr);
  arr.shift();
  console.log(arr);
  arr.unshift('scooter');
  console.log(arr);
  arr.toString();
  var p=[10,20,55,1,3,0,52,2,20,29];
  console.log(p.sort(function(a,b) {return a-b}));

  let d={1:'Vedant',two:'Pathak'};
  console.log(d[1]);
  let s= {
    First:'Vedant',
    Second:'Pathak',
    Third:22,
    Fourth:function(){ return this.First + '\n' + this.Second + "\n" + this.Third},
   };

console.log(s.Fourth());

//var age = prompt('What is your age man ?');

/*if (age < 18)
{
  let x = "You can't go to Kailash";
  console.log(x);
}
else {
  let y = 'You can go to Kailash';
  console.log(y);
}
*/
var choice1 = prompt('Enter the choice');

var choice = parseInt(choice1);
console.log(typeof(choice));
console.log(choice);

switch(choice){

  case 0:
          text = 'you chosen 0th case';
          console.log(text);
          break;
  case 1:
          text = 'you chosen 1th case';
          console.log(text);
          break;
  case 2:
          text = 'you chosen 2th case';
          console.log(text);
          break;
  case 3:
          text = 'you chosen 3th case';
          console.log(text);
          break;
  default:
            text= 'Default';
            console.log(text);
}






    /*function fun(v){
    var age=prompt("Enter your age");
    return age-v;
  }*/
    //document.getElementById('101').innerHTML=fun(y);
    //console.log(fun(90));
