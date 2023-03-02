let list = document.querySelector(".list")

let add = () => {
    const value = document.querySelector(".value").value
const newDiv = document.createElement("div")
newDiv.classList.add("flex-list")
newDiv.innerHTML = `<input type="checkbox"> ${value} <a class="right" href="#"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i><a>`
if(value !== ""){
list.appendChild(newDiv)

}
}


export {add} 