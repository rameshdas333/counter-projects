const counter = document.querySelectorAll(".counter");
console.log(counter);
const counterArray = Array.from(counter)
console.log(counterArray);
counterArray.map((item) =>{
    let count = 0;
    function increment(){
        count++;
        item.innerHTML = count ;
        if(count == item.dataset.number){
            console.log("FDR 2410");
            clearInterval(stop);
        }
    }
    let stop = setInterval(increment,item.dataset.time);
        
    
})