
   let remove = (event) => {
      
      if(event.target.classList.contains("fa-trash")){
         event.target.parentElement.parentElement.remove()
         }
         
   }

   export {remove}
   