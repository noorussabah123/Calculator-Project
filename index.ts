let equalPressed = 0

let buttonInput:  NodeListOf<HTMLButtonElement> = document.querySelectorAll(".input-button")

let equal: HTMLInputElement = document.getElementById("equal") as HTMLInputElement
let input: HTMLInputElement = document.getElementById("input") as HTMLInputElement
let erase: HTMLInputElement = document.getElementById("erase") as HTMLInputElement
let clear: HTMLInputElement = document.getElementById("clear") as HTMLInputElement

window.onload = () => {
    input.value = ""
}

buttonInput.forEach((buttonClass:HTMLButtonElement) => {
    buttonClass.addEventListener("click", () => {
        if (equalPressed === 1) {
            input.value = ""
            equalPressed = 0
        }

        input.value += buttonClass.value
    })
})

equal.addEventListener("click", () => {
    equalPressed = 1

    let inpVal: string = input.value
    try {
        let solution = eval(input.value)

        if (Math.floor(solution) === solution) {
            input.value = solution.toString()
        } else {
            input.value = solution.toFixed(3)
        }
    } catch (err) {
        alert("Invalid Input")
    }
})

clear.addEventListener("click", () => {
    input.value = ""
})

erase.addEventListener("click", () => {
    input.value = input.value.substring(0, input.value.length -1)
})