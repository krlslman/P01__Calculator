const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');

const screenOperation = document.querySelector('#screenOperation');
const screenResult = document.querySelector('#screenResult');

const ac = document.querySelector('.btn-ac');
const c = document.querySelector('.btn-c');
const reverse = document.querySelector('.btn-reverse');
const square = document.querySelector('.btn-square');
// const z1 = document.querySelector('.btn-z1');
// const z2 = document.querySelector('.btn-z2');
const percent = document.querySelector('.btn-percent');
const addition = document.querySelector('.btn-plus');
const subtraction = document.querySelector('.btn-minus');
const multiplication = document.querySelector('.btn-multiply');
const division = document.querySelector('.btn-divide');
const equal = document.querySelector('.btn-result');
const decimal = document.querySelector('.btn-decimal');
const number0 = document.querySelector('.btn-0');
const number1 = document.querySelector('.btn-1');
const number2 = document.querySelector('.btn-2');
const number3 = document.querySelector('.btn-3');
const number4 = document.querySelector('.btn-4');
const number5 = document.querySelector('.btn-5');
const number6 = document.querySelector('.btn-6');
const number7 = document.querySelector('.btn-7');
const number8 = document.querySelector('.btn-8');
const number9 = document.querySelector('.btn-9');
const numberArray = [number0,number1,number2,number3,number4,number5,number6,number7,number8,number9,];
const operatorArray = ['+', '-', 'x', '/'];
const buttons = document.querySelector('.buttons');
let tempScreenArray = new Array;
let TheOperator; //  x
let tempResult; 
let lastNumber;
let numbersToOperate; // 9,9
let lastChar;

