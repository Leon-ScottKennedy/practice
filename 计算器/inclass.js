function calculator(operator) {
  var numberOne = document.getElementById("input_one").value;
  var numberTwo = document.getElementById("input_two").value;
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert("输入数字");
    document.getElementById("input_one").value = null;
    document.getElementById("input_two").value = null;
  }

  if (numberTwo == 0 && operator === '/') {
    alert("除数不能为0");
    document.getElementById("input_two").value = null;
    return;
  }
  var result = eval(numberOne + operator + numberTwo);
  document.getElementById("result_output").value = result;
}
