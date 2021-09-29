const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring(){
    load++;

    if(load > 99){
        clearInterval(int)
    }
 
    loadText.innerText =  `${load}%`; //Automatically calculated to 100 the 0 value
    loadText.style.opacity = scale(load, 0, 100, 1, 0); //for opacity of text
    bg.style.filter = `blur(${scale(load, 0 ,100, 30, 0)}px)`; //for opacity of bg
}



// It is a function copied from stack overflow to convert a set of range to another set of range
//say we are loading to 0 to 100 but opacity changes from 1 to 0, therefore we use this function
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }