<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Scientific Calculator</title>
  <style>
    body {
      background-color: #f5f5f5;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .calculator {
      background: #fff;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 0 25px rgba(0,0,0,0.1);
      width: 320px;
    }

    #display {
      width: 100%;
      height: 50px;
      font-size: 22px;
      text-align: right;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 8px;
      border: 1px solid #ccc;
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
    }

    button {
      height: 50px;
      font-size: 18px;
      border: none;
      border-radius: 8px;
      background-color: #e0e0e0;
      cursor: pointer;
      transition: background 0.2s;
    }

    button:hover {
      background-color: #d0d0d0;
    }

    .operator {
      background-color: #ff9800;
      color: #fff;
    }

    .clear {
      background-color: #f44336;
      color: white;
    }

    .equal {
      background-color: #2196f3;
      color: white;
      grid-column: span 2;
    }
  </style>
</head>
<body>

<div class="calculator">
  <input type="text" id="display" disabled>
  <div class="buttons">
    <button onclick="clearDisplay()" class="clear">C</button>
    <button onclick="append('π')">π</button>
    <button onclick="append('^')">xʸ</button>
    <button onclick="append('sqrt(')">√</button>
    <button onclick="backspace()">←</button>

    <button onclick="append('sin(')">sin</button>
    <button onclick="append('cos(')">cos</button>
    <button onclick="append('tan(')">tan</button>
    <button onclick="append('log(')">log</button>
    <button onclick="append('/')">÷</button>

    <button onclick="append('7')">7</button>
    <button onclick="append('8')">8</button>
    <button onclick="append('9')">9</button>
    <button onclick="append('*')">×</button>

    <button onclick="append('4')">4</button>
    <button onclick="append('5')">5</button>
    <button onclick="append('6')">6</button>
    <button onclick="append('-')">−</button>

    <button onclick="append('1')">1</button>
    <button onclick="append('2')">2</button>
    <button onclick="append('3')">3</button>
    <button onclick="append('+')">+</button>

    <button onclick="append('0')">0</button>
    <button onclick="append('.')">.</button>
    <button onclick="append('(')">(</button>
    <button onclick="append(')')">)</button>
    <button onclick="calculate()" class="equal">=</button>
  </div>
</div>

<script>
  function append(val) {
    if (val === 'π') {
      document.getElementById("display").value += Math.PI;
    } else {
      document.getElementById("display").value += val;
    }
  }

  function clearDisplay() {
    document.getElementById("display").value = '';
  }

  function backspace() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
  }

  function calculate() {
    let expression = document.getElementById("display").value;
    try {
      // Replace custom functions with JS equivalents
      expression = expression
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/\^/g, '');

      const result = eval(expression);
      document.getElementById("display").value = result;
    } catch (e) {
      document.getElementById("display").value = "Error";
    }
  }
</script>

</body>
</html>
