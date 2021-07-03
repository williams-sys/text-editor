let result = document.querySelector("#result");

document.getElementById("setText").onclick = function () {
    let x = document.querySelector("#text").value;
    result.innerHTML = x;
    result.value = "";
    console.log(`Change text to "${x}"`);
}

document.getElementById("setColor").addEventListener("click", function () {
    let x = document.getElementById("color").value;
    result.style.color = x;
    console.log(`Change color to "${x}"`);
})

function changeFontSize() {
    let x = document.getElementById("size").value;
    result.style.fontSize = x+"px";
    console.log(`Change font size to "${x}px"`);
}

function changeFontColor() {
    let x = document.getElementById("color").value;
    result.style.color = x;
    console.log(`Change color to "${x}"`);
}

function changeText() {
    let x = document.querySelector("#text").value;
    result.innerHTML = x;
    result.value = "";
    console.log(`Change text to "${x}"`);
}
