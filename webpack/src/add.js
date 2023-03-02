let list = document.querySelector(".list")

let add = () => {
    const value = document.querySelector(".value").value
const newDiv = document.createElement("div")
newDiv.classList.add("flex-list")
newDiv.innerHTML = `<input type="checkbox"> ${value}`
if(value !== ""){
list.appendChild(newDiv)
}
}


export {add} 