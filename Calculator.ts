document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add') as HTMLButtonElement;
    const subButton = document.getElementById('sub') as HTMLButtonElement;
    const multButton = document.getElementById('mult') as HTMLButtonElement;
    const divButton = document.getElementById('div') as HTMLButtonElement;
    const resultDisplay = document.getElementById('result') as HTMLHeadingElement;

    addButton.addEventListener('click', () => performOperation('add'));
    subButton.addEventListener('click', () => performOperation('sub'));
    multButton.addEventListener('click', () => performOperation('mult'));
    divButton.addEventListener('click', () => performOperation('div'));

    function performOperation(operation: string): void {
        const num1 = parseFloat((document.getElementById('a') as HTMLInputElement).value);
        const num2 = parseFloat((document.getElementById('b') as HTMLInputElement).value);

        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.textContent = 'Invalid input';
            return;
        }

        let result: number;
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
                } else {
                    resultDisplay.textContent = 'Cannot divide by zero';
                    return;
                }
                break;
            default:
                result = NaN;
        }

        resultDisplay.textContent = `Result: ${result}`;
    }
});