var addToBag = document.getElementById('addToBag');
var color = document.getElementsByClassName('checkColor')[0];
var rom = document.getElementsByClassName('checkRom')[0];

addToBag.addEventListener('click', function(){
    console.log(color.innerText);
    console.log(rom.innerText);
});