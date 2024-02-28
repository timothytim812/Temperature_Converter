const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const button = document.getElementById('button');
const result = document.getElementById('result');

button.onclick = function convert() {
  const inputValue = Number(textBox.value);

  if (isNaN(inputValue)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  if (toFahrenheit.checked) {
    temp = inputValue * 9/5 + 32;
    result.textContent = temp + "°F";

  } 
  
  else if (toCelsius.checked) {
    temp = (inputValue - 32) * (5/9);
    result.textContent = temp + "°C";
  } 

  else {
    result.textContent = "Please select a temperature unit.";
  }
}

// Clear result on input change
textBox.addEventListener("input", function() {
  result.textContent = "";
});

// To change the radio option when selected
toFahrenheit.addEventListener("change", function() {
  if (toFahrenheit.checked) {
    toCelsius.checked = false;
    result.textContent = "";
  }
});

toCelsius.addEventListener("change", function() {
  if (toCelsius.checked) {
    toFahrenheit.checked = false;
    result.textContent = "";
  }
});

// To convert by using Enter Key on Keyboard
textBox.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      button.click();
  }
});