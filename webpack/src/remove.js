
   let event = (event) => {
      
      if(event.target.classList.contains("fa-sharp")){
         event.target.parentElement.parentElement.remove()
         }
         
   }

   export {event}
   