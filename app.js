let screen = document.querySelector(".screen");
let wArray = [];
const uploadToScreen = (number) =>{
    screen.append(number);
}
const clearScreen = () =>{
    screen.innerHTML = "";
    wArray=[];
    dArray=[];
}
const storeNum =(num)=>{
    wArray.push(num);
    console.log(wArray);
}
const withdrawal = () => {
    let amount = wArray.split()
}
console.log(wArray);