document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('add');
    var subButton = document.getElementById('sub');
    var multButton = document.getElementById('mult');
    var divButton = document.getElementById('div');
    var resultDisplay = document.getElementById('result');
    addButton.addEventListener('click', function () { return performOperation('add'); });
    subButton.addEventListener('click', function () { return performOperation('sub'); });
    multButton.addEventListener('click', function () { return performOperation('mult'); });
    divButton.addEventListener('click', function () { return performOperation('div'); });
    function performOperation(operation) {
        var num1 = parseFloat(document.getElementById('a').value);
        var num2 = parseFloat(document.getElementById('b').value);
        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.textContent = 'Invalid input';
            return;
        }
        var result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'mult':
                result = num1 * num2;
                break;
            case 'div':
                if (num2 !== 0) {
                    result = num1 / num2;
                }
                else {
                    resultDisplay.textContent = 'Cannot divide by zero';
                    return;
                }
                break;
            default:
                result = NaN;
        }
        resultDisplay.textContent = "Result: ".concat(result);
    }
});
