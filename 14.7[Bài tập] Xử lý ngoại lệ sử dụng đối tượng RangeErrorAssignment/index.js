function calculator(number1, number2, operator) {
    var result;
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    else {
        throw RangeError("input ".concat(operator, "  is not expected \n the operator must be an +,-,*,/"));
    }
    return result;
}
try {
    calculator(3, 9, '%');
}
catch (error) {
    if (error instanceof RangeError) {
        console.log(error.message);
    }
}
