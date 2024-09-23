
function clrFlipper() {
    let arr = ["#7b241c", "#5b2c6f" ,"#1a5276","#512e5f", "#1a5276", "#0e6655", "#9a7d0a", "#935116", "#873600", "#797d7f", "#212f3c", "#b3b6b7", "#1c2833", "#196f3d"]
    let a = Math.floor(Math.random() * (arr.length - 1))
    let b = arr[a]
    document.body.style.background = b
    document.getElementById('span').innerText = b
}

document.getElementById("btn").addEventListener("click", clrFlipper)
clrFlipper();

