/* 
    YOUR NAME: Liam Kienitz 
    GITHUB LINK: https://liamkienitz.github.io/sandbox/
*/

let modelName = document.getElementById('model-text');
let duration = document.getElementById('duration-text');

function recalculate(){
    let cost_label = document.getElementById('calculated-cost');

    if (modelName.textContent == "Model XYZ"){
        cost_label.innerHTML = (duration.innerHTML * 100) + ".00";
    }
    else{
        cost_label.innerHTML = (duration.innerHTML * 213) + ".00";
    }
}

let modelButton = document.getElementById('model-button');

modelButton.addEventListener("click", changeModel);
function changeModel() {

    if(modelName.textContent == "Model XYZ"){
        modelName.innerHTML = "Model CPRG";
    }
    else{
        modelName.innerHTML = "Model XYZ";
    }

    recalculate();
}

let durationButton = document.getElementById('duration-button');

function changeDuration() {
    let new_duration = prompt("Enter new duration:");
    duration.textContent = new_duration;

    recalculate();
}
durationButton.addEventListener("click", changeDuration);


