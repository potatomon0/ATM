let screen = document.querySelector(".screen");
let balance = document.querySelector(".balance");
let ranNum = Math.floor((Math.random()*10000)+1000);
balance.innerHTML = ranNum;
let wArray=[];
let dArray=[];
let nummy = 0;
const uploadToScreen = (number) =>{
    screen.append(number);
    wArray.push(number);
    console.log(wArray);
};
const clearScreen = () =>{
    screen.innerHTML = "";
    wArray=[];
    dArray=[];
};
// const storeNum =(num)=>{
//     wArray.push(num);
//     console.log(wArray);
// };
const withdrawal = () => {
    let a = 0;
    for(x of wArray){
        a = a+x;
    }
    nummy=parseInt(a);
    console.log(nummy);
    wArray = [];
    screen.innerHTML = "";
    ranNum = ranNum-nummy;
    balance.innerHTML=ranNum;
    //Look up order of operation
    //line 35 is not recommmended
    // balance.innerHTML = ranNum-nummy;
    console.log(ranNum);
    console.log(wArray);
};

const deposit = () =>{
    let a = 0;
    for(x of wArray){
        a = a+x;
    }
    nummy=parseInt(a);
    console.log(nummy);
    wArray = [];
    screen.innerHTML = "";
    ranNum = ranNum+nummy;
    balance.innerHTML=ranNum;
    //Look up order of operation
    //line 35 is not recommmended
    // balance.innerHTML = ranNum-nummy;
    // console.log(ranNum);
    // console.log(wArray);
}