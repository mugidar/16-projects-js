const text = document.querySelector(".text")

const textes = ["Some text", "Another one", "And one more"]
let textIndex = 0
let characterIndex = 0


function updateText () {
    text.innerHTML = `
<h1>${textes[textIndex].slice(0,characterIndex)}</h1>
`

if(characterIndex === textes[textIndex].length) {
    textIndex++
    characterIndex = 0
}
if(textes.length === textIndex) {
    textIndex = 0
}
if(text.length=== characterIndex) {
    setTimeout(()=>{},1000)
}
characterIndex++

}
setInterval(() => {updateText()},550)

