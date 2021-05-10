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
    
    boxes.forEach(box => {
        box.parentElement.classList.remove("quiz-correct");
        box.parentElement.classList.remove("quiz-false");
    });

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked && corrects[i] == 1) {
            boxes[i].parentElement.classList.add("quiz-correct");
        } else if (!boxes[i].checked && corrects[i] == 1) {
            boxes[i].parentElement.classList.add("quiz-false");
        } else if (!boxes[i].checked && corrects[i] == 0) {
            boxes[i].parentElement.classList.add("quiz-correct");
        } else {
            boxes[i].parentElement.classList.add("quiz-false"); 
        }
    }

    button.innerHTML = "Erneut Überpüfen";
    document.getElementById("ameisen-quiz-weiter").classList.remove("d-none");
}

function addCtoMethan(button) {
    document.getElementById('image-ethan-acid').classList.remove('d-none');
    document.getElementById('image-methan-acid').classList.add('d-none');
    button.classList.add('d-none');
    document.getElementById('essig-start-quiz').classList.remove('d-none');
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