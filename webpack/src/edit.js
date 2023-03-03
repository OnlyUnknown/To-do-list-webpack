let event = (event) => {
    let li = event.target.parentElement.previousSibling.previousSibling.innerHTML
      let input = document.createElement("input")
    input.value = li
      input.classList.add("editor")
    if(event.target.classList.contains("fa-sharp")){
        event.target.classList.toggle("fa-ellipsis-vertical")
      event.target.classList.toggle("fa-trash")
       event.target.parentElement.previousSibling.previousSibling.replaceWith(input) 
       }
      
 }

 let p = document.querySelector(".index")

let adde = (event) => {
  let book = [];
    if(localStorage.getItem('used') === null){
        book = [];
    }else{
        book = JSON.parse(localStorage.getItem("used"))
    }
    
    const value = document.querySelector(".editor")
    const newDiv = document.createElement("div")
    
    newDiv.innerHTML = `${value.value}`
  
      
if(value.value !== "" && event.target.classList.contains("editor")){

event.target.nextSibling.nextSibling.firstChild.classList.toggle("fa-ellipsis-vertical");
      event.target.nextSibling.nextSibling.firstChild.classList.toggle("fa-trash")

    console.log(event.target.nextSibling.nextSibling.nextSibling.innerHTML)
  let targetE = event.target.nextSibling.nextSibling.nextSibling.innerHTML
  console.log(targetE + "clicked")
    book[targetE - 1].discription = value.value


    
event.target.replaceWith(newDiv);
  

    localStorage.setItem("used",JSON.stringify(book))


}

    

}

 export {event, adde}