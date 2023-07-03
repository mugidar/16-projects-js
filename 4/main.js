const textareaEl = document.querySelector("#textarea")
const countEl = document.querySelector("#count")
const leftEl = document.querySelector("#left")

const limit = 3
leftEl.textContent = limit
textareaEl.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    const leftChars = limit-e.target.value.length
    const count = e.target.value.length
    countEl.textContent = count
    leftEl.textContent =Number( textareaEl.getAttribute("maxLength")) - e.target.value.length

    console.log()
})
