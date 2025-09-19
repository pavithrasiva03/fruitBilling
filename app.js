let btn1=document.querySelector(".btn1")
console.log(btn1)
btn1.addEventListener("click",()=>{
    let apple=parseInt(document.querySelector("#apple").value)
    let mango=parseInt(document.querySelector("#mango").value)
    let orange=parseInt(document.querySelector("#orange").value)

    let appletotal=apple*15000;
    let mangototal=mango*25000;
    let orangetotal=orange*60000;

    let total=appletotal+mangototal+orangetotal;
    console.log(total)

    let totalall=document.querySelector(".totalall");
    totalall.innerHTML=`<h3>total rupees:${total}</h3>`


})
