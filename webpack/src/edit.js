let event = (event) => {
    let li = document.querySelector(".value-list").innerHTML
      let input = document.createElement("input")
    input.value = li
      input.classList.add("editor")
    if(event.target.classList.contains("fa-sharp")){
        event.target.classList.toggle("fa-ellipsis-vertical")
      event.target.classList.toggle("fa-trash")
       event.target.parentElement.previousSibling.previousSibling.replaceWith(input) 
       }
      
 }


let adde = (event) => {
    
    const value = document.querySelector(".editor")
    const newDiv = document.createElement("div")
    
    newDiv.innerHTML = `${value.value}`
  
      
if(value.value !== "" && event.target.classList.contains("editor")){

event.target.nextSibling.nextSibling.firstChild.classList.toggle("fa-ellipsis-vertical");
      event.target.nextSibling.nextSibling.firstChild.classList.toggle("fa-trash")

    
event.target.replaceWith(newDiv);

}

    

}

 export {event, adde}