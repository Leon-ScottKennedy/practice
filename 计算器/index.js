// 获取页面中的元素
const inputOne = document.getElementById('input_one'); // 获取第一个输入框
const inputTwo = document.getElementById('input_two'); // 获取第二个输入框
const resultOutput = document.getElementById('result_output'); // 获取结果输出框
const calculationButtons = document.querySelectorAll('.symbol'); // 获取所有运算符按钮

// 为每个运算符按钮添加点击事件监听器
calculationButtons.forEach(button => {
    button.addEventListener('click', function() {
        const operator = this.value; // 获取当前按钮的值（运算符）
        const num1 = Number(inputOne.value); // 将第一个输入框的值转换为数字
        const num2 = Number(inputTwo.value); // 将第二个输入框的值转换为数字
        
        let result; // 定义结果变量
        // 根据运算符进行相应的计算
        switch (operator) {
            case '+':
                result = num1 + num2; // 加法
                break;
            case '-':
                result = num1 - num2; // 减法
                break;
            case '*':
                result = num1 * num2; // 乘法
                break;
            case '/':
                result = num1 / num2; // 除法
                break;
            default:
                result = 'Invalid operator'; // 无效运算符
        }
        
        resultOutput.value = result; // 将计算结果显示在结果输出框中
    });
});

      