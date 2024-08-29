var equalPressed = 0;
var buttonInput = document.querySelectorAll(".input-button");
var equal = document.getElementById("equal");
var input = document.getElementById("input");
var erase = document.getElementById("erase");
var clear = document.getElementById("clear");
window.onload = function () {
    input.value = "";
};
buttonInput.forEach(function (buttonClass) {
    buttonClass.addEventListener("click", function () {
        if (equalPressed === 1) {
            input.value = "";
            equalPressed = 0;
        }
        input.value += buttonClass.value;
    });
});
equal.addEventListener("click", function () {
    equalPressed = 1;
    var inpVal = input.value;
    try {
        var solution = eval(input.value);
        if (Math.floor(solution) === solution) {
            input.value = solution.toString();
        }
        else {
            input.value = solution.toFixed(3);
        }
    }
    catch (err) {
        alert("Invalid Input");
    }
});
clear.addEventListener("click", function () {
    input.value = "";
});
erase.addEventListener("click", function () {
    input.value = input.value.substring(0, input.value.length - 1);
});
