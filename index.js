//document.getElementById("count-el").innerText = 5

//console.log(count)

let countEl = document.getElementById("count-el")

console.log(countEl)


let count = 0

function increment() {
    console.log("clicked")
    count += 1
    countEl.innerText = count
    
}

//let saveBtn = document.getElementById("save-btn")
//console.log(saveBtn)
function save() {
    //countEl + count
    //console.log(countEl + count)
    //console.log(save)
   // saveBtn.innerText = count
}
let saveEl = document.getElementById("save-el")
function save() {
    let countStr = count +  " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
   
}

