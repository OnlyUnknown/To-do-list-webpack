
   let event = (event) => {
      const icon = document.querySelector(".right")
      if(event.target.classList.contains("fa-sharp")){
         event.target.parentElement.parentElement.remove()
         }
         
   }

   export {event}
   