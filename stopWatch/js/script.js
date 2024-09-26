let start = document.querySelector("#start");
let Stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let light = document.querySelector("#light");
let secCount = 0, minCount = 0,timer;

// start stop watch 
start.addEventListener("click",()=>{
    Stop.style.display = "block";
    reset.style.display = "block";
    start.style.display = "none";
    light.style.backgroundColor = "green";
    timer = setInterval(()=>{
        stopWatchTime();
    },1000)
})


// stop stop watch 
Stop.addEventListener("click",()=>{
    clearInterval(timer);
    start.style.display = "block";
    Stop.style.display = "none";
    light.style.backgroundColor = "red";
})

// reset stop watch 
reset.addEventListener("click",()=>{
    start.style.display = "block";
    Stop.style.display = "none";
    reset.style.display = "none";
    light.style.backgroundColor = "red";
    secCount=0;
    minCount=0;
    document.querySelector("#min").innerHTML = `0${secCount}`;
    document.querySelector("#sec").innerHTML = `0${minCount}`;
    clearInterval(timer);
})


// stop watch counting 
function stopWatchTime(){
    if(secCount<9){
        document.querySelector("#sec").innerHTML = `0${++secCount}`;
    }else{
        document.querySelector("#sec").innerHTML = ++secCount;
    }
    if(secCount==60){
        secCount = 0;
        document.querySelector("#sec").innerHTML = `0${secCount}`;
        if(minCount<9){
            document.querySelector("#min").innerHTML = `0${++minCount}`
        }else{
            document.querySelector("#min").innerHTML = ++minCount;
        }
        if(minCount==60){
            minCount = 0;
        }
    }
}