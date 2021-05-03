function quelle(link) {
    alert("Quelle: " + link);
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