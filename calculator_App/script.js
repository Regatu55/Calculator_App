const LoadText = document.querySelector('.loading-text')
const  dg = document.querySelector('.dg')

let load = 0;

let int = setInterval(blurring, 30)
function blurring(){
load++


   if(load > 99){
   clearInterval(int)
   }

loadText.innerText = '${load}%'
loadText.style.opacity =  scale(load, 0, 100, 1, 0,)
dg.style.filter = 'blur(${scale(load, 0, 100, 30, 0)}px)'

}
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-0f-numbers

const scale = (num, in_num, in_max, out_min, out_max)=>{
    return(num - in_num) * (out_max-out_min)/(in_max - in_num) + out_min;
}

