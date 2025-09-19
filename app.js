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
/*let c1=document.querySelector("#c1")
console.log(c1)

c1.addEventListener("click",()=>{
let apple=parseInt(document.querySelector("#apple").value)
console.log(apple*15000)
})
//console.log(apple)
let c2=document.querySelector("#c2")
console.log(c2)

c2.addEventListener("click",()=>{
let mango=parseInt(document.querySelector("#mango").value)
console.log(mango*25000)
})


let c3=document.querySelector("#c3")
console.log(c3)

c3.addEventListener("click",()=>{
let orange=parseInt(document.querySelector("#orange").value)
console.log(orange*60000)
})
let add=c1+c2+c3
console.log(add)*/

