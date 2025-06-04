class FieldError extends Error {
  constructor(field,value) {
    super(field + ' value is ' + value);
    this.name = 'FieldError';
  }
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  
  try {
    if (Number.isNaN(Number(firstNum))) {
      throw new FieldError('first','NaN');
    }
    if (Number.isNaN(Number(secondNum))) {
      throw new FieldError('second','NaN');
    }
   output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (err) {
    output.innerHTML = err;
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
const consoleLogButton = errorBtns[0];
const consoleErrorButton = errorBtns[1];
const consoleCountButton = errorBtns[2];
const consoleWarnButton = errorBtns[3];
const consoleAssertButton = errorBtns[4];
const consoleClearButton = errorBtns[5];
const consoleLDirButton = errorBtns[6];
const consoledirxmlButton = errorBtns[7];
const consoleGroupStartButton = errorBtns[8];
const consoleGroupEndButton = errorBtns[9];
const consoleTableButton = errorBtns[10];
const consoleStartTimerButton = errorBtns[11];
const consoleEndTimerButton = errorBtns[12];
const consoleConsoleTraceButton = errorBtns[13];
const consoleTriggeraGlobalError = errorBtns[14];

consoleLogButton.onclick = () => { console.log("Console Log Demo"); }
consoleErrorButton.onclick = () => { console.error("Console Error Demo"); }
consoleCountButton.onclick = () => { console.count('Console Count Demo'); }
consoleWarnButton.onclick = () => { console.warn("Console Warn Demo"); }
consoleAssertButton.onclick = () => { console.assert(2 == 3,'2 == 3'); }
consoleClearButton.onclick = () => { console.clear(); }
consoleLDirButton.onclick = () => { console.dir(consoleClearButton); }
consoledirxmlButton.onclick = () => { console.dirxml(consoledirxmlButton); }
consoleGroupStartButton.onclick = () => { console.group('Console Group Demo'); }
consoleGroupEndButton.onclick = () => { console.groupEnd(); }
consoleTableButton.onclick = () => { console.table(errorBtns); }
consoleStartTimerButton.onclick = () => { console.time(); }
consoleEndTimerButton.onclick = () => { console.timeEnd(); }
consoleConsoleTraceButton.onclick = () => { console.trace(); }

consoleTriggeraGlobalError.onclick = () => { 
  try {
    throw new Error("globalError");
  } catch (err) {
    //console.error(err);
    TrackJS.track(err);
  }
}