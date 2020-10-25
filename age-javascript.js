alert("BOOM");
function ageInDays(){

    var birthdayyear = prompt('What year had you born');
    var ageinday = (2020 - birthdayyear) * 365;
    console.log(ageinday);
    var h1 = document.createElement('h1');
    var textNode = document.createTextNode('You are '+ ageinday +' days young');

    h1.appendChild(textNode);
    h1.setAttributeId = ('id','bb');
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){

  document.getElementById('flex-box-result').remove();

}
