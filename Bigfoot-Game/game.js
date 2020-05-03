function loadBigFoot(){
                
    document.getElementById("bigFoot").src = "Img/bigfoot.png"
}


function moveBigFoot() {
    alert('Woohoo, you win! You found Bigfoot!');
    /* var picture = document.getElementById("bigFoot") */
    document.getElementById("bigFoot").style.top=2000 + "px";  


   /*  var x = Math.random() * 300
    var y = Math.random() * 300

    picture.style.top = x + 'px'
    picture.style.left = y + 'px' */
}