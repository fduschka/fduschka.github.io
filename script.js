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