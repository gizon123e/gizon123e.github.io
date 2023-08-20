mulai = document.getElementById('mulai');
submit = document.getElementById('submit');
submit2 = document.getElementById('submit2');
var berhasil = document.getElementById("congrats");
var berhasilText = document.querySelector("#congrats h1");
var viewInputan1 = document.getElementById('inputan1');
var pembukaan = document.getElementById('pembukaan');
var goblok = document.getElementById('goblok');
var cobaLagi = document.getElementById('cobaLagi');
var inputPlayer;
var computer;
var kesempatan = 5;

var sound = document.getElementById("sound");
var welcome = document.getElementById("welcome");
var isPlaying = false;

sound.addEventListener("click", function(){
    if (isPlaying) {
        welcome.pause();
    } else {
        welcome.play();
    }
    isPlaying = !isPlaying;
});

function inputan1(){
    event.preventDefault();
    viewInputan1.style.display = 'flex';
}

function userInput(){
    var input = document.getElementById('input');
    inputPlayer = input.value;
}

function userInput2(){
    var input = document.getElementById('input2');
    inputPlayer = input.value;
}

function congrats(){
    berhasil.style.display = 'flex';
    viewInputan1.style.display = 'none';
    pembukaan.style.display = 'none';
    var backsound = document.getElementById("backsound");
    backsound.play();
    welcome.pause();
    berhasilText.innerHTML = "TEBAKAN ANDA BENAR!<br>JAWABANNYA ADALAH " + computer;
}

function error(){
    goblok.style.display = 'flex'
    viewInputan1.style.display = 'none';
    pembukaan.style.display = 'none';
}

function noChance(){
    event.preventDefault();
    alert('Yahhh kesempatan abis');
    cobaLagi.style.display = 'none';
    pembukaan.style.display = 'flex';
}

mulai.addEventListener("click", function(){
    inputan1();
})

submit.addEventListener("click", function(){
    userInput();
    computer = Math.floor(Math.random() * 10) + 1;;
    if(inputPlayer == computer){
        congrats();
    }else if(inputPlayer > 10){
        error();
    }else if(inputPlayer < computer){
        tryAgain();
    }else if(inputPlayer > computer){
        tryAgain();
    }
})

submit2.addEventListener("click", function(){
    userInput2();
    tryAgain();
})

function tryAgain(){
    cobaLagi.style.display = 'flex';
    viewInputan1.style.display = 'none';
    pembukaan.style.display = 'none';
    if(inputPlayer == computer){
        congrats();
        cobaLagi.style.display = 'none';
    }else if(inputPlayer > 10){
        error();
        cobaLagi.style.display = 'none';
    }else if(inputPlayer < computer){
        var konten = document.querySelector('#cobaLagi h1');
        konten.textContent = "Angkanya terlalu rendah nih, cuy!\nKesempatan kamu sisa: " + (kesempatan - 1);
        kesempatan --;
    }else if(inputPlayer > computer){
        var konten = document.querySelector('#cobaLagi h1');
        konten.textContent = "Angkanya terlalu tinggi nih, cuy!\nKesempatan kamu sisa: " + (kesempatan - 1);
        kesempatan --;
    }

    if(kesempatan == 0){
        alert('yahh kesempatan kamu abis\nJawabannya adalah ' + computer);
        location.reload();
        return;
    }
}