const rangeInput = document.querySelectorAll('.range-input input');
const priceInput = document.querySelectorAll('.price-input input');
const progress = document.querySelector('.slider .progress');
let priceGap = 1000;
console.log(rangeInput);

priceInput.forEach(input => {
   input.addEventListener("input", (e)=> {
    // Getting into two input values
    let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);
        if(maxVal -minVal < priceGap){
        if(e.target.className === 'input-min')
        {
            rangeInput[0].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        }
        else{
            rangeInput[1].value = minVal;
            progress.style.right = 100 -(maxVal / rangeInput[1].max) * 100 + "%";
        }
        }
      
    // console.log(minVal, maxVal);

  
    // console.log(percent);
   }) 
})



rangeInput.forEach(input => {
    input.addEventListener("input", (e)=> {
     let minVal = parseInt(rangeInput[0].value),
         maxVal = parseInt(rangeInput[1].value);
         if(maxVal -minVal < priceGap){
         if(e.target.className === 'range-min')
         {
             rangeInput[0].value = maxVal - priceGap;
         }
         else{
             rangeInput[1].value = minVal + priceGap;
         }
         }
         else{
             priceInput[0].value = minVal;
             priceInput[1].value = maxVal
             progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
             progress.style.right = 100 -(maxVal / rangeInput[1].max) * 100 + "%";
         }
     // console.log(minVal, maxVal);
 
   
     // console.log(percent);
    }) 
 })