function midCalculate(){ // 8 x 5 +
  // tempResult = screenOperation.textContent
  tempResult=screenOperation.textContent.slice(0,-1); // 8 x 5
  lastChar=screenOperation.textContent[screenOperation.textContent.length-1]; // +
  screenOperation.textContent = tempResult;
  calculate();
  // screenResult.textContent = tempResult;
  screenOperation.textContent += lastChar;
  // screenResult.textContent = screenOperation.textContent;

};
function calculate(){
  tempScreenArray = (String(screenOperation.textContent).split(''));    //! array i??ine array push? Pushlamak yerine ayn?? de??i??kene atama yapt??m
  console.log(tempScreenArray)
  for (let i=0 ; i<tempScreenArray.length-1 ; i++) {                   
    console.log(tempScreenArray[i]);
    if (operatorArray.includes(tempScreenArray[i])) {
      TheOperator = tempScreenArray[i]; // x
    }
  };  // 9 x 9
  numbersToOperate = screenOperation.textContent.split(TheOperator) ;  //!indexlemek yerine yukar??da yakalad??????m??z operat??r?? direk i??ine verdim.
  console.log(numbersToOperate)  //! [ '9', '9' ]
  if (numbersToOperate.length>1) {
  switch(TheOperator) {
    case '+':
      screenResult.textContent  = Number(numbersToOperate[0]) + Number(numbersToOperate[1]);
      break;
    case '-':
      screenResult.textContent  = Number(numbersToOperate[0]) - Number(numbersToOperate[1]);
      break;
    case 'x':
      screenResult.textContent  =  Number(numbersToOperate[0]) * Number(numbersToOperate[1]);
      break;
    case '/':
      screenResult.textContent  = Number(numbersToOperate[0]) / Number(numbersToOperate[1]);
      break;
  }
};
  // numbersToOperate = Number(screenResult.textContent) ;  //
  screenOperation.textContent = tempScreenArray.join('')  // 8 x 5 =
   
};
function percentFuntion(){
  calculate()
  if (screenResult.textContent=='') {
    // say??y?? yaz??p e??ittire basmadan y??zesini alabilmek i??in
    screenResult.textContent=screenOperation.textContent
  }
  tempResult = screenResult.textContent * 0.01;
  screenResult.textContent = tempResult.toFixed(2);
};
function backspace(){
  // son yaz??lan haneyi silmek i??in
  tempResult = screenOperation.textContent.slice(0,-1);
  screenOperation.textContent = tempResult;
  if (screenOperation.textContent == ''){
    // kalan tek rakam?? da silince '' yerine 0 yazs??n
    screenOperation.textContent = 0
  }
};
function root(){
  calculate()
  if (screenResult.textContent=='') {
    // say??y?? yaz??p e??ittire basmadan karek??k??n?? alabilmek i??in
    screenResult.textContent=screenOperation.textContent
  };
  tempResult = screenResult.textContent ** 0.5;
  screenResult.textContent = tempResult.toFixed(2);
};
function squareFunction(){
  // console.log('ahahaha')
  calculate()
  if (screenResult.textContent=='') {
    // say??y?? yaz??p e??ittire basmadan karesini alabilmek i??in
    screenResult.textContent=screenOperation.textContent
  }
  tempResult = screenResult.textContent ** 2;
  screenResult.textContent = tempResult.toFixed(2);
  screenOperation.textContent =tempResult.toFixed(2);
};
function reverseFunction(){
  // console.log('ahahaha')
  calculate()
  if (screenResult.textContent=='') {
    // say??y?? yaz??p e??ittire basmadan i??aretini - ile ??arpmak i??in
    screenResult.textContent=screenOperation.textContent
  }
  tempResult = screenResult.textContent * (-1);
  screenResult.textContent = tempResult.toFixed(2);
  screenOperation.textContent =tempResult.toFixed(2);
};
function decimalFunction(){
  // ondal??k noktas?? koymak i??in

  // lastNumber = screenOperation.textContent.split(TheOperator); // say??lara ay??rarak array ile yapmak i??indi
  // tempResult = lastNumber[lastNumber.length-1]; // say??lara ay??rarak array ile yapmak i??indi
  if ((screenOperation.textContent.slice(screenOperation.textContent.length-1,screenOperation.textContent.length))!='.') {
    screenOperation.textContent += '.';
  }
};

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
       
    const clickedButton = e.target;
    const action = clickedButton.className.split(' ')[2];
    const actionType = clickedButton.className.split(' ')[1];
    const clickedBtnContent = clickedButton.textContent;
    let inScreen = screenOperation.textContent;
    let wasOperator = false;
    let lastCharOfInScreen = inScreen[inScreen.length-1];
    if (operatorArray.includes(lastCharOfInScreen)) {
      wasOperator = true;
      
    };
    if (action === 'btn-ac'){
      // t??m ekran??n?? temizle
      screenOperation.textContent=0;
      screenResult.textContent='';
    }
    if (action === 'btn-c'){
      // sadece operasyon ekran??n?? temizle
      screenOperation.textContent=0;
      // screenResult.textContent='';
    }
    if (inScreen === '0' && actionType == "number") {
      //a????l????ta s??f??r, bas??lan say??ya d??n????s??n
      screenOperation.textContent = clickedBtnContent
    } else if (actionType == "number") {
        //say??lara bas??nca sonuna direkt concat etsin
      screenOperation.textContent += clickedBtnContent
    } else if (actionType == "operator" && screenResult.textContent!='') {
      //say??lara bas??nca sonuna direkt concat etsin
    screenOperation.textContent = screenResult.textContent+clickedBtnContent
    } else if (wasOperator==false && actionType == "operator") {
      //eklenmemi??se sona operat??r eklemek
      screenOperation.textContent += clickedBtnContent
      TheOperator = clickedBtnContent;
      midCalculate();
    } else if (wasOperator==true &&  actionType=='operator'){
      //eklenmi??se sondaki operat??r?? d??zeltmek
      screenOperation.textContent = screenOperation.textContent.slice(0, -1);
      screenOperation.textContent += clickedBtnContent
      TheOperator = clickedBtnContent;
    } else if (action === 'btn-result'){
      // E??ittire bas??nca
      calculate()
    } if (actionType == "operator" && Number(screenResult.textContent)>0) {
      // sonraki operator kullan??mlar??nda screenResult'??n ??zerinden devam etmek
      // calculate()
      console.log("aasdas")
      // screenResult.textContent // 40
      tempResult = screenResult.textContent // 40
      screenResult.textContent = ''
      screenOperation.textContent = tempResult + clickedBtnContent  // 40 + sonradanBas??lan
    } if (action=='btn-percent'){
      percentFuntion()
    } if (action=='btn-backspace'){
      backspace()
    }if (action=='btn-root'){
      root()
    }if (action=='btn-square'){
      squareFunction()
    }if (action=='btn-reverse'){
      reverseFunction()
    }if (action=='btn-decimal'){
      decimalFunction()
    }
    
    // }
    // let inScreenArr = new Array;
    // inScreenArr = inScreen.split('')
    // console.log(inScreenArr);
  }
});


// // const clickedButton = document.addEventListener
//   switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block//   }