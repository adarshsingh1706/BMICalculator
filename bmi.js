const forms = document.querySelector('form');

forms.addEventListener("submit", (e) =>{ e.preventDefault();
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector("#results")

if(height === "" ||isNaN(height) || height<0){
 result.innerHTML = "Please provide a valid height"
}
else if(weight === "" || isNaN(weight) || weight<0){
 result.innerHTML = "Please provide a valid weight"
}
else{
    const bmi = ((weight*10000)/(height*height)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
}
});
