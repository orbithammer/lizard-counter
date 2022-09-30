let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countStr = ""
    
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (countStr.length === 0) {
        countStr = count
    } else {
        countStr = " - " + count 
    }
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

