// alert("hii");

const projectcounters = document.querySelectorAll(".projectcounter");


projectcounters.forEach((projectcounter)=>{
    projectcounter.innerHTML = 0;
    const mainFunction = ()=>{
    
        let targetValue = +projectcounter.getAttribute("data-target");

        let startingValue = +projectcounter.innerHTML;

        let increment = targetValue / 100;

        if(startingValue<targetValue){
            projectcounter.innerHTML=`${startingValue+increment}`
            setTimeout(mainFunction,10);
        }else{
            projectcounter.innerHTML=startingValue;
        }
    }

    mainFunction();

})
// projectcounter = document.querySelector(".projectcounter");
// setTimeout(mainFunction,1000);