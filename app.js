const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

//===============QUERY SELECTIONS============
const oldValue =$('#old-values');// query old value
const valueOut =$('#values-output');//
const listNumbers=$$('.number');
const listSystems=$$('.system');
const listOperators=$$('.operator');
const btnDeleteElement=$('#clear-element');
const btnDeleteAll=$('#clear');
const btnEqual=$('#equal');
// console.log(btnEqual)
//==============FUNCTIONS HANDLE===================


function formatNum(num) {
    let n=Number(num);
    let value=n.toLocaleString('en');
    return value;
}

function disableFormatNum(num) {
    return Number(num.replace(/,/g, ''));
}

function displayNewValues(num){
    const value=disableFormatNum(valueOut.innerText+num)
    valueOut.innerText=formatNum(value);
}

function displayOldValues(opera){
    const valueCurent=valueOut.innerText;
    oldValue.innerText=valueCurent+opera;
    
    valueOut.innerText=''
}

function deleteANumber(){
    let value=valueOut.innerText;
    value=value.substring(0,value.length-1)

    valueOut.innerText=value

    if(value[value.length-1]===',')
    {
        valueOut.innerText=value.substring(0,value.length-1)
    }
}

//==============HANDLE EVENTS======================

// Number click
listNumbers.forEach(els=>{
    els.onclick =(e)=>{ 
        displayNewValues(els.attributes.id.value)
    }
})

//  Delete click
btnDeleteElement.onclick = ()=> {
    deleteANumber()
}
btnDeleteAll.onclick = ()=> {
    valueOut.innerText='';
    oldValue.innerText='';
}

listOperators.forEach(element => {
    const getId=element.attributes.id.value
    element.onclick=()=>{
        displayOldValues(getId)
    }
})
// Equal click
btnEqual.addEventListener('click', ()=> {
    const result= oldValue.innerText+valueOut.innerText;
    // displayOldValues(result);
    console.log(result)
    valueOut.innerText=''
    displayNewValues(eval(result));
})