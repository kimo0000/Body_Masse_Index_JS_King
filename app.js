const height = document.getElementById('height');
const weight = document.getElementById('weight');
const form = document.querySelector('form');
const final = document.getElementById('final_result');
const idealBody = document.getElementById('ideal_body');


// function getMasse() {
//     final.value = parseInt((+weight.value / (+height.value * 2)).toFixed(2));
//     idealBody.innerHTML = (+height.value * 2 * 20).toFixed(2) + " kg";
// }

// btn.addEventListener("click", getMasse);

function getIdealBody(e) {
     e.preventDefault();

     let valueWeight = weight.value;
     let valueHeight = height.value;

    //  console.log(valueHeight);
    //  console.log(valueWeight);

     if (valueWeight !== "" && valueHeight !== "") {
       final.value = parseInt((+weight.value / (+height.value * 2)).toFixed(2));
       idealBody.innerHTML = (+height.value * 2 * 20).toFixed(2) + " kg";
     } else {
       weight.value = "";
       height.value = "";
       final.value = "";
       idealBody.innerHTML = "";
     }
}

form.addEventListener("submit", getIdealBody);
