function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  var result = document.getElementById("result").value;
  if (result) {
    try {
      var answer = eval(result);
      document.getElementById("result").value = answer;
    } catch (error) {
      alert("Invalid input");
    }
  }
}
