function addNumber(a) {
    document.getElementById("answer").innerHTML += a
}
function getAnswer() {
    let a = document.getElementById("answer").innerHTML
    let b = eval(a.toString())
    document.getElementById("answer").innerHTML = b
}