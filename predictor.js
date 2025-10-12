function subValue(baseId, goeId, scoreId) {
    let base = document.getElementById(baseId).value;
    let goe = document.getElementById(goeId).value;
    let score = parseFloat(base)+ parseFloat(goe);
    document.getElementById(scoreId).textContent = score;
}

function techTotal2(){
    let tempValue=0;
    let sum=0;
    let scoreArr= document.querySelectorAll(".subscore");
    for (let i=0; i<scoreArr.length; i++) 
    {
        tempValue=parseFloat(scoreArr[i].textContent); 
        sum+=tempValue;
    }
    document.getElementById("techTotal").textContent=sum.toFixed(2);
}

function preTotal(){
    let pcsC=document.getElementById("composition").value;
    let pcsP=document.getElementById("present").value;
    let pcsS=document.getElementById("skills").value;
    let pre=parseFloat(pcsC)+parseFloat(pcsP)+parseFloat(pcsS)+3.33*3;
    document.getElementById("pTotal").textContent=pre.toFixed(2);
}

function total(){
    let techT = document.querySelector("#techTotal").textContent;
    let preT = document.querySelector("#pTotal").textContent;
    let deduct = document.querySelector("#deduct").value;
    let totalScore = parseFloat(techT)+ parseFloat(preT)+parseFloat(deduct);
    document.querySelector("#totalId").textContent = totalScore;
}