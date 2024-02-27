const rangevalue = document.querySelector('.slider-container .price-slider');
const rangeInputValue = document.querySelectorAll(".range-input input");
// Set the price gap
let priceGap = 500;

// Addevent listener to the priceinput elements
const priceInputVlaue = document.querySelectorAll(".price-input input");
for(let i =0; i < priceInputVlaue.length; i++){
    priceInputVlaue[i].addEventListener("input", e => {
        // Parse min and max value of the range input
        let minp = parseInt(priceInputVlaue[0].value);
        let maxp = parent(priceInputVlaue[1].value);
        let diff = maxp - minp;
        
        if(minp < 0){
            alert("Minimum price cannot be less than 0")
            priceInputVlaue[0].value = 0;
            minp = 0;
        }

        if(maxp > 10000){
            alert("Maximum price cannot be greater than 10000");
            priceInputVlaue[1].value = 10000;
         maxp = 10000;
        }
       
    })
}

console.log(priceInputVlaue[1].value);
