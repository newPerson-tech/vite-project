import "../style.scss";

const CALCULATOR_ACTION = {
  allClear: "all_clear",
  equal: "equal",
  opposite: "opposite",
  percent: "percent",
};

const CALCULATOR_CONFIG = [
  [
    { value: "AC", action: CALCULATOR_ACTION.allClear },
    { value: "+/-", action: CALCULATOR_ACTION.opposite },
    { value: "%", action: CALCULATOR_ACTION.percent },
    { value: "/" },
  ],
  [{ value: "7" }, { value: "8" }, { value: "9" }, { value: "*" }],
  [{ value: "4" }, { value: "5" }, { value: "6" }, { value: "-" }],
  [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "+" }],
  [
    { value: "0", colspan: 2 },
    { value: "." },
    { value: "=", action: CALCULATOR_ACTION.equal },
  ],
];

const tableEl = document.getElementById("calculatorBtn");
const inputEl = document.getElementById("calculatorInput");
const errorMessage = "Error";

CALCULATOR_CONFIG.forEach((itemArr) => {
  const trEl = document.createElement("tr");
  itemArr.forEach((itemObj) => {
    if (itemObj.value) {
      const tdEl = document.createElement("td");
      const btnEl = document.createElement("button");
      tdEl.className = "p-1";
      btnEl.className = "btn shadow-slate-700 border-b shadow-inner w-full p-6";
      if (itemObj.class) {
        btnEl.className += ` ${itemObj.class}`;
      }
      if (itemObj.colspan) {
        tdEl.colSpan = itemObj.colspan;
      }
      btnEl.innerHTML = itemObj.value;
      tdEl.appendChild(btnEl);
      trEl.appendChild(tdEl);
      btnEl.addEventListener("click", function (e) {
        switch (itemObj.action) {
          case CALCULATOR_ACTION.allClear:
            onClearInput();
            break;
          case CALCULATOR_ACTION.opposite:
            onOppositeValue();
            break;
          case CALCULATOR_ACTION.percent:
            onPercentValue();
            break;
          case CALCULATOR_ACTION.equal:
            onCalculateValue();
            break;
          default:
            onAddValueToInput(itemObj.value);
            break;
        }
      });
    }
  });
  tableEl.appendChild(trEl);
});

function onClearInput() {
  inputEl.value = "";
}

function onAddValueToInput(value) {
  inputEl.value += value;
}

function onCalculateValue() {
  try {
    inputEl.value = eval(inputEl.value);
  } catch (error) {
    inputEl.value = errorMessage;
  }
}

function onPercentValue() {
  try {
    inputEl.value = eval(inputEl.value) / 100;
  } catch (error) {
    inputEl.value = errorMessage;
  }
}

function onOppositeValue() {
  const currentValue = inputEl.value;
  if (currentValue !== "" && currentValue !== errorMessage) {
    inputEl.value = -Number(currentValue);
  }
}
