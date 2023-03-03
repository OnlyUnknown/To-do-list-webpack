let list = document.querySelector(".list")


let add = () => {
    let book = [];
if(localStorage.getItem('used') === null){
    book = [];
}else{
    book = JSON.parse(localStorage.getItem("used"))
}

    const value = document.querySelector(".value").value
const newDiv = document.createElement("div")
newDiv.classList.add("flex-list")
newDiv.innerHTML = `<input type="checkbox"><div class ="value-list"> ${value} </div> <a class="right" href="#"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></a><p class="index">${book.length}</p>`
if(value !== ""){
list.appendChild(newDiv)


 book.push({index: book.length + 1, discription:value, Completed: false})

localStorage.setItem("used",JSON.stringify(book))

}

}


export {add} 