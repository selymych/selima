let input = document.getElementById("input")
let btn = document.getElementById("btn")
let h1 = document.getElementById("h1")

btn.onclick = function name() {
    let message = input.value.trim()
    if(message < 5){
        h1.innerHTML = "5 ten kichie"
        h1.style.width = "100%"
        h1.style.height = "100px"
        h1.style.background = "150px"
        h1.style.background = "black"
        h1.style.color = "white"
        h1.style.display = "flex"
        h1.style.justifyContent = "center"
        h1.style.alignItems = "center"
    }
 else if(message > 5){
        h1.innerHTML = "5 ten chon"
        h1.style.width = "100%"
        h1.style.height = "200px"
        h1.style.background = "200px"
        h1.style.background = "yellow"
        h1.style.color = "black"
        h1.style.display = "flex"
        h1.style.justifyContent = "center"
        h1.style.alignItems = "100%"
        h1.style.borderRadius = "auto"
     }

else if(message = 5){
        h1.innerHTML = "5 menen barabar"
        h1.style.width = "100%"
        h1.style.height = "200px"
        h1.style.background = "200px"
        h1.style.background = "yellow"
        h1.style.color = "black"
        h1.style.display = "flex"
        h1.style.justifyContent = "center"
        h1.style.alignItems = "100%"
        h1.style.borderRadius = "auto"
     }
}

