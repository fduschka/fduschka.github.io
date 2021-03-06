function quelle(link) {
    alert("Quelle: " + link);
}

function startVid() {
    var vid = document.getElementById('welcome-vid');
    vid.play();
}

function stopVid() {
    var vid = document.getElementById('welcome-vid');
    vid.pause();
}


function ameisenquiz(button) {
    let corrects = [1,0,1,1];
    let boxes = [document.getElementById("ameisen-quiz-1"), document.getElementById("ameisen-quiz-2"), document.getElementById("ameisen-quiz-3"), document.getElementById("ameisen-quiz-4")]
    
    var answerCorrect = [];
    var answerFalse = [];

    boxes.forEach(box => {
        box.parentElement.classList.remove("quiz-correct");
        box.parentElement.classList.remove("quiz-false");
    });

    document.getElementById("all-correct").classList.add("d-none");
    document.getElementById("fast-correct").classList.add("d-none");
    document.getElementById("naja-correct").classList.add("d-none");

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked && corrects[i] == 1) {
            boxes[i].parentElement.classList.add("quiz-correct");
            answerCorrect.push(1);
        } else if (!boxes[i].checked && corrects[i] == 1) {
            boxes[i].parentElement.classList.add("quiz-false");
            answerFalse.push(1);
        } else if (!boxes[i].checked && corrects[i] == 0) {
            boxes[i].parentElement.classList.add("quiz-correct");
            answerCorrect.push(1);
        } else {
            boxes[i].parentElement.classList.add("quiz-false"); 
            answerFalse.push(1);
        }
    }

    if (answerCorrect.length == 0) {
        document.getElementById("naja-correct").classList.remove("d-none");
    } else if (answerFalse.length == 0) {
        document.getElementById("all-correct").classList.remove("d-none");
    } else {
        document.getElementById("fast-correct").classList.remove("d-none");
    }

    button.innerHTML = "Erneut Überpüfen";
    document.getElementById("ameisen-quiz-weiter").classList.remove("d-none");
}

function addCtoMethan(button) {
    document.getElementById('image-ethan-acid').classList.remove('d-none');
    document.getElementById('image-methan-acid').classList.add('d-none');
    button.classList.add('d-none');
    document.getElementById('essig-start-quiz').classList.remove('d-none');
    document.getElementById('redocircle').classList.remove('d-none');
}

function redoCtoMethan() {
    document.getElementById('image-ethan-acid').classList.add('d-none');
    document.getElementById('image-methan-acid').classList.remove('d-none');  
    document.getElementById('essig-start-quiz').classList.add('d-none');
    document.getElementById('redocircle').classList.add('d-none');
    document.getElementById('addCbtn').classList.remove('d-none');
}

function validateEssigQuiz(selection, button) {
    if (selection == 1) {
        button.classList.add("btn-success");
        button.classList.remove("btn-outline-secondary");
    } else {
        button.classList.add("btn-danger");
        button.classList.remove("btn-outline-info"); 
    }

    document.getElementById('essig-start-weiter').classList.remove("d-none");
}


var currentSlide = 0;
function ameisenquizslider(direction) {
    let slides = [document.getElementById("ameisen-slide-0"), document.getElementById("ameisen-slide-1"),];

    if (direction == '+') {
        if (currentSlide + 1 == slides.length) return;
        console.log(slides.length);
        slides[currentSlide].classList.add("d-none");
        slides[currentSlide + 1].classList.remove("d-none");
        currentSlide++;
    } else if (direction == '-') {
        if (currentSlide == 0) return;
        slides[currentSlide].classList.add("d-none");
        slides[currentSlide - 1].classList.remove("d-none"); 
        currentSlide--;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, location) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var item = document.getElementById(data);
    var search = "-$" + location + "$-";

    item.classList.remove("bg-success");
    item.classList.remove("bg-danger");
    
    ev.target.appendChild(document.getElementById(data));
    console.log(item);
    if (data.includes(search)) {
        item.classList.add("bg-success");
    } else {
        item.classList.add("bg-danger");
    }
}

function startPlastic() {
    document.getElementById("plastic-vid").play();
    setTimeout(
        function() {
            fade(document.getElementById("plastik-start-weiter"));
    }, 500);
}

function fade(element) {
    op = 0;
    var timer = setInterval(function () {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op + 0.1;
        op += 0.1;
    }, 50);
}

function stopPlastic() {
    document.getElementById("plastic-vid").pause(); 
    polyVidInfo();
}

function polyVidInfo() {
    document.getElementById('vidStartBtn').classList.add('d-none');
    const data = Array.from(document.querySelectorAll('#info-data>ul>li'));
    var checks = [];
    var timeStamps = [3.0, 6.0, 16.0, 20.0, 20.0, 24.0, 37.0];
    var video = document.getElementById("poly-vid");
    var next = 0;
    video.play();

    video.ontimeupdate = function(){
        if (timeStamps[next] <= video.currentTime && checks.length <= next) {
            data[next].classList.remove('d-none');
            checks.push(true);
            console.log("now");
            next++;
        }
    };
}

function stopPolyVid() {
    document.getElementById('poly-vid').pause();
}


function allowDropluecke(ev, item) {
    ev.preventDefault();
   
    item.classList.add('bg-light');
    item.classList.add('p-3');
}

function leaveDrop(ev, item) {
    ev.preventDefault();
   
    item.classList.remove('bg-light');
    item.classList.remove('p-3');
}

function dragluecke(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

var lueckeChecks = [];
function dropluecke(ev, word, item) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    item.classList.remove("text-success");
    item.classList.remove("text-danger");
    item.classList.remove('bg-light');
    item.classList.remove('p-3');
    
    ev.target.innerHTML = data.replace('word-', '');

    if (data.replace('word-', '') == word) {
        item.classList.add("text-success");
        lueckeChecks.push(true);
    } else {
        item.classList.add("text-danger");
    }

    if (lueckeChecks.length >= 7) {
        document.getElementById("end-btn").classList.remove('d-none');
        document.getElementById("lueckeSuccess").classList.remove('d-none');
        document.getElementById("lueckeAllItems").classList.add('d-none'); 
    } 
}

function fadeColor() {
    var r=255,g=0,b=0;

    setInterval(function(){
      if(r > 0 && b == 0){
        r--;
        g++;
      }
      if(g > 0 && r == 0){
        g--;
        b++;
      }
      if(b > 0 && g == 0){
        r++;
        b--;
      }
      document.getElementById("color").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
    },10);
}


document.getElementById("copyDate").innerHTML = new Date().getFullYear();
