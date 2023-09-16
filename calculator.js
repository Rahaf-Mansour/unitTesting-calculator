function calc(...args) {
  let result;
  let temp = 0;
  let operandIndex = 0;
  let operationIndex = 1;
  let finalArray = [];

  while (operandIndex < args.length) {
    //throw error if one of the operands is not a number
    if (typeof args[operandIndex] !== "number") {
      throw new Error("Invalid input type");
    }

    //check if the one of the operand have a value greater than 1000
    if (
      args[operandIndex] > 1000 &&
      (args[operationIndex] === "+" || args[operationIndex] === "-")
    ) {
      args[operandIndex] = 0;
    } else if (
      args[operandIndex] > 1000 &&
      (args[operationIndex] === "*" || args[operationIndex] === "/")
    ) {
      args[operandIndex] = 1;
    }

    // check if we reach the last element
    if (operandIndex === args.length - 1) {
      finalArray.push(args[operandIndex]);
      break;
    }

    // Calculator operations multiplication or division
    if (args[operationIndex] === "*") {
      temp = args[operandIndex] * args[operandIndex + 2];
      args[operationIndex + 1] = temp;
    } else if (args[operationIndex] === "/") {
      if (args[operandIndex + 2] === 0) {
        throw new Error("Division by zero");
      }
      temp = args[operandIndex] / args[operandIndex + 2];
      args[operationIndex + 1] = temp;
    }
    // Calculator operations addition or subtraction
    else if (args[operationIndex] === "+" || args[operationIndex] === "-") {
      finalArray.push(args[operandIndex]);
      finalArray.push(args[operationIndex]);
    } else {
      throw new Error("Invalid operator");
    }

    operationIndex += 2;
    operandIndex += 2;
  }
  operandIndex = 0;
  operationIndex = 1;
  while (operandIndex < finalArray.length - 1) {
    if (finalArray[operationIndex] === "+") {
      temp = finalArray[operandIndex] + finalArray[operandIndex + 2];
    } else {
      temp = finalArray[operandIndex] - finalArray[operandIndex + 2];
    }
    finalArray[operandIndex + 2] = temp;
    operandIndex += 2;
    operationIndex += 2;
  }
  result = finalArray[finalArray.length - 1]; // the final result in the last element of the finalArray
  return result;
}

module.exports = calc;
